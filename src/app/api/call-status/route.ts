// src/app/api/call-status/route.ts – Twilio webhook for call status updates (logs metrics like duration/outcome, awards points, triggers quests; best practice: POST-only, validate origin for security)
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod'; // Logic: Input validation (prevents junk data; no-brainer for webhooks)
import prisma from '@/lib/prisma'; // Singleton client
import { createSupabaseServerClient } from '@/lib/supabaseServer'; // Async Supabase for session (if needed for auth)

const statusSchema = z.object({
  CallSid: z.string(), // Twilio call ID
  CallStatus: z.enum(['initiated', 'ringing', 'in-progress', 'completed', 'failed', 'busy', 'no-answer']), // Logic: Map to schema enums where possible
  CallDuration: z.string().optional().transform(val => val ? parseInt(val, 10) : null), // Seconds (convert to Int?)
  To: z.string().optional(), // Lead phone (for logging)
  // Add more Twilio params as needed (e.g., RecordingUrl for transcripts/quests)
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.formData(); // Logic: Twilio sends form-encoded (not JSON); parse accordingly
    const params: Record<string, string> = {};
    body.forEach((value, key) => { params[key] = value as string; });

    const validated = statusSchema.safeParse(params);
    if (!validated.success) {
      console.error('Invalid webhook payload:', validated.error);
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const { CallSid, CallStatus, CallDuration } = validated.data;

    // Fetch existing call record (best practice: Early exit if not found – prevents orphans)
    const call = await prisma.calls.findUnique({ where: { call_sid: CallSid } });
    if (!call) {
      console.warn(`Call not found for SID: ${CallSid}`);
      return NextResponse.json({ status: 'ignored' });
    }

    // Map Twilio status to schema outcome (pushback: Customize for wholesaling – e.g., 'busy' as 'no_answer')
    let outcome: CallOutcome | null = null;
    if (CallStatus === 'completed' && CallDuration && CallDuration > 0) {
      outcome = 'connected';
    } else if (CallStatus === 'no-answer' || CallStatus === 'busy') {
      outcome = 'no_answer';
    } else if (CallStatus === 'failed') {
      outcome = 'disqualified'; // Or 'other'
    } // Expand mappings as needed

    // Transaction: Update call + award points + trigger quests (atomic – ensures gamification consistency)
    await prisma.$transaction(async (tx) => {
      await tx.calls.update({
        where: { id: call.id },
        data: {
          status: CallStatus,
          duration: CallDuration,
          outcome,
          updated_at: new Date(),
          points_earned: outcome === 'connected' ? 5 : 0, // Logic: Gamify – base points for connected calls (tie to daily quests)
        },
      });

      if (outcome === 'connected') {
        // Update profile points (pushback: Aggregate in call_metrics view for leaderboards)
        await tx.profiles.update({
          where: { id: call.caller_id },
          data: { points: { increment: 5 } },
        });

        // Quest Trigger: e.g., Check for "Daily Calls" (assume quest ID; complete if >=10 connected today)
        const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
        const connectedToday = await tx.calls.count({
          where: {
            caller_id: call.caller_id,
            outcome: 'connected',
            created_at: { gte: new Date(`${today}T00:00:00Z`) },
          },
        });

        if (connectedToday >= 10) { // Threshold for quest
          const questId = 'daily-calls-quest-id'; // Logic: Replace with real (seed: title="Make 10 Connected Calls", points=50, type='daily')
          const existingCompletion = await tx.quest_completions.findUnique({
            where: { quest_id_profile_id: { quest_id: questId, profile_id: call.caller_id } },
          });

          if (!existingCompletion) {
            await tx.quest_completions.create({
              data: {
                quest_id: questId,
                profile_id: call.caller_id,
                evidence: { connected_calls: connectedToday, points_awarded: 50 },
              },
            });
            await tx.profiles.update({
              where: { id: call.caller_id },
              data: { points: { increment: 50 }, badges: { push: 'Call Master' } }, // Unlock badge
            });
          }
        }
      }
    });

    return NextResponse.json({ status: 'processed' });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
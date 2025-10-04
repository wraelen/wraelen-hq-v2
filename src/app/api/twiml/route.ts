// src/app/api/twiml/route.ts – Twilio TwiML endpoint for voice response (handles call connection; best practice: Keep simple, expand for IVR quests like "Press 1 to log outcome")
import { NextRequest, NextResponse } from 'next/server';
import VoiceResponse from 'twilio/lib/twiml/VoiceResponse'; // Logic: TwiML generator (Twilio SDK)

export async function POST(_req: NextRequest) {
  const twiml = new VoiceResponse();
  twiml.say({ voice: 'Polly.Amy' }, 'Welcome to Wraelen HQ. Connecting you to the lead—make it count for those points!'); // Logic: Gamified greeting (motivates reps; fetch role from session if dynamic needed)
  twiml.dial(process.env.REP_PHONE_NUMBER || '+your-rep-phone'); // Logic: Forward to rep's phone (pushback: Make dynamic via query param or session; env for security)

  return new NextResponse(twiml.toString(), {
    headers: { 'Content-Type': 'text/xml' },
  });
}
import { NextRequest } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const body = await req.formData(); // Logic: Twilio posts form data (CallSid, CallStatus, CallDuration)
  const callSid = body.get('CallSid') as string;
  const status = body.get('CallStatus') as string;
  const duration = Number(body.get('CallDuration') || 0);

  if (callSid) {
    await prisma.calls.updateMany({
      where: { call_sid: callSid },
      data: { status, duration, points_earned: duration > 30 ? 5 : 0 }, // Logic: Gamify (points for >30s calls)
    });
  }

  return new NextResponse('<Response/>', { headers: { 'Content-Type': 'text/xml' } }); // Logic: Empty TwiML response
}
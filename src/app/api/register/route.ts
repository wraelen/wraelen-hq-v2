import bcrypt from 'bcryptjs'; // Added: For password hashing on register (secure storage; never store plain text)
import { NextRequest, NextResponse } from 'next/server'; // Kept existing
import prisma from '@/lib/prisma'; // Kept existing

interface RegisterBody {
  username: string; // Required per schema @unique
  email: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: RegisterBody = await request.json();

    // Added: Hash password for secure storage (use bcrypt with salt 10; best practice for auth)
    const hashedPassword = await bcrypt.hash(body.password, 10);

    // Create user with gamification defaults (role NOVICE from enum, points/badges empty)
    const user = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
        role: 'NOVICE', // Default to NOVICE enum for gamified start
        points: 0,
        badges: [],
      },
    });

    // Added: Generate JWT for immediate login after register (optional—return token for auto-login)
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return NextResponse.json({ user, token }, { status: 201 });
  } catch (error: unknown) {
    console.error(error);
    const errMessage = error instanceof Error ? error.message : 'Registration failed';
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
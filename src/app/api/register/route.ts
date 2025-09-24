import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server'; // Externals first
import prisma from '@/lib/prisma'; // Internal (should resolve now)


interface RegisterBody {
  username: string; // Required per schema @unique
  email: string;
  password: string;
  // role?: string; // Optional; defaults to "novice" in schema
}

export async function POST(request: NextRequest) {
  try {
    const body: RegisterBody = await request.json();

    // Hash password
    const hashedPassword = await bcrypt.hash(body.password, 10);

    // Create user with gamification defaults
    const user = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
        points: 0,
        badges: [],
        role: 'novice', // Explicit for new reps; ties to gamified growth
      },
    });

    // Generate JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    return NextResponse.json({ user, token }, { status: 201 });
  } catch (error: unknown) {
    console.error(error);
    const errMessage = error instanceof Error ? error.message : 'Registration failed';
    return NextResponse.json({ error: errMessage }, { status: 500 });
  }
}
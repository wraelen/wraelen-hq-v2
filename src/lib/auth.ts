// lib/auth.ts
import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';

export const authMiddleware = (req: NextRequest) => {
  const authHeader = req.headers.get('authorization');
  const token = authHeader?.replace('Bearer ', '');
  if (!token) throw new Error('No token');
  const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as { id: string };
  return decoded;
};
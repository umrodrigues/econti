import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from '@/lib/auth-middleware';

async function handler(request: NextRequest) {
  const userId = request.headers.get('x-user-id');
  const userEmail = request.headers.get('x-user-email');
  const userRole = request.headers.get('x-user-role');

  return NextResponse.json({
    success: true,
    user: {
      id: userId,
      email: userEmail,
      role: userRole
    },
    message: 'Bem-vindo à área administrativa!'
  });
}

export const GET = withAuth(handler);
export const POST = withAuth(handler);


import { NextRequest, NextResponse } from 'next/server';
import { signToken } from '@/lib/jwt';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (email === 'admin@econti.com' && password === 'admin123') {
      const token = signToken({
        id: 1,
        email: 'admin@econti.com',
        role: 'admin'
      });

      const response = NextResponse.json(
        { success: true, token, role: 'admin' },
        { status: 200 }
      );

      response.cookies.set('authToken', token, {
        maxAge: 7 * 24 * 60 * 60,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: 'Credenciais inválidas' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { success: false, message: 'Erro na autenticação' },
      { status: 500 }
    );
  }
}


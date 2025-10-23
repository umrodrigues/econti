import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './jwt';

export function withAuth(handler: (req: NextRequest) => Promise<NextResponse>) {
  return async (request: NextRequest) => {
    try {
      const token = request.cookies.get('authToken')?.value;

      if (!token) {
        return NextResponse.json(
          { success: false, message: 'Token não encontrado' },
          { status: 401 }
        );
      }

      const decoded = verifyToken(token);

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-id', decoded.id.toString());
      requestHeaders.set('x-user-email', decoded.email);
      requestHeaders.set('x-user-role', decoded.role);

      const newRequest = new NextRequest(request, {
        headers: requestHeaders,
      });

      return handler(newRequest);
    } catch (error) {
      console.error('Auth middleware error:', error);
      return NextResponse.json(
        { success: false, message: 'Token inválido' },
        { status: 401 }
      );
    }
  };
}


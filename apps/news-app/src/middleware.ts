import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('[middleware] Pathname:', request.nextUrl.pathname);
  
  return NextResponse.next();
}
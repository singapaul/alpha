import { NextResponse } from 'next/server';
export function GET(request: { nextUrl: { pathname: any; search: any; }; cookies: { getAll: () => any; }; }) {

  return NextResponse.json(
    {
      body: "hi",
      path: request.nextUrl.pathname,
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
    },
    {
      status: 200,
    },
  );
}
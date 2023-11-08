import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
export async function GET(request: { nextUrl: { pathname: any; search: any; }; cookies: { getAll: () => any; }; }) {

    const cookieStore = cookies()
    const supabase = createClient(cookieStore);
    const notes  = await supabase.from("notes").select();
    const hater = await supabase.from("shuffle").select();


  return NextResponse.json(
    {
      body: hater.data,
      path: request.nextUrl.pathname,
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
    },
    {
      status: 200,
    },
  );
}
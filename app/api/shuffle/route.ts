import { NextRequest, NextResponse } from "next/server"
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import type { NextApiRequest } from "next";
type ResponseData = {
  message: string
}
 
export async function GET(
  req: NextRequest,
  res: NextResponse<ResponseData>
) {

  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const latestShuffle = await supabase
  .from("shuffle")
  .select("*")
  .order("timestamp_column", { ascending: false })
  .limit(1);

    return NextResponse.json(
      {
        body: latestShuffle.data,
        // path: request.nextUrl.pathname,
        // query: request.nextUrl.search,
        // cookies: request.cookies.getAll(),
      },
      {
        status: 200,
      },
    );
}






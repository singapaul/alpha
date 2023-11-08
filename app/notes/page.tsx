import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Notes() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const notes  = await supabase.from("notes").select();
  const hater = await supabase.from("shuffle").select();
console.log(hater.data)
console.log(notes)
  return <pre>{JSON.stringify(hater.data, null, 2)}</pre>
}
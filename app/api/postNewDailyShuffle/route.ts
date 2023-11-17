import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";



type ResponseData = {
  message: string;
};

export async function GET(req: NextRequest, res: NextResponse<ResponseData>) {


  function shuffleArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  const liteArray = [];
  for (let i = 0; i <= 23; i++) {
    liteArray.push(i);
  }

  const classicArray = [];
  for (let i = 0; i <= 51; i++) {
    classicArray.push(i);
  }

  const liteShuffle = shuffleArray(liteArray);
  const classicShuffle = shuffleArray(classicArray);

  console.log(liteShuffle)

  const liteShuffleJSON = JSON.parse(JSON.stringify(liteShuffle))
  const classicShuffleJSON = JSON.parse(JSON.stringify(classicShuffle))

  const date = new Date ()
  

  const responseBody = {
    message: date,
    lite: liteShuffleJSON,
    classic: classicShuffleJSON,
  };

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

await supabase
    .from("shuffle")
    .insert({ title: "daily shuffle upload", lite: liteShuffle, classic: classicShuffle });



  return NextResponse.json(
    {
      body: responseBody,

    },
    {
      status: 200,
    }
  );
}

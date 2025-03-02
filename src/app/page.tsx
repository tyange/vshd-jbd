import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();

  const { data } = await supabase.from("photos").select().limit(100);

  return (
    <div className="flex h-screen w-screen justify-center">
      <div className="grid h-screen max-w-2xl grid-cols-4 gap-3 overflow-auto">
        {data &&
          data.map((d) => (
            <div
              key={d.id}
              className="relative flex h-full w-full items-center justify-center"
            >
              <Image
                src={d.file_url}
                alt={d.file_name}
                width={100}
                height={100}
                className="h-auto w-auto"
                priority={true}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

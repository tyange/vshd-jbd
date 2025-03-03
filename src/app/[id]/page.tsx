import { createClient } from "@/utils/supabase/server";
import { Database } from "../../../database.types";
import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const supabase = await createClient<Database>();
  const { data } = await supabase
    .from("photos")
    .select()
    .eq("id", Number(params.id));

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="card bg-base-100 shadow-sm">
        {data && data[0] ? (
          <>
            <figure>
              <Image
                src={data[0].file_url}
                alt={data[0].file_name}
                className="aspect-3/2"
                width={100}
                height={100}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data[0].file_name}</h2>
              <p>{data[0].photographer}</p>
            </div>
          </>
        ) : (
          <p className="text-gray-500">No Photo!</p>
        )}
      </div>
    </div>
  );
}

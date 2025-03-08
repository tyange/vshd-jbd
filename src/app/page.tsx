import { createClient } from "@/utils/supabase/server";
import { Database } from "../../database.types";
import NextRenderList from "@/components/next-render-list";
import ImageList from "@/components/ui/image-list";

export default async function Home() {
  const supabase = await createClient<Database>();

  const { data } = await supabase.from("photos").select().limit(50);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="grid h-full max-w-2xl grid-cols-4 gap-3 overflow-auto p-5">
        {data && <ImageList images={data} />}
        <NextRenderList />
      </div>
    </div>
  );
}

import { createClient } from "@/utils/supabase/server";
import ImageItem from "@/components/ui/image-item";
import { Database } from "../../../../database.types";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const supabase = await createClient<Database>();
  const { data } = await supabase.from("photos").select().eq("id", Number(id));

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="bg-base-200 w-10/12 max-w-2xl rounded-md border border-gray-200 p-5 shadow-lg">
        <p className="mb-3 text-lg font-bold">
          {(data && data[0] && data[0].file_name) ?? "Unknown"}
        </p>
        <ImageItem data={data && data[0] ? data[0] : null} />
      </div>
    </div>
  );
}

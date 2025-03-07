import { createClient } from "@/utils/supabase/server";
import BigImage from "@/components/ui/big-image";
import { Database } from "../../../../database.types";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const supabase = await createClient<Database>();
  const { data } = await supabase.from("photos").select().eq("id", Number(id));

  return (
    <div className="flex h-dvh w-dvw flex-col items-center justify-center">
      <BigImage data={data && data[0] ? data[0] : null} />
    </div>
  );
}

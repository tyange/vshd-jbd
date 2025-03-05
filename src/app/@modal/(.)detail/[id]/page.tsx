import { createClient } from "@/utils/supabase/server";
import Modal from "@/components/ui/modal";
import ImageItem from "@/components/ui/image-item";
import { Database } from "../../../../../database.types";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const supabase = await createClient<Database>();
  const { data } = await supabase.from("photos").select().eq("id", Number(id));
  return (
    <Modal title={(data && data[0] && data[0].file_name) ?? "Unknown"}>
      <div className="w-full max-w-xl">
        <ImageItem data={data && data[0] ? data[0] : null} />
      </div>
    </Modal>
  );
}

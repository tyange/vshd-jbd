import { createClient } from "@/utils/supabase/server";
import Modal from "@/components/ui/modal";
import BigImage from "@/components/ui/big-image";
import { Database } from "../../../../../database.types";
import BottomMenu from "@/components/ui/bottom-menu";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const supabase = await createClient<Database>();
  const { data } = await supabase.from("photos").select().eq("id", Number(id));
  return (
    <>
      <Modal>
        <div className="w-full max-w-xl">
          <BigImage data={data && data[0] ? data[0] : null} />
        </div>
        <BottomMenu />
      </Modal>
    </>
  );
}

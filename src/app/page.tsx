import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const { data } = await supabase.storage.from("photos").list("");
  console.log(data);

  return <div>{data && data.map((d) => <div key={d.id}>{d.name}</div>)}</div>;
}

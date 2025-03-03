"use server";

import { createClient } from "@/utils/supabase/server";
import { Database } from "../../database.types";

export async function fetchNextImageList(to: number, from: number) {
  const supabase = await createClient<Database>();
  return await supabase.from("photos").select().range(to, from);
}

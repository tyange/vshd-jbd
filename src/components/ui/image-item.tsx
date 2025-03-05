import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tables } from "../../../database.types";

type ImageItemProps = {
  data: Tables<"photos"> | null;
};

export default function ImageItem({ data }: ImageItemProps) {
  return data ? (
    <AspectRatio>
      <Image
        src={data.file_url}
        alt={data.file_name}
        fill
        className="h-auto w-auto rounded-md object-cover"
      />
    </AspectRatio>
  ) : (
    <p className="text-gray-500">No Photo!</p>
  );
}

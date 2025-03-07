"use client";

import { useState } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tables } from "../../../database.types";

type BigImageProps = {
  data: Tables<"photos"> | null;
};

export default function BigImage({ data }: BigImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return data ? (
    <AspectRatio>
      {isLoading && <div className="skeleton h-full w-full"></div>}
      <Image
        src={data.file_url}
        alt={data.file_name}
        sizes="100vw"
        fill
        className={`h-auto w-auto max-w-full transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        priority={true}
        onLoad={() => setIsLoading(false)}
      />
    </AspectRatio>
  ) : (
    <p className="text-gray-500">No Photo!</p>
  );
}

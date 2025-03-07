"use client";

import { useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Tables } from "../../../database.types";

type SmallImageProps = {
  data: Tables<"photos">;
};

export default function SmallImage({ data }: SmallImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      className="relative flex h-full w-full items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
    >
      {isLoading && <div className="skeleton h-full w-full"></div>}
      <Image
        src={data.file_url}
        style={{
          aspectRatio: 1,
        }}
        alt={data.file_name}
        width={100}
        height={100}
        className={`h-auto w-auto transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        priority={true}
        onLoad={() => setIsLoading(false)}
      />
    </motion.div>
  );
}

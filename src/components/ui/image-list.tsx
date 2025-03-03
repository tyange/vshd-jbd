"use client";

import Image from "next/image";
import * as motion from "motion/react-client";
import { Tables } from "../../../database.types";

type ImageListProps = {
  images: Tables<"photos">[];
};

export default function ImageList({ images }: ImageListProps) {
  return (
    <>
      {images.map((d) => (
        <motion.div
          key={d.id}
          className="relative flex h-full w-full items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <Image
            src={d.file_url}
            style={{
              aspectRatio: 1,
            }}
            alt={d.file_name}
            width={100}
            height={100}
            className="h-auto w-auto"
            priority={true}
          />
        </motion.div>
      ))}
    </>
  );
}

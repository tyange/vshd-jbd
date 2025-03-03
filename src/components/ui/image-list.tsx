import Image from "next/image";
import { Tables } from "../../../database.types";

type ImageListProps = {
  images: Tables<"photos">[];
};

export default function ImageList({ images }: ImageListProps) {
  return (
    <>
      {images.map((d) => (
        <div
          key={d.id}
          className="relative flex h-full w-full items-center justify-center"
        >
          <Image
            src={d.file_url}
            alt={d.file_name}
            width={100}
            height={100}
            className="h-auto w-auto"
            priority={true}
          />
        </div>
      ))}
    </>
  );
}

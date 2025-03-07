"use client";

import Link from "next/link";
import { Tables } from "../../../database.types";
import SmallImage from "./small-image";

type ImageListProps = {
  images: Tables<"photos">[];
};

export default function ImageList({ images }: ImageListProps) {
  return (
    <>
      {images.map((d) => (
        <Link key={d.id} href={`/detail/${d.id}`}>
          <SmallImage data={d} />
        </Link>
      ))}
    </>
  );
}

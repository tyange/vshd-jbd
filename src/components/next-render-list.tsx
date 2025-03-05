"use client";

import { useCallback, useEffect, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import { fetchNextImageList } from "@/actions/fetch-next-image-list.actions";
import { PER_PAGE } from "@/constants/collections.constants";
import { Tables } from "../../database.types";
import ImageList from "./ui/image-list";
import { Dot } from "lucide-react";

type Collection = {
  id: string;
  data: Tables<"photos">[];
};

export default function NextRenderList() {
  const [imageCollections, setImageCollections] = useState<Collection[]>([]);
  const [currentFrom, setCurrentFrom] = useState(PER_PAGE + 1);
  const [currentTo, setCurrentTo] = useState(PER_PAGE * 2);
  const [isEnableFetchMore, setIsEnableFetchMore] = useState(true);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 1,
  });

  const fetchList = useCallback(async () => {
    const { data } = await fetchNextImageList(currentFrom, currentTo);

    if (data && data.length > 0) {
      setImageCollections((currentCollections) => [
        ...currentCollections,
        { id: `${currentFrom}-${currentTo}`, data },
      ]);

      setCurrentFrom(currentTo + 1);
      setCurrentTo((prev) => PER_PAGE * (prev / PER_PAGE + 1));
    } else {
      setIsEnableFetchMore(false);
    }
  }, [currentFrom, currentTo]);

  useEffect(() => {
    if (isIntersecting && isEnableFetchMore) {
      fetchList();
    }
  }, [isIntersecting, isEnableFetchMore, fetchList]);

  return (
    <>
      {imageCollections.map((collection) => (
        <ImageList key={collection.id} images={collection.data} />
      ))}
      <div
        ref={ref}
        className="col-span-4 flex items-center justify-center py-5"
      >
        {isEnableFetchMore ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <Dot className="h-10 w-10" />
        )}
      </div>
    </>
  );
}

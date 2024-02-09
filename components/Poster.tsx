import Image from "next/image";

import { IMG_BASE_URL } from "@/secrets";

type PosterProps = {
  title: string;
  fetchSize: string;
  src: string;
  width: number;
  height: number;
  classes: string;
};

export default function Poster({
  title,
  fetchSize,
  src,
  width,
  height,
  classes,
}: PosterProps) {
  return (
    <Image
      src={`${IMG_BASE_URL}${fetchSize}${src}`}
      alt={`A poster from ${title}`}
      width={width}
      height={height}
      className={classes + " rounded object-cover drop-shadow"}
      priority
    />
  );
}

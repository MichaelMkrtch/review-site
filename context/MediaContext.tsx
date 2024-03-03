"use client";

import { type ReactNode, createContext, useContext, useState } from "react";

type ContentObj = {
  type: string;
  id: number;
  title: string;
  directors: string;
  releaseDate: string;
  posterPath: string;
  backdrops: { file_path: string }[];
};

type MediaContextValue = {
  content: ContentState;
  writeData: ({}: ContentObj) => void;
};

const MediaContext = createContext<MediaContextValue | null>(null);

export function useMediaContext() {
  const mediaContext = useContext(MediaContext);

  if (mediaContext === null) {
    throw new Error(
      "mediaContext has to be used within <MediaContext.Provider />",
    );
  }

  return mediaContext;
}

type MediaContextProviderProps = {
  children: ReactNode;
};

interface ContentState extends ContentObj {
  backdropPath: string | undefined;
}

export default function MediaContextProvider({
  children,
}: MediaContextProviderProps) {
  const [content, setContent] = useState({ id: 0 } as ContentState);

  function writeData(contentData: ContentObj) {
    const { type, id, title, directors, releaseDate, posterPath, backdrops } =
      contentData;

    const randomIndex = Math.floor(Math.random() * backdrops.length);
    let backdropPath: string;
    if (backdrops.length) {
      backdropPath = backdrops[randomIndex].file_path;
    }

    setContent((prevContent) => {
      return {
        ...prevContent,
        type,
        id,
        title,
        directors,
        releaseDate,
        posterPath,
        backdropPath,
      };
    });
  }

  const mediaContext: MediaContextValue = {
    content,
    writeData,
  };

  return (
    <MediaContext.Provider value={mediaContext}>
      {children}
    </MediaContext.Provider>
  );
}

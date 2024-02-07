"use client";

import { type ReactNode, createContext, useContext, useState } from "react";

type ContentObj = {
  type: string;
  id: number;
  title: string;
  directors: string;
  poster: string;
};

type MediaContextValue = {
  content: ContentObj;
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

export default function MediaContextProvider({
  children,
}: MediaContextProviderProps) {
  const [content, setContent] = useState({ id: 0 } as ContentObj);

  function writeData(contentData: ContentObj) {
    const { type, id, title, directors, poster } = contentData;

    setContent((prevContent) => {
      return {
        ...prevContent,
        type,
        id,
        title,
        directors,
        poster,
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

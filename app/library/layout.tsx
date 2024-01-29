import { type ReactNode } from "react";

type LibraryLayoutProps = {
  children: ReactNode;
}

export default function LibraryLayout({children}: LibraryLayoutProps) {
  return (
    <>
      <h1>Library Layout</h1>
      {children}
    </>
  );
}

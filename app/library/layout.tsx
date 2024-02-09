import { type ReactNode } from "react";

type LibraryLayoutProps = {
  children: ReactNode;
}

export default function LibraryLayout({children}: LibraryLayoutProps) {
  return (
    <section className="px-12 py-4">
      <h2 className="text-xl">Library</h2>
      {children}
    </section>
  );
}

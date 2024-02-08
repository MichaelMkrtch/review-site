import { type ReactNode } from "react";

type LibraryLayoutProps = {
  children: ReactNode;
}

export default function LibraryLayout({children}: LibraryLayoutProps) {
  return (
    <section className="px-12 py-2">
      {children}
    </section>
  );
}

import { type ReactNode } from "react";

type LibraryLayoutProps = {
  children: ReactNode;
};

export default function LibraryLayout({ children }: LibraryLayoutProps) {
  return (
    <main className="px-12 pt-6">
      <h2 className="text-xl">Library</h2>
      <section className="my-6 float-right">{children}</section>
    </main>
  );
}

import { type ReactNode } from "react";

type LibraryLayoutProps = {
  children: ReactNode;
};

export default function LibraryLayout({ children }: LibraryLayoutProps) {
  return (
    <main className="flex flex-col items-center relative mt-3">
      <h2 className="absolute left-0 text-xl">Your Library</h2>
      <section className="mt-14">{children}</section>
    </main>
  );
}

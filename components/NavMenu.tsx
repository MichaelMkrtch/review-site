import { ReactNode } from "react";

import Link from "next/link";

type NavMenuProps = {
  signedIn: boolean;
};

export default function NavMenu({ signedIn }: NavMenuProps) {
  let link: ReactNode;
  const buttonClasses =
    "rounded bg-cyan-350 px-4 py-2 text-base outline-none transition-colors duration-200 ease-in-out hover:bg-cyan-250 active:bg-cyan-400";

  if (signedIn) {
    link = (
      <Link href="/search"
        className={buttonClasses}
        // onClick={onSearch}
      >
        Add Movie
      </Link>
    );
  } else {
    link = (
      <Link href="/Sign in" className={buttonClasses}>
        Sign in
      </Link>
    );
  }

  return (
    <nav className="flex items-center justify-between px-12 py-5">
      <Link href="/" className="w-1/4">
        <h1 className="text-2xl">Review Site</h1>
      </Link>
      <ul className="flex w-full items-center justify-end">
        <li className="px-4">
          <Link href="/films">Films</Link>
        </li>
        <li className="px-4">
          <Link href="/library">Library</Link>
        </li>
        <li className="px-4">{link}</li>
      </ul>
    </nav>
  );
}

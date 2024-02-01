import Link from "next/link";

import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-12 py-5">
      <div>
        <Link href="/" className="w-1/4">
          <h1 className="text-2xl">Review Site</h1>
        </Link>
      </div>
      <NavMenu />
    </header>
  );
}

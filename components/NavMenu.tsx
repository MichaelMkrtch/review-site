"use client";

import Link from "next/link";
import { useModalContext } from "@/context/ModalContext";

export default function NavMenu() {
  const modalContext = useModalContext();

  function handleShowSearch() {
    modalContext.showSearch();
  }

  const buttonClasses =
    "rounded bg-cyan-350 px-4 py-2 text-base outline-none transition-colors duration-200 ease-in-out hover:bg-cyan-250 active:bg-cyan-400";

  return (
    <nav>
      <ul className="flex w-full items-center justify-end">
        <li className="px-4">
          <Link href="/films">Films</Link>
        </li>
        <li className="px-4">
          <Link href="/library">Library</Link>
        </li>
        <li className="px-4">
          <button onClick={handleShowSearch} className={buttonClasses}>
            Add Movie
          </button>
        </li>
      </ul>
    </nav>
  );
}

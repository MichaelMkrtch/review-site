import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="m-auto my-6 flex w-11/12 font-sora">
      <Link href="/" className="w-1/4">
        <h1 className="text-2xl">Review Site</h1>
      </Link>
      <ul className="flex w-full items-center justify-end">
        <li className="px-4">
          <Link
            href="/Sign in"
            className="rounded bg-cyan-350 px-4 py-2 text-base outline-none transition-colors duration-200 ease-in-out hover:bg-cyan-250 active:bg-cyan-400"
          >
            Sign in
          </Link>
        </li>
      </ul>
    </nav>
  );
}

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Link from "next/link";

import NavMenu from "./NavMenu";
import SearchModal from "./search/SearchModal";
import DetailsModal from "./details/DetailsModal";

const queryClient = new QueryClient();

export default function Header() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchModal />
      <DetailsModal />
      <header className="flex items-center justify-between py-8">
        <div>
          <Link href="/" className="w-1/4">
            <h1 className="text-3xl font-bold">Review Site</h1>
          </Link>
        </div>
        <NavMenu />
      </header>
    </QueryClientProvider>
  );
}

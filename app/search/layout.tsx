"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode } from "react";

type SearchLayoutProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

export default function SearchLayout({ children }: SearchLayoutProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

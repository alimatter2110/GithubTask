"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

//   const [queryClient] = useState(() => new QueryClient()); lazy intialization created once when the component mount 
//   cosnt queryClient = new QueryClient(); eager intialization created everytime the component renders so it leads to performance issues

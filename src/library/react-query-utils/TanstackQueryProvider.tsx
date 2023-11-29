"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import React, { ReactNode, useState } from "react"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export default function TanstackQueryProvider(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

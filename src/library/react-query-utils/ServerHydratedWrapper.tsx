import React, { ReactNode } from "react"
import { dehydrate, Hydrate } from "@tanstack/react-query"
import getQueryClient from "@/library/react-query-utils/getQueryClient"

export default function ServerHydratedWrapper(props: { children: ReactNode }) {
  const queryClient = getQueryClient()
  const dehydratedState = dehydrate(queryClient)

  return <Hydrate state={dehydratedState}>{props.children}</Hydrate>
}

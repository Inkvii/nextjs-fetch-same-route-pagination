import { NextRouter, useRouter } from "next/router"
import { Route } from "router/router"

export default function useTypedRouter<SEARCH_PARAMS, VARIABLES>(
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  _route: Route<SEARCH_PARAMS, VARIABLES>
): NextRouter & {
  variables: VARIABLES
  searchParams: SEARCH_PARAMS
} {
  const router = useRouter()

  return { ...router, variables: router.query as VARIABLES, searchParams: router.query as SEARCH_PARAMS }
}

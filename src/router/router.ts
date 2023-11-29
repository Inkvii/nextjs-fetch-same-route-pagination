import { ParsedUrlQueryInput } from "node:querystring"
import { format, UrlObject } from "url"

/**
 * <p>
 * Route type that is going to be used primarily for routing purposes.
 * </p>
 * <p>
 *   Although nextjs registers routes using physical file path system, this type will offer autocompletion when using
 * </p>
 * <pre>
 *   router.push(...)
 * </pre>
 * or links
 * <pre>
 *   <Link href={urlTo(routes.homeRoute, variables, searchParams)}>my link</Link>
 * </pre>
 * <p>Example:</p>
 * <pre>
 *   const homeRoute: Route<
 *    {param1: string, param2: number},
 *    {id: number, name: string}
 *    > = {
 *      path: "/home/:id/details/:name/edit"
 *    }
 * </pre>
 * <p>Results in path: "http:localhost:3000/home/123/details/johndoe/edit"</p>
 */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export type Route<SEARCH_PARAMS = object, VARIABLES = object> = {
  path: string
}

export interface UrlObjectWithPath extends UrlObject {
  path: string
}

/**
 * Creates url object based on the passed Route input. Variables are uri encoded before href creation
 *
 * @param route route which is used for typing support and path
 * @param variables mandatory values of the path (if route describes them), can default to an empty object
 * @param searchParams optional parameters used as query parameters in the url path
 */
export function urlTo<SEARCH_PARAMS, VARIABLES>(
  route: Route<SEARCH_PARAMS, VARIABLES>,
  variables: VARIABLES,
  searchParams: SEARCH_PARAMS
): UrlObjectWithPath {
  let pathname = route.path
  Object.entries(variables as object).forEach(([key, value]) => {
    pathname = pathname.replace(`:${key}`, encodeURIComponent(value))
  })

  const search = new URLSearchParams(searchParams as Record<string, string>)
  const path = search.toString().length > 0 ? pathname + "?" + search.toString() : pathname
  return { pathname: pathname, search: search.toString(), path: path }
}

export function formatUrlFromPathname(url: UrlObject) {
  return format(url)
}

/**
 * Converts query to structure that is accepted by
 * @param route
 */
export function queryToRouter<T>(route: T): ParsedUrlQueryInput {
  if (typeof route !== "object") throw new Error("Route must be object")

  return route as ParsedUrlQueryInput
}

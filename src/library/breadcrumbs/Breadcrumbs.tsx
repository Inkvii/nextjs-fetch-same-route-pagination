import Link from "next/link"
import { Route } from "router/router"

export type BreadcrumbRoute = Route & { breadcrumbName: string; url?: string }

export default function Breadcrumbs(props: { paths: BreadcrumbRoute[] }) {
  if (props.paths.some((route) => route.path.includes(":") && route.url === null))
    throw new Error(
      `There are dynamic paths without parameters in Breadcrumbs component [${props.paths
        .filter((r) => r.path.includes(":") && r.url === null)
        .map((r) => r.breadcrumbName)}]. Please check all pages using this component that url is filled properly`
    )

  // it is expected that route url will never contain null as it passed error check
  return (
    <div className={"child:flex child:items-center flex"} aria-label={"breadcrumbs navigation hierarchy"}>
      {Object.entries(props.paths).map(([key, route]) => (
        <div
          key={key}
          className={"after:[&:not(:last-child)]:content-['›'] after:[&:not(:last-child)]:px-2 last-of-type:font-bold"}
        >
          <Link href={route.url ?? route.path} className={"hover:underline"}>
            {route.breadcrumbName}
          </Link>
        </div>
      ))}
    </div>
  )
}

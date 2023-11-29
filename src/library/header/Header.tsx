import { ReactNode } from "react"
import Breadcrumbs, { BreadcrumbRoute } from "@/library/breadcrumbs/Breadcrumbs"

export default function Header(props: { name: string; breadcrumbs?: BreadcrumbRoute[]; children?: ReactNode }) {
  return (
    <div>
      {props.breadcrumbs && <Breadcrumbs paths={props.breadcrumbs} />}
      <h1>{props.name}</h1>
      {props.children}
    </div>
  )
}

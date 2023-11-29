import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export default function ResizableBox(props: { className?: string; children: ReactNode }) {
  return (
    <div
      className={twMerge("border border-info-500 rounded resize p-4 w-full overflow-auto bg-info-50", props.className)}
    >
      {props.children}
    </div>
  )
}

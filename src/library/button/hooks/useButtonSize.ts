import { useMemo } from "react"
import { Props } from "@/library/button/Button"

export default function useButtonSize(props: Pick<Props, "size">) {
  return useMemo(() => {
    switch (props.size) {
      case "small": {
        const className = "px-2 py-1.5 text-sm"
        return className
      }
      case null: {
        return ""
      }

      default: {
        const className = "px-4 py-1.5"
        return className
      }
    }
  }, [props.size])
}

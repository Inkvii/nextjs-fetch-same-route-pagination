import { useMemo } from "react"
import { Props } from "@/library/button/Button"

export default function useIconButtonSize(props: Pick<Props, "size">) {
  return useMemo(() => {
    switch (props.size) {
      case null: {
        return [undefined, undefined]
      }
      case "small": {
        return ["p-1", "1rem"]
      }
      default: {
        return ["p-2", "1.25rem"]
      }
    }
  }, [props.size])
}

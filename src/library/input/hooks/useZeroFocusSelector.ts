import { FocusEvent } from "react"

export default function useZeroFocusSelector(onFocus: ((e: FocusEvent<HTMLInputElement>) => void) | undefined) {
  const handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "0") {
      e.target.select()
    }
    onFocus?.(e)
  }

  return { handleOnFocus }
}

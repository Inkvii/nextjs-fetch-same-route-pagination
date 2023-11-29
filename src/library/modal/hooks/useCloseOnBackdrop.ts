import { RefObject, useEffect } from "react"

export default function useCloseOnBackdrop(ref: RefObject<HTMLDialogElement>) {
  useEffect(() => {
    const reference = ref.current

    function handleClick(e: Event) {
      if ((e.target as Element).id === reference?.id) {
        reference?.close()
      }
    }

    reference?.addEventListener("click", handleClick)
    return () => reference?.removeEventListener("click", handleClick)
  }, [ref])
}

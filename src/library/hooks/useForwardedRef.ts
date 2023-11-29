import { ForwardedRef, useEffect, useRef } from "react"

/**
 * Use this hook when ref to the object is needed whether parent forwards the ref or not
 * @param ref
 */
export default function useForwardedRef<T>(ref: ForwardedRef<T>) {
  const innerRef = useRef<T>(null)

  useEffect(() => {
    if (!ref) return
    if (typeof ref === "function") {
      ref(innerRef.current)
    } else {
      ref.current = innerRef.current
    }
  }, [ref])

  return innerRef
}

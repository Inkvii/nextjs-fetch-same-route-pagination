import { forwardRef, InputHTMLAttributes, Ref } from "react"

import { Input as ReactAriaInput } from "react-aria-components"
import { twMerge } from "tailwind-merge"

function Component(props: InputHTMLAttributes<HTMLInputElement> & { variant?: "small" }, ref: Ref<HTMLInputElement>) {
  return (
    <ReactAriaInput
      {...props}
      className={twMerge(
        "border rounded border-info-300 w-full",
        props.variant === "small" && ["px-2 py-1 text-sm"],
        props.variant === undefined && ["px-4 py-2"],
        props.className
      )}
      ref={ref}
      data-testid={"input"}
    />
  )
}

export const Input = forwardRef(Component)

import {
  Children,
  cloneElement,
  forwardRef,
  HTMLInputTypeAttribute,
  ReactElement,
  ReactNode,
  Ref,
  useMemo,
} from "react"
import { Label, TextField as ReactAriaTextField, TextFieldProps } from "react-aria-components"
import { Input } from "@/library/input/Input"
import { twMerge } from "tailwind-merge"

type Props = {
  label: string | undefined | null
  description?: string
  errorMessage?: string
  type?: Exclude<HTMLInputTypeAttribute, "number">
  isOptional?: boolean
  children?: ReactNode
}

function Component(props: Props & Omit<TextFieldProps, "type">, ref: Ref<HTMLInputElement>) {
  const { label, description, errorMessage, isOptional, type = "text", children, ...reactAriaProps } = props

  const isInvalid = useMemo(() => {
    return props.isInvalid ?? !!errorMessage
  }, [props.isInvalid, errorMessage])

  return (
    <ReactAriaTextField
      {...reactAriaProps}
      type={type}
      ref={ref}
      className={twMerge("flex flex-col", props.className as string)}
      isInvalid={isInvalid}
      data-testid={"textfield"}
    >
      {props.label && (
        <Label className={"flex gap-4 items-baseline"} data-testid={"label"}>
          <p className={"font-semibold"}>{label}</p>
          {isOptional && <span className={"text-sm text-typography-caption"}>(optional)</span>}
        </Label>
      )}
      {props.children ? (
        Children.map(children, (child) => {
          return cloneElement(child as ReactElement, {
            isInvalid: isInvalid,
            "aria-label": props.label || props["aria-label"],
          })
        })
      ) : (
        <Input
          className={twMerge(
            "transition-all",
            "outline-none focus:border-primary-600",
            "aria-[invalid=true]:border-danger-600",
            "focus:ring-primary-600",
            "focus:aria-[invalid=true]:ring-danger-600",
            "disabled:bg-info-200 disabled:text-typography-caption disabled:cursor-not-allowed",
            "read-only:text-typography-caption read-only:ring-0 read-only:cursor-not-allowed read-only:focus:border-info-400"
          )}
        />
      )}

      {description && (
        <p className={"text-sm text-typography-caption"} data-testid={"description"}>
          {description}
        </p>
      )}
      {errorMessage && (
        <p className={"text-sm text-danger-600"} data-testid={"error"}>
          {errorMessage}
        </p>
      )}
    </ReactAriaTextField>
  )
}

export const Textfield = forwardRef(Component)

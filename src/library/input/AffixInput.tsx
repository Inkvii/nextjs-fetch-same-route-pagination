"use client"

import { forwardRef, ReactNode, Ref, useState } from "react"
import { AriaTextFieldProps, useFocusWithin, useTextField } from "react-aria"
import { useObjectRef } from "@react-aria/utils"
import { twMerge } from "tailwind-merge"
import useRegexValidation from "@/library/input/hooks/useRegexValidation"
import useZeroFocusSelector from "@/library/input/hooks/useZeroFocusSelector"

type AffixInput = {
  className?: string
  overrideDefaultClass?: boolean
  children: ReactNode
}

export default function Component(
  props: AriaTextFieldProps & {
    prefix?: AffixInput
    suffix?: AffixInput
    regex?: RegExp
    className?: string
  },
  ref: Ref<HTMLInputElement>
) {
  const { prefix, suffix, regex, ...ariaProps } = props
  const [isFocusWithin, setIsFocusWithin] = useState<boolean>(false)
  const mergedRef = useObjectRef(ref)

  const { focusWithinProps } = useFocusWithin({
    onFocusWithinChange: (isFocusWithin) => setIsFocusWithin(isFocusWithin),
  })
  const { inputProps } = useTextField(ariaProps, mergedRef)
  const { handleOnChange } = useRegexValidation(inputProps.defaultValue, regex, inputProps.onChange)
  const { handleOnFocus } = useZeroFocusSelector(inputProps.onFocus)

  return (
    <fieldset
      {...focusWithinProps}
      aria-invalid={inputProps["aria-invalid"]}
      onClick={() => {
        mergedRef.current?.focus()
      }}
      className={twMerge(
        "group",
        "border rounded focus:outline-none  first-of-type:rounded-l last-of-type:rounded-r",
        isFocusWithin
          ? "border-primary-600 bg-primary-600 ring-primary-600 ring-1 aria-[invalid=true]:ring-danger-600"
          : "border-info-300 bg-info-300",
        "flex",
        "h-9 child:h-full",
        "overflow-hidden",
        "transition-all",
        "outline-none focus:border-primary-600",
        "aria-[invalid=true]:border-danger-600",
        props.className
      )}
    >
      <Affix affix={prefix} />
      <input
        {...inputProps}
        onChange={handleOnChange}
        onFocus={handleOnFocus}
        className={twMerge(
          "border-0 grow focus:ring-0",
          "transition-colors",
          "disabled:bg-info-200 disabled:text-typography-caption disabled:cursor-not-allowed",
          "read-only:text-typography-caption read-only:ring-0 read-only:cursor-not-allowed read-only:focus:border-info-400",
          inputProps.className
        )}
        ref={mergedRef}
      />
      <Affix affix={suffix} />
    </fieldset>
  )
}

function Affix(props: { affix: AffixInput | undefined }) {
  if (!props.affix) return null

  return (
    <div
      className={twMerge(
        props.affix.overrideDefaultClass
          ? props.affix.className
          : ["flex flex-col items-center justify-center px-4 bg-info-300", "select-none", props.affix.className]
      )}
    >
      {props.affix.children}
    </div>
  )
}

export const AffixInput = forwardRef(Component)

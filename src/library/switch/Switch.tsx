"use client"

import { forwardRef, Ref } from "react"
import { Switch as ReactAriaSwitch, SwitchProps } from "react-aria-components"
import { twMerge } from "tailwind-merge"

export default function Component(props: SwitchProps & { label: string }, ref: Ref<HTMLInputElement>) {
  const { label, ...ariaProps } = props

  return (
    <ReactAriaSwitch
      {...ariaProps}
      ref={ref}
      className={twMerge(
        "flex gap-2 group items-center cursor-pointer w-fit",
        "data-[disabled=true]:text-typography-caption",
        props.className as string
      )}
      data-testid={"switch-button"}
    >
      <div
        className={twMerge(
          "rounded-full w-[2.4rem]  h-6 px-0.5",
          "flex items-center",
          "bg-info-300 border-info-400 border",
          "group-data-[selected=true]:bg-primary-500 group-data-[selected=true]:border-primary-600",
          "transition-all",
          "shrink-0",
          "group-data-[focus-visible=true]:ring ring-offset-2",
          "group-data-[readonly=true]:bg-info-300 group-data-[readonly=true]:border-info-400",
          "group-data-[disabled=true]:bg-info-300 group-data-[disabled=true]:border-info-400"
        )}
      >
        <span
          className={twMerge(
            "rounded-full w-4 h-4 aspect-square",
            "bg-primary-500",
            "transform duration-200",
            "group-data-[selected=true]:translate-x-full",
            "group-data-[selected=true]:bg-primary-50",
            "group-data-[readonly=true]:bg-info-400",
            "group-data-[disabled=true]:bg-info-400"
          )}
        />
      </div>
      {label}
    </ReactAriaSwitch>
  )
}

export const Switch = forwardRef(Component)

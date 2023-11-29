import { Button, OverlayArrow, Tooltip as AriaTooltip, TooltipProps, TooltipTrigger } from "react-aria-components"
import { forwardRef, ReactNode, Ref } from "react"
import { twMerge } from "tailwind-merge"
import { TooltipTriggerProps } from "react-aria"

type Props = Omit<TooltipProps, "children" | "className"> & {
  children: ReactNode
  className?: string
}

function Component(props: Props, ref: Ref<HTMLDivElement>) {
  const { children, ...ariaProps } = props

  return (
    <AriaTooltip {...ariaProps} ref={ref}>
      <OverlayArrow>
        <svg width={8} height={8}>
          <path d="M0 0,L4 4,L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </AriaTooltip>
  )
}

export const TooltipContent = forwardRef(Component)

export function Tooltip(props: {
  element: ReactNode
  tooltipTriggerProps?: TooltipTriggerProps
  tooltipProps?: Props
  children: ReactNode
}) {
  return (
    <TooltipTrigger {...props.tooltipTriggerProps}>
      <Button>{props.element}</Button>
      <TooltipContent
        {...props.tooltipProps}
        className={twMerge("bg-primary-300 text-primary-800 p-1 rounded", props.tooltipProps?.className)}
      >
        {props.children}
      </TooltipContent>
    </TooltipTrigger>
  )
}

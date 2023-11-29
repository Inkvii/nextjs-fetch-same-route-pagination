"use client"

import { cloneElement, forwardRef, ReactElement, Ref } from "react"

import { Button as ReactAriaButton, ButtonProps } from "react-aria-components"
import useButtonTheme from "@/library/button/hooks/useButtonTheme"
import { ButtonTheme } from "@/library/button/types/ButtonTheme"
import { ButtonSize } from "@/library/button/types/ButtonSize"
import { ButtonVariant } from "@/library/button/types/ButtonVariant"
import { twMerge } from "tailwind-merge"
import useIconButtonSize from "@/library/button/hooks/useIconButtonSize"
import { CircleNotch } from "phosphor-react-sc"

export type Props = {
  variant: ButtonVariant
  theme: ButtonTheme
  size?: ButtonSize
  isLoading?: boolean
  loadingIcon?: ReactElement
  children: ReactElement
}

function Component(props: ButtonProps & Props, ref: Ref<HTMLButtonElement>) {
  const {
    variant,
    theme,
    size,
    isLoading,
    loadingIcon = <CircleNotch className={"animate-spin"} />,
    ...ariaProps
  } = props

  const [sizeClassName, iconSize] = useIconButtonSize({ size })
  const themeClassName = useButtonTheme({ variant, theme }, "IconButton")

  return (
    <ReactAriaButton
      {...ariaProps}
      ref={ref}
      className={twMerge(
        themeClassName,
        sizeClassName,
        "transition-all aspect-square w-fit shrink-0",
        isLoading && "animate-pulse",
        props.className as string
      )}
      onPress={(e) => {
        if (isLoading) {
          return
        }
        props.onPress?.(e)
      }}
      data-loading={isLoading ? isLoading : undefined}
      data-testid={"icon-button"}
    >
      {isLoading ? cloneElement(loadingIcon, { size: iconSize }) : cloneElement(props.children, { size: iconSize })}
    </ReactAriaButton>
  )
}

export const IconButton = forwardRef(Component)

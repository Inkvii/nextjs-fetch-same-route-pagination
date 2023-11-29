"use client"

import { forwardRef, ReactNode, Ref } from "react"

import { Button as ReactAriaButton, ButtonProps } from "react-aria-components"
import { ButtonTheme } from "@/library/button/types/ButtonTheme"
import { ButtonVariant } from "@/library/button/types/ButtonVariant"
import { ButtonSize } from "@/library/button/types/ButtonSize"
import { ButtonSideIcons } from "@/library/button/types/ButtonSideIcons"
import { CircleNotch } from "phosphor-react-sc"
import useButtonSize from "@/library/button/hooks/useButtonSize"
import useButtonTheme from "@/library/button/hooks/useButtonTheme"
import useButtonSideIcons from "@/library/button/hooks/useButtonSideIcons"
import { twMerge } from "tailwind-merge"

export type Props = {
  theme: ButtonTheme
  variant: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  children: ReactNode
} & ButtonSideIcons

function Component(props: ButtonProps & Props, ref: Ref<HTMLButtonElement>) {
  const {
    variant,
    theme,
    size,
    subdominantIcon,
    dominantIcon,
    dominantIconSide = "left",
    isLoading,
    loadingIcon = <CircleNotch className={"animate-spin"} />,
    ...ariaProps
  } = props

  const sizeClassName = useButtonSize({ size })
  const themeClassName = useButtonTheme({ variant, theme })

  const icons: [ReactNode, ReactNode] = useButtonSideIcons({
    dominantIconSide,
    dominantIcon,
    subdominantIcon,
    loadingIcon,
    isLoading,
  })

  return (
    <ReactAriaButton
      {...ariaProps}
      ref={ref}
      className={twMerge(
        themeClassName,
        sizeClassName,
        "transition-all",
        "w-fit min-w-[3rem]",
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
      data-testid={"button"}
    >
      {icons[0] && <div>{icons[0]}</div>}
      <div className={twMerge((subdominantIcon || dominantIcon || isLoading) && [""])}>{props.children}</div>
      {icons[1] && <div>{icons[1]}</div>}
    </ReactAriaButton>
  )
}

export const Button = forwardRef(Component)

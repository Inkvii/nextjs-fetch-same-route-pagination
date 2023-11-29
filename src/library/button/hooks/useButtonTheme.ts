import { useMemo } from "react"
import { triggerExhaustiveSwitch } from "utils/exhaustiveSwitch"
import { twMerge } from "tailwind-merge"
import { ButtonTheme } from "@/library/button/types/ButtonTheme"
import { Props } from "@/library/button/Button"

type ConfigVal = { normal: string | string[]; hovered: string | string[]; pressed: string | string[] }

const solidConfig = {
  primary: {
    normal: "bg-primary-600 border-primary-600 text-primary-50",
    hovered:
      "data-[hovered=true]:bg-primary-700 data-[hovered=true]:border-primary-700 data-[hovered=true]:text-white child:data-[hovered=true]:text-white",
    pressed:
      "data-[pressed=true]:bg-primary-800 data-[pressed=true]:border-primary-800 data-[pressed=true]:text-white child:data-[pressed=true]:text-white",
  },
  secondary: {
    normal: "bg-secondary-200 border-secondary-200 text-secondary-800",
    hovered:
      "data-[hovered=true]:bg-secondary-300 data-[hovered=true]:border-secondary-300 data-[hovered=true]:text-secondary-700 child:data-[hovered=true]:text-secondary-700",
    pressed:
      "data-[pressed=true]:bg-secondary-400 data-[pressed=true]:border-secondary-400 data-[pressed=true]:text-secondary-800 child:data-[pressed=true]:text-secondary-800",
  },
} satisfies Record<ButtonTheme, ConfigVal>

const outlineConfig = {
  primary: {
    normal: "bg-white/20 border-primary-700 text-primary-700",
    hovered:
      "data-[hovered=true]:bg-white/40 data-[hovered=true]:border-primary-500 data-[hovered=true]:text-primary-500 child:data-[hovered=true]:text-primary-500",
    pressed:
      "data-[pressed=true]:bg-white data-[pressed=true]:border-primary-400 data-[pressed=true]:text-primary-400 child:data-[pressed=true]:text-primary-400",
  },
  secondary: {
    normal: "bg-white/20 border-secondary-700 text-secondary-700",
    hovered:
      "data-[hovered=true]:bg-white/40 data-[hovered=true]:border-secondary-500 data-[hovered=true]:text-secondary-500 child:data-[hovered=true]:text-secondary-500",
    pressed:
      "data-[pressed=true]:bg-white data-[pressed=true]:border-secondary-400 data-[pressed=true]:text-secondary-400 child:data-[pressed=true]:text-secondary-400",
  },
} satisfies Record<ButtonTheme, ConfigVal>

const hyperlinkConfig = {
  primary: {
    normal: "text-primary-700 data-[hovered=true]:text-primary-500 child:data-[hovered=true]:text-primary-500",
    hovered: "",
    pressed:
      "data-[pressed=true]:bg-primary-100 data-[pressed=true]:text-primary-800 child:data-[pressed=true]:text-primary-800",
  },
  secondary: {
    normal: "text-secondary-500",
    hovered: "data-[hovered=true]:text-secondary-400 child:data-[hovered=true]:text-secondary-400",
    pressed:
      "data-[pressed=true]:bg-secondary-600 data-[pressed=true]:text-white child:data-[pressed=true]:text-secondary-800",
  },
} satisfies Record<ButtonTheme, ConfigVal>

/**
 * Based on the props handles visual aspect of the button
 * @param props
 * @param componentName
 * @returns {string}
 */
export default function useButtonTheme(props: Pick<Props, "theme" | "variant">, componentName = "Button"): string {
  const solidClass = useMemo(() => {
    return [
      "btn",
      "border",
      "transition child:transition",
      "disabled:bg-info-400 disabled:border-info-400",
      "disabled:text-info-600 child:disabled:text-info-600",
      `${solidConfig[props.theme].normal}`,
      `${solidConfig[props.theme].hovered}`,
      `${solidConfig[props.theme].pressed}`,
    ]
  }, [props.theme])

  const outlineClass = useMemo(() => {
    return [
      "btn",
      "border",
      "transition child:transition",
      "disabled:bg-info-400 disabled:border-info-400",
      "disabled:text-info-600 child:disabled:text-info-600",
      `${outlineConfig[props.theme].normal}`,
      `${outlineConfig[props.theme].hovered}`,
      `${outlineConfig[props.theme].pressed}`,
    ]
  }, [props.theme])

  const hyperlinkClass = useMemo(() => {
    return [
      "btn",
      "transition child:transition",
      "disabled:text-info-400 child:disabled:text-info-400",
      `${hyperlinkConfig[props.theme].normal}`,
      `${hyperlinkConfig[props.theme].hovered}`,
      `${hyperlinkConfig[props.theme].pressed}`,
    ]
  }, [props.theme])

  const theme = useMemo(() => {
    switch (props.variant) {
      case "solid": {
        return twMerge(solidClass)
      }
      case "outline": {
        return twMerge(outlineClass)
      }
      case "hyperlink": {
        return twMerge(hyperlinkClass)
      }
      default: {
        triggerExhaustiveSwitch(props.variant, componentName)
      }
    }
  }, [props.variant, componentName, solidClass, outlineClass, hyperlinkClass])
  return theme
}

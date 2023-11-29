import type { Meta, StoryObj } from "@storybook/react"
import { Button as Component } from "./Button"
import { ArrowLeft, ArrowRight, Martini, MathOperations } from "phosphor-react-sc"
import ResizableBox from "stories/ResizableBox"

const meta = {
  title: "Button",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    variant: { options: ["solid", "outline", "hyperlink"], description: "General look and feel of the button" },
    theme: { options: ["primary", "secondary", "danger"], description: "Color theme of the variant" },
    size: { options: [undefined, null, "small"], description: "Prepared size options of the component" },
    dominantIconSide: {
      control: "radio",
      options: ["left", "right"],
      description:
        "Declares position where dominant icon will appear. If component contains both dominant and subdominant icon, the subdominant icon will take the other place. Dominant icon side also decides where loader icon will be placed",
    },
    isLoading: {
      control: "boolean",
      description: "If set to true, loading icon will be switched to dominant icon side position.",
    },
    isDisabled: { control: "boolean", description: "Disabled button cannot be clicked on" },
  },
  args: {
    variant: "solid",
    theme: "primary",
    dominantIcon: <Martini />,
    subdominantIcon: <MathOperations />,
    dominantIconSide: "left",
    children: "Big Beautiful Button",
    onPress: () => console.log("Pressed"),
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledComponent: Story = {
  decorators: [
    (Story) => (
      <ResizableBox>
        <Story />
      </ResizableBox>
    ),
  ],
}

export const TextOnlyBasicButton: Story = {
  args: {
    dominantIcon: undefined,
    subdominantIcon: undefined,
  },
}

export const ButtonsInGrid: Story = {
  args: {
    dominantIcon: <ArrowLeft />,
    subdominantIcon: <ArrowRight />,
  },
  decorators: [
    (Story) => (
      <ResizableBox>
        <div className={"grid grid-cols-12 gap-4 child:border child:border-info-400 items-center"}>
          <div className={"col-span-12"}>
            <Story />
          </div>
          <div className={"col-span-8"}>
            <Story />
          </div>
          <div className={"col-span-4"}>
            <Story />
          </div>
          <div className={"col-span-4"}>
            <Story />
          </div>
          <div className={"col-span-4"}>
            <Story />
          </div>
          <div className={"col-span-4"}>
            <Story />
          </div>
          <div className={"col-span-1"}>
            <Story />
          </div>
          <div className={"col-span-2"}>
            <Story />
          </div>
          <div className={"col-span-3"}>
            <Story />
          </div>
          <div className={"col-span-4"}>
            <Story />
          </div>
        </div>
      </ResizableBox>
    ),
  ],
}

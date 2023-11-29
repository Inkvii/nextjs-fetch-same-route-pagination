import type { Meta, StoryObj } from "@storybook/react"
import { IconButton as Component } from "./IconButton"
import ResizableBox from "stories/ResizableBox"
import { ArrowLeft } from "phosphor-react-sc"

const meta = {
  title: "Button/IconButton",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    variant: { options: ["solid", "outline", "hyperlink"], description: "General look and feel of the button" },
    theme: { options: ["primary", "secondary", "danger"], description: "Color theme of the variant" },
    size: { options: [undefined, null, "small"], description: "Prepared size options of the component" },
    isLoading: {
      control: "boolean",
      description: "If set to true, loading icon will be switched to dominant icon side position.",
    },
    isDisabled: { control: "boolean", description: "Disabled button cannot be clicked on" },
  },
  args: {
    onPress: () => console.log("Pressed"),
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledComponent: Story = {
  args: {
    variant: "solid",
    theme: "primary",
    children: <ArrowLeft />,
  },
  decorators: [
    (Story) => (
      <ResizableBox>
        <Story />
      </ResizableBox>
    ),
  ],
}

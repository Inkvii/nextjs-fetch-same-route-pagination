import { Input as Component } from "./Input"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "stories/ResizableBox"

const meta = {
  title: "Input/Input",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description:
        "Title is for screen readers. Usually this component is a building block for other components and thus is labeled differently",
    },
    variant: {
      control: "radio",
      options: [undefined, "small"],
      description: "Defacto prepared size variant of the component",
    },
    disabled: { control: "boolean", description: "If set to true, cannot be clicked on" },
    readOnly: { control: "boolean", description: "If set to true, cannot be modified" },
    defaultValue: {
      control: "text",
      description: "Default value for uncontrolled input that will be shown on first render",
    },
  },
  decorators: [
    (Story) => (
      <ResizableBox>
        <Story />
      </ResizableBox>
    ),
  ],
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const ControlledComponent: Story = {
  args: {
    title: "Input title",
  },
}

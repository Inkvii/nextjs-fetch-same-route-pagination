import { Textfield as Component } from "./Textfield"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "stories/ResizableBox"
import { AffixInput } from "@/library/input/AffixInput"

const meta = {
  title: "Input/Textfield",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    errorMessage: {
      control: "text",
      description:
        "Message that appears when field contains invalid input. When error message is not empty, field is considered in invalid state",
    },
    description: { control: "text", description: "Optional description for the field" },
    label: { control: "text", description: "Label for the textfield. Can be considered as a header of the component" },
    isDisabled: { control: "boolean", description: "If set to true, cannot be clicked on" },
    isReadOnly: { control: "boolean", description: "If set to true, cannot be modified" },
    defaultValue: {
      control: "text",
      description: "Default value for uncontrolled input that will be shown on first render",
    },
    type: { control: "text", description: "Input type declaration" },
    isOptional: { control: "boolean", description: "If set to true, shows user that this field is optional" },
  },
  args: {
    type: "text",
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
    label: "Hello there",
    children: null,
  },
}
export const WithNumberedInput: Story = {
  args: {
    label: "Hello there",
    description: "Description",
    children: null,
  },
  render: (props) => (
    <Component {...props}>
      <AffixInput
        prefix={{ children: "Prefix value" }}
        suffix={{ children: "Value of Suffix" }}
        {...props}
        className={props.className as string}
      />
    </Component>
  ),
}

import { AffixInput as Component } from "./AffixInput"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "stories/ResizableBox"
import { DECIMAL_NUMBER_PATTERN } from "@/library/validation/pattern"
import { CurrencyEur } from "phosphor-react-sc"

const meta = {
  title: "Input/AffixInput",
  component: Component,
  tags: ["autodocs"],
  argTypes: {
    isDisabled: { control: "boolean", description: "If set to true, cannot be clicked on" },
    isReadOnly: { control: "boolean", description: "If set to true, cannot be modified" },
    isInvalid: {
      control: "boolean",
      description: "Indicator of current state of the component. This can trigger additional styling",
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
    "aria-label": "Show prefix and suffix",
    prefix: { children: "Prefix value" },
    suffix: { children: "Value of Suffix" },
  },
}

export const CurrencyAffixInput: Story = {
  args: {
    "aria-label": "Show affix how it would look like for currency",
    prefix: { children: <CurrencyEur /> },
    regex: DECIMAL_NUMBER_PATTERN,
  },
}

export const LowercaseLettersOnlyAffixInput: Story = {
  args: {
    "aria-label": "label",
    prefix: { children: "Only lowercase letters" },
    regex: new RegExp(/^[a-z]*$/),
  },
}

export const IntegerNumbersOnlyAffixInput: Story = {
  args: {
    "aria-label": "label",
    suffix: { children: "Only single integer number" },
    regex: new RegExp(/^[0-9]*$/),
  },
}

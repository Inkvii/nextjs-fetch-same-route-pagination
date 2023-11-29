import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "stories/ResizableBox"

const meta = {
  title: "Typography",
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  decorators: [
    (Story) => (
      <ResizableBox>
        <Story />
      </ResizableBox>
    ),
  ],
} satisfies Meta<{ text: string }>

export default meta
type Story = StoryObj<typeof meta>

export const Paragraphs: Story = {
  args: {},
  render: (props) => (
    <div>
      <p className={"text-xs"}>text-xs - {props.text}</p>
      <p className={"text-sm"}>text-sm - {props.text}</p>
      <p>text-base - {props.text}</p>
      <p className={"text-md"}>text-md - {props.text}</p>
      <p className={"text-lg"}>text-lg - {props.text}</p>
      <p className={"text-xl"}>text-xl - {props.text}</p>
      <p className={"text-2xl"}>text-2xl - {props.text}</p>
    </div>
  ),
}

export const Headings: Story = {
  args: {},
  render: (props) => (
    <div>
      <h5>h5 - {props.text}</h5>
      <h4>h4 - {props.text}</h4>
      <h3>h3 - {props.text}</h3>
      <h2>h2 - {props.text}</h2>
      <h1>h1 - {props.text}</h1>
    </div>
  ),
}

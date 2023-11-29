import { ConfirmationModal as Component } from "./ConfirmationModal"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "stories/ResizableBox"
import { useEffect, useRef } from "react"
import { Button } from "@/library/button/Button"

const meta = {
  title: "Modals/ConfirmationModal",
  component: Component,
  tags: [],
  argTypes: {
    title: { control: "text", description: "Header of the open modal" },
    acceptButtonText: { control: "text", description: "Text that should be on positive button" },
    declineButtonText: { control: "text", description: "Text that should be on negative button" },
  },
  parameters: {
    controls: { include: ["acceptButtonText", "declineButtonText", "title"] },
  },
  args: {
    onDecline: () => alert("Declined"),
    onAccept: () => alert("Accepted"),
  },
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dialogRef = useRef<HTMLDialogElement>(null)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!dialogRef.current || dialogRef.current.returnValue.length === 0) return

      alert(dialogRef.current.returnValue)
    }, [dialogRef, dialogRef.current?.returnValue])

    return (
      <div>
        <Button
          variant={"solid"}
          theme={"primary"}
          onPress={() => {
            dialogRef.current?.showModal()
          }}
        >
          Show dialog
        </Button>
        <Component {...props} ref={dialogRef}>
          {props.children}
        </Component>
      </div>
    )
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
    title: "Title header",
    children: (
      <div className={"space-y-4"}>
        <p>First paragraph</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis delectus, facilis iure laborum nam odit
          repellat sed. Aliquam cum, tenetur.
        </p>
      </div>
    ),
  },
}

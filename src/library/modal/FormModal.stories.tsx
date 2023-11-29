import { FormModal as Component } from "./FormModal"
import { Meta, StoryObj } from "@storybook/react"
import ResizableBox from "stories/ResizableBox"
import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { useRef } from "react"
import { Button } from "@/library/button/Button"
import { Textfield } from "@/library/input/Textfield"

const meta = {
  title: "Modals/FormModal",
  component: Component,
  tags: [],
  argTypes: {
    title: { control: "text", description: "Header of the open modal" },
    acceptButtonText: { control: "text", description: "Text that should be on positive button" },
    declineButtonText: { control: "text", description: "Text that should be on negative button" },
  },
  args: {},
  parameters: {
    controls: { include: ["title", "acceptButtonText", "declineButtonText"] },
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
    title: "My title",
    children: null,
  },
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dialogRef = useRef<HTMLDialogElement>(null)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const methods = useForm<{ name: string }>({
      mode: "onChange",
      shouldFocusError: false,
      defaultValues: { name: "" },
    })

    const onSubmit: SubmitHandler<{ name: string }> = async (data) => {
      alert(JSON.stringify(data))
    }

    return (
      <div>
        <Button
          variant={"solid"}
          theme={"primary"}
          onPress={() => {
            dialogRef.current?.showModal()
          }}
        >
          Show form dialog
        </Button>
        <FormProvider {...methods}>
          <Component {...props} onSubmit={onSubmit} ref={dialogRef}>
            <Controller
              control={methods.control}
              rules={{
                required: { value: true, message: "Cannot be empty" },
                minLength: { value: 2, message: "Value is too small" },
              }}
              render={({ field, fieldState }) => (
                <Textfield
                  {...field}
                  label={"First name"}
                  description={"Insert first name of your name"}
                  errorMessage={fieldState.error?.message}
                />
              )}
              name={"name"}
            />
          </Component>
        </FormProvider>
      </div>
    )
  },
}

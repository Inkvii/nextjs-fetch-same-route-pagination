"use client"

import { FormEvent, forwardRef, ReactNode, Ref, useId } from "react"
import { twMerge } from "tailwind-merge"
import { PressEvent } from "@react-types/shared/src/events"
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form"
import useCloseOnBackdrop from "@/library/modal/hooks/useCloseOnBackdrop"
import useForwardedRef from "@/library/hooks/useForwardedRef"
import { Button } from "@/library/button/Button"

function Component<TFieldValues extends FieldValues = FieldValues>(
  props: {
    title: string
    onAccept?: (e: PressEvent) => void
    onDecline?: (e: PressEvent) => void
    // eslint-disable-next-line
    onSubmit: SubmitHandler<any>
    children: ReactNode
    acceptButtonText?: string
    declineButtonText?: string
    resetFormOnSubmit?: boolean
  },
  ref: Ref<HTMLDialogElement>
) {
  const forwardedRef = useForwardedRef(ref)
  const id = useId()
  useCloseOnBackdrop(forwardedRef)

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    await methods.handleSubmit(props.onSubmit)(e)
    if (props.resetFormOnSubmit) {
      methods.reset()
    }
    forwardedRef.current?.close()
  }

  const methods = useFormContext<TFieldValues>()
  return (
    <dialog
      id={id}
      ref={forwardedRef}
      className={twMerge(
        "bg-white shadow-lg rounded w-1/2 backdrop:bg-info-600/60 transition-all p-0 duration-1000 animate-fade-in open:backdrop:animate-fade-in"
      )}
    >
      <form method={"dialog"} className={twMerge("flex flex-col gap-4 p-4")} onSubmit={onFormSubmit}>
        <h2>{props.title}</h2>
        {props.children}
        <div className={"flex gap-4 grow justify-end items-end @container child:grow child:@[300px]:grow-0"}>
          <Button
            variant={"hyperlink"}
            theme={"primary"}
            type={"button"}
            onPress={(e) => {
              props.onDecline?.(e)
              forwardedRef.current?.close()
            }}
          >
            {props.declineButtonText || "Cancel"}
          </Button>
          <Button
            variant={"solid"}
            theme={"primary"}
            type={"submit"}
            onPress={props.onAccept}
            isDisabled={!methods.formState.isValid}
          >
            {props.acceptButtonText || "Accept"}
          </Button>
        </div>
      </form>
    </dialog>
  )
}

/**
 * Creates modal that returns form as json data. In order to make it work, reference to HTMLDialogElement must be created
 * where this component is going to be used.
 *
 * Use provided <code>onSubmit</code> and <code>onDecline</code> functions to direct the flow.
 * If middleware is needed, you can additionally use <code>onAccept</code function.
 *
 * Children of this component represent modal content. Title is separate slot
 *
 * Example:
 * <pre>
 *   const dialogRef = useRef<HTMLDialogRef>(null)
 *   return (
 *     <div>
 *       ...
 *       <Button onPress={() => dialogRef.current.showModal()}>Show modal</Button>
 *       <FormModal {...props} ref={dialogRef}>
 *         <p>Modal content</p>
 *       </FormModal>
 *     </div>
 *   )
 *
 * </pre>
 */
export const FormModal = forwardRef(Component)

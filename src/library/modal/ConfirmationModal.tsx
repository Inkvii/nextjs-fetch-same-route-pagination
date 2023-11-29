"use client"

import { Button } from "@/library/button/Button"
import { forwardRef, ReactNode, Ref, useId } from "react"
import { twMerge } from "tailwind-merge"
import useCloseOnBackdrop from "@/library/modal/hooks/useCloseOnBackdrop"
import useForwardedRef from "@/library/hooks/useForwardedRef"

function Component(
  props: {
    title: string
    children: ReactNode
    acceptButtonText?: string
    declineButtonText?: string
    onAccept: () => void
    onDecline: () => void
  },
  /**
   * Reference is the only way to show this component.
   */
  ref: Ref<HTMLDialogElement>
) {
  const forwardedRef = useForwardedRef(ref)
  useCloseOnBackdrop(forwardedRef)
  const id = useId()

  return (
    <dialog
      id={id}
      ref={forwardedRef}
      className={twMerge(
        "bg-white shadow-lg rounded",
        "w-1/2",
        "backdrop:bg-info-600/60 open:backdrop:animate-fade-in animate-fade-in transition-all"
      )}
    >
      <form method={"dialog"} className={twMerge("flex flex-col gap-2 p-4 min-h-[15rem]")}>
        <h2>{props.title}</h2>
        {props.children}
        <div className={"flex gap-2 grow justify-end items-end @container child:grow child:@[300px]:grow-0"}>
          <Button variant={"hyperlink"} theme={"primary"} type={"submit"} onPress={props.onDecline}>
            {props.declineButtonText || "Cancel"}
          </Button>
          <Button variant={"solid"} theme={"primary"} type={"submit"} onPress={props.onAccept}>
            {props.acceptButtonText || "Accept"}
          </Button>
        </div>
      </form>
    </dialog>
  )
}

/**
 * Creates modal with simple yes/no action buttons. In order to make it work, reference to HTMLDialogElement must be created
 * where this component is going to be used.
 *
 * Use provided <code>onAccept</code and <code>onDecline</code> functions to direct the flow.
 * Children of this component represent modal content. Title is separate slot
 *
 * Example:
 * <pre>
 *   const dialogRef = useRef<HTMLDialogRef>(null)
 *   return (
 *     <div>
 *       ...
 *       <Button onPress={() => dialogRef.current.showModal()}>Show modal</Button>
 *       <ConfirmationModal {...props} ref={dialogRef}>
 *         <p>Modal content</p>
 *       </ConfirmationModal>
 *     </div>
 *   )
 *
 * </pre>
 */
export const ConfirmationModal = forwardRef(Component)

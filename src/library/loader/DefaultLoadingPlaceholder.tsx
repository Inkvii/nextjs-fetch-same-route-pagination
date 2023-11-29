import { twMerge } from "tailwind-merge"
import { Spinner } from "phosphor-react-sc"

export default function DefaultLoadingPlaceholder(props: { className?: string }) {
  return (
    <div className={"w-full flex justify-center items-center p-8"}>
      <Spinner className={twMerge("w-[8vh] h-[8vh] aspect-square animate-spin", props.className)} />
    </div>
  )
}

"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useFormStatus } from "react-dom"

export default function Container() {
  const router = useRouter()
  const searchParams = useSearchParams()

  return (
    <form
      action={() => {
        router.push(`?counter=${(Number(searchParams.get("counter")) ?? 1) + 1}`)
      }}
    >
      <Submit />
    </form>
  )
}

function Submit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={"bg-success-600 text-white font-semibold rounded px-4 py-2 disabled:bg-info-600"}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}


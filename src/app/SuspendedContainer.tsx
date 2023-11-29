import { mockDelay } from "utils/delay"

export default async function SuspendedContainer() {
  const response = await mockDelay({ test: "jop" })

  return (
    <div>
      <pre className={"bg-info-200 p-4"}>{JSON.stringify(response, null, 2)}</pre>
      <p>{new Date(response.timestamp).toUTCString()}</p>
    </div>
  )
}
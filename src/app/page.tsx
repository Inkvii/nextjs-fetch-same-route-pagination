import Container from "app/Container"
import { Suspense } from "react"
import SuspendedContainer from "app/SuspendedContainer"

export default async function Home() {
  return (
    <main className={"p-8"}>
      <Suspense fallback={<p>Loading...</p>}>
        <SuspendedContainer />
      </Suspense>
      <Container />
    </main>
  )
}



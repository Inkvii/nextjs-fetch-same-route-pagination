"use client"
import Header from "@/library/header/Header"
import { Tooltip } from "@/library/tooltip/Tooltip"

export default function Home() {
  return (
    <main className={"p-8"}>
      <Header name={"Welcome page"} breadcrumbs={[]} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad amet asperiores at autem commodi
        consectetur consequatur corporis cum dicta distinctio, dolores facere facilis illum impedit iste laudantium modi
        mollitia nemo nisi nulla obcaecati odit pariatur quasi qui quis quo repellat, rerum suscipit tempora tempore
        tenetur vel veniam vero!
      </p>

      <Tooltip element={"Press me"}>
        <p>Tool tipped</p>
        <div>
          <p>Content</p>
        </div>
      </Tooltip>

      <h3>h3 asdsadasd</h3>
      <h4>h4 asdsadasd</h4>
      <h5>h5 asdsadasd</h5>
    </main>
  )
}

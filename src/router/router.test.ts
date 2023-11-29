import { urlTo } from "router/router"
import Routes from "router/routes"

describe("urlTo", () => {
  it("should create url", () => {
    const url = urlTo(Routes.home, {}, {})
    expect(url.path).toBe("/")
  })
})

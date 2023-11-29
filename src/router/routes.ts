import { Route } from "router/router"

/**
 * Implementation of the route system
 * Example:
 * <code>
 * home: {
 *   path: "/:id"
 * } as Route<{searchParam: string}, {id: string}>
 * </code>
 */
const routes = {
  home: {
    path: "/",
  },
} satisfies { [key: string]: Route }

export default routes

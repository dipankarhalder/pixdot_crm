import { queryClient, router } from "./router";

export type { RouterType, RouterIds } from "./router";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
export { router, queryClient };

export {
  Outlet,
  Link,
  useRouteContext,
  useRouter,
  RouterProvider,
  getRouteApi,
  ErrorComponent,
} from "@tanstack/react-router";
export type { ErrorComponentProps } from "@tanstack/react-router";

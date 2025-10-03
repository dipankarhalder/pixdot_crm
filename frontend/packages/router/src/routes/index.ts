import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: ({ context: { queryClient } }) => {
    return;
  },
});

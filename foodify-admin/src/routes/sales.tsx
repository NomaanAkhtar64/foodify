import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sales")({
  component: SalesComponent,
});

function SalesComponent() {
  return <div>Sales</div>;
}

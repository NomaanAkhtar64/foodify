import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orders")({
  component: OrderComponent,
});

function OrderComponent() {
  return <div>ORDERS</div>;
}

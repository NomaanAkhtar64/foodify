import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products")({
  component: ProductComponent,
});

function ProductComponent() {
  return (
    <div className="p-2">
      <h3>Product</h3>
    </div>
  );
}

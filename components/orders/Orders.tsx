"use client";

import type { Order } from "./orderTypes";
import OrderCard from "./OrderCard";

interface OrdersProps {
  orders: Order[];
  onViewOrder: (orderId: string) => void;
}

export default function Orders({ orders, onViewOrder }: OrdersProps) {
  if (!orders.length) {
    return (
      <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-12 text-center">
        <h3 className="text-lg font-semibold">No active orders</h3>

        <p className="mt-2 text-sm text-zinc-500">
          Your active orders will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-3">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          onViewOrder={onViewOrder}
        />
      ))}
    </div>
  );
}

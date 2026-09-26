"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import OrderHeader from "./OrderHeader";
import Orders from "./Orders";
import ProductModal from "./ProductModal";
import { orders as initialOrders } from "./orderData";

export default function OrderTrackerPage() {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

  const selectedOrder =
    orders.find((order) => order.id === selectedOrderId) ?? null;

  const handleViewOrder = (orderId: string) => {
    setSelectedOrderId(orderId);
  };

  const handleCloseProductModal = () => {
    setSelectedOrderId(null);
  };

  const handleCancelOrder = (orderId: string) => {
    setOrders((currentOrders) =>
      currentOrders.filter((order) => order.id !== orderId)
    );

    handleCloseProductModal();

    toast.success(`Order #${orderId} has been cancelled.`);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#18181B]">
      <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <OrderHeader />

        <section className="mx-auto mt-10 max-w-5xl">
          <div className="mb-7">
            <p className="text-sm font-medium text-[#9F54F7]">
              Order tracking
            </p>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Your orders
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
              Keep track of your recent purchases and delivery updates in one
              place.
            </p>
          </div>

          <Orders orders={orders} onViewOrder={handleViewOrder} />
        </section>
      </div>

      <ProductModal
        order={selectedOrder}
        isOpen={selectedOrder !== null}
        onClose={handleCloseProductModal}
        onCancelOrder={handleCancelOrder}
      />

      <ToastContainer position="bottom-right" />
    </main>
  );
}

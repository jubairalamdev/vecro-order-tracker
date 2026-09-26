"use client";

import { orders } from "./orderData";

export default function OrderTrackerPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#18181B]">
      <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
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

          <p className="text-sm text-zinc-500">
            {orders.length} orders found
          </p>
        </section>
      </div>
    </main>
  );
}

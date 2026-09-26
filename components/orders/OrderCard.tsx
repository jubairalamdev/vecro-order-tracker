"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { FiEye } from "react-icons/fi";
import type { Order } from "./orderTypes";
import { getStatusConfig } from "./orderUtils";

interface OrderCardProps {
  order: Order;
  onViewOrder: (orderId: string) => void;
}

export default function OrderCard({ order, onViewOrder }: OrderCardProps) {
  const status = getStatusConfig(order.status);
  const StatusIcon = status.icon;

  return (
    <article
      className={`flex items-center gap-3 rounded-full border border-zinc-200 border-l-4 bg-white p-2 sm:gap-4 sm:border-l sm:border-l-zinc-200 ${status.borderColor}`}
    >
      <div
        className={`hidden h-14 w-14 shrink-0 items-center justify-center rounded-full sm:flex ${status.color}`}
      >
        <StatusIcon className="h-5 w-5 text-white" aria-hidden="true" />
      </div>

      <Image
        src={order.image}
        alt={order.productName}
        width={56}
        height={56}
        className="h-14 w-14 shrink-0 rounded-full object-cover"
      />

      <div className="min-w-0 flex-1 py-1">
        <h3 className="truncate text-sm font-semibold text-zinc-900 sm:text-base">
          {order.productName}
        </h3>

        <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
          <span className="font-medium text-zinc-700">{status.label}</span>

          <span className="h-1 w-1 rounded-full bg-zinc-300" />

          <span>{order.deliveryDate}</span>
        </div>
      </div>

      <Button
        isIconOnly
        variant="tertiary"
        aria-label={`View ${order.productName}`}
        onPress={() => onViewOrder(order.id)}
        className="mr-1 h-12 w-12 shrink-0 rounded-full text-zinc-600"
      >
        <FiEye className="h-4 w-4" aria-hidden="true" />
      </Button>
    </article>
  );
}

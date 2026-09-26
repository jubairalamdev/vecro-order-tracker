import type { IconType } from "react-icons";

export const orderStatuses = [
  "ordered",
  "processing",
  "shipped",
  "out_for_delivery",
  "delivered",
  "cancelled",
] as const;

export type OrderStatus = (typeof orderStatuses)[number];

export interface Order {
  id: string;
  productId: string;
  productName: string;
  image: string;
  status: OrderStatus;
  deliveryDate: string;
  estimatedDeliveryDate: string;
  price: string;
  summary: string;
}

export interface OrderStatusConfig {
  label: string;
  color: string;
  icon: IconType;
}

import {
  FiCheckCircle,
  FiNavigation,
  FiPackage,
  FiShoppingBag,
  FiTruck,
  FiXCircle,
} from "react-icons/fi";
import type { OrderStatus, OrderStatusConfig } from "./orderTypes";

export const statusConfig: Record<OrderStatus, OrderStatusConfig> = {
  ordered: {
    label: "Order placed",
    color: "bg-purple-500",
    icon: FiShoppingBag,
  },

  processing: {
    label: "Processing",
    color: "bg-blue-500",
    icon: FiPackage,
  },

  shipped: {
    label: "Shipped",
    color: "bg-orange-500",
    icon: FiTruck,
  },

  out_for_delivery: {
    label: "Out for delivery",
    color: "bg-yellow-500",
    icon: FiNavigation,
  },

  delivered: {
    label: "Delivered",
    color: "bg-green-500",
    icon: FiCheckCircle,
  },

  cancelled: {
    label: "Cancelled",
    color: "bg-red-500",
    icon: FiXCircle,
  },
};

export const getStatusConfig = (status: OrderStatus) => statusConfig[status];

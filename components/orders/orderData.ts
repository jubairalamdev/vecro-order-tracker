import type { Order } from "./orderTypes";

export const orders: Order[] = [
  {
    id: "ORD-1001",
    productId: "prod-001",
    productName: "Apple AirPods Pro 2",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=800&auto=format&fit=crop",
    status: "shipped",
    deliveryDate: "September 29, 2026",
    estimatedDeliveryDate: "September 29, 2026",
    price: "$249.00",
    summary:
      "AirPods Pro with Active Noise Cancellation, Transparency mode, and personalized spatial audio.",
  },
  {
    id: "ORD-1002",
    productId: "prod-002",
    productName: "Sony WH-1000XM5",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800&auto=format&fit=crop",
    status: "out_for_delivery",
    deliveryDate: "September 27, 2026",
    estimatedDeliveryDate: "September 27, 2026",
    price: "$399.00",
    summary:
      "Premium wireless headphones featuring industry-leading noise cancellation and long battery life.",
  },
  {
    id: "ORD-1003",
    productId: "prod-003",
    productName: "Nike Air Max 270",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    status: "processing",
    deliveryDate: "October 2, 2026",
    estimatedDeliveryDate: "October 2, 2026",
    price: "$150.00",
    summary:
      "Everyday sneakers designed with lightweight cushioning and a comfortable breathable upper.",
  },
  {
    id: "ORD-1004",
    productId: "prod-004",
    productName: "Mechanical Keyboard",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop",
    status: "ordered",
    deliveryDate: "October 5, 2026",
    estimatedDeliveryDate: "October 5, 2026",
    price: "$129.00",
    summary:
      "Compact mechanical keyboard with tactile switches, RGB lighting, and programmable keys.",
  },
  {
    id: "ORD-1005",
    productId: "prod-005",
    productName: "Minimal Desk Lamp",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    status: "delivered",
    deliveryDate: "September 20, 2026",
    estimatedDeliveryDate: "September 20, 2026",
    price: "$79.00",
    summary:
      "Minimal LED desk lamp with adjustable brightness and a clean modern design.",
  },
];

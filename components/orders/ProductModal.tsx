"use client";

import { useState } from "react";
import { Button, Link, Modal } from "@heroui/react";
import Image from "next/image";
import { FiCalendar, FiPackage } from "react-icons/fi";
import CancelOrderModal from "./CancelOrderModal";
import type { Order } from "./orderTypes";
import { getStatusConfig } from "./orderUtils";

interface ProductModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
  onCancelOrder: (orderId: string) => void;
}

export default function ProductModal({
  order,
  isOpen,
  onClose,
  onCancelOrder,
}: ProductModalProps) {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  if (!order) return null;

  const status = getStatusConfig(order.status);

  const handleConfirmCancel = () => {
    setIsCancelModalOpen(false);
    onCancelOrder(order.id);
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={(open) => !open && onClose()}>
        <Modal.Backdrop>
          <Modal.Container size="lg">
            <Modal.Dialog>
              <Modal.Header>
                <div>
                  <p className="text-xs font-medium text-[#9F54F7]">
                    Order #{order.id}
                  </p>

                  <Modal.Heading className="mt-1 text-xl font-semibold">
                    Order details
                  </Modal.Heading>
                </div>

                <Modal.CloseTrigger aria-label="Close" />
              </Modal.Header>

              <Modal.Body>
                <div className="flex gap-4 rounded-2xl bg-zinc-50 p-3">
                  <Image
                    src={order.image}
                    alt={order.productName}
                    width={80}
                    height={80}
                    className="h-20 w-20 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold">{order.productName}</h3>

                    <p className="mt-1 text-sm text-zinc-500">{order.price}</p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-zinc-200 p-4">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <FiPackage className="h-4 w-4" aria-hidden="true" />
                      Current status
                    </div>

                    <p className="mt-2 text-sm font-semibold">
                      {status.label}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 p-4">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <FiCalendar className="h-4 w-4" aria-hidden="true" />
                      Estimated delivery
                    </div>

                    <p className="mt-2 text-sm font-semibold">
                      {order.estimatedDeliveryDate}
                    </p>
                  </div>
                </div>

                <div className="mt-3 rounded-2xl border border-zinc-200 p-4">
                  <h3 className="text-sm font-semibold">Product summary</h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {order.summary}
                  </p>
                </div>
              </Modal.Body>

              <Modal.Footer className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <Link
                  href={`/products/${order.productId}`}
                  className="flex h-10 w-full items-center justify-center rounded-xl bg-[#9F54F7] px-4 text-sm font-medium text-white transition-colors hover:bg-[#8B45E0]"
                >
                  View in page
                </Link>

                <Button
                  variant="danger-soft"
                  onPress={() => setIsCancelModalOpen(true)}
                  className="h-10 w-full rounded-xl text-red-500"
                >
                  Cancel Order
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>

      <CancelOrderModal
        isOpen={isCancelModalOpen}
        order={order}
        onClose={() => setIsCancelModalOpen(false)}
        onConfirm={handleConfirmCancel}
      />
    </>
  );
}

"use client";

import { Button, Modal } from "@heroui/react";
import { FiAlertTriangle } from "react-icons/fi";
import type { Order } from "./orderTypes";

interface CancelOrderModalProps {
  isOpen: boolean;
  order: Order;
  onClose: () => void;
  onConfirm: () => void;
}

export default function CancelOrderModal({
  isOpen,
  order,
  onClose,
  onConfirm,
}: CancelOrderModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Modal.Backdrop>
        <Modal.Container size="sm" placement="center">
          <Modal.Dialog>
            <Modal.Body className="py-8 text-center">
              <Modal.Icon className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
                <FiAlertTriangle className="h-5 w-5" aria-hidden="true" />
              </Modal.Icon>

              <Modal.Heading className="mt-4 text-lg font-semibold">
                Cancel this order?
              </Modal.Heading>

              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Are you sure you want to cancel{" "}
                <span className="font-medium text-zinc-700">
                  {order.productName}
                </span>
                ? This action cannot be undone.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  onPress={onClose}
                  className="rounded-xl"
                >
                  Keep Order
                </Button>

                <Button
                  variant="danger"
                  onPress={onConfirm}
                  className="rounded-xl"
                >
                  Cancel Order
                </Button>
              </div>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

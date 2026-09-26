"use client";

import { useState } from "react";
import { Button, Label, Modal, TextArea, TextField } from "@heroui/react";
import { toast } from "react-toastify";

interface ReportIssueModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReportIssueModal({
  isOpen,
  onClose,
}: ReportIssueModalProps) {
  const [issue, setIssue] = useState("");

  const handleSubmit = () => {
    if (!issue.trim()) {
      toast.error("Please describe the issue first.");
      return;
    }

    toast.success("Report submitted");

    setIssue("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Modal.Backdrop>
        <Modal.Container size="md" placement="center">
          <Modal.Dialog>
            <Modal.Header>
              <div>
                <p className="text-xs font-medium text-[#9F54F7]">Support</p>

                <Modal.Heading className="mt-1 text-xl font-semibold">
                  Report an issue
                </Modal.Heading>
              </div>

              <Modal.CloseTrigger aria-label="Close" />
            </Modal.Header>

            <Modal.Body>
              <TextField value={issue} onChange={setIssue}>
                <Label>What went wrong?</Label>

                <TextArea
                  rows={5}
                  placeholder="Tell us about the issue with your order..."
                />
              </TextField>
            </Modal.Body>

            <Modal.Footer className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                onPress={onClose}
                className="w-full rounded-xl"
              >
                Cancel
              </Button>

              <Button
                variant="primary"
                onPress={handleSubmit}
                className="w-full rounded-xl bg-[#9F54F7] text-white hover:bg-[#8B45E0]"
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

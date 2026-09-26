"use client";

import { Button, Link } from "@heroui/react";
import { FiArrowRight, FiFlag } from "react-icons/fi";

interface ContactSectionProps {
  onReportIssue: () => void;
}

export default function ContactSection({ onReportIssue }: ContactSectionProps) {
  return (
    <section className="mt-8 rounded-3xl border border-zinc-200 bg-white p-5 sm:p-6">
      <div>
        <p className="text-xs font-medium text-[#9F54F7]">Need assistance?</p>

        <h2 className="mt-1 text-xl font-semibold">Have an Issue?</h2>

        <p className="mt-2 text-sm text-zinc-500">
          Our support team is here if something isn&apos;t right with your
          order.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Link
          href="/contact"
          className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#9F54F7] px-4 text-sm font-medium text-white transition-colors hover:bg-[#8B45E0]"
        >
          <FiArrowRight className="h-4 w-4" aria-hidden="true" />
          Contact us
        </Link>

        <Button
          variant="outline"
          onPress={onReportIssue}
          className="h-11 rounded-xl border-zinc-200"
        >
          <FiFlag className="h-4 w-4" aria-hidden="true" />
          Report Issue
        </Button>
      </div>
    </section>
  );
}

import { Link } from "@heroui/react";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiClock,
  FiHome,
  FiPackage,
} from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] px-4 py-5 text-[#18181B] sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-40px)] max-w-7xl flex-col">
        {/* Header */}
        <header className="flex items-center justify-between rounded-full border border-zinc-200 bg-white px-4 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-zinc-900"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#9F54F7] text-sm font-bold text-white">
              V
            </div>

            <span className="hidden text-sm font-semibold sm:block">
              Vecro Soft
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-7 text-sm text-zinc-500 md:flex">
            <Link
              href="/"
              className="transition-colors hover:text-zinc-900"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="transition-colors hover:text-zinc-900"
            >
              Products
            </Link>

            <Link
              href="/orders"
              className="transition-colors hover:text-zinc-900"
            >
              Orders
            </Link>

            <Link
              href="/about"
              className="transition-colors hover:text-zinc-900"
            >
              About
            </Link>
          </nav>

          <Link
            href="/signup"
            className="rounded-full bg-[#9F54F7] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#8B45E0]"
          >
            Get Started
          </Link>
        </header>

        {/* Main */}
        <section className="flex flex-1 items-center justify-center py-16">
          <div className="w-full max-w-3xl text-center">
            {/* Small Badge */}
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#9F54F7]/20 bg-[#9F54F7]/5 px-4 py-2 text-xs font-medium text-[#8523F5]">
              <FiClock className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Something is on the way</span>
            </div>

            {/* 404 */}
            <div className="relative mx-auto mt-8 w-fit">
              <span className="select-none text-[clamp(7rem,22vw,15rem)] font-black leading-none tracking-[-0.08em] text-[#9F54F7]/10">
                404
              </span>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-[2rem] border border-[#9F54F7]/20 bg-white shadow-[0_15px_50px_rgba(159,84,247,0.12)] sm:h-28 sm:w-28">
                  <FiPackage
                    className="h-10 w-10 text-[#9F54F7] sm:h-12 sm:w-12"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="mx-auto mt-2 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              This page is
              <span className="text-[#9F54F7]"> coming soon.</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
              Looks like you found a part of Vecro Soft that isn&apos;t ready
              for visitors yet. We&apos;re working behind the scenes to bring
              it to life.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="flex h-11 items-center justify-center gap-2 rounded-full bg-[#9F54F7] px-6 text-sm font-medium text-white transition-colors hover:bg-[#8B45E0]"
              >
                <FiHome className="h-4 w-4" aria-hidden="true" />
                Back to Home
              </Link>

              <Link
                href="/products"
                className="flex h-11 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50"
              >
                Explore Products
                <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Bottom Hint */}
            <div className="mx-auto mt-14 flex max-w-md items-center justify-center gap-3 rounded-2xl border border-zinc-200 bg-white p-3 text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#9F54F7]/10 text-[#9F54F7]">
                <FiClock className="h-4 w-4" aria-hidden="true" />
              </div>

              <div>
                <p className="text-xs font-semibold text-zinc-800">
                  Worth the wait
                </p>

                <p className="mt-0.5 text-xs text-zinc-500">
                  We&apos;re putting the finishing touches on this page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col items-center justify-between gap-3 border-t border-zinc-200 py-5 text-xs text-zinc-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Vecro Soft</p>

          <Link
            href="/"
            className="flex items-center gap-1.5 transition-colors hover:text-zinc-700"
          >
            <FiArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Return home
          </Link>
        </footer>
      </div>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("sa_token");
    if (token) {
      router.replace("/superadmin/dashboard");
    }
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-zinc-100 dark:from-black dark:to-zinc-900 flex flex-col">
      <header className="w-full border-b bg-white/80 backdrop-blur-sm dark:bg-zinc-900/80">
        <div className="max-w-6xl mx-auto h-16 flex items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Image src="/next.svg" alt="Logo" width={40} height={40} />
            <h1 className="text-xl font-semibold tracking-tight">
              HRMS Admin Panel
            </h1>
          </div>

          <Link
            href="/login"
            className="px-5 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition"
          >
            Login
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-zinc-900 dark:text-zinc-200 leading-snug max-w-2xl">
          Manage Companies, Employees & Approvals — All in One Place
        </h1>

        <p className="mt-4 max-w-lg text-lg text-zinc-600 dark:text-zinc-400">
          A lightweight HRMS & Tracking System Super Admin Dashboard built using
          Next.js, Tailwind CSS & shadcn/ui.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="/login"
            className="px-8 py-3 rounded-md bg-black text-white dark:bg-white dark:text-black text-lg hover:opacity-90 transition"
          >
            Get Started
          </Link>

          <a
            href="https://github.com/NarendraSinghKhinchi/hrms-superadmin-panel"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-md border border-zinc-300 dark:border-zinc-700 text-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            View GitHub
          </a>
        </div>

        <div className="mt-12">
          <Image
            src="/dashboard-preview.png"
            alt="Dashboard preview"
            width={900}
            height={500}
            className="rounded-lg shadow-xl border dark:border-zinc-800"
          />
        </div>
      </main>

      <footer className="py-6 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} HRMS Admin Panel. All rights reserved.
      </footer>
    </div>
  );
}

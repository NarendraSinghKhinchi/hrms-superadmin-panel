"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/superadmin/dashboard" },
    { name: "Companies", href: "/superadmin/companies" },
    { name: "Employees", href: "#" },
    { name: "Settings", href: "#" },
  ];

  return (
    <aside className="w-64 bg-white border-r h-screen px-4 py-6">
      <h2 className="text-xl font-bold mb-6">HRMS Admin</h2>

      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "block px-3 py-2 rounded-md hover:bg-gray-100",
              pathname === item.href &&
                "bg-gray-900 text-white hover:bg-gray-800"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

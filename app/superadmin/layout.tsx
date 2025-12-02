import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Super Admin | HRMS",
  description: "Super Admin panel for SaaS HRMS",
};

import Header from "@/components/dashboard/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main className="p-6 bg-gray-100 min-h-screen">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}

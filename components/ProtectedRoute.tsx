"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("sa_token");
    if (!token) {
      router.replace("/superadmin/login");
    }
  }, []);

  return <>{children}</>;
}

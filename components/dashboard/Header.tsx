"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState<{ name?: string }>({});

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("sa_user") || "{}");
    setUser(savedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("sa_token");
    localStorage.removeItem("sa_user");
    router.replace("/");
  };

  return (
    <header className="w-full bg-white border-b px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Super Admin Dashboard</h1>

      <div className="flex items-center gap-4">
        <p className="text-sm text-gray-600">
          Logged in as:{" "}
          <span className="font-medium">{user?.name || "Super Admin"}</span>
        </p>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

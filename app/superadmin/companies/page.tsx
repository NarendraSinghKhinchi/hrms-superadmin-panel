"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { companies as initialData } from "@/lib/companies";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function CompaniesPage() {
  const router = useRouter();
  const [companies, setCompanies] = useState(initialData);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredCompanies = companies.filter((company) => {
    const matchSearch = company.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus =
      statusFilter === "All" || company.status === statusFilter;

    return matchSearch && matchStatus;
  });

  const updateStatus = (id: number, newStatus: "Approved" | "Pending") => {
    setCompanies((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
    );

    toast.success(
      `Company ${
        newStatus === "Approved" ? "approved" : "rejected"
      } successfully`
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Company Management</h1>

      {/* Filters */}
      <div className="bg-white shadow p-4 rounded-lg mb-6 flex gap-4">
        <Input
          placeholder="Search by company name..."
          className="max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded px-3 py-2"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Company Table */}
      <div className="bg-white rounded-lg shadow p-5">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">Company Name</th>
              <th className="p-3">Contact Person</th>
              <th className="p-3">Phone</th>
              <th className="p-3">City</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {filteredCompanies.map((c) => (
              <tr key={c.id} className="border-b">
                <td className="p-3">{c.name}</td>
                <td className="p-3">John Doe</td>
                <td className="p-3">9876543210</td>
                <td className="p-3">{c.city}</td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      c.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {c.status}
                  </span>
                </td>

                <td className="p-3 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => updateStatus(c.id, "Approved")}
                    disabled={c.status === "Approved"}
                  >
                    Approve
                  </Button>

                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => updateStatus(c.id, "Pending")}
                    disabled={c.status === "Pending"}
                  >
                    Reject
                  </Button>
                </td>

                <td className="p-3">
                  <Link
                    href={`/superadmin/companies/${c.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredCompanies.length === 0 && (
          <p className="text-center text-gray-600 py-6">No companies found.</p>
        )}
      </div>
    </div>
  );
}

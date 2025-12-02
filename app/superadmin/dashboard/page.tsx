"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { companies } from "@/lib/companies";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Companies</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {companies.length}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Companies</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {companies.filter((c) => c.status === "Approved").length}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {companies.filter((c) => c.status === "Pending").length}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Employees</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">182</CardContent>
        </Card>
      </div>

      {/* Latest Companies Table */}
      <div className="bg-white rounded-lg shadow p-5">
        <h2 className="text-lg font-semibold mb-4">
          Latest Registered Companies
        </h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Company Name</th>
              <th className="p-3">City</th>
              <th className="p-3">Industry</th>
              <th className="p-3">Status</th>
              <th className="p-3">Registered On</th>
              <th className="p-3"></th>
            </tr>
          </thead>

          <tbody>
            {companies.slice(0, 5).map((c) => (
              <tr key={c.id} className="border-b">
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.city}</td>
                <td className="p-3">{c.industry}</td>
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
                <td className="p-3">{c.registeredOn}</td>

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
      </div>
    </div>
  );
}

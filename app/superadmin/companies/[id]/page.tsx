"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { companies } from "@/lib/companies";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CompanyDetails() {
  const router = useRouter();
  const { id } = useParams(); // dynamic route param

  const [company, setCompany] = useState<any>(null);

  // Protect route
  //   useEffect(() => {
  //     const token = localStorage.getItem("sa_token");
  //     if (!token) router.push("/superadmin/login");
  //   }, []);

  // Fetch company by ID from dummy data
  useEffect(() => {
    if (id) {
      const found = companies.find((c) => c.id === Number(id));
      setCompany(found);
    }
  }, [id]);

  if (!company) {
    return (
      <p className="text-center text-gray-500 py-10">Company not found.</p>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">{company.name}</h1>

      {/* Company Info */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">
          <p>
            <strong>Industry:</strong> {company.industry}
          </p>
          <p>
            <strong>City:</strong> {company.city}
          </p>
          <p>
            <strong>State:</strong> Karnataka
          </p>
          <p>
            <strong>Status:</strong> {company.status}
          </p>

          <p>
            <strong>Contact Person:</strong> John Doe
          </p>
          <p>
            <strong>Mobile:</strong> 9876543210
          </p>
          <p>
            <strong>Email:</strong> johndoe@gmail.com
          </p>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                This section may include expanded company data, activity logs,
                documents, or more.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employees">
          <Card>
            <CardHeader>
              <CardTitle>Employees</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Coming Soon...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Coming Soon...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

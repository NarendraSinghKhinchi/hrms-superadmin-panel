"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { superAdminLogin } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SuperAdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Validations
      if (!email || !password) {
        setError("All fields are required");
        setLoading(false);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Invalid email format");
        setLoading(false);
        return;
      }

      const response = await superAdminLogin(email, password);

      // Save token
      localStorage.setItem("sa_token", response.token);
      localStorage.setItem("sa_user", JSON.stringify(response.user));

      router.push("/superadmin/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">
            Super Admin Login
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

            <div>
              <Label>Email / Username</Label>
              <Input
                type="email"
                placeholder="admin@hrms.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember Me
              </label>

              <a className="text-blue-600 hover:underline cursor-pointer">
                Forgot Password?
              </a>
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
            <Button
              type="button"
              className="w-full"
              variant={"outline"}
              disabled={loading}
              onClick={() => {
                setEmail("admin@hrms.com");
                setPassword("admin123");
              }}
            >
              Demo Credentials
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

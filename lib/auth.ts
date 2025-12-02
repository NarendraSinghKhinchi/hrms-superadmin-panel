// lib/auth.ts
export async function superAdminLogin(email: string, password: string) {
  // Mock API delay
  await new Promise((resolve) => setTimeout(resolve, 700));

  // Hardcoded credentials
  if (email === "admin@hrms.com" && password === "admin123") {
    return {
      token: "fake-jwt-token-123456",
      user: { name: "Super Admin", email },
    };
  }

  throw new Error("Invalid email or password");
}

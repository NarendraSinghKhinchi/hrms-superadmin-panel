# SaaS-based HRMS Super Admin Panel (Frontend Only)

A mini **Super Admin Panel** built using **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**, demonstrating real-world frontend architecture, UI design, state management, mock API integration, protected routing, and component organization.

This project is part of the assignment:

> **SaaS-based HRMS & Tracking System – Super Admin Module**

---

## Features Overview

### 1. Super Admin Login

- Email/Username + Password
- Basic form validation
- “Remember Me” checkbox (UI only)
- “Forgot Password” link
- Mock API (frontend-based or Next.js API route)
- On success:
  - Store token (`sa_token`)
  - Store user object (`sa_user`)
  - Redirect → `/superadmin/dashboard`

---

### 2. Dashboard (`/superadmin/dashboard`)

- Top Header
- Sidebar Navigation
- 4 Summary Cards:
  - Total Companies
  - Active Companies
  - Pending Approvals
  - Total Employees
- Recent Companies Table (dummy data)

---

### 3. Company List + Approval (`/superadmin/companies`)

- Search by company name
- Filter by Status (All / Pending / Approved)
- Table with:
  - Company Name
  - Contact Person
  - Phone
  - City
  - Status
  - Actions: **Approve / Reject**
- Status updates handled via React state (`useState`)
- Success toast notifications (shadcn `sonner`)

---

### 4. Company Detail Page (`/superadmin/companies/[id]`)

- Dynamic routing
- Displays company details from dummy JSON
- Sections/Tabs:
  - Overview
  - Employees (Coming Soon)
  - Settings (Coming Soon)

---

### Route Protection (Frontend Only)

All `/superadmin/*` pages are protected using a layout-based wrapper:

- Checks for `sa_token` in `localStorage`
- Redirects unauthorized users to `/superadmin/login`
- Avoids duplicate code via a **ProtectedRoute** component

---

## 🛠 Tech Stack

| Technology                  | Purpose                                    |
| --------------------------- | ------------------------------------------ |
| **Next.js 14 (App Router)** | Routing, layouts, server/client components |
| **TypeScript**              | Safer, typed React development             |
| **Tailwind CSS**            | Styling                                    |
| **shadcn/ui**               | Reusable UI components                     |
| **React Hooks**             | State management                           |
| **LocalStorage**            | Auth token + user storage                  |
| **Mock API**                | Simulated backend                          |

---

## ▶ How to Run the Project

1. Clone the repository\*\*

git clone https://github.com/NarendraSinghKhinchi/hrms-superadmin-panel
cd hrms-superadmin-panel

2. Install dependencies
   npm install

3. Run the development server
   npm run dev

4. Open in browser
   http://localhost:3000

### Assumptions Made

- Backend is not required → dummy JSON + mock API used
- Authentication is frontend only, using localStorage
- Company data is static for demonstration
- Only Super Admin role exists
- UI is minimal and clean, focusing on assignment scope
- No backend/database integration

### Live Demo

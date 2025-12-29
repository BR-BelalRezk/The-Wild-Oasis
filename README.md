# The Wild Oasis – Dashboard Web App

A **production‑ready internal hotel management dashboard** built for **The Wild Oasis**, a luxury boutique hotel with 8 exclusive cabins.

This application is **not public‑facing**. It is designed exclusively for **hotel employees** to manage cabins, bookings, guests, payments, and hotel operations efficiently.

---

## 🏨 Project Overview

The Wild Oasis Dashboard is a modern, fast, and secure web application that allows hotel staff to:

* Manage cabins (pricing, capacity, discounts, photos)
* Manage bookings and guest check‑ins / check‑outs
* Track payments and extras (breakfast)
* View real‑time business insights and statistics
* Control application‑wide hotel settings

Authentication is **mandatory**, and **new users can only be created from inside the app** to ensure that **only real hotel employees** can access the system.

---

## 🧑‍💼 Target Users

* Hotel reception staff
* Hotel managers
* Internal operations team

⚠️ This app is **not intended for guests or public use**.

---

## ✨ Core Features

### 🔐 Authentication & User Management

* Secure login required to access the application
* New users can **only be registered inside the app** (no public sign‑ups)
* Users can:

  * Upload and update their avatar
  * Change their name
  * Change their password

---

### 🏡 Cabin Management

* Table view listing all cabins

* Each cabin displays:

  * Cabin photo
  * Name
  * Maximum capacity
  * Price per night
  * Current discount

* Full CRUD functionality:

  * Create new cabins (with image upload)
  * Update existing cabins
  * Delete cabins

---

### 📅 Booking Management

* Table view showing all bookings
* Booking data includes:

  * Arrival date
  * Departure date
  * Booking status
  * Paid amount
  * Cabin information
  * Guest information

#### Booking Statuses

* **Unconfirmed** – booked but not yet checked in
* **Checked in**
* **Checked out**

Bookings can be filtered by status for fast operational workflows.

---

### 🧾 Booking Actions

* Delete a booking
* Check guests in
* Check guests out

💳 **Payments**

* Bookings may arrive unpaid
* On check‑in:

  * Payment is accepted **outside the app**
  * Staff confirms payment **inside the app**

🥐 **Breakfast Add‑On**

* Guests can add breakfast at check‑in if not already included
* Breakfast applies to the **entire stay**

---

### 👤 Guest Management

Guest data includes:

* Full name
* Email address
* National ID
* Nationality
* Country flag (for quick visual identification)

---

### 📊 Dashboard & Analytics

The initial screen is a **dashboard** with key business insights.

#### Time Ranges

* Last 7 days
* Last 30 days
* Last 90 days

#### Dashboard Widgets

* Guests checking **in today**
* Guests checking **out today**
* Quick check‑in / check‑out actions

#### Statistics

* Recent bookings
* Total sales
* Check‑ins
* Occupancy rate

#### Charts

* 📈 Daily hotel sales

  * Total sales
  * Extras sales (breakfast)

* 📊 Stay duration statistics

  * Average stay length
  * Distribution of stay durations

---

### ⚙️ Application Settings

Configurable global settings:

* Breakfast price
* Minimum nights per booking
* Maximum nights per booking
* Maximum guests per booking

---

### 🌙 Dark Mode

* Fully supported dark mode
* Theme‑aware UI components
* System‑friendly and eye‑comfortable for night shifts

---

## 🛠 Tech Stack

### ⚛️ Frontend

* **React 19**
* **TypeScript**
* **Vite** (fast development & build tooling)
* **React Router v7**

---

### 🎨 UI & Styling

* **Tailwind CSS v4**
* **shadcn/ui** (Radix‑based component system)
* **Radix UI primitives**
* **Lucide Icons**
* **React Icons**
* **Motion (Framer Motion successor)** for animations

---

### 📋 Forms & Validation

* **React Hook Form**
* **Zod** (schema validation)
* **@hookform/resolvers**

---

### 📡 Data & State Management

* **Supabase**

  * Authentication
  * Database
  * File storage (avatars, cabin images)

* **TanStack React Query**

  * Server state management
  * Caching & revalidation

---

### 📊 Charts & Dates

* **Recharts** (charts & visual analytics)
* **date‑fns** (date utilities)

---

### 🧪 DX & Quality

* **ESLint** (strict linting)
* **TypeScript 5**
* **React Error Boundary**
* **Hot Toast notifications**

---

## 📦 Project Scripts

```bash
npm run dev       # Start development server
npm run build     # Type check + production build
npm run preview   # Preview production build
npm run lint      # Lint the codebase
```

---

## 🔒 Security Notes

* No public user registration
* Authentication handled via Supabase
* Sensitive operations protected by route guards
* Only authenticated employees can access dashboard features

---

## 🚀 Status

✅ Production‑ready

This dashboard is built with scalability, performance, and maintainability in mind, following modern best practices for enterprise‑grade React applications.

---

## 📄 License

Private – Internal use only for **The Wild Oasis**.

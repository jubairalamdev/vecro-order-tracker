# Vecro Soft

A minimal frontend e-commerce interface built with **Next.js**, **React**, **Tailwind CSS**, and **HeroUI**.

The project includes an order tracking experience with mock order data, dynamic product details, cancellation confirmation, issue reporting, and a custom coming-soon / not-found page.

## Tech Stack

* Next.js
* React
* Tailwind CSS
* HeroUI v3
* React Icons
* React Toastify
* JavaScript

## Features

* 📦 Mock order tracking
* 🟣 Dynamic order status indicators
* 👁️ Product details modal
* ❌ Order cancellation flow
* 🚨 Issue reporting modal
* 🔔 Toast notifications
* 🧭 Responsive navigation
* 🚧 Custom coming-soon / 404 page
* 📱 Responsive purple-white UI

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Project Structure

```text
src/
├── app/
│   ├── orders/
│   │   └── page.jsx
│   └── not-found.jsx
│
└── components/
    └── orders/
        ├── OrderTrackerPage.jsx
        ├── OrderHeader.jsx
        ├── Orders.jsx
        ├── OrderCard.jsx
        ├── ProductModal.jsx
        ├── CancelOrderModal.jsx
        ├── ContactSection.jsx
        ├── ReportIssueModal.jsx
        ├── orderData.js
        └── orderUtils.js
```

## Note

This project currently uses **mock JSON data** and is entirely frontend-based. No backend or database is required.

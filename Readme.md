# 💎 Diprella | Personal Finance Management System

Diprella is a high-fidelity, professional SaaS-style personal finance dashboard designed to provide users with deep analytical insights into their financial health. Built with a modern tech stack and a focus on "Google Studio" inspired aesthetics, it bridges the gap between simple ledger tracking and strategic capital management.

---

## 🚀 Core Features

### 📊 Professional Dashboard
*   **Real-time KPI Tracking:** Instant visibility into Total Revenue, Active Users (simulated), Orders, and Growth.
*   **High-Fidelity Visualizations:** Custom-built bar and donut charts for revenue overview and traffic source distribution.
*   **Contextual Awareness:** Smart greetings and activity summaries based on user session data.

### 💰 Strategic Income & Expense Ledger
*   **Advanced Tracking:** Categorized logging of all inbound and outbound capital.
*   **Pagination & Search:** Efficiently manage large datasets with built-in search filters and paginated views.
*   **Auto-Add Automation:** Simulate recurring income streams with a single toggle.

### 🎯 Smart Expense Goals (Goal-Based Savings)
*   **Objective-Based Tracking:** Create specific goals for electronics, travel, education, and more.
*   **Accumulation Velocity:** Visual progress bars with "On Track" or "Delayed" status indicators.
*   **Smart Calculations:** Automatically determines the required monthly savings to meet deadlines based on current net surplus.
*   **Impact Insights:** Dynamic messages explaining how reducing certain expense categories (like Food or Entertainment) accelerates goal completion.

### 💡 Leak Intelligence AI (Insights)
*   **Audit Intelligence:** Detects "Ghost Subscriptions" (recurring description patterns).
*   **Lifestyle Creep Index:** Analyzes "Temporal Intensity" to identify spending spikes on weekends.
*   **Capital Rescue Roadmap:** Provides actionable strategic recommendations to recover dormant capital (e.g., Projected Annual Rescue).

### 👤 User Profile Architecture
*   **Identity Management:** Editable profile fields for name, email, and professional role.
*   **Security Protocol:** Password management with real-time strength indicators and 2FA status tracking.
*   **Session Telemetry:** Visual logs for last authentication, registered devices, and network integrity.

---

## 🛠 Technical Stack

*   **Frontend Library:** React 18+ (using Functional Components & Hooks)
*   **Type Safety:** TypeScript for robust data structures and API contracts
*   **Styling:** Tailwind CSS for a utility-first, highly responsive UI
*   **Icons:** Lucide React for consistent, scalable vector iconography
*   **Routing:** React Router (HashRouter) for client-side navigation
*   **Theme Engine:** Native Dark Mode support with persistent state via LocalStorage
*   **Architecture:** Service-based pattern for data management (Mock API simulation)

---

## 📂 Project Structure

```text
src/
├── Components/         # Reusable UI elements (Charts, Inputs, Layouts)
│   ├── Charts.tsx      # Custom SVG-based Bar and Donut charts
│   ├── SidebarLayout   # Main navigation wrapper with Header integration
│   └── ...
├── pages/              # Main route components
│   ├── Dashboard.tsx   # Overview and high-level stats
│   ├── Insights.tsx    # Algorithmic leak detection
│   ├── Goals.tsx       # Savings objectives tracking
│   ├── Profile.tsx     # User settings and security
│   └── ...
├── services/           # Data fetching and simulation logic
│   ├── income.ts       # Income record CRUD operations
│   ├── expenses.ts     # Expense record CRUD operations
│   ├── goals.ts        # Goal-based logic and persistence
│   └── user.ts         # Profile and authentication mock services
├── types.ts            # Global TypeScript interfaces and types
└── App.tsx             # Root component and route definitions
```

---

## 🎨 UI/UX Philosophy

Diprella follows a **"Strategic Professional"** design language:
*   **Aesthetics:** Soft shadows, large border-radii (`rounded-[3rem]`), and a sophisticated color palette (Emerald, Teal, and Slate).
*   **Responsibility:** Fully fluid layout adapting from mobile-first menu toggles to expansive desktop grids.
*   **Feedback:** Micro-interactions for hover states, loading skeletons for data fetching, and toast notifications for user actions.

---

## 📝 Presentation Notes (For University Projects)

*   **Non-Bank Integration:** This application uses calculation-based logic and mock services. It is designed to demonstrate frontend architecture and data visualization capabilities rather than real backend integration.
*   **Algorithm Logic:** The "Smart Insights" and "Goals" pages use real-time mathematical offsets to calculate "Savings Velocity" and "Impact Analysis."
*   **State Management:** Demonstrates complex state synchronization across multiple views (e.g., updating a name in the Profile immediately updates the Dashboard greeting).

---

## 📄 License

This project is developed for educational purposes and is suitable for university presentations and frontend engineering portfolios.

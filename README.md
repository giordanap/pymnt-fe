# Meeteam Frontend Challenge (Next.js Expert)

Welcome to the Meeteam Technical Evaluation! We are looking for engineers who master the complete Next.js ecosystem.

## Part 1: Architecture Review & Refactor
The code in `apps/web/src/app/page.tsx` was built using legacy "client-side-only" React patterns within a modern Next.js framework.
1. Identify at least 3 major issues (Memory/Performance/Architectural).
2. **Refactor to Modern Next.js Standards**: We expect you to leverage **Server Components (RSC)**, **Server Actions**, and **Streaming** where appropriate.
3. Move away from "useEffect-fetching" for initial data if possible.

## Part 2: Feature Implementation
Implement the following feature using production-grade patterns:
- Add a **Radix UI Dialog (Modal)**.
- The modal should open when clicking a "View Users" button.
- Inside the modal, fetch and display a list of 5 users from `https://jsonplaceholder.typicode.com/users`.
- **Note**: Demonstrate how you handle asynchronous states (Loading/Errors) using Next.js native features (Suspense, etc.).
- **Organization**: We highly value a clean and modular folder structure. Demonstrate how you organize components, actions, and libraries in a professional Next.js project.

### Required Tech Stack:
- **Core:** React, Next.js 14+ (App Router)
- **UI:** Radix UI, Tailwind CSS
- **Infrastructure:** Docker Compose, pnpm, Turborepo

---

## How to run

### Option A — Docker Compose (recommended)

#### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) and Docker Compose

```bash
docker compose up --build
```

The app will be available at **http://localhost:3000**.

To stop:
```bash
docker compose down
```

### Option B — Local development (pnpm)

#### Prerequisites
- [Node.js 20+](https://nodejs.org/) and [pnpm](https://pnpm.io/installation)

```bash
# 1. Copy the environment template
cp apps/web/.env.example apps/web/.env

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

The app will be available at **http://localhost:3000**.

> The app calls the backend API at `http://localhost:3001` by default.
> Make sure the backend is running before using features that fetch profiles.

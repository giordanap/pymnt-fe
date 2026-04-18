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

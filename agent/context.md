# DOME
# context.md
AI System Context & Behavioral Guide

Version 1.0

---

## 1. Product Identity

DOME is a modular productivity platform designed for students.

It centralizes:

- Assignments  
- Academic dashboard  
- Assignment note taking  
- Focus tools  
- Outfit selector  
- Future modular productivity tools  

DOME is not a generic task manager.  
It is an academic operating system.

The experience must feel structured, intentional, and premium.

---

## 2. Product Philosophy

DOME exists to:

- Reduce cognitive overload  
- Eliminate app switching  
- Provide structured clarity  
- Encourage focused work  
- Create tactile digital productivity  

If a feature does not improve academic clarity, it does not belong in the product.

---

## 3. Design Context

DOME follows a modern skeuomorphic design language.

Key characteristics:

- Physical depth  
- Soft layered shadows  
- Realistic elevation  
- Muted grounded colors  
- Material-inspired surfaces  

Strictly avoid:

- Flat UI  
- Neon gradients  
- Startup-style purple/blue blends  
- Emojis in interface  
- Generic AI-generated SVG icon packs  

Light source direction: top-left  
Shadows fall toward bottom-right  

All components must feel tactile and intentional.

---

## 4. Technical Stack

Frontend:
- React
- Vite
- Tailwind CSS
- Framer Motion

Backend:
- Node.js
- Express.js

Database:
- Supabase (PostgreSQL)

Deployment:
- Vercel (frontend)
- Express hosted separately or serverless

Do not introduce:
- Next.js
- Firebase
- Material UI
- Bootstrap
- Chakra UI
- Random UI libraries

All implementations must align strictly with the defined stack.

---

## 5. Architecture Overview

System Flow:

Frontend → Express API → Supabase → Response → UI Update

Guidelines:

- Business logic belongs in backend
- UI logic belongs in frontend
- Maintain separation of concerns
- Keep code modular and scalable
- Avoid monolithic files

---

## 6. Code Quality Standards

AI-generated code must:

- Be clean and production-ready
- Avoid unnecessary dependencies
- Avoid inline styles
- Avoid hardcoded colors
- Use centralized design tokens
- Follow consistent border radius scale
- Avoid placeholder comments

No incomplete logic.  
No pseudo-implementations.

---

## 7. UI Generation Standards

When generating UI:

- Use Tailwind classes
- Follow skeuomorphic depth system
- Maintain 8px spacing scale
- Add subtle elevation
- Ensure readable typography
- Avoid clutter

Icons must be consistent and intentional.

No emojis in interface.

---

## 8. Backend Generation Standards

Backend must:

- Use Express routers
- Separate controllers
- Use middleware for authentication
- Use async/await
- Handle errors properly
- Validate input (Zod or similar)
- Keep APIs RESTful

Standard pattern:

/api/assignments  
GET  
POST  
PUT  
DELETE  

Avoid single-file backend structures.

---

## 9. Database Structure Context

Core Tables:

- Users  
- Subjects  
- Assignments  
- Notes  
- Modules  
- Outfits  
- FocusSessions  

Rules:

- Assignments must link to user_id
- Notes must link to assignment_id
- Maintain relational integrity
- Follow Supabase best practices

---

## 10. Feature Discipline

AI must not:

- Add random productivity tools
- Add unnecessary gamification
- Add chatbot by default
- Overcomplicate dashboard
- Introduce buzzword features

Every addition must improve academic productivity.

---

## 11. Tone and Copy Guidelines

Product language must be:

- Clear
- Structured
- Calm
- Professional
- Direct

Avoid:

- Hype language
- Startup buzzwords
- Meme tone
- Over-marketing phrases

DOME communicates like a structured system.

---

## 12. Performance Standards

AI-generated code must:

- Avoid unnecessary re-renders
- Use memoization where needed
- Lazy load non-critical modules
- Optimize API calls
- Avoid heavy animation libraries

Performance is a core quality metric.

---

## 13. Security Standards

AI must:

- Never expose secrets
- Use environment variables
- Implement JWT verification
- Validate all input
- Prevent SQL injection
- Respect Supabase Row Level Security

Security is mandatory.

---

## 14. Future AI Extensions

When implementing AI features:

- AI must support productivity
- AI must not distract
- AI must not dominate UI
- AI must enhance structure

AI is silent support, not the main interface.

---

## 15. Final Alignment Check

Before generating output, internally validate:

- Is this aligned with DOME’s structure?
- Is this aligned with skeuomorphic design?
- Is this technically consistent with the stack?
- Does this improve academic clarity?

If not aligned, revise before output.
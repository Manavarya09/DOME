# DOME
# prd.md
Product Requirements Document

Version 1.0

---

## 1. Overview

Product Name:
DOME

Category:
Modular Productivity Platform for Students

DOME centralizes academic assignments, dashboards, and productivity tools into a single structured system.

It functions as an academic operating system rather than a simple task manager.

---

## 2. Problem Statement

Students manage:

- Assignments across LMS platforms
- Deadlines in calendars
- Notes in separate apps
- Focus tools elsewhere
- Daily routines independently

This fragmentation leads to:

- Missed deadlines
- Context switching fatigue
- Disorganization
- Cognitive overload

Students need one modular platform that structures their academic life.

---

## 3. Vision

To build a customizable academic control system that adapts to each student’s workflow.

DOME should feel structured, calm, and intentional.

---

## 4. Goals

Primary Goals:

- Centralize assignments
- Provide real-time dashboard overview
- Enable modular productivity tools
- Improve time management

Secondary Goals:

- Increase task completion rate
- Reduce app switching
- Improve academic clarity

---

## 5. Target Users

Primary:
University students

Secondary:
High school students and structured learners

---

## 6. Core Features

### 6.1 Assignment Manager

Features:

- Create, edit, delete assignments
- Set subject, due date, priority
- Status tracking (Not Started, In Progress, Submitted)
- Deadline countdown
- Filter by subject or due date
- Attach notes

---

### 6.2 Smart Dashboard

Widgets:

- Upcoming deadlines
- Priority tasks
- Weekly progress tracker
- Focus session summary
- Productivity metrics

Customizable layout:
- Drag and drop modules
- Reorder sections
- Enable/disable modules

---

### 6.3 Assignment Notes

- Rich text editor
- Markdown support
- Checklist support
- Autosave
- Linked to assignment_id
- Stored in Supabase

---

### 6.4 Focus Timer

- Pomodoro mode
- Custom session duration
- Session tracking
- Focus streak

---

### 6.5 Outfit Selector

- Save outfit combinations
- Tag by occasion
- Random selector
- Optional image uploads

Purpose:
Reduce decision fatigue.

---

## 7. Technical Stack

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

---

## 8. Functional Requirements

Authentication:
- JWT-based auth
- Secure middleware validation

Assignment API:
- GET /api/assignments
- POST /api/assignments
- PUT /api/assignments/:id
- DELETE /api/assignments/:id

Notes API:
- CRUD operations
- Linked to assignments

Dashboard:
- Real-time updates
- Modular architecture

---

## 9. Non-Functional Requirements

- Load time under 2 seconds
- Responsive design
- Secure data storage
- Scalable architecture
- Maintainable modular codebase

---

## 10. Database Structure

Core Tables:

Users
Subjects
Assignments
Notes
Modules
Outfits
FocusSessions

Assignments:
- user_id
- subject_id
- title
- description
- due_date
- priority
- status
- created_at

Notes:
- assignment_id
- content
- updated_at

---

## 11. Monetization Strategy

Free Tier:
- Core assignment management
- Basic dashboard
- Limited modules

Pro Tier:
- Advanced analytics
- Unlimited modules
- AI-powered suggestions
- Cloud backup

---

## 12. Success Metrics

- Daily Active Users
- Assignment completion rate
- Weekly retention
- Focus session frequency
- Average session duration

---

## 13. Future Roadmap

Phase 1:
Core assignments + dashboard + notes

Phase 2:
Focus timer + outfit selector

Phase 3:
AI productivity assistant

Phase 4:
Mobile application

---

## 14. Unique Value Proposition

DOME is not just a to-do list.

It is a modular academic system that integrates structure, routine, and productivity into one cohesive workspace.
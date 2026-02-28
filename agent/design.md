# DOME
# design.md
Skeuomorphic Design System

Version 1.0

---

## 1. Design Philosophy

DOME follows a modern skeuomorphic design language.

The interface should feel tactile, grounded, and intentional.

It should resemble:
- A premium desk workspace
- A leather academic planner
- A structured control panel

DOME is not flat.
It is layered, dimensional, and calm.

---

## 2. Core Principles

### 2.1 Tangibility

All major components must feel touchable.

Use:
- Soft outer shadows
- Subtle inner shadows
- Layered surfaces
- Realistic elevation

Avoid:
- Flat UI
- Hard shadows
- Decorative gradients

---

### 2.2 Elevation Hierarchy

Depth communicates importance.

Higher priority elements:
- Stronger elevation
- Slightly brighter surface
- Clear separation from background

Lower priority elements:
- Recessed look
- Softer shadow
- Reduced contrast

Light source direction: top-left  
Shadow direction: bottom-right  

---

### 2.3 Calm Premium Aesthetic

Color and material must feel:
- Study-friendly
- Warm
- Focused
- Professional

No neon tones.
No loud visual noise.

---

## 3. Color System

### Base Surfaces

Primary Background:
Warm Off White  
#F4F1EA

Card Surface:
Cream  
#ECE6DA

Elevated Surface:
Soft Ivory  
#F8F5EE

Dark Mode Background:
Charcoal Slate  
#1E1F22

Dark Mode Card:
Deep Slate  
#2A2B2F

---

### Accent Colors

Primary Accent:
Deep Indigo  
#3B4EFF

Success:
Muted Green  
#3F7D58

Warning:
Warm Amber  
#C58B2A

Danger:
Soft Red  
#B04A4A

---

## 4. Typography

Primary Font:
Inter

Optional Secondary (Headings Only):
DM Serif Display

Rules:
- Slight letter spacing for headings
- Medium weight for titles
- Regular weight for body
- Avoid heavy bold usage

Text Colors:
Primary: #2A2A2A
Secondary: #5C5C5C

Minimum body text: 14px

---

## 5. Spacing System

Base Unit:
8px

Common Spacing:
8px
16px
24px
32px

Section Padding:
Minimum 24px

Maintain consistent rhythm across layouts.

---

## 6. Border Radius Scale

Small:
8px

Medium:
14px

Large:
16px

No arbitrary radius values.

---

## 7. Shadow System

Primary Shadow:
0 10px 25px rgba(0, 0, 0, 0.12)

Soft Shadow:
0 6px 18px rgba(0, 0, 0, 0.08)

Inner Shadow:
inset 0 2px 4px rgba(0, 0, 0, 0.06)

Shadows must be soft and diffused.

---

## 8. Component Guidelines

### 8.1 Dashboard Panel

- Large radius (16px)
- Soft elevation
- Subtle gradient surface
- Clear hierarchy

Hover:
- Slight lift
- Shadow increase
- Subtle scale (1.01)

---

### 8.2 Assignment Card

- Cream surface
- Medium radius (14px)
- Left border indicator for priority
- Soft drop shadow

Completed state:
- Slight desaturation
- Lower elevation
- Muted green overlay

Dragging:
- Stronger shadow
- Slight tilt
- Elevated appearance

---

### 8.3 Notes Editor

Design inspiration:
Leather notebook

Container:
- Warm surface
- Inner shadow
- Generous padding

Editor:
- Clear typography
- Minimal toolbar
- No clutter

---

### 8.4 Buttons

Primary Button:
- Indigo-based gradient
- Subtle bevel
- Soft shadow

Pressed:
- Slight downward movement
- Inner shadow effect

Secondary Button:
- Raised cream surface
- Subtle border

No flat buttons allowed.

---

### 8.5 Focus Timer

Design inspiration:
Analog desk timer

- Circular dial
- Radial gradient
- Inner bevel
- Soft outer glow when active

Animation:
Smooth and calm
No aggressive transitions

---

### 8.6 Outfit Selector

Design inspiration:
Closet drawer

Outfit cards:
- Slight rotation randomness
- Soft shadow
- Polaroid-style framing

Random selector:
- Physical toggle aesthetic

---

## 9. Motion System

Animation Duration:

Micro interactions:
150ms

Card lift:
200ms

Module transitions:
300ms

Easing:
cubic-bezier(0.4, 0, 0.2, 1)

Motion must feel:
- Controlled
- Confident
- Physical

No excessive bounce.

---

## 10. Dark Mode Rules

Dark mode is not pure black.

Maintain:
- Surface differentiation
- Depth hierarchy
- Light-based glow shadows

Do not flatten components in dark mode.

---

## 11. Design Consistency Checklist

Before approving any UI:

- Is depth consistent?
- Is spacing aligned to 8px scale?
- Are colors within defined palette?
- Does it feel tactile?
- Is hierarchy clear?

If not, revise.
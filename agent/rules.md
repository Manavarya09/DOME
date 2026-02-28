# DOME
# rules.md
Product, Design, and Engineering Rules

Version 1.0

---

## 1. Brand Integrity Rules

### 1.1 No Emojis

Emojis are strictly prohibited in the product interface.

Not allowed in:
- Dashboard
- Assignment cards
- Buttons
- Notifications
- Error states
- Marketing pages

DOME is structured and premium. Emojis reduce clarity and maturity.

---

### 1.2 No Generic AI-Generated SVG Icons

Do not use:
- Random icon packs
- Default outline-only SVG libraries
- Inconsistent stroke-width icons
- Auto-generated icon sets without refinement

Icons must:
- Be consistent in weight and style
- Match the skeuomorphic design language
- Feel intentional and embedded in the UI

---

### 1.3 No Overused Purple/Blue Startup Gradients

Strictly avoid:
- Neon purple gradients
- Pink/blue startup blends
- High-saturation “AI product” backgrounds
- Decorative gradient overload

Gradients, if used, must:
- Be subtle
- Be material-inspired
- Support depth, not decoration

---

## 2. Visual Design Rules

### 2.1 No Flat Design

Flat UI is not allowed.

Every major component must include:
- Elevation
- Subtle shadow
- Surface hierarchy
- Clear light direction logic

---

### 2.2 No Harsh Shadows

Avoid:
- Sharp hard shadows
- Excessive blur
- Unrealistic drop shadows

Shadows must be:
- Soft
- Diffused
- Physically believable

---

### 2.3 No Neon or Over-Saturated Colors

Avoid:
- Neon green
- Electric purple
- Bright pink
- Highly saturated accent tones

DOME colors must feel:
- Calm
- Study-friendly
- Warm
- Premium

---

### 2.4 No Random Animations

Do not:
- Add flashy entrance animations
- Use bounce excessively
- Add motion without purpose

Motion must:
- Support hierarchy
- Feel physical
- Be subtle
- Improve clarity

---

## 3. UX Rules

### 3.1 No Clutter

If a screen feels crowded, simplify.

Every module must justify its presence.

White space is intentional.

---

### 3.2 No Over-Complex Flows

Users should not:
- Click more than 3 times to create an assignment
- Navigate multiple screens for simple actions
- Search for primary actions

Clarity over feature density.

---

### 3.3 No Unlabeled Critical Icons

Primary workflows must not rely on icons alone.

Important actions must have labels.

---

## 4. Engineering Rules

### 4.1 No Inline Styles

All styling must:
- Follow design tokens
- Use centralized configuration
- Be consistent with skeuomorphic system

---

### 4.2 No Hardcoded Colors

Do not place raw hex values inside components.

Use:
- Theme variables
- Tailwind configuration
- Design tokens

---

### 4.3 Border Radius Consistency

Use defined scale only:

- Small: 8px
- Medium: 14px
- Large: 16px

No arbitrary values.

---

### 4.4 No Mixed Design Systems

Do not mix:
- Flat UI libraries
- Material UI defaults
- Bootstrap styles
- Random component libraries

All components must follow DOME’s design language.

---

### 4.5 No Monolithic Code

Avoid:
- Massive single-file components
- All-logic-in-one-route backends
- Unstructured folder organization

Maintain modular architecture.

---

## 5. Product Discipline Rules

### 5.1 No Feature Creep

Before adding any feature, ask:

- Does this improve academic productivity?
- Does this reduce friction?
- Does this support modular clarity?

If not, it does not belong.

---

### 5.2 No Half-Finished Modules

A module must:
- Be fully functional
- Be visually polished
- Follow design system
- Pass usability validation

Incomplete modules are not shipped.

---

### 5.3 No Generic Startup Copy

Avoid:
- “Revolutionary”
- “Next generation”
- “Powered by AI”
- Buzzword-heavy marketing

Language must be:
- Clear
- Structured
- Calm
- Honest

---

## 6. Accessibility Rules

- Maintain proper contrast ratios
- Minimum 14px body text
- Visible focus states
- Keyboard navigation support
- Clear hover states

Premium design must remain accessible.

---

## 7. Performance Rules

- Initial load under 2 seconds
- Lazy load non-critical modules
- Avoid heavy libraries
- Prevent unnecessary re-renders
- Optimize API calls

Speed is part of product quality.

---

## 8. Security Rules

- Never expose secrets
- Use environment variables
- Validate all input
- Enforce authentication middleware
- Respect Supabase Row Level Security

Security is mandatory, not optional.

---

## 9. Final Quality Check

Before merging any feature, validate:

- Does this feel intentional?
- Does this feel premium?
- Does this align with skeuomorphic design?
- Does this improve academic clarity?
- Is it technically clean?

If any answer is no, revise before merging.
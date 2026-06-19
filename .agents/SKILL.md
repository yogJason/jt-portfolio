---
name: react-component
description: >
  Use when creating a new React component, UI section, page section, or
  reusable element. Triggers for requests like "add a component", "create
  a section", "build a card", "make a navbar", or any new .jsx file in src/.
---

# React Component Skill — jt-portfolio

## Stack
- React (functional components + hooks)
- Tailwind CSS for all styling
- No CSS modules, no inline styles unless absolutely necessary

## File location
All components go in `src/components/`. If it's a full page section, use `src/components/sections/`.

## Component template

```jsx
// src/components/ExampleCard.jsx

export default function ExampleCard({ title, description }) {
  return (
    <div className="rounded-2xl bg-white shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
```

## Rules to follow
- Always use default exports
- Props should be destructured in the function signature
- Use Tailwind utility classes only — no custom CSS unless Tailwind cannot do it
- Keep components focused — one responsibility per component
- If the component needs state, use useState/useEffect at the top of the function
- Add a hover/transition class when the component is interactive (buttons, cards, links)

## Naming conventions
- PascalCase for component files and function names: `ProjectCard.jsx`
- camelCase for props and variables
- Descriptive names — `HeroSection` not `Section1`

## Common Tailwind patterns used in this project
- Cards: `rounded-2xl bg-white shadow-md p-6`
- Section wrapper: `max-w-5xl mx-auto px-4 py-16`
- Headings: `text-3xl font-bold text-gray-900`
- Body text: `text-gray-600 leading-relaxed`
- Buttons: `bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors`

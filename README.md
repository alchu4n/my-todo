# my-todo

A minimal, elegant todo app built with React + TypeScript + Vite.

## Features

- Add tasks with **priority** (High / Mid / Low) and **category** (Work / Personal / Errands / Ideas)
- Filter tasks by All / Active / Done
- Progress bar showing completion rate
- Delete animation with smooth slide-out
- **ZH / EN language toggle** — preference persisted to localStorage
- Tasks persisted to localStorage across sessions
- Grain texture background with gold accent theme

## Tech Stack

- React 18 + TypeScript (strict mode)
- Vite 5
- CSS Modules

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
```

Output in `dist/`.

## Project Structure

```
src/
├── i18n.ts               # ZH/EN translation strings
├── types.ts              # Task, Priority, Category, FilterType
├── storage.ts            # localStorage helpers
├── utils.ts              # Date formatting, label maps
└── components/
    ├── Header/           # Title, date, pending count
    ├── ProgressBar/      # Completion percentage
    ├── FilterTabs/       # All / Active / Done filter
    ├── TaskInput/        # New task input with priority & category
    ├── CategoryMenu/     # Category picker dropdown
    ├── TaskList/         # Task list container
    ├── TaskItem/         # Individual task row
    ├── EmptyState/       # Empty list placeholder
    └── LanguageToggle/   # ZH · EN switcher (fixed top-right)
```

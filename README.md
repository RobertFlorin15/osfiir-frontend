# OSFIIR Frontend

Official web platform frontend for OSFIIR (Organizatia Studentilor din Facultatea de Inginerie Industriala si Robotica).

## Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Linter:** Oxlint

## Features & Pages

- **Home (`/`)** - Overview of the organization, departments, board members, and highlights.
- **About Us (`/despre-noi`)** - Mission, history, and structure of OSFIIR.
- **About Faculty (`/despre-facultate`)** - Information and resources regarding the faculty (FIIR).
- **Events (`/evenimente`)** - Flagship projects and upcoming student events.
- **Department Quiz (`/afla-departamentul`)** - Interactive quiz to help students find the best-fitting OSFIIR department.
- **Laundry Request (`/cerere-spalatorie`)** - Student dorm laundry booking and request form.
- **FAQ (`/faq`)** - Frequently asked questions for students.
- **Contact (`/contact`)** - Contact details and message form.

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm

### Installation

```bash
npm install
```

### Development

Start the local development server with hot module replacement:

```bash
npm run dev
```

### Production Build

Build the application for production into the `dist` directory:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run Oxlint to check for code quality issues:

```bash
npm run lint
```

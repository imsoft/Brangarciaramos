# Brandon Garcia Ramos - Portfolio

Personal portfolio website showcasing my digital ventures and projects.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Internationalization:** next-intl
- **Theming:** next-themes (dark/light mode)
- **UI Components:** Custom components with shadcn/ui principles
- **Animations:** Custom PixelCard component with canvas animations

## Features

- Internationalized content (i18n support)
- Dark/Light theme toggle
- Responsive design (mobile-first approach)
- Interactive pixel card animations
- Theme-aware logos that adapt to color scheme
- Projects showcase with custom styling

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

### Linting

```bash
# Run ESLint
pnpm lint
```

## Project Structure

```
├── src/
│   ├── app/
│   │   └── [locale]/          # Internationalized routes
│   ├── components/             # React components
│   │   ├── pixel-card.tsx     # Custom animated card component
│   │   ├── theme-aware-logo.tsx
│   │   └── ...
│   ├── data/                   # Data files (projects, etc.)
│   ├── interfaces/             # TypeScript interfaces
│   ├── i18n/                   # Internationalization config
│   └── lib/                    # Utility functions
├── public/
│   └── logos/                  # Project logos
└── messages/                   # Translation files
```

## Projects Showcased

- **imSoft** - Digital solutions
- **Holistia** - Holistic wellness platform
- **Cursumi** - Educational platform
- **Omnitria** - Business solutions

## License

Private project - All rights reserved

## Author

Brandon Garcia Ramos
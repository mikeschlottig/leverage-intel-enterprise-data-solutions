# Cloudflare Full-Stack React Starter

[cloudflarebutton]

A production-ready, type-safe full-stack application template powered by Cloudflare Workers (API backend) and Pages (React frontend). Built with modern tools including Vite, shadcn/ui, Tailwind CSS, Hono, TanStack Query, and React Router. Perfect for rapid development of scalable web apps.

## Features

- **Full-Stack Architecture**: React frontend with Hono-powered Cloudflare Workers API backend.
- **Modern UI**: shadcn/ui components, Tailwind CSS with custom design system, dark/light theme support.
- **Type-Safe**: End-to-end TypeScript with proper Cloudflare Workers types.
- **State Management**: TanStack Query for data fetching/caching, Zustand for client state.
- **Routing & Layouts**: React Router with error boundaries and optional responsive sidebar.
- **Developer Experience**: Hot reload, error reporting, client-side error logging to API.
- **Performance**: Optimized builds, code splitting, immersive animations.
- **Deployment-Ready**: One-command deploy to Cloudflare with Wrangler.
- **Responsive Design**: Mobile-first with Tailwind and custom utilities.

## Tech Stack

### Frontend
- **React 18** + **Vite** (fast bundling/HMR)
- **shadcn/ui** (accessible, customizable components)
- **Tailwind CSS** + **Tailwind Animate** (styling & animations)
- **TanStack Query** (data fetching)
- **React Router** (routing)
- **Zod** (validation)
- **Framer Motion** / **Lucide React** (animations/icons)
- **Sonner** (toasts)

### Backend
- **Hono** (fast web framework for Workers)
- **Cloudflare Workers** (edge runtime)
- **Cloudflare KV/Durable Objects** ready (extendable)

### Tools
- **TypeScript 5.8** (strict mode)
- **Bun** (fast package manager/scripts)
- **Wrangler** (Cloudflare CLI)
- **ESLint** + **TypeScript ESLint** (linting)

## Quick Start

### Prerequisites
- [Bun](https://bun.sh/) (recommended package manager)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/) (`bun install -g wrangler`)
- Cloudflare account (free tier sufficient)

### Installation
```bash
git clone <repository-url>
cd <project-directory>
bun install
```

### Development
Start the dev server (frontend + Workers proxy):
```bash
bun run dev
```
- Opens at `http://localhost:3000` (or `$PORT`)
- API routes available at `/api/*`
- Edit `src/pages/HomePage.tsx` for UI, `worker/userRoutes.ts` for backend routes.

### Build for Production
```bash
bun run build
```
Outputs to `dist/` for Cloudflare Pages deployment.

### Type Generation
```bash
bun run cf-typegen
```
Generates `worker/env.d.ts` from your Wrangler config.

## Usage

### Frontend Development
- Pages in `src/pages/`
- Components in `src/components/` (uses shadcn/ui primitives)
- Hooks in `src/hooks/`
- Layouts: Use `AppLayout` for sidebar (`src/components/layout/AppLayout.tsx`)
- Theme: Toggle with `ThemeToggle` (auto-saves to localStorage)
- Error Handling: Built-in boundaries and API reporting

**Example API Call** (from frontend):
```tsx
const { data } = useQuery({
  queryKey: ['test'],
  queryFn: () => fetch('/api/test').then(res => res.json())
})
```

### Backend Development
- Add routes in `worker/userRoutes.ts` (auto-loaded)
- **Do not edit** `worker/index.ts` or `worker/core-utils.ts`
- Env bindings: `ASSETS` (static assets), extend `Env` interface

**Example Route**:
```ts
// worker/userRoutes.ts
app.get('/api/users', (c) => c.json({ users: [] }));
```

### Customizing
- Tailwind: Edit `tailwind.config.js` / `src/index.css`
- shadcn/ui: `bunx shadcn-ui@latest add <component>`
- Remove demo: Edit `src/pages/HomePage.tsx`

## Deployment

Deploy to Cloudflare Pages + Workers with one command:

1. Login: `wrangler login`
2. Configure: Edit `wrangler.jsonc` (name, bindings)
3. Deploy:
   ```bash
   bun run deploy
   ```

Uses `assets` config for SPA routing + API proxying.

[cloudflarebutton]

**Deploy Button**: Click above to instantly deploy to your Cloudflare account!

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start dev server |
| `bun run build` | Build for production |
| `bun run lint` | Lint code |
| `bun run preview` | Preview production build |
| `bun run deploy` | Build + deploy |
| `bun run cf-typegen` | Generate Worker types |

## Project Structure

```
├── src/              # React app
│   ├── components/   # UI components (shadcn + custom)
│   ├── pages/        # Route pages
│   ├── hooks/        # Custom hooks
│   └── lib/          # Utilities
├── worker/           # Cloudflare Workers backend
│   ├── index.ts      # Core (DO NOT EDIT)
│   └── userRoutes.ts # Your API routes
├── tailwind.config.js # Styling
├── vite.config.ts    # Vite config
├── wrangler.jsonc    # Cloudflare config
└── package.json      # Dependencies
```

## Contributing

1. Fork & clone
2. `bun install`
3. Create feature branch
4. `bun run dev` for testing
5. Submit PR

## License

MIT License. See [LICENSE](LICENSE) for details.

## Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [shadcn/ui](https://ui.shadcn.com/)
- Issues: Open a GitHub issue

Built with ❤️ for Cloudflare developers.
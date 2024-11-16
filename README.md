## Decision Making

- Server-Side Rendering: Fetching data in server-rendered component (ProductCardsGrid.tsx) allowing caching and better performance. I assumed the product data doesn’t change often, so this was a practical choice.

- Client-Side Logic: Features like adding items to the basket or navigating to specific categories (handled in the navbar) are implemented in client-side components. React Context is used for state sharing, and localStorage ensures the basket remains persistent across page reloads.

- Styling: Tailwind CSS and DaisyUI made the UI quick to build and easy to manage. 



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

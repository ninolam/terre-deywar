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

## Code Quality

This project uses ESLint for code quality and consistency. The configuration includes:

- **Code Quality**: Prevents common mistakes like unused variables, console statements
- **Best Practices**: Enforces strict equality, proper error handling
- **Readability**: Consistent formatting with single quotes, semicolons, proper spacing
- **React/Next.js**: Optimized rules for React 17+ and Next.js
- **Accessibility**: JSX accessibility rules for better user experience

### Running ESLint

```bash
# Run linting
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

### GitHub Actions

The project includes automated CI/CD workflows:

- **CI/CD** (`.github/workflows/ci.yml`): Runs on push/PR to main/develop branches
- **Lint** (`.github/workflows/lint.yml`): Dedicated linting workflow with manual trigger option

Both workflows include:
- ESLint checking
- TypeScript type checking
- Build verification
- Node.js version matrix testing (18.x, 20.x)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

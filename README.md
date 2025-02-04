# Phoenix Flames Linkshell - Site

A comprehensive website for managing the Phoenix Flames Linkshell guild, built with the [T3 Stack](https://create.t3.gg/).

## Project Overview

This platform streamlines guild management and enhances member engagement by providing:

- Administrative tools for content and event management
- Interactive features for member participation
- Performance and contribution tracking
- Guild activity analytics

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Authentication:** [Clerk](https://clerk.com)
- **Database:** PostgreSQL with [Drizzle ORM](https://orm.drizzle.team)
- **API Layer:** [tRPC](https://trpc.io)
- **Styling:** [Tailwind CSS](https://tailwindcss.com) with [ShadCN UI](https://ui.shadcn.com/)
- **Data Visualization:** [Recharts](https://recharts.org/)

## Local Development Setup

1. **Clone the repository**

   ```bash
   git clone [your-repo-url]
   cd phoenix-flames-site
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment Setup**

   - Copy the `.env.example` file to `.env`

   ```bash
   cp .env.example .env
   ```

   - Update the environment variables in `.env` with your values
   - Sign up for a [Clerk account](https://clerk.com) and add your Clerk environment variables:
     - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
     - `CLERK_SECRET_KEY`

4. **Database Setup**

   - Ensure Docker is installed and running on your system
   - Start the PostgreSQL database using the provided script:

   ```bash
   pnpm db:start
   # or directly run the script
   ./start-database.sh
   ```

   - The script will create a Docker container with PostgreSQL and set up the required database
   - The database will be accessible at `postgresql://postgres:postgres@localhost:5432/phoenix-flames`
   - Run migrations to set up the database schema:

   ```bash
   pnpm db:push
   ```

5. **Set up Git Hooks**

   ```bash
   pnpm prepare
   ```

   This will install Husky and set up pre-commit hooks that:

   - Run ESLint on staged JS/TS files
   - Run Prettier on all staged files
   - Run type checking

6. **Start the development server**
   ```bash
   pnpm dev
   ```
   The site will be available at `http://localhost:3000`

## Testing

This project uses Jest and React Testing Library for testing. To run tests:

```bash
# Run tests once
pnpm test

# Run tests in watch mode (recommended during development)
pnpm test:watch

# Run tests with coverage report
pnpm test:coverage
```

Tests are automatically run as part of the pre-commit hook to ensure code quality.

## Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting any changes.

## Deployment

This project is automatically deployed using Vercel's CI/CD pipeline:

- **Staging Environment:**

  - URL: https://preview.phoenixflames.com
  - Automatically deploys when changes are merged to the `staging` branch
  - Use this environment for testing new features

- **Production Environment:**
  - URL: https://phoenixflames.com
  - Automatically deploys when changes are merged to the `master` branch
  - Only well-tested, approved changes should reach this environment

### Deployment Process

1. Create feature branches from `staging`
2. Submit Pull Requests to the `staging` branch
3. Once approved and merged, changes will deploy to the preview environment
4. After testing in preview, create a PR from `staging` to `master`
5. Merging to `master` will trigger production deployment

## Learn More

To understand the foundation of this project:

- [T3 Stack Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available)

## Support

If you need help or have questions, please reach out to the guild administrators or create an issue in the repository.

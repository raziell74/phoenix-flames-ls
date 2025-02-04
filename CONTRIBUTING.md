# Contributing to Phoenix Flames Linkshell Site

Thank you for your interest in contributing to our project! This document outlines the process for contributing code changes.

## Development Workflow

### 1. Setting Up Your Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone [your-fork-url]
   cd phoenix-flames-site
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Set up your environment variables following the README.md
5. Start the development database:
   ```bash
   pnpm db:start
   ```

### 2. Creating a New Feature

1. Always branch from `staging`:
   ```bash
   git checkout staging
   git pull origin staging
   git checkout -b feature/your-feature-name
   ```
2. Name your branch following our conventions:
   - `feature/` - for new features
   - `fix/` - for bug fixes
   - `refactor/` - for code refactoring
   - `docs/` - for documentation changes

### 3. Development Guidelines

- Follow the existing code style and formatting
- Write meaningful commit messages
- Keep commits atomic and focused
- Add tests for new features
- Update documentation as needed
- Use ShadcnUI components when possible
- Follow TypeScript best practices

#### Git Hooks

This project uses Husky to enforce code quality through pre-commit hooks. When you attempt to commit changes:

1. ESLint will run on staged JS/TS files
2. Prettier will format all staged files
3. TypeScript type checking will run

If any of these checks fail, your commit will be blocked. You can fix issues by:

- Running `pnpm lint:fix` for linting issues
- Running `pnpm format` for formatting issues
- Running `pnpm typecheck` to identify type errors

To bypass hooks in exceptional cases (not recommended), use:

```bash
git commit -m "message" --no-verify
```

### 4. Before Submitting a PR

1. Run all checks locally:

   ```bash
   pnpm check          # Type checking and linting
   pnpm format:check   # Code formatting
   ```

2. Fix any issues:

   ```bash
   pnpm lint:fix       # Fix linting issues
   pnpm format:write   # Fix formatting
   ```

3. Ensure your branch is up to date:
   ```bash
   git checkout staging
   git pull origin staging
   git checkout your-feature-branch
   git rebase staging
   ```

### 5. Pull Request Process

1. Create a Pull Request targeting the `staging` branch
2. Fill out the PR template completely
3. Link any related issues
4. Request reviews from team members
5. Address any feedback or comments

### 6. PR Requirements

- All checks must pass
- At least one approval is required
- No merge conflicts with `staging`
- All discussions must be resolved
- Commits should be squashed if requested

### 7. After PR Approval

1. Your changes will be merged into `staging`
2. The staging environment will automatically deploy
3. Test your changes in the staging environment
4. If issues are found, create a fix branch from `staging`

## Additional Notes

### Code Review Guidelines

- Be respectful and constructive
- Review code thoroughly
- Focus on:
  - Code quality
  - Performance
  - Security
  - Accessibility
  - Test coverage

### Testing

- Write tests for new features
- Ensure existing tests pass
- Test your changes in the staging environment
- Verify mobile responsiveness

### Documentation

- Update README.md if needed
- Document new features
- Update API documentation
- Add inline comments for complex logic

## Questions or Problems?

- Create an issue for bugs
- Discuss major changes in an issue first
- Reach out to the team for guidance

## License

By contributing, you agree that your contributions will be licensed under the project's license.

import ModeToggle from '@/components/ui/mode-toggle';

export default function CreationPage() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20pr] items-center justify-items-center gap-16 p-6 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 mt-6 flex w-full justify-center">
        <nav>
          <ModeToggle />
        </nav>
      </header>
      <main className="row-start-2 mx-auto flex max-w-[1080px] flex-col items-center gap-8 sm:items-start">
        <h1 className="h1 text-center">
          Building Your Starter App with Next.js 🛠️
        </h1>
        <p className="p mb-2 text-center">
          Follow these steps to create and set up your new Next.js starter app,
          complete with essential tools for a smooth development experience.
        </p>
        <section>
          <h2 className="h2 mb-6 text-center">Steps to Setup</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ title, command, description }, index) => (
              <div
                key={index}
                className="cursor-pointer overflow-hidden rounded-xl border border-border bg-card p-4 shadow-md transition-shadow duration-300 ease-in-out hover:bg-accent hover:shadow-lg"
              >
                <h4 className="h4 mb-2 line-clamp-2">{title}</h4>
                <code className="code mb-2">{command}</code>
                <p className="p">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full">
          <h2 className="h2 mb-6 text-center">Configuration Files</h2>

          <div className="flex flex-col gap-6">
            {configurations.map(({ title, code }, index) => (
              <div
                key={index}
                className="w-full min-w-[250px] flex-1 cursor-pointer overflow-hidden rounded-xl border border-border bg-card p-4 shadow-md transition-shadow duration-300 ease-in-out hover:bg-accent hover:shadow-lg"
              >
                <h4 className="h4 mb-2 line-clamp-2 text-lg font-semibold">
                  {title}
                </h4>
                <pre className="overflow-x-auto rounded-md">
                  <code className="code mb-2 whitespace-pre-wrap">{code}</code>
                </pre>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex w-full flex-wrap items-center justify-center p-4">
        <p className="p text-center">
          &copy; {new Date().getFullYear()} Berlin Bruno. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

// Data for setup steps
const steps = [
  {
    title: 'Step 1: Create a Next.js Application',
    command: 'npx create-next-app@latest',
    description:
      'This command initializes a new Next.js project in a directory of your choice, setting up the necessary files and dependencies.',
  },
  {
    title: 'Step 2: Install Prettier and ESLint',
    command: 'npm i -D prettier eslint-config-prettier eslint-plugin-prettier',
    description:
      'Install Prettier and ESLint along with the necessary configuration for integrating Prettier with ESLint.',
  },
  {
    title: 'Step 3: Install Tailwind CSS ESLint Plugin',
    command: 'npm install eslint-plugin-tailwindcss --save-dev',
    description: 'Ensure your Tailwind CSS classes are linted properly.',
  },
  {
    title: 'Step 4: Install Husky and Lint-Staged',
    command: 'npm i -D husky lint-staged',
    description:
      'Husky helps enforce Git hooks, and lint-staged ensures that only staged files are linted and formatted.',
  },
  {
    title: 'Step 5: Initialize Husky',
    command: 'npx husky-init',
    description:
      'This command creates a .husky directory with a pre-configured Git hook.',
  },
  {
    title: 'Step 6: Configure Pre-Commit Hook',
    command: "npx husky add .husky/pre-commit 'npx lint-staged'",
    description:
      'Add a pre-commit hook to run lint-staged, which will check your code before committing.',
  },
  {
    title: 'Step 7: Install Commitlint',
    command: 'npm install -D @commitlint/cli @commitlint/config-conventional',
    description:
      'To enforce commit message conventions, install Commitlint and its conventional config.',
  },
  {
    title: 'Step 8: Configure Commit Message Hook',
    command:
      'npx husky add .husky/commit-msg \'npx --no-install commitlint --edit "$1"\'',
    description:
      'Add a commit message hook to validate your commit messages using Commitlint.',
  },
  {
    title: 'Step 9: Install Prettier Plugin for Tailwind CSS',
    command: 'npm i -D prettier prettier-plugin-tailwindcss',
    description:
      "If you're using Tailwind CSS, install the Prettier plugin for Tailwind CSS.",
  },
  {
    title: 'Step 10: Install Commitizen',
    command: 'npm i -D commitizen',
    description: 'Commitizen helps create standardized commit messages.',
  },
  {
    title: 'Step 11: Install Conventional Changelog Adapter',
    command: 'npm i -D cz-conventional-changelog',
    description:
      'Finally, install the Conventional Changelog adapter for Commitizen.',
  },
  {
    title: 'Step 12: Install Next Theme',
    command: 'npm install next-themes',
    description:
      'Install Next Theme to enable easy light and dark theme toggling.',
  },
  {
    title: 'Step 13: Install Next PWA',
    command: 'npm install @ducanh2912/next-pwa',
    description: 'Install Next PWA for Progressive Web App support.',
  },
];

// Data for configuration files
const configurations = [
  {
    title: 'ESLint Configuration (.eslintrc.json)',
    code: `{
  "extends": ["eslint:recommended", "next",
   "next/core-web-vitals", "prettier"],
  "plugins": ["prettier", "tailwindcss"],
  "rules": {
    "prettier/prettier": "error",
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "off"
  }
}`,
  },
  {
    title: 'Husky Configuration (.husky/pre-commit)',
    code: `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged`,
  },
  {
    title: 'Husky Configuration (.husky/commit-msg)',
    code: `#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx --no-install commitlint --edit $1`,
  },
  {
    title: 'Commitlint Configuration (commitlint.config.js)',
    code: `module.exports = {
  extends: ["@commitlint/config-conventional"],
};`,
  },
  {
    title: 'Prettier Configuration (.prettierrc)',
    code: `{
  "plugins": ["prettier-plugin-tailwindcss"],
  "semi": true,
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "endOfLine": "lf",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true
}`,
  },
  {
    title: 'Next-Theme Configuration (theme-provider.tsx, layout.tsx)',
    code: `// theme-provider.tsx
'use client';

import { ThemeProvider as NextThemesProvider }
from 'next-themes';
import { type ThemeProviderProps } 
from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>
  {children}
  </NextThemesProvider>;
}

// layout.tsx
<body>
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    {children}
  </ThemeProvider>
</body>`,
  },
  {
    title: 'PWA Configuration (next.config.js)',
    code: `/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/',
  cacheOnFrontendNav: true,
  aggressiveFrontEndNavCaching: true,
  cacheStartUrl: true,
  reloadOnOnline: true,
  swcMinify: true,
  fallbacks: {
    document: '/offline',
  },
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);`,
  },
  {
    title: 'Package Configuration (package.json)',
    code: `{
    "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p 4000",
    "preview": "next build && next start -p 4000",
    "lint": "eslint src --ext ts,tsx,js,jsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint src --ext js,jsx,ts,tsx --fix",
    "format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,html}'",
    "commit": "git cz"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{ts,tsx,js,jsx}": [
      "npm run lint",
      "npm run format"
    ]
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  },
  "dependencies": {
    "@ducanh2912/next-pwa": "^10.2.9",
    "next": "14.2.15",
    "next-themes": "^0.3.0",
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "@commitlint/cli": "^19.5.0",
    "@commitlint/config-conventional": "^19.5.0",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "commitizen": "^4.3.1",
    "cz-conventional-changelog": "^3.3.0",
    "eslint": "^8",
    "eslint-config-next": "14.2.15",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.2.1",
    "eslint-plugin-tailwindcss": "^3.17.5",
    "husky": "^8.0.3",
    "lint-staged": "^15.2.10",
    "postcss": "^8",
    "prettier": "^3.3.3",
    "prettier-plugin-tailwindcss": "^0.6.8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  },
}`,
  },
  {
    title: 'Continuous Integration (.github/workflows/ci.yml)',
    code: `name: Continuous Integration

# Trigger CI on all kinds of branches and PRs
on:
  push:
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Fetch all history for all branches and tags

      - name: Cache node modules
        uses: actions/cache@v4

      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 'lts/*'

      - name: Install dependencies
        run: npm install

      - name: Run lint
        run: npm run lint

      - name: Run format check
        run: npm run format

      - name: Check commit messages
        uses: wagoid/commitlint-github-action@v6
`,
  },
];

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import CodeToClipboard from '@/components/ui/code-to-clipboard';
import ModeToggle from '@/components/ui/mode-toggle';

export default function Home() {
  return (
    <div className="mx-auto grid min-h-screen max-w-7xl grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-6">
      <header className="row-start-1 mt-6 flex w-full justify-center">
        <nav aria-label="Main navigation">
          <ModeToggle />
        </nav>
      </header>
      <main className="max-w-(1080px) row-start-2 mx-auto flex flex-col items-center gap-8 sm:items-start">
        <article className="w-full">
          <header className="mb-8 text-center sm:text-left">
            <h1>Next.js Starter Template ⚡</h1>
          </header>

          <section className="flex flex-col gap-8">
            <h2 className="sr-only">Getting Started</h2>
            <CodeToClipboard />
            <ol>
              <li>
                Get started by editing
                <code>src/app/page.tsx</code>.
              </li>
              <li>
                Rename the &apos;name&apos;, &apos;author&apos;, and
                &apos;description&apos; fields in package.json.
              </li>
              <li>
                Update the site metadata in &apos;constants/data.ts&apos; for
                your app.
              </li>
              <li>
                Use &apos;seo.ts - genPageMetadata&apos; function for page
                metadata.
              </li>
              <li>
                Create environment variables for dev (port: 3000) and prod
                (port: 4000) with <code>NEXT_PUBLIC_BASE_URL</code> for your
                app.
              </li>
              <li>
                Use shadcn/ui components by adding them with{' '}
                <code>npx shadcn@latest add</code>.
              </li>
              <li>Update the name in the LICENSE file.</li>
              <li>
                Clean up the &apos;README.md&apos; file to provide relevant
                information about your project.
              </li>
              <li>Explore the project.</li>
              <li>Save and see your changes instantly.</li>
            </ol>
          </section>

          <section className="flex w-full flex-1 flex-row flex-wrap items-center justify-center gap-4">
            <h2 className="sr-only">Deployment Options</h2>
            <a
              className="flex h-10 items-center justify-center gap-2 rounded-full border border-transparent bg-blue-600 px-4 text-center text-sm text-white transition-colors duration-300 hover:bg-blue-700 sm:h-12 sm:px-5 sm:text-base dark:bg-blue-800 dark:hover:bg-blue-900"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 Deploy now to Vercel
            </a>
            <a
              className="flex h-10 items-center justify-center gap-2 rounded-full border border-transparent bg-yellow-600 px-4 text-center text-sm text-white transition-colors duration-300 hover:bg-yellow-700 sm:h-12 sm:px-5 sm:text-base dark:bg-yellow-800 dark:hover:bg-yellow-900"
              href="/usage"
              target="_self"
              rel="noopener noreferrer"
            >
              📚 How to Use the Template
            </a>
            <a
              className="flex h-10 items-center justify-center gap-2 rounded-full border border-transparent bg-green-600 px-4 text-center text-sm text-white transition-colors duration-300 hover:bg-green-700 sm:h-12 sm:px-5 sm:text-base dark:bg-green-800 dark:hover:bg-green-900"
              href="https://app.netlify.com/start"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 Deploy now to Netlify
            </a>
          </section>

          <section className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
            <h2 className="sr-only">Technologies & Features</h2>
            {[
              {
                title: 'Next.js',
                description:
                  '⚛️ A powerful React framework for building server-rendered and statically generated applications.',
              },
              {
                title: 'TypeScript',
                description:
                  '📘 A superset of JavaScript that adds static typing to the language, enhancing code quality and developer experience.',
              },
              {
                title: 'ESLint',
                description:
                  '🔍 A linting utility for JavaScript and TypeScript, helping you find and fix problems in your code.',
              },
              {
                title: 'Prettier',
                description:
                  '🎨 An opinionated code formatter that enforces a consistent style across your codebase.',
              },
              {
                title: 'Tailwind CSS',
                description:
                  '💨 A utility-first CSS framework that provides low-level utility classes for rapid UI development.',
              },
              {
                title: 'Next Theme',
                description:
                  '🎛️ A theme management library for Next.js that enables easy toggling between light and dark themes.',
              },
              {
                title: 'shadcn/ui',
                description:
                  '🎨 Beautifully designed components built with Radix UI and Tailwind CSS that you can copy and paste into your apps.',
              },
              {
                title: 'Husky',
                description:
                  '🐶 A Git hooks manager that helps enforce quality checks before commits and pushes.',
              },
              {
                title: 'Continuous Integration',
                description:
                  '⚙️ An automated process that ensures code quality through linting, formatting, and commit message validation on all branches and PRs.',
              },
              {
                title: 'SEO',
                description:
                  '🔍 Search Engine Optimization techniques that improve the visibility of your web application in search results.',
              },
              {
                title: 'Commentlint',
                description:
                  '📝 A tool that helps enforce consistent formatting for comments in your codebase.',
              },
              {
                title: 'CitizenComment',
                description:
                  '💬 A commenting system designed for engaging users in discussions and feedback on your platform.',
              },
            ].map((card) => (
              <Card key={card.title}>
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardFooter>
                  <CardDescription>{card.description}</CardDescription>
                </CardFooter>
              </Card>
            ))}
          </section>
        </article>
      </main>

      <footer className="row-start-3 flex flex-wrap items-center justify-center p-4">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Berlin Bruno. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

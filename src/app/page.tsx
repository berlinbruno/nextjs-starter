import ModeToggle from '@/components/ui/mode-toggle';

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 bg-slate-200 p-8 pb-20 font-[family-name:var(--font-geist-sans)] dark:bg-black sm:p-20">
      <main className="row-start-2 mx-auto flex max-w-[1080px] flex-col items-center gap-8 sm:items-start">
        <h1 className="h1 text-center text-2xl font-bold sm:text-4xl">
          Next.js Starter Template
        </h1>
        <div className="overflow-hidden rounded-full border border-border">
          <code className="bg-slate-100 p-2 font-mono text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            npx @berlinbruno/nextjs-starter
          </code>
        </div>
        <ol className="list-inside list-decimal space-y-2 text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
          <li>
            Get started by editing{' '}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>
            Rename the &apos;name&apos;, &apos;author&apos;, and
            &apos;description&apos; fields in package.json.
          </li>
          <li>
            Update the site metadata in &apos;constants/data.ts&apos; for your
            app.
          </li>
          <li>
            Create environment variables for dev (port: 3000) and prod (port:
            4000) with <code>NEXT_PUBLIC_BASE_URL</code> for your app.
          </li>
          <li>Update the name in the LICENSE file.</li>
          <li>
            Clean up the &apos;README.md&apos; file to provide relevant
            information about your project.
          </li>
          <li>Explore the project.</li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            className="flex h-10 items-center justify-center gap-2 rounded-full border border-transparent bg-blue-600 px-4 text-sm text-white transition-colors duration-300 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900 sm:h-12 sm:px-5 sm:text-base"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy now to Vercel
          </a>
          <ModeToggle />
          <a
            className="flex h-10 items-center justify-center gap-2 rounded-full border border-transparent bg-green-600 px-4 text-sm text-white transition-colors duration-300 hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-900 sm:h-12 sm:px-5 sm:text-base"
            href="https://app.netlify.com/start"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy now to Netlify
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Next.js',
              description:
                'A powerful React framework for building server-rendered and statically generated applications.',
            },
            {
              title: 'TypeScript',
              description:
                'A superset of JavaScript that adds static typing to the language, enhancing code quality and developer experience.',
            },
            {
              title: 'ESLint',
              description:
                'A linting utility for JavaScript and TypeScript, helping you find and fix problems in your code.',
            },
            {
              title: 'Prettier',
              description:
                'An opinionated code formatter that enforces a consistent style across your codebase.',
            },
            {
              title: 'Tailwind CSS',
              description:
                'A utility-first CSS framework that provides low-level utility classes for rapid UI development.',
            },
            {
              title: 'Next Theme',
              description:
                'A theme management library for Next.js that enables easy toggling between light and dark themes.',
            },
            {
              title: 'PWA',
              description:
                'Progressive Web Apps enhance web applications with offline capabilities and native-like features.',
            },
            {
              title: 'Husky',
              description:
                'A Git hooks manager that helps enforce quality checks before commits and pushes.',
            },
            {
              title: 'Continuous Integration',
              description:
                'Automated process that ensures code quality through linting, formatting, and commit message validation on all branches and PRs.',
            },
            {
              title: 'SEO',
              description:
                'Search Engine Optimization techniques that improve the visibility of your web application in search results.',
            },
            {
              title: 'Commentlint',
              description:
                'A tool that helps enforce consistent formatting for comments in your codebase.',
            },
            {
              title: 'CitizenComment',
              description:
                'A commenting system designed for engaging users in discussions and feedback on your platform.',
            },
          ].map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center p-4">
        <p className="text-center text-sm"> &copy; Berlin Bruno</p>
      </footer>
    </div>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="cursor-pointer overflow-hidden rounded-xl border border-border bg-background p-4 shadow-md transition-shadow duration-300 ease-in-out hover:bg-gray-50 hover:shadow-lg dark:hover:bg-gray-800">
      <h2 className="h4 line-clamp-1 text-lg font-semibold">{title}</h2>
      <p className="p line-clamp-3 text-sm text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

import ModeToggle from '@/components/ui/mode-toggle';
import { Metadata } from 'next';
import { genPageMetadata } from '../seo';

export const metadata: Metadata = genPageMetadata({
  title: 'How to Use the Template',
  description: `This guide will help you understand how to effectively use the Next.js
          template for your project. Let&apos;s get started! 🎉`,
});

export default function UsagePage() {
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
            <h1>How to Use the Template 🚀</h1>
            <p className="mt-4">
              This guide will help you understand how to effectively use the
              Next.js template for your project. Let&apos;s get started! 🎉
            </p>
          </header>

          <section className="flex flex-col gap-8">
            <h2 className="sr-only">Setup Instructions</h2>

            <section>
              <h3>
                Modify <code>package.json</code> 📝
              </h3>
              <p>
                Update the following fields in your
                <code>package.json</code> file:
              </p>
              <ul>
                <li>
                  <strong>name</strong>: Your project name (e.g.,{' '}
                  <code>my-awesome-app</code>).
                </li>
                <li>
                  <strong>author</strong>: Your name or your organization&apos;s
                  name.
                </li>
                <li>
                  <strong>description</strong>: A brief overview of what your
                  project does.
                </li>
              </ul>
            </section>

            <section>
              <h3>
                Update <code>constants/data.ts</code> 📊
              </h3>
              <p>
                Change the data in <code>constants/data.ts</code> to match your
                application’s needs. Here’s what you should update:
              </p>
              <ul>
                <li>
                  <strong>APP_NAME</strong>: Set your project name.
                </li>
                <li>
                  <strong>AUTHORS</strong>: Include your name for credit.
                </li>
                <li>
                  <strong>KEYWORDS</strong>: List relevant keywords for better
                  discoverability.
                </li>
                <li>
                  <strong>THEME_COLOR</strong>: Define the main theme color of
                  your app (e.g., <code>#ff5733</code>).
                </li>
                <li>
                  <strong>ROUTES</strong>: Specify the main routes of your
                  application for navigation.
                </li>
                <li>
                  <strong>ROBOTS</strong>: Update robots.txt settings if
                  necessary to control indexing.
                </li>
              </ul>
            </section>

            <section>
              <h3>
                Use <code>genPageMetadata</code> 🗂️
              </h3>
              <p>
                Utilize the <code>genPageMetadata</code> function from{' '}
                <code>seo.ts</code> to generate page metadata. Ensure that your
                metadata aligns with your application. Pass parameters like
                title, description, image, and more.
              </p>
            </section>

            <section>
              <h3>Add shadcn/ui Components 🎨</h3>
              <p>
                Use the shadcn/ui CLI to add pre-built components to your
                project. Run <code>npx shadcn@latest add [component-name]</code>{' '}
                to add components like buttons, cards, dialogs, and more. All
                components are fully customizable and built with Radix UI and
                Tailwind CSS.
              </p>
            </section>

            <section>
              <h3>Replace Favicon and Images 🖼️</h3>
              <p>
                Replace the favicon, OpenGraph, and other images in the{' '}
                <code>public</code> folder to customize the appearance of your
                app.
              </p>
            </section>

            <section>
              <h3>Set Up Environment Variables 🌐</h3>
              <p>
                Create separate environment variables for development and
                production:
              </p>
              <ul>
                <li>
                  Development: Set{' '}
                  <code>NEXT_PUBLIC_BASE_URL=http://localhost:3000</code>
                </li>
                <li>
                  Production: Set{' '}
                  <code>NEXT_PUBLIC_BASE_URL=http://localhost:4000</code>
                </li>
              </ul>
            </section>

            <section>
              <h3>Delete Unnecessary Files 🗑️</h3>
              <p>
                Clean up your project by removing any files that are not needed.
                This helps to keep your project organized and maintainable.
              </p>
            </section>

            <section>
              <h3>
                Change Theme in <code>globals.css</code> 🎨
              </h3>
              <p>
                Adjust your theme settings by changing the CSS variables in{' '}
                <code>globals.css</code>. Tailor the theme to fit your brand
                identity.
              </p>
            </section>

            <section>
              <h3>Explore the Project 🔍</h3>
              <p>
                Now, explore your project, make changes, and see them instantly
                reflected! Enjoy building! 🌟
              </p>
            </section>
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

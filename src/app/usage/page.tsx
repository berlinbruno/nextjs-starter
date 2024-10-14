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
    <div className="grid min-h-screen grid-rows-[20px_1fr_20pr] items-center justify-items-center gap-16 p-6 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 mt-6 flex w-full justify-center">
        <nav>
          <ModeToggle />
        </nav>
      </header>
      <main className="row-start-2 mx-auto flex max-w-[1080px] flex-col items-center gap-8 sm:items-start">
        <h1 className="h1 text-center">How to Use the Template 🚀</h1>
        <p className="p text-center">
          This guide will help you understand how to effectively use the Next.js
          template for your project. Let&apos;s get started! 🎉
        </p>
        <section className="flex flex-wrap gap-6">
          <div>
            <h4 className="h4">
              1. Modify <code>package.json</code> 📝
            </h4>
            <p className="p">
              Update the following fields in your
              <code className="code">package.json</code> file:
            </p>
            <ul className="ul">
              <li>
                <strong>name</strong>: Your project name (e.g.,{' '}
                <code className="code">my-awesome-app</code>).
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
          </div>
          <div>
            <h4 className="h4">
              2. Update <code>constants/data.ts</code> 📊
            </h4>
            <p>
              Change the data in <code>constants/data.ts</code> to match your
              application’s needs. Here’s what you should update:
            </p>
            <ul className="ul">
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
                your app (e.g., <code className="code">#ff5733</code>).
              </li>
              <li>
                <strong>ROUTES</strong>: Specify the main routes of your
                application for navigation.
              </li>
              <li>
                <strong>ROBOTS</strong>: Update robots.txt settings if necessary
                to control indexing.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="h4">
              3. Use <code>genPageMetadata</code> 🗂️
            </h4>
            <p className="p">
              Utilize the <code className="code">genPageMetadata</code> function
              from <code>seo.ts</code> to generate page metadata. Ensure that
              your metadata aligns with your application. Pass parameters like
              title, description, image, and more.
            </p>
          </div>
          <div>
            <h4 className="h4">
              4. Edit <code>manifest.ts</code> 🛠️
            </h4>
            <p className="p">
              Change the shortcut, name, description, image, and other relevant
              details in your PWA manifest file.
            </p>
          </div>
          <div>
            <h4 className="h4">5. Replace Favicon and Images 🖼️</h4>
            <p className="p">
              Replace the favicon, OpenGraph, and other images in the{' '}
              <code className="code">public</code> folder to customize the
              appearance of your app.
            </p>
          </div>
          <div>
            <h4 className="h4">6. Set Up Environment Variables 🌐</h4>
            <p className="p">
              Create separate environment variables for development and
              production:
            </p>
            <ul className="ul">
              <li>
                Development: Set{' '}
                <pre className="overflow-x-auto">
                  <code className="code whitespace-pre-wrap">
                    NEXT_PUBLIC_BASE_URL= http://localhost:3000
                  </code>
                </pre>
              </li>
              <li>
                Production: Set{' '}
                <pre className="overflow-x-auto">
                  <code className="code whitespace-pre-wrap">
                    NEXT_PUBLIC_BASE_URL= http://localhost:4000
                  </code>
                </pre>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="h4">
              7. Change PWA Config in{' '}
              <code className="code">next.config.js</code> 🔧
            </h4>
            <p className="p">
              Update the theme by modifying the CSS variables in your PWA
              configuration. This will help to ensure a cohesive look and feel.
            </p>
          </div>
          <div>
            <h4 className="h4">8. Delete Unnecessary Files 🗑️</h4>
            <p className="p">
              Clean up your project by removing any files that are not needed.
              This helps to keep your project organized and maintainable.
            </p>
          </div>
          <div>
            <h4 className="h4">
              9. Change Theme in <code className="code">globals.css</code> 🎨
            </h4>
            <p className="p">
              Adjust your theme settings by changing the CSS variables in{' '}
              <code className="code">globals.css</code>. Tailor the theme to fit
              your brand identity.
            </p>
          </div>
          <div>
            <h4 className="h4">10. Explore the Project 🔍</h4>
            <p className="p">
              Now, explore your project, make changes, and see them instantly
              reflected! Enjoy building! 🌟
            </p>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center p-4">
        <p className="p text-center">
          &copy; {new Date().getFullYear()} Berlin Bruno. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

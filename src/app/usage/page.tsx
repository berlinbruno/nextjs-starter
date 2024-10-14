import ModeToggle from '@/components/ui/mode-toggle';

export default function UsagePage() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20pr] items-center justify-items-center gap-16 bg-slate-200 p-8 font-[family-name:var(--font-geist-sans)] dark:bg-black sm:p-20">
      <header className="row-start-1 flex w-full justify-center">
        <nav>
          <ModeToggle />
        </nav>
      </header>
      <main className="row-start-2 mx-auto flex max-w-[1080px] flex-col items-center gap-8 sm:items-start">
        <h1 className="h1 text-center text-2xl font-bold sm:text-4xl">
          How to Use the Template 🚀
        </h1>
        <p className="p mb-2 text-center">
          This guide will help you understand how to effectively use the Next.js
          template for your project. Let&apos;s get started! 🎉
        </p>

        <h2 className="mb-4 mt-6 text-2xl font-semibold">
          1. Modify <code>package.json</code> 📝
        </h2>
        <p>
          Update the following fields in your <code>package.json</code> file:
        </p>
        <ul className="mb-4 ml-6 list-disc">
          <li>
            <strong>name</strong>: Your project name (e.g.,{' '}
            <code>my-awesome-app</code>).
          </li>
          <li>
            <strong>author</strong>: Your name or your organization&apos;s name.
          </li>
          <li>
            <strong>description</strong>: A brief overview of what your project
            does.
          </li>
        </ul>

        <h2 className="mb-4 mt-6 text-2xl font-semibold">
          2. Update <code>constants/data.ts</code> 📊
        </h2>
        <p>
          Change the data in <code>constants/data.ts</code> to match your
          application’s needs. Here’s what you should update:
        </p>
        <ul className="mb-4 ml-6 list-disc">
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
            <strong>THEME_COLOR</strong>: Define the main theme color of your
            app (e.g., <code>#ff5733</code>).
          </li>
          <li>
            <strong>ROUTES</strong>: Specify the main routes of your application
            for navigation.
          </li>
          <li>
            <strong>ROBOTS</strong>: Update robots.txt settings if necessary to
            control indexing.
          </li>
        </ul>

        <h2 className="mb-4 mt-6 text-2xl font-semibold">
          3. Use <code>genPageMetadata</code> 🗂️
        </h2>
        <p>
          Utilize the <code>genPageMetadata</code> function from{' '}
          <code>seo.ts</code> to generate page metadata. Ensure that your
          metadata aligns with your application. Pass parameters like title,
          description, image, and more.
        </p>

        <h2 className="mb-4 mt-6 text-2xl font-semibold">
          4. Edit <code>manifest.ts</code> 🛠️
        </h2>
        <p>
          Change the shortcut, name, description, image, and other relevant
          details in your PWA manifest file.
        </p>

        <h2 className="mb-4 mt-6 text-2xl font-semibold">
          5. Replace Favicon and Images 🖼️
        </h2>
        <p>
          Replace the favicon, OpenGraph, and other images in the{' '}
          <code>public</code> folder to customize the appearance of your app.
        </p>

        <h2 className="mb-4 mt-6 text-2xl font-semibold">
          6. Set Up Environment Variables 🌐
        </h2>
        <p>
          Create separate environment variables for development and production:
        </p>
        <ul className="mb-4 ml-6 list-disc">
          <li>
            Development: Set{' '}
            <code>NEXT_PUBLIC_BASE_URL=http://localhost:3000</code>
          </li>
          <li>
            Production: Set{' '}
            <code>NEXT_PUBLIC_BASE_URL=http://localhost:4000</code>
          </li>
        </ul>

        <h2 className="mb-4 mt-6 text-2xl font-semibold">
          7. Change PWA Config in <code>next.config.js</code> 🔧
        </h2>
        <p>
          Update the theme by modifying the CSS variables in your PWA
          configuration. This will help to ensure a cohesive look and feel.
        </p>

        <h2 className="mb-4 mt-6 text-2xl font-semibold">
          8. Delete Unnecessary Files 🗑️
        </h2>
        <p>
          Clean up your project by removing any files that are not needed. This
          helps to keep your project organized and maintainable.
        </p>

        <h2 className="mb-4 mt-6 text-2xl font-semibold">
          9. Change Theme in <code>globals.css</code> 🎨
        </h2>
        <p>
          Adjust your theme settings by changing the CSS variables in{' '}
          <code>globals.css</code>. Tailor the theme to fit your brand identity.
        </p>

        <h2 className="mb-4 mt-6 text-2xl font-semibold">
          10. Explore the Project 🔍
        </h2>
        <p>
          Now, explore your project, make changes, and see them instantly
          reflected! Enjoy building! 🌟
        </p>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center p-4">
        <p className="p text-center">
          &copy; {new Date().getFullYear()} Berlin Bruno. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

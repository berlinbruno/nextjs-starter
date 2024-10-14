'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering theme-dependent content
  useEffect(() => {
    setMounted(true);
  }, []);

  function modeChange() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  if (!mounted) return null;

  return (
    <div className="flex h-10 items-center justify-center">
      <button
        onClick={modeChange}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        className="flex h-full items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-sm text-background transition-colors duration-300 hover:bg-muted hover:text-primary dark:bg-gray-800 dark:text-primary dark:hover:bg-gray-700"
      >
        <p>Toggle Theme</p>
        {theme === 'light' ? (
          <span role="img" aria-label="moon icon">
            🌙
          </span>
        ) : (
          <span role="img" aria-label="sun icon">
            ☀️
          </span>
        )}
      </button>
    </div>
  );
}

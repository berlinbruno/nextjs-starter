'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before rendering theme-dependent content
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
        className="bg-foreground text-background hover:bg-muted hover:text-primary dark:text-primary flex h-full items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm transition-colors duration-300 dark:bg-gray-800 dark:hover:bg-gray-700"
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

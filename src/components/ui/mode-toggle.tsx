'use client';
import { useTheme } from 'next-themes';
export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  function modeChange() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return (
    <div className="dark:border-white/[.145]·dark:hover:bg-[#1a1a1a]·sm:h-12·sm:min-w-44·sm:px-5·sm:text-base flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2]">
      <button onClick={modeChange}>
        <p>Toggle Mode</p>
      </button>
    </div>
  );
}

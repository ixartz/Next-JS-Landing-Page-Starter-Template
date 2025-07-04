// components/theme/DarkModeToggle.tsx
import { Moon, Sun } from 'lucide-react'; // professional feather icons
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle dark mode"
      className="rounded-full border border-gray-300 bg-gray-100 p-2 
                 text-gray-800 transition-all 
                 duration-300 hover:scale-105 
                 hover:shadow-md dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

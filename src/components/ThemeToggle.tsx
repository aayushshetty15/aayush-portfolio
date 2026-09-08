import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';


export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={toggleTheme}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        className="group relative flex h-10 w-10 items-center justify-center rounded-full glass border-themed overflow-hidden"
        style={{
          boxShadow: hovered
            ? '0 0 20px rgba(229,9,20,0.35), inset 0 0 0 1px rgba(229,9,20,0.3)'
            : '0 0 0 1px var(--border)',
        }}
      >
        <div className="relative h-5 w-5">
          <Sun
            className="absolute inset-0 h-5 w-5 transition-all duration-500 ease-in-out"
            style={{
              color: 'var(--accent)',
              transform: isDark ? 'rotate(0deg) scale(0)' : 'rotate(0deg) scale(1)',
              opacity: isDark ? 0 : 1,
            }}
          />
          <Moon
            className="absolute inset-0 h-5 w-5 transition-all duration-500 ease-in-out"
            style={{
              color: 'var(--accent)',
              transform: isDark ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(0)',
              opacity: isDark ? 1 : 0,
            }}
          />
        </div>
      </button>

      {/* Tooltip */}
      <div
        className="pointer-events-none absolute right-0 top-full mt-2 whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium glass border-themed transition-all duration-200"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(-4px)',
        }}
      >
        {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/data/portfolio';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useScrollY } from '@/hooks/useParallax';
import { useIsMobile } from '@/hooks/useMediaQuery';
import ThemeToggle from './ThemeToggle';

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);

export default function Navbar() {
  const scrollY = useScrollY();
  const scrolled = scrollY > 30;
  const activeSection = useScrollSpy(SECTION_IDS, 120);
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'var(--navbar-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.15)' : 'none',
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group flex items-center gap-2"
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg font-bold text-white transition-transform duration-300 group-hover:scale-110"
              style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-bright))' }}
            >
              A
            </div>
            <span className="text-lg font-bold tracking-tight text-primary">
              Aayush<span className="text-accent">.</span>
            </span>
          </button>

          {/* Desktop Nav */}
          {!isMobile && (
            <div className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const active = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="group relative px-3 py-2 text-sm font-medium transition-colors duration-200"
                    style={{ color: active ? 'var(--accent)' : 'var(--text-secondary)' }}
                  >
                    {item.label}
                    <span
                      className="absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--accent)',
                        width: active ? '20px' : '0px',
                        opacity: active ? 1 : 0,
                      }}
                    />
                  </button>
                );
              })}
              <div className="ml-3">
                <ThemeToggle />
              </div>
            </div>
          )}

          {/* Mobile controls */}
          {isMobile && (
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="flex h-10 w-10 items-center justify-center rounded-full glass border-themed"
              >
                {menuOpen ? <X className="h-5 w-5 text-primary" /> : <Menu className="h-5 w-5 text-primary" />}
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2"
          style={{ backgroundColor: 'var(--bg-primary)' }}
        >
          {NAV_ITEMS.map((item, i) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-2xl font-bold transition-all duration-300"
                style={{
                  color: active ? 'var(--accent)' : 'var(--text-primary)',
                  opacity: menuOpen ? 1 : 0,
                  transform: `translateY(${menuOpen ? 0 : 20}px)`,
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      )}
    </>
  );
}

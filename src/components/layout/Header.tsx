import { Link, useLocation } from 'react-router';
import { useState } from 'react';

const navLinks = [
  { path: '/', label: 'الرئيسية' },
  { path: '/courses', label: 'الدورات' },
  { path: '/learning-paths', label: 'الخطط التعليمية' },
  { path: '/about', label: 'المدرب' },
  { path: '/contact', label: 'تواصل' },
];

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cyber-surface/90 backdrop-blur-xl border-b border-neon/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <i className="fas fa-crown text-neon text-2xl"></i>
            <span className="text-xl sm:text-2xl font-black gradient-text">
              MASRY STORE
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`font-semibold text-sm lg:text-base py-1 border-b-2 transition-all duration-300 hover:text-neon hover:border-neon hover:drop-shadow-[0_0_4px_rgba(0,255,0,0.5)] ${
                    location.pathname === link.path
                      ? 'border-neon text-neon drop-shadow-[0_0_4px_rgba(0,255,0,0.5)]'
                      : 'border-transparent text-foreground/80'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-neon p-2"
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-neon/20">
            <ul className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-semibold py-2 px-4 rounded-lg transition-all ${
                      location.pathname === link.path
                        ? 'bg-neon/10 text-neon border-r-2 border-neon'
                        : 'text-foreground/80 hover:bg-neon/5 hover:text-neon'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

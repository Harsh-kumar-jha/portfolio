'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CircleUser, Briefcase, FolderGit2, Newspaper, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/about', label: 'About', icon: CircleUser },
  { href: '/exprience', label: 'Experience', icon: Briefcase },
  { href: '/projects', label: 'Projects', icon: FolderGit2 },
  { href: '/articles', label: 'Articles', icon: Newspaper },
  { href: '/contact', label: 'Contact', icon: Mail },
];

// Add custom keyframes for blinking
const blinkAnimation = {
  animation: 'blink 2s infinite',
  '@keyframes blink': {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.4 },
  },
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className="fixed left-0 top-0 h-full w-20 z-30 flex flex-col items-center py-8 px-2 gap-4 border-r border-white/10 shadow-xl backdrop-blur-md transition-colors duration-300"
      style={{ WebkitBackdropFilter: 'blur(16px)' }}
    >
      {/* Neon Glow Logo at the top with blink animation */}
      <div className="mb-8 flex items-center justify-center w-12 h-12 rounded-full bg-transparent group/logo">
        <Image
          src="/images/hj-logo.png"
          alt="HJ Logo"
          width={48}
          height={48}
          className="object-contain drop-shadow-[0_0_16px_rgba(0,212,255,0.9)] transition-all duration-300 group-hover/logo:drop-shadow-[0_0_32px_rgba(0,212,255,1)] animate-blink"
          priority
        />
      </div>
      <div className="flex flex-col gap-4 w-full items-center mt-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-200
                ${isActive ? 'bg-purple-100/80 text-purple-600 shadow-md' : 'hover:bg-white/20 text-white'}
              `}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon
                size={26}
                className={`transition-colors duration-200 ${isActive ? 'text-purple-600' : 'group-hover:text-purple-400 text-white'}`}
                aria-hidden="true"
              />
              {/* Tooltip */}
              <span className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 rounded bg-black/80 text-xs text-white opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-200">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
      {/* Theme toggle at the bottom */}
      <div className="mt-auto mb-4">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

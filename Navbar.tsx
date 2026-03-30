'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRole } from './providers/RoleProvider';
import { useTheme } from './providers/ThemeProvider';
import { getRoleLabel } from '@/lib/auth';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const { role, setRole } = useRole();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  if (!role) {
    return null;
  }

  const isDashboardView = pathname.startsWith('/dashboard');
  const isBlockView = pathname.startsWith('/block');

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-gradient-to-r from-primary to-accent shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-white shadow-md" />
          <h1 className="text-lg font-bold text-white">Shiksha Shakti</h1>
        </div>
        
        <div className="flex items-center gap-4">
          {/* View Toggle */}
          {(isDashboardView || isBlockView) && (
            <div className="hidden sm:flex items-center gap-2 bg-white/10 rounded-lg p-1 border border-white/20 backdrop-blur-sm">
              <Link href="/dashboard">
                <Button
                  size="sm"
                  className={isDashboardView ? "bg-white text-primary hover:bg-white/90 font-semibold" : "bg-transparent text-white hover:bg-white/20 font-semibold"}
                >
                  Dashboard
                </Button>
              </Link>
              <Link href="/block">
                <Button
                  size="sm"
                  className={isBlockView ? "bg-white text-primary hover:bg-white/90 font-semibold" : "bg-transparent text-white hover:bg-white/20 font-semibold"}
                >
                  Block View
                </Button>
              </Link>
            </div>
          )}

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-sm text-white/90 font-semibold">Role:</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-bold border border-white/40">
              {getRoleLabel(role)}
            </span>
          </div>

          <Button
            onClick={toggleTheme}
            size="sm"
            className="bg-white text-primary hover:bg-white/90 font-semibold"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? 'Dark' : 'Light'}
          </Button>
          
          <Button
            onClick={() => setRole(null)}
            size="sm"
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-semibold"
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}

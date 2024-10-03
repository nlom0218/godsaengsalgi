'use client';

import Link from 'next/link';
import * as React from 'react';
import { HeaderCommand } from './header-command/header-command';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { CATEGORY_STRUCTURE } from '@/constants/category';

export function Header() {
  const pathname = usePathname();
  const firstSegment = pathname.split('/')[1];

  return (
    <div className="flex h-16 items-center px-4 border-b">
      <div className="w-full flex justify-between items-center">
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link
            href="/"
            className={cn(
              'font-medium transition-colors hover:text-primary',
              firstSegment === '' ? '' : 'text-muted-foreground'
            )}
          >
            대시보드
          </Link>
          {Object.entries(CATEGORY_STRUCTURE).map(
            ([largeCategory, { href, name }]) => (
              <Link
                key={largeCategory}
                href={href}
                className={cn(
                  'font-medium transition-colors hover:text-primary',
                  firstSegment === href.substring(1)
                    ? ''
                    : 'text-muted-foreground'
                )}
              >
                {name}
              </Link>
            )
          )}
        </nav>
        <HeaderCommand />
      </div>
    </div>
  );
}

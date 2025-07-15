'use client';

import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import { Link } from '@/i18n/navigation';

export default function NavigationLink({
  href,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  console.log("href", href, "pathname", pathname, isActive);

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'inline-block px-2 py-3 transition-colors',
        isActive ? 'text-muted' : 'text-foreground hover:text-primary'
      )}
      href={href}
      {...rest}
    />
  );
}
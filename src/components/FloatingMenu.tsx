import { useState } from 'react';
import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';

export default function FloatingMenu() {
  const [active, setActive] = useState('#hero');
  return (
    <div
      className='fixed right-10 top-1/2 -translate-y-1/2
    bg-black border border-neutral-600 pt-4 rounded-full
    z-10 hidden lg:block'
    >
      {navLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={`/${link.link}`}
            onClick={() => setActive(link.link)}
            className={cn(
              'flex items-center justify-center p-3 hover:text-white  transition-colors',
              active === link.link ? 'text-white' : 'text-neutral-400',
            )}
          >
            <Icon className='size-5' />
          </a>
        );
      })}
    </div>
  );
}

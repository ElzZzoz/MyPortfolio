import { useState } from 'react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

import { MenuIcon } from 'lucide-react';

import { navLinks, socialLinks } from '@/constants';

import { cn } from '@/lib/utils';

export default function Sidebar() {
  const [active, setActive] = useState('#hero');
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='m-4 fixed top-4 right-4 z-50 border-2 hover:border-primary bg-neutral-800 py-5 px-5 rounded-full hover:text-primary cursor-pointer'
          >
            <MenuIcon size={30} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='right'
          className='w-84 bg-neutral-900 text-white py-6 pl-10'
        >
          <SheetTitle className='text-lg font-semibold'>Menu</SheetTitle>
          <nav className='flex flex-col gap-4'>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={`/${link.link}`}
                  className={cn(
                    'text-neutral-300 flex items-center gap-2 hover:text-primary transition-colors duration-300 text-base',
                    active === link.link && 'text-primary',
                  )}
                  onClick={() => setActive(link.link)}
                >
                  <Icon className='size-5' />
                  {link.label}
                </a>
              );
            })}
          </nav>
          <h3 className='mt-30 text-sm text-neutral-500 uppercase tracking-wider'>
            Socials
          </h3>
          <nav className='flex flex-row gap-4 '>
            {socialLinks.map((social, i) => {
              const Icon = social.icon;

              // Check if the link starts with 'mailto:'
              const isMailtoLink = social.link
                .toLowerCase()
                .startsWith('mailto:');

              // Conditional attributes for external web links (not mailto)
              const targetProps = isMailtoLink
                ? {}
                : { target: '_blank', rel: 'noopener noreferrer' };

              return (
                <a
                  key={i}
                  href={social.link}
                  // Spread the targetProps object. For mailto links, this is empty.
                  {...targetProps}
                  className='hover:text-primary border-2 border-neutral-500 p-2 rounded-full hover:border-primary transition duration-200'
                >
                  <Icon className='size-6' />
                </a>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}

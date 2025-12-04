import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/constants';

export default function Profile() {
  const [showModal, setShowModal] = useState(false);

  const email = 'hazemsoltan274@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <>
      <aside className='max-w-3xl border m-4 sm:m-6 border-neutral-600 bg-neutral-900 text-white p-4 sm:p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96'>
        <div className='flex flex-col gap-3 sm:gap-4'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-x-4 sm:gap-x-10'>
            <h1 className='text-2xl sm:text-3xl font-bold'>Hazem</h1>
            <p className='text-xs sm:text-sm mt-1 sm:mt-0'>
              Front-End React Developer
            </p>
          </div>

          <img
            src='/avatar.png'
            alt='Hazem'
            className='w-full h-60 sm:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover'
          />

          <div className='mt-4 sm:mt-6'>
            <p className='text-xs sm:text-sm text-neutral-300'>
              Specialization:
            </p>
            <p className='text-sm sm:text-lg capitalize'>
              Front-End React Developer
            </p>
          </div>

          <div className='flex gap-2 sm:gap-3 pt-2 text-neutral-500'>
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              const isMail = social.link.toLowerCase().startsWith('mailto:');

              const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                if (isMail) {
                  e.preventDefault();
                  setShowModal(true);
                }
              };

              const targetProps = isMail
                ? {}
                : { target: '_blank', rel: 'noopener noreferrer' };

              return (
                <a
                  key={i}
                  href={social.link}
                  {...targetProps}
                  onClick={handleClick}
                  className='hover:text-primary border-2 border-neutral-500 p-1 rounded-full hover:border-primary transition duration-200'
                >
                  <Icon className='size-5 sm:size-6' />
                </a>
              );
            })}
          </div>

          <Button
            size='lg'
            className='mt-2'
            onClick={() => {
              document.querySelector('#contact')?.scrollIntoView({
                behavior: 'smooth',
              });
            }}
          >
            Let's Work!
          </Button>
        </div>
      </aside>

      {showModal && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center z-50'>
          <div className='bg-neutral-900 p-4 sm:p-6 rounded-xl border border-neutral-600 w-72 sm:w-80 text-white'>
            <h2 className='text-lg sm:text-xl font-bold mb-2'>My Email</h2>
            <p className='text-neutral-300 mb-4 text-sm sm:text-base'>
              {email}
            </p>
            <div className='flex gap-2 sm:gap-3'>
              <Button
                onClick={handleCopy}
                size='sm'
              >
                Copy
              </Button>
              <Button
                variant='secondary'
                onClick={() => setShowModal(false)}
                size='sm'
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

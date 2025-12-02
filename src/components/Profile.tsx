import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/constants';

export default function Profile() {
  const [showModal, setShowModal] = useState(false);

  const email = 'hazemsoltan274@gmail.com'; // <-- put your real email

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
  };

  return (
    <>
      <aside className='max-w-3xl border m-6 border-neutral-600 bg-neutral-900 text-white p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center justify-between gap-x-10'>
            <h1 className='text-3xl font-bold'>Hazem</h1>
            <p className='text-sm'>Front-End React Developer</p>
          </div>
          <img
            src='/avatar.png'
            alt='Hazem'
            className='w-full h-80 lg:w-96 lg:h-96 rounded-2xl object-cover'
          />
          <div className='mt-6'>
            <p className='text-sm text-neutral-300'>Specialization:</p>
            <p className='text-lg capitalize'>Front-End React Developer</p>
          </div>

          <div className='flex gap-3 pt-2 text-neutral-500'>
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
                  <Icon className='size-6' />
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
          <div className='bg-neutral-900 p-6 rounded-xl border border-neutral-600 w-80 text-white'>
            <h2 className='text-xl font-bold mb-2'>My Email</h2>
            <p className='text-neutral-300 mb-4'>{email}</p>
            <div className='flex gap-3'>
              <Button onClick={handleCopy}>Copy</Button>
              <Button
                variant='secondary'
                onClick={() => setShowModal(false)}
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

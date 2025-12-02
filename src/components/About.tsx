import { useState } from 'react';
import { motion } from 'motion/react';

import { fadeUp, staggerContainer } from '@/lib/animations';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/constants';

export default function About() {
  const [showModal, setShowModal] = useState(false);
  const email = 'hazemsoltan274@gmail.com'; // put your actual email
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <motion.section
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0)}
        className='mt-30 scroll-mt-10'
        id='about'
      >
        <SectionHeader
          subtitle='About'
          title='Transforming complexity into effortless design'
        />

        <motion.p
          variants={fadeUp}
          className='mt-4 text-neutral-300'
        >
          I'm a designer and front-end developer passionate about transforming
          complex problems into clear, intuitive digital experiences. I believe
          great design isn’t just about how something looks — it's about how it
          works. My approach blends creativity with strategy, ensuring every
          interface not only looks good but also feels effortless to use.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className='mt-2 text-neutral-300'
        >
          Over the past few years, I've worked across web, brand, and product
          design—bringing ideas to life through modern tools like Figma, React,
          Next.js, and Tailwind CSS. Whether it's building a design system,
          crafting a responsive website, or refining the smallest detail in a
          button animation, I'm always driven by one goal: creating meaningful,
          human-centered design that makes technology feel simple.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <Button
            className='mt-5'
            onClick={() => setShowModal(true)}
          >
            Contact Me
          </Button>
        </motion.div>
      </motion.section>

      {/* Contact Modal */}
      {showModal && (
        <div className='fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4'>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className='bg-neutral-900 p-6 rounded-xl border border-neutral-700 w-full max-w-md text-white shadow-2xl'
          >
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold'>Get in Touch</h2>
              <button
                onClick={() => setShowModal(false)}
                className='text-neutral-400 hover:text-white'
              >
                ✕
              </button>
            </div>

            {/* Email Section */}
            <div className='space-y-2 mb-6'>
              <label className='text-sm text-neutral-400 uppercase tracking-wider font-semibold'>
                Email
              </label>
              <div className='flex items-center gap-2 bg-neutral-800 p-3 rounded-lg border border-neutral-700'>
                <span className='text-neutral-200 flex-1 truncate'>
                  {email}
                </span>
                <Button
                  size='sm'
                  onClick={handleCopy}
                  variant='secondary'
                >
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              </div>
            </div>

            <div className='h-px bg-neutral-700 my-6' />

            {/* Social Links */}
            <div className='space-y-4 text-center'>
              <p className='text-sm text-neutral-400'>
                Or find me on social media
              </p>
              <div className='flex gap-4 justify-center text-neutral-400'>
                {socialLinks
                  .filter((social) => !social.link.startsWith('mailto:')) // Removes the email icon
                  .map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={i}
                        href={social.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-primary hover:scale-110 border border-neutral-600 p-2 rounded-lg hover:border-primary transition-all duration-200 bg-neutral-800/50'
                      >
                        <Icon className='size-6' />
                      </a>
                    );
                  })}
              </div>
            </div>

            <Button
              className='w-full mt-8'
              variant='outline'
              onClick={() => setShowModal(false)}
            >
              Close
            </Button>
          </motion.div>
        </div>
      )}
    </>
  );
}

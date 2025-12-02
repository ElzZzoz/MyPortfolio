import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animations';
import type { ToolsType } from '@/types';

export default function ToolsCard({ tool }: { tool: ToolsType }) {
  return (
    <motion.div
      variants={fadeUp}
      className='border border-neutral-700
      rounded-md flex justify-center 
      items-center flex-col py-4 bg-accent-foreground/5'
    >
      <img
        src={tool.imgSrc}
        alt={tool.label}
        // size-10 sets width and height to 2.5rem (40px)
        // object-contain ensures the logo fits inside the box without stretching
        className='size-12 object-contain'
      />
      <p className='font-bold mt-2'>{tool.label}</p>
    </motion.div>
  );
}

import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animations';
import type { ProjectType } from '@/types'; // Importing from constants where we defined it

export default function ProjectCard({ id, imgSrc, tags, title }: ProjectType) {
  return (
    <motion.div
      variants={fadeUp}
      className='relative group'
    >
      <Link
        to={`/projects/${id}`}
        className='block overflow-hidden rounded-md'
      >
        <figure className='relative overflow-hidden rounded-md'>
          <img
            src={imgSrc}
            alt={title}
            className='
              w-full h-full aspect-[4/3] object-cover
              rounded-md
              transition duration-500
              group-hover:scale-110
            '
          />

          {/* Gradient Overlay: Makes text readable on light images */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60' />
        </figure>

        <div className='absolute bottom-0 w-full p-4 flex flex-col gap-2'>
          {/* Title - Added this so users know what the project is */}
          <h3 className='text-white font-bold text-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300'>
            {title}
          </h3>

          {/* Tags */}
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag, i) => (
              <span
                key={i}
                className='
                  bg-white/10 backdrop-blur-md 
                  text-white py-1 px-2 
                  rounded-md text-xs border border-white/10
                '
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

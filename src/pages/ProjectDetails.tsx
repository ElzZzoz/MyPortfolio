import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ExternalLink,
  Linkedin,
  Layers,
  Github,
} from 'lucide-react';

import { projectsData } from '@/constants';
import { fadeUp, staggerContainer } from '@/lib/animations';

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Image modal state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className='min-h-screen flex flex-col items-center justify-center text-center px-4'>
        <h2 className='text-2xl font-bold mb-4'>Project not found</h2>
        <Link
          to='/projects'
          className='text-primary hover:underline'
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <motion.article
      initial='hidden'
      animate='visible'
      exit='hidden'
      className='container mx-auto px-4 py-20 max-w-5xl'
    >
      {/* --- Back Button --- */}
      <motion.div
        variants={fadeUp}
        className='mb-8'
      >
        <Link
          to='/projects'
          className='inline-flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors'
        >
          <ArrowLeft className='size-4' />
          <span>Back to Projects</span>
        </Link>
      </motion.div>

      {/* --- Header Section --- */}
      <motion.div
        variants={staggerContainer(0.1)}
        className='grid md:grid-cols-2 gap-10 mb-16'
      >
        <motion.div
          variants={fadeUp}
          className='space-y-6'
        >
          <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
            {project.title}
          </h1>

          <div className='flex flex-wrap gap-3'>
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className='px-3 py-1 text-sm bg-neutral-800 rounded-full text-neutral-300'
              >
                {tag}
              </span>
            ))}
          </div>

          <p className='text-neutral-300 text-lg leading-relaxed'>
            {project.description ||
              'No description available for this project.'}
          </p>

          {/* --- Action Links --- */}
          <div className='flex flex-wrap gap-4 pt-4'>
            {/* LinkedIn Demo Video */}
            {project.videoLink && (
              <a
                href={project.videoLink}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-2 bg-[#0077b5] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#005e93] transition-colors'
              >
                <Linkedin className='size-5' />
                <span>Watch Demo</span>
              </a>
            )}

            {/* Live Project Link */}
            {project.projectLink && (
              <a
                href={project.projectLink}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-2 bg-neutral-800 text-white px-5 py-3 rounded-lg font-medium hover:bg-neutral-700 transition-colors border border-neutral-700'
              >
                <ExternalLink className='size-5' />
                <span>Live Site</span>
              </a>
            )}

            {/* GitHub Link */}
            {project.github && (
              <a
                href={project.github}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-2 bg-neutral-900 text-white px-5 py-3 rounded-lg font-medium hover:bg-neutral-700 transition-colors border border-neutral-700'
              >
                <Github className='size-5' />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* --- Main Image --- */}
        <motion.div
          variants={fadeUp}
          className='relative aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800'
        >
          <img
            src={project.imgSrc}
            alt={project.title}
            onClick={() => setSelectedImage(project.imgSrc)}
            className='object-cover w-full h-full cursor-pointer hover:opacity-90 transition'
          />
        </motion.div>
      </motion.div>

      {/* --- Tech Stack & Details --- */}
      <motion.div
        variants={staggerContainer(0.2)}
        className='grid md:grid-cols-3 gap-10 mb-16'
      >
        {/* Tech Stack Column */}
        <div className='md:col-span-1'>
          <h3 className='text-xl font-semibold mb-6 flex items-center gap-2'>
            <Layers className='size-5 text-primary' />
            Tech Stack
          </h3>
          <ul className='space-y-3'>
            {project.techStack?.map((tech, i) => (
              <li
                key={i}
                className='flex items-center gap-3 text-neutral-400'
              >
                <span className='size-1.5 bg-primary rounded-full' />
                {tech}
              </li>
            )) || <li className='text-neutral-500'>Not specified</li>}
          </ul>
        </div>

        {/* Gallery Column */}
        <div className='md:col-span-2 space-y-8'>
          <h3 className='text-xl font-semibold mb-6'>Project Gallery</h3>

          {project.gallery && project.gallery.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {project.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className='rounded-lg overflow-hidden border border-neutral-800 hover:border-neutral-600 transition-colors'
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx}`}
                    onClick={() => setSelectedImage(img)}
                    className='w-full h-auto object-cover cursor-pointer hover:opacity-90 transition'
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className='text-neutral-500 italic'>
              No additional images provided.
            </p>
          )}
        </div>
      </motion.div>

      {/* --- IMAGE MODAL --- */}
      {selectedImage && (
        <div
          className='fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50'
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt='Fullscreen'
            className='max-w-4xl w-full rounded-lg border border-neutral-700 shadow-lg'
          />
        </div>
      )}
    </motion.article>
  );
}

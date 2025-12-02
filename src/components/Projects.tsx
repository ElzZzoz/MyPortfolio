import { motion } from 'motion/react';
import { Link } from 'react-router-dom'; // Use 'react-router-dom' if not using Next.js
import { ArrowRight } from 'lucide-react'; // Optional: Adds a nice icon

import { staggerContainer, fadeUp } from '@/lib/animations'; // Ensure you import fadeUp
import { projectsData } from '@/constants';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  // OPTIONAL: Only show the first 4 projects on the home page
  // Remove .slice(0, 4) if you want to show all of them here anyway.
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0)}
      className='mt-30 scroll-mt-10'
      id='projects'
    >
      <SectionHeader
        subtitle='Projects'
        title='My featured projects'
      />

      <motion.div
        className='grid md:grid-cols-2 gap-8 mt-10'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.5)}
      >
        {featuredProjects.map((project, i) => (
          <ProjectCard
            key={i}
            id={project.id} // <--- MAKE SURE TO ADD THIS
            imgSrc={project.imgSrc}
            projectLink={project.projectLink}
            tags={project.tags}
            title={project.title}
          />
        ))}
      </motion.div>

      {/* --- View All Button --- */}
      <motion.div
        variants={fadeUp} // Make sure this variant exists in your animations file
        className='flex justify-center mt-12'
      >
        <Link
          to='/projects' // This points to your new page
          className='flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors duration-300 border-b border-transparent hover:border-primary pb-1'
        >
          <span>View All Projects</span>
          <ArrowRight className='size-4' />
        </Link>
      </motion.div>
    </motion.section>
  );
}

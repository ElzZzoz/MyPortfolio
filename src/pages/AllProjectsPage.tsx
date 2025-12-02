import { projectsData } from '@/constants';
import ProjectCard from '@/components/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
export default function AllProjectsPage() {
  return (
    <main className='container mx-auto py-20 px-4'>
      <h1 className='text-3xl font-bold mb-10 text-center'>All Projects</h1>
      <Link
        to='/'
        className='inline-flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors mb-10'
      >
        <ArrowLeft className='size-4' />
        <span>Back</span>
      </Link>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projectsData.map((project, i) => (
          <ProjectCard
            key={i}
            {...project}
          />
        ))}
      </div>
    </main>
  );
}

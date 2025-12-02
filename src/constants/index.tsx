/*
 *copyright 2025 HazemSoltan
 *Licensed under the Apache License, Version 2.0 (the "License");
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ProjectType,
  ServiceType,
  StatsType,
  TestimonialsType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  Facebook,
  FileText,
  Github,
  Globe,
  Home,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
  Palette,
  Rocket,
  Send,
  Settings,
  Smartphone,
  MessageSquare,
  User,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  {
    label: 'Reviews',
    link: '#testimonials',
    icon: MessageCircle,
  },
  { label: 'Contact', link: '#contact', icon: Mail },
];

// Assuming LinksType is defined elsewhere and icon components (Facebook, Instagram, WhatsApp,
// Telegram, Linkedin, Github) are imported.

const socialLinks: LinksType[] = [
  {
    icon: Facebook,
    label: 'Facebook',
    link: 'https://www.facebook.com/hazem.soltan.276088/',
  },
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    link: 'https://wa.me/201023827249?text=Hi!%20I%20came%20from%20your%20website.', // Replace with actual WhatsApp link/API call
  },
  {
    icon: Send,
    label: 'Telegram',
    link: 'https://t.me/Hazem2745', // Replace with actual Telegram link
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hazem-soltan',
  },
  {
    icon: Github,
    label: 'GitHub',
    link: 'https://github.com/ElzZzoz', // Replace with actual GitHub profile link
  },
  {
    icon: Mail,
    label: 'Email',
    link: 'mailto:hazemsoltan274@gmail.com', // Replace with actual GitHub profile link
  },
];

const projectsData: ProjectType[] = [
  {
    id: 'quizwizz-app',
    imgSrc: '/images/quiz/quiz-1.jpg', // update with real image
    title: 'QuizWizz – Real-World Quiz Application',
    tags: [
      'saas Application',
      'Multi-User',
      'Authentication',
      'API',
      'dashboard',
    ],
    projectLink: 'https://lnkd.in/ddQm_Zhc',
    description:
      'A fully functional quiz platform featuring complete user authentication and two portals: Instructor portal for creating and managing quizzes, and Student portal for browsing, taking quizzes, and tracking results. Built with industry-grade architecture and clean UI.',
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'React Query',
      'React Router',
    ],
    videoLink:
      'https://www.linkedin.com/posts/hazem-soltan_reactjs-typescript-webdevelopment-activity-7389319360428888064-KCBS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRdOWoBc31TwjJJqfOFibYFl4TCtkx8PoI', // swap in your actual LinkedIn post/video
    github: 'https://github.com/ElzZzoz/QuizWizz', // <-- added GitHub link
    gallery: [
      '/images/quiz/quiz-2.jpg',
      '/images/quiz/quiz-3.jpg',
      '/images/quiz/quiz-4.jpg',
      '/images/quiz/quiz-5.png',
    ],
    // add more images if you have them
  },
  {
    id: 'hotel-management-system',
    imgSrc: '/images/hotel/hotel-1.png', // update with your actual image
    title: 'Hotel Management System',
    tags: [
      'saas Application',
      'Landing Page',
      'Multi-User',
      'Authentication',
      'API',
      'dashboard',
      'stripe',
      'payment',
    ],
    projectLink: 'https://lnkd.in/d6uxXcfs',
    description:
      'A complete hotel booking and management platform with separate user and admin experiences. Users can explore rooms, view details, book stays, leave ratings and reviews, and manage their accounts. Admins have full control over rooms, facilities, ads, and booking analytics through a clean and intuitive dashboard.',
    techStack: [
      'React',
      'TypeScript',
      'MUI',
      'React Hook Form',
      'Context API',
      'React Router',
      'Axios',
      'Day.js',
      'Recharts',
      'Emotion',
    ],
    videoLink: 'https://www.linkedin.com/', // put your real showcase link here
    github: 'https://github.com/shehabfathy/HMS',
    gallery: [
      '/images/hotel/hotel-1.png',
      '/images/hotel/hotel-2.jpg',
      '/images/hotel/hotel-3.png',
      '/images/hotel/hotel-4.jpg',
      '/images/hotel/hotel-5.png',
    ], // add as many images as you'd like
  },
  {
    id: 'project-management-system',
    imgSrc: '/images/pms/pms-1.jpg', // replace with your real image
    title: 'Project Management System',
    tags: [
      'saas Application',
      'Multi-User',
      'Authentication',
      'Authorization',
      'API',
      'dashboard',
      'kanban',
      'drag & drop',
    ],
    projectLink: 'https://lnkd.in/dszbyAP9',
    description:
      'A Trello-inspired project management platform featuring full authentication and authorization, an admin dashboard, drag-and-drop task boards, responsive layouts, and interactive charts for tracking progress. Designed for seamless teamwork and efficient project workflows.',
    techStack: [
      'React',
      'TypeScript',
      'MUI',
      'React Hook Form',
      'Context API',
      'React Router',
      'Axios',
      'Day.js',
      'Recharts',
      'Emotion',
      'React Beautiful DnD',
    ],
    videoLink: 'https://www.linkedin.com/', // add your real LinkedIn showcase if available
    github: 'https://github.com/shehabfathy/shehabfathy-PMS-JSBReact8', // <-- added GitHub link
    gallery: [
      '/images/pms/pms-1.jpg',
      '/images/pms/pms-2.jpg',
      '/images/pms/pms-3.jpg',
      '/images/pms/pms-4.jpg',
    ],
  },
  {
    id: 'Wild Oasis',
    imgSrc: '/images/WildOasis/wildOasis-1.png', // replace with your real image
    title: 'Wild Oasis',
    tags: [
      'Full Stack Application',
      'saas Application',
      'Multi-User',
      'Authentication',
      'Authorization',
      'API',
      'dashboard',
    ],
    projectLink: 'https://wildoasisss111.netlify.app/',
    description:
      'A robust cabin booking system offering a seamless end-to-end experience. Users can explore cabins, review amenities, check availability, and make reservations, while admins manage inventory, bookings, and performance insights through a comprehensive dashboard.',
    techStack: [
      'React',
      'TypeScript',
      'Supabase',
      'React Hook Form',
      'Rudux Toolkit',
      'React Router',
      'Axios',
      'Day.js',
      'Recharts',
      'Emotion',
    ], // add your real LinkedIn showcase if available
    github: 'https://github.com/ElzZzoz/The-Wild-Oasis', // <-- added GitHub link
    gallery: [
      '/images/WildOasis/wildOasis-2.png',
      '/images/WildOasis/wildOasis-3.png',
    ],
  },
  {
    id: 'Car Rental',
    imgSrc: '/images/carRental/carRental-1.png', // replace with your real image
    title: 'Car Rental',
    tags: ['Landing Page', 'Responsive Design', 'React', 'javascript', 'API'],
    projectLink: 'https://elzzzoz.github.io/carRental/',
    description:
      'A responsive and visually polished landing page for a car rental service, featuring a clean layout, highlighted car models, pricing sections, and strong CTAs designed to boost conversions.',
    techStack: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Axios'], // add your real LinkedIn showcase if available
    github: 'https://github.com/ElzZzoz/carRental', // <-- added GitHub link
    gallery: ['/images/carRental/carRental-2.png'],
  },
];

const education: ExperienceType[] = [
  {
    year: '2023 – 2027',
    title: 'Bachelor of Computer Science',
    institute: 'higher Technological Institute',
    desc: 'Focused on computer sceince basis and researches and a lot of student activities.',
  },
  {
    year: '2024',
    title: 'The Complete JavaScript Course 2025: From Zero to Expert!',
    institute: 'Udemy / Online Course',
    desc: 'Learned modern JavaScript responsive UI patterns through real-world projects.',
  },
  {
    year: '2024 - 2025',
    title: 'The Ultimate React Course 2025: React, Next.js, Redux & More',
    institute: 'udemy / Online Course',
    desc: 'Learned React.js , Next.js , Redux and how to build modern web applications using these technologies.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2024 – 2025',
    title: 'Frontend Developer Intern',
    institute: 'UpSkilling / Cairo, Egypt',
    desc: 'Built and optimized responsive websites, collaborating closely with designers and backend teams.',
  },
];

const tools: ToolsType[] = [
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'Next.js',
    imgSrc: '/images/tools/nextjs.svg',
  },
  {
    label: 'TypeScript',
    imgSrc: '/images/tools/typescript.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'Redux',
    imgSrc: '/images/tools/redux.png',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },
  {
    label: 'CSS',
    imgSrc: '/images/tools/css3.svg',
  },
  {
    label: 'Sass',
    imgSrc: '/images/tools/sass.svg',
  },
  {
    label: 'MUI',
    imgSrc: '/images/tools/mui.svg',
  },
  {
    label: 'Framer Motion',
    imgSrc: '/images/tools/framer-motion.svg',
  },
  {
    label: 'Supabase',
    imgSrc: '/images/tools/supabase.png',
  },
];

const services: ServiceType[] = [
  {
    title: 'Brand Identity',
    desc: 'I craft modern visual identities that help brands stand out through strong typography, colors, and minimal design.',
    projects: '32 Projects',
    icon: <Palette className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive, and user-friendly interfaces that improve user experience and boost conversions.',
    projects: '47 Projects',
    icon: <Layers className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Web Development',
    desc: 'Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.',
    projects: '58 Projects',
    icon: <Globe className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Mobile App Design',
    desc: 'Creating pixel-perfect app interfaces optimized for both iOS and Android devices with smooth usability.',
    projects: '21 Projects',
    icon: <Smartphone className='h-6 w-6 text-green-400' />,
  },
  {
    title: 'Product Launch Strategy',
    desc: 'Helping startups prepare their digital products for launch with design systems, marketing pages, and assets.',
    projects: '15 Projects',
    icon: <Rocket className='h-6 w-6 text-green-400' />,
  },
];

const statsData: StatsType[] = [
  {
    number: '30+',
    label: 'Happy Clients',
  },
  {
    number: '01+',
    label: 'Years Of Experience',
  },
  {
    number: '50+',
    label: 'Projects Done',
  },
];

const testimonials: TestimonialsType[] = [
  {
    name: 'Alex Tomato',
    role: 'Brand Manager at Instant Design',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    text: 'Working with David was an absolute pleasure. His attention to detail, creative insights, and ability to translate complex ideas into stunning visuals truly set him apart. He consistently went above and beyond to ensure the project exceeded expectations.',
    link: '#',
  },
  {
    name: 'Sara Bloom',
    role: 'Founder at Bloom Agency',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'David brought my brand vision to life better than I could have imagined. He is not only professional and highly skilled but also incredibly responsive and collaborative. Every aspect of the project was handled with precision and creativity.',
    link: '#',
  },
  {
    name: 'John Park',
    role: 'CEO at PixelFlow',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    text: 'From UI/UX design to front-end implementation, David handled every detail flawlessly. His problem-solving skills, innovative approach, and dedication made the entire process smooth and enjoyable. I would highly recommend him for any design-driven project.',
    link: '#',
  },
];

export {
  socialLinks,
  projectsData,
  education,
  experience,
  tools,
  services,
  navLinks,
  statsData,
  testimonials,
};

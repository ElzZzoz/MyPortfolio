import { useLocation } from 'react-router-dom';
import App from '@/App.tsx';
import Sidebar from '@/components/Sidebar.tsx';
import FloatingMenu from '@/components/FloatingMenu.tsx';
import Profile from '@/components/Profile';

// 1. Create a Layout component to access the `useLocation` hook
export default function MainLayout() {
  const location = useLocation();

  // 2. Check if the current path starts with /projects
  const shouldHideProfileOnMobile = location.pathname.startsWith('/projects');

  return (
    <div className='min-h-screen lg:flex lg:justify-center lg:items-start lg:gap-10'>
      <Sidebar />
      <FloatingMenu />

      {/* 3. Conditional Rendering Wrapper:
         If on /projects: apply 'hidden lg:block' (Hidden on mobile, Visible on Desktop)
         If not: render normally
      */}
      <div
        className={`
          ${shouldHideProfileOnMobile ? 'hidden lg:block' : ''} 
          sticky top-1 h-fit z-30
        `}
      >
        <Profile />
      </div>

      <App />
    </div>
  );
}

'use client';

import { User } from 'better-auth';

import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar';
import UserButton from '@/components/ui/user-button';
import { useSession } from '@/lib/auth-client';
import { cn } from '@/lib/utils';

const TopBar = () => {
  const session = useSession();
  const { open, isMobile } = useSidebar();

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full border-b bg-white/80 backdrop-blur-lg',
        open ? 'pl-0 lg:pl-60' : 'pl-0',
        isMobile ? 'px-6' : 'px-0'
      )}
    >
      <nav className='container mx-auto flex h-12 items-center justify-between'>
        <SidebarTrigger />

        <UserButton user={session?.data?.user as User} />
      </nav>
    </header>
  );
};

export default TopBar;

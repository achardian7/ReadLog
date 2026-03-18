'use client';

import { Goal, Heart, LayoutDashboard, Library, Search } from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Logo from '@/components/ui/logo';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const sidebarContents = [
  {
    id: 1,
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard',
  },
  {
    id: 2,
    label: 'Search Books',
    icon: Search,
    path: '/dashboard/search',
  },
  {
    id: 3,
    label: 'My Collections',
    icon: Library,
    path: '/dashboard/my-collections',
  },
  {
    id: 4,
    label: 'Goals',
    icon: Goal,
    path: '/dashboard/goals',
  },
  {
    id: 5,
    label: 'Wishlist',
    icon: Heart,
    path: '/dashboard/wishlist',
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar className='w-full max-w-60'>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent className='mt-10 px-2'>
        <SidebarMenu>
          {sidebarContents.map(content => (
            <SidebarMenuItem key={content.id}>
              <SidebarMenuButton
                className={cn(
                  'hover:bg-primary/20 h-12',
                  pathname === content.path
                    ? 'bg-primary text-white'
                    : 'bg-transparent'
                )}
              >
                <Link
                  href={content.path}
                  className={cn(
                    'flex h-full w-full items-center gap-2 text-base font-medium'
                  )}
                >
                  <content.icon />
                  <span>{content.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;

'use client';

import { User } from 'better-auth';
import { LogOut } from 'lucide-react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { signOut } from '@/lib/auth-client';

import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';

interface UserButtonProps {
  user: User;
}

const UserButton = ({ user }: UserButtonProps) => {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image ?? ''} alt='profile picture' />
          <AvatarFallback>{user?.name[0].toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-full max-w-sm'>
        <DropdownMenuItem>
          <Avatar>
            <AvatarImage src={user?.image ?? ''} alt='profile picture' />
            <AvatarFallback>{user?.name[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className='flex flex-col'>
            <span className='text-lg font-semibold'>{user?.name}</span>
            <span className='text-muted-foreground'>{user?.email}</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href='/dashboard' className='w-full'>
            Dashboard
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={async () => {
            await signOut();
            router.replace('/');
            router.refresh();
          }}
        >
          <LogOut />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;

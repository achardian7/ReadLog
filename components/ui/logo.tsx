import { BookOpenCheck } from 'lucide-react';

import { cn } from '@/lib/utils';

interface LogoProps {
  color?: 'primary' | 'white';
}

const Logo = ({ color = 'primary' }: LogoProps) => {
  return (
    <div className='border-primary pointer-events-none flex items-center justify-center gap-2 rounded-2xl border-b-2 pb-1 text-xl font-bold lg:text-2xl'>
      <BookOpenCheck className={cn('size-8 lg:size-10', `text-${color}`)} />
      <span className={cn(`text-${color}`)}>ReadLog</span>
    </div>
  );
};

export default Logo;

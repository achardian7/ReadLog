import { BookOpenCheck } from 'lucide-react';

const Logo = () => {
  return (
    <div className='border-primary pointer-events-none flex items-center justify-center gap-2 rounded-2xl border-b-2 pb-1 text-xl font-bold lg:text-2xl'>
      <BookOpenCheck className='text-primary size-8 lg:size-10' />
      <span>ReadLog</span>
    </div>
  );
};

export default Logo;

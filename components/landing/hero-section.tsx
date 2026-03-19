import Image from 'next/image';

import { Button } from '../ui/button';
import AuthModal from './auth-modal';

const HeroSection = () => {
  return (
    <section className='container mx-auto mt-16 flex min-h-[calc(100vh-4rem)] items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-6 px-6 text-center lg:px-0'>
        <div className='flex items-center gap-4'>
          <div className='bg-accent-foreground h-0.5 w-8'></div>
          <p className='text-accent-foreground text-sm tracking-widest uppercase'>
            Your reading companion
          </p>
          <div className='bg-accent-foreground h-0.5 w-8'></div>
        </div>

        <h1 className='font-serif text-5xl font-bold'>
          Every book you&apos;ve ever{' '}
          <span className='text-accent-foreground italic'>loved.</span>
        </h1>

        <p className='max-w-lg text-center leading-normal'>
          ReadLog is a beautifully designed reading tracker that helps you build
          a lifetime reading habit — with stats, goals, and a library
          you&apos;ll actually want to visit. Start for free →
        </p>

        <AuthModal>
          <Button className='h-16 rounded-full px-10 text-lg'>
            Started for free
          </Button>
        </AuthModal>

        <div>
          <Image
            src='/images/hero.png'
            alt='hero'
            width={800}
            height={600}
            className='rounded-xl object-cover shadow-md'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

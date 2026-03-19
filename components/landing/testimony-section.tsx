import { cn } from '@/lib/utils';

import SectionHeader from './section-header';

const testimonials = [
  {
    id: 1,
    quote:
      'ReadLog completely changed how I approach reading. Having all my stats in one beautiful place makes me want to read every single day.',
    author: {
      name: 'Sari Anggraini',
      role: 'Teacher',
      city: 'Jakarta',
      initials: 'SA',
      avatarColor: 'bg-orange-500',
    },
  },
  {
    id: 2,
    quote:
      "I've tried 6 book tracking apps. ReadLog is the only one that feels like it was made for people who actually love books, not just data nerds.",
    author: {
      name: 'Bram Wicaksono',
      role: 'Designer',
      city: 'Bandung',
      initials: 'BW',
      avatarColor: 'bg-purple-500',
    },
  },
  {
    id: 3,
    quote:
      "The reading streak feature is addictive in the best possible way. I've read more this year than the past three years combined, thanks to ReadLog.",
    author: {
      name: 'Dinda Pratiwi',
      role: 'Graduate Student',
      city: 'Surabaya',
      initials: 'DP',
      avatarColor: 'bg-blue-500',
    },
  },
];

const TestimonySection = () => {
  return (
    <div className='bg-primary py-10 text-white lg:py-0'>
      <section className='container mx-auto mt-16 flex min-h-[calc(100vh-4rem)] items-center justify-center'>
        <div className='flex w-full flex-col items-center justify-center gap-4 px-10 lg:px-6'>
          <SectionHeader title='what readers say?' />
          <h2 className='font-serif text-3xl font-bold'>
            Loved by{' '}
            <span className='text-accent-foreground italic'>book lovers.</span>
          </h2>

          <div className='mt-10 grid w-full grid-cols-1 gap-4 lg:grid-cols-3'>
            {testimonials.map(testimonial => (
              <div
                key={testimonial.id}
                className='relative flex w-full flex-col gap-4 rounded-lg border-gray-200 bg-white/10 p-10'
              >
                <div>
                  <blockquote>{testimonial.quote}</blockquote>
                </div>

                <div className='flex items-center gap-3'>
                  <div
                    className={cn(
                      'flex size-12 items-center justify-center rounded-full',
                      testimonial.author.avatarColor
                    )}
                  >
                    {testimonial.author.initials}
                  </div>

                  <div>
                    <p>{testimonial.author.name}</p>
                    <p className='text-sm italic'>
                      {testimonial.author.role} - {testimonial.author.city}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='bg-secondary mt-30 h-1 w-full rounded-full'></div>
        </div>
      </section>
    </div>
  );
};

export default TestimonySection;

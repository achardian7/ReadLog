import SectionHeader from './section-header';

const coreFeatures = [
  {
    id: 1,
    number: '01',
    icon: '📚',
    title: 'Personal Library',
    description:
      'Organize all your books — currently reading, finished, want-to-read, and even did-not-finish. Beautiful table view with rich metadata.',
  },
  {
    id: 2,
    number: '02',
    icon: '📈',
    title: 'Reading Statistics',
    description:
      'Deep insights into your reading patterns. Monthly charts, activity heatmaps, genre breakdowns, and your fastest reads.',
  },
  {
    id: 3,
    number: '03',
    icon: '🎯',
    title: 'Goals & Challenges',
    description:
      'Set annual reading goals, track monthly page targets, and take on fun challenges like reading across 5 genres or building a 30-day streak.',
  },
  {
    id: 4,
    number: '04',
    icon: '🔍',
    title: 'Discover Books',
    description:
      'Browse trending reads by genre, search by title or author, and get personalized recommendations based on your taste profile.',
  },
  {
    id: 5,
    number: '05',
    icon: '♡',
    title: 'Wishlist',
    description:
      "Save books you're excited about with priority levels. Move from wishlist to reading with one tap when you're ready.",
  },
  {
    id: 6,
    number: '06',
    icon: '🔥',
    title: 'Reading Streaks',
    description:
      'Build momentum with daily reading streaks. Log your sessions, track pages per day, and watch your consistency grow week by week.',
  },
];

const FeatureSection = () => {
  return (
    <section className='container mx-auto mt-16 flex min-h-[calc(100vh-4rem)] items-center justify-center'>
      <div className='flex w-full flex-col items-center justify-center gap-4 px-10 lg:px-6'>
        <SectionHeader title='core features' />
        <h2 className='font-serif text-3xl font-bold'>
          Everything a reader{' '}
          <span className='text-accent-foreground italic'>needs.</span>
        </h2>

        <div className='mt-10 grid w-full grid-cols-1 gap-4 lg:grid-cols-3'>
          {coreFeatures.map(feature => (
            <div
              key={feature.id}
              className='relative flex w-full flex-col gap-4 rounded-lg bg-white p-10'
            >
              <span className='text-accent-foreground bg-secondary absolute top-2 right-2 flex size-10 items-center justify-center rounded-lg'>
                {feature.number}
              </span>
              <span className='text-4xl'>{feature.icon}</span>
              <h3 className='text-lg font-semibold'>{feature.title}</h3>
              <p className='text-muted-foreground'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

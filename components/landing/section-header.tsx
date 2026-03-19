const SectionHeader = () => {
  return (
    <section>
      <div className='flex items-center gap-4'>
        <div className='bg-accent-foreground h-0.5 w-8'></div>
        <p className='text-accent-foreground text-sm tracking-widest uppercase'>
          Your reading companion
        </p>
        <div className='bg-accent-foreground h-0.5 w-8'></div>
      </div>

      <h2 className='font-serif text-3xl font-bold'>
        Every book you&apos;ve ever{' '}
        <span className='text-accent-foreground italic'>loved.</span>
      </h2>
    </section>
  );
};

export default SectionHeader;

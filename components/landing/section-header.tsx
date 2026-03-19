const SectionHeader = ({ title }: { title: string }) => {
  return (
    <section className='flex items-center gap-4'>
      <div className='bg-accent-foreground h-0.5 w-8'></div>
      <p className='text-accent-foreground text-sm tracking-widest uppercase'>
        {title}
      </p>
      <div className='bg-accent-foreground h-0.5 w-8'></div>
    </section>
  );
};

export default SectionHeader;

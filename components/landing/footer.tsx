import Link from 'next/link';

import Logo from '../ui/logo';

const footerLinks = [
  {
    id: 1,
    label: 'privacy',
    path: '/',
  },
  {
    id: 2,
    label: 'terms',
    path: '/',
  },
  {
    id: 3,
    label: 'blog',
    path: '/',
  },
  {
    id: 4,
    label: 'contact',
    path: '/',
  },
];

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='container mx-auto flex h-20 flex-col items-start justify-between gap-4 px-6 py-4 lg:flex-row lg:items-center lg:gap-0 lg:px-0 lg:py-0'>
        <Logo />

        <span className='text-muted-foreground hidden text-sm lg:block'>
          © {new Date().getFullYear()} Folio · Made for readers, by readers
        </span>

        <div className='space-x-4'>
          {footerLinks.map(link => (
            <Link
              key={link.id}
              href={link.path}
              className='text-muted-foreground text-sm tracking-wider uppercase'
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

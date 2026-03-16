import { getServerSession } from '@/lib/server';

import Logo from '../ui/logo';
import UserButton from '../ui/user-button';
import AuthModal from './auth-modal';

const Navbar = async () => {
  const session = await getServerSession();

  return (
    <header className='border-b'>
      <nav className='container mx-auto flex h-16 items-center justify-between px-6 lg:px-0'>
        <Logo />

        <div>
          {session?.user ? <UserButton user={session.user} /> : <AuthModal />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

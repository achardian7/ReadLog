import { getServerSession } from '@/lib/server';

import { Button } from '../ui/button';
import Logo from '../ui/logo';
import UserButton from '../ui/user-button';
import AuthModal from './auth-modal';

const Navbar = async () => {
  const session = await getServerSession();

  return (
    <header className='fixed top-0 left-0 w-full border-b bg-white/80 backdrop-blur-lg'>
      <nav className='container mx-auto flex h-16 items-center justify-between px-6 lg:px-0'>
        <Logo />

        <div>
          {session?.user ? (
            <UserButton user={session.user} />
          ) : (
            <AuthModal>
              <Button className='rounded-full px-8'>Sign In</Button>
            </AuthModal>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

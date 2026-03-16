import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import Logo from '../ui/logo';

const Navbar = () => {
  return (
    <header className='border-b'>
      <nav className='container mx-auto flex h-16 items-center justify-between px-6 lg:px-0'>
        <Logo />

        <div>
          <Dialog>
            <DialogTrigger render={<Button>Sign In</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle className='text-xl font-bold'>
                  Welcome Back!
                </DialogTitle>
                <DialogDescription>
                  Sign in to save and track the books you read
                </DialogDescription>
              </DialogHeader>

              <div className='space-y-2'>
                <Button className='w-full'>
                  <FcGoogle />
                  <span>Sign in with Google</span>
                </Button>
                <Button variant='outline' className='w-full'>
                  <FaGithub />
                  <span>Sign in with Github</span>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

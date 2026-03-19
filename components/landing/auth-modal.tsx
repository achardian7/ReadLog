'use client';

import { toast } from 'sonner';

import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { signIn } from '@/lib/auth-client';

import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

const AuthModal = ({ children }: { children?: React.ReactElement }) => {
  const login = async (provider: 'google' | 'github') => {
    try {
      await signIn.social({
        provider,
        callbackURL: '/dashboard',
      });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Failed to sign in, please try again later!');
      }
    }
  };
  return (
    <Dialog>
      <DialogTrigger render={children} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-xl font-bold'>Welcome Back!</DialogTitle>
          <DialogDescription>
            Sign in to save and track the books you read
          </DialogDescription>
        </DialogHeader>

        <div className='space-y-2'>
          <Button onClick={() => login('google')} className='w-full'>
            <FcGoogle />
            <span>Sign in with Google</span>
          </Button>
          <Button
            onClick={() => login('github')}
            variant='outline'
            className='w-full'
          >
            <FaGithub />
            <span>Sign in with Github</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;

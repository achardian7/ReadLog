import { Plus } from 'lucide-react';

import { books } from '@/lib/constants';
import { getServerSession } from '@/lib/server';

import { Button } from '../ui/button';
import CurrentlyReading from './ui/currently-reading';
import DashboardCard from './ui/dashboard-card';
import Goal from './ui/goal';

const Dashboard = async () => {
  const session = await getServerSession();

  return (
    <div className='space-y-6'>
      <section className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-bold'>👋 Hello, {session?.user.name}</h1>
        </div>

        <Button>
          <Plus />
          Add Book
        </Button>
      </section>

      <section className='grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-10'>
        <DashboardCard title='Total Books' content={10} />
        <DashboardCard title='Currently Reading' content={2} />
        <DashboardCard title='Completed' content={8} />
        <DashboardCard title='Wishlist' content={5} />
      </section>

      <section className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10'>
        <CurrentlyReading books={books} />

        <Goal goal={10} finishedBook={5} />
      </section>
    </div>
  );
};

export default Dashboard;

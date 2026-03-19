import { Metadata } from 'next';

import Dashboard from '@/components/dashboard/dashboard';

export const metadata: Metadata = {
  title: 'ReadLog | Dashboard',
};

const DashboardPage = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;

import DashboardSidebar from '@/components/dashboard/layouts/dashboard-sidebar';
import TopBar from '@/components/dashboard/layouts/topbar';
import { SidebarProvider } from '@/components/ui/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <SidebarProvider>
        <DashboardSidebar />
        <div className='w-full'>
          <TopBar />
          <main className='container mx-auto mt-12 px-6 py-6 lg:px-0'>
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DashboardCardProps {
  title: string;
  content: number | string;
}

const DashboardCard = ({ title, content }: DashboardCardProps) => {
  return (
    <Card className='w-full bg-white'>
      <CardHeader>
        <CardTitle className='text-lg font-bold'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <span className='text-2xl font-semibold'>{content} Books</span>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;

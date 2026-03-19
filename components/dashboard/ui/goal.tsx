import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface GoalProps {
  goal: number;
  finishedBook: number;
}

const Goal = ({ goal, finishedBook }: GoalProps) => {
  return (
    <Card className='h-fit w-full bg-white'>
      <CardHeader>
        <CardTitle className='text-lg font-bold'>🎯 Reading Goal</CardTitle>
      </CardHeader>

      <CardContent>
        <div>
          <div className='flex items-center justify-between'>
            <span className='mb-4 block text-lg font-medium'>
              My goal is to read {goal} this year
            </span>

            <span>{Math.round((finishedBook / goal) * 100)}%</span>
          </div>
          <Progress value={(finishedBook / goal) * 100} />
        </div>
      </CardContent>
    </Card>
  );
};

export default Goal;

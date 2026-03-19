import Image from 'next/image';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Book } from '@/types/book';

interface CurrentlyReadingProps {
  books: Book[];
}

const CurrentlyReading = ({ books }: CurrentlyReadingProps) => {
  return (
    <Card className='bg-white'>
      <CardHeader>
        <CardTitle className='text-xl font-bold'>
          📖 Currently Reading
        </CardTitle>
        <CardContent className='mt-6 flex flex-col gap-4'>
          {books.map(book => (
            <div key={book.id} className='flex items-center gap-4'>
              <div className='h-34 w-24 overflow-clip rounded-md'>
                <Image
                  fill
                  src={book.coverImage}
                  alt={`${book.title} cover`}
                  className='relative! object-cover'
                />
              </div>
              <div className='flex flex-1 flex-col space-y-4'>
                <div>
                  <h3 className='text-lg font-medium'>{book.title}</h3>
                  <p className='text-muted-foreground'>{book.author}</p>
                </div>

                <Progress
                  className='w-full'
                  value={(book.currentPage / book.totalPages) * 100}
                />
              </div>

              <span className='font-bold'>
                {Math.round((book.currentPage / book.totalPages) * 100)}%
              </span>
            </div>
          ))}
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default CurrentlyReading;

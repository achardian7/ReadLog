export type BookStatus = 'wishlist' | 'reading' | 'completed';

export type Book = {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  totalPages: number;
  currentPage: number;
};

export type UserBook = {
  id: string;
  book: Book;

  status: BookStatus;
  currentPage: number;

  startedAt?: string;
  finishedAt?: string;

  createdAt: string;
  updatedAt: string;
};

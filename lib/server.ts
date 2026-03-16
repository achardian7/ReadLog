import { headers } from 'next/headers';

import { auth } from './auth';

export const getServerSession = async (request?: Request) => {
  const session = await auth.api.getSession({
    headers: request?.headers ?? (await headers()),
  });

  return session;
};

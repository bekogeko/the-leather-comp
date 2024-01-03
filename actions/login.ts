'use server';

import { LoginSchema } from '@/schemas';
import { z } from 'zod';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const login = async (data: z.infer<typeof LoginSchema>) => {
  await sleep(1000);

  const validatedFields = LoginSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.toString(),
    };
  }

  return {
    success: 'Login success!',
  };
};

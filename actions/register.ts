'use server';

import { RegisterSchema } from '@/schemas';
import { z } from 'zod';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const register = async (data: z.infer<typeof RegisterSchema>) => {
  await sleep(1000);

  const validatedFields = RegisterSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      error: validatedFields.error.toString(),
    };
  }

  return {
    success: 'Login success!',
  };
};

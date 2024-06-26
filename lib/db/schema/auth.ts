import { z } from 'zod';

export const authenticationSchema = z.object({
  email: z.string().email().min(5).max(31),
  password: z
    .string()
    .min(4, { message: 'must be at least 4 characters' })
    .max(15, { message: 'cannot exceed 15 characters' }),
});

export const updateUserSchema = z.object({
  name: z.string().min(3).optional(),
  email: z.string().min(4).optional(),
});

export type UsernameAndPassword = z.infer<typeof authenticationSchema>;

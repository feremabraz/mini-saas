import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production']).default('development'),
    DATABASE_URL: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    STRIPE_SECRET_KEY: z.string().min(1).optional(),
    STRIPE_WEBHOOK_SECRET: z.string().min(1).optional(),
  },
  client: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1).optional(),
    NEXT_PUBLIC_STRIPE_PRO_PRICE_ID: z.string().min(1).optional(),
    NEXT_PUBLIC_STRIPE_MAX_PRICE_ID: z.string().min(1).optional(),
    NEXT_PUBLIC_STRIPE_ULTRA_PRICE_ID: z.string().min(1).optional(),
  },
});

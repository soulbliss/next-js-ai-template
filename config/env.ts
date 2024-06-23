import { z } from 'zod';

const envSchema = z.object({
  AUTH_SECRET: z.string().min(1, 'AUTH_SECRET is required'),

  DEV: z.preprocess((val) => val === 'true', z.boolean()),

  EMAIL_SERVER_HOST: z.string().min(1, 'EMAIL_SERVER_HOST is required'),
  EMAIL_SERVER_PORT: z.preprocess(
    (val) => Number(val),
    z.number().int().positive(),
  ),
  EMAIL_SERVER_USER: z.string().min(1, 'EMAIL_SERVER_USER is required'),
  EMAIL_SERVER_PASSWORD: z.string().min(1, 'EMAIL_SERVER_PASSWORD is required'),

  PG_DB_USER: z.string().min(1, 'PG_DB_USER is required'),
  PG_DB_PASSWORD: z.string().min(1, 'PG_DB_PASSWORD is required'),
  PG_DB_NAME: z.string().min(1, 'PG_DB_NAME is required'),
  PG_DB_HOST: z.string().min(1, 'PG_DB_HOST is required'),
  PG_DB_PORT: z.preprocess((val) => Number(val), z.number().int().positive()),
  PG_DB_SSL: z.preprocess((val) => val === 'true', z.boolean()),
  PG_DB_MAX_CONNECTIONS: z.preprocess(
    (val) => Number(val),
    z.number().int().positive(),
  ),
  PG_DB_IDLE_TIMEOUT: z.preprocess(
    (val) => Number(val),
    z.number().int().nonnegative(),
  ),

  GOOGLE_CLIENT_ID: z.string().min(1, 'GOOGLE_CLIENT_ID is required'),
  GOOGLE_CLIENT_SECRET: z.string().min(1, 'GOOGLE_CLIENT_SECRET is required'),

  GITHUB_ID: z.string().min(1, 'GITHUB_ID is required'),
  GITHUB_SECRET: z.string().min(1, 'GITHUB_SECRET is required'),

  // optional for analytics
  NEXT_PUBLIC_MEASUREMENT_ID: z.string().optional(),

  // optional for notifications
  NOTIFICATION_WEBHOOK: z.string().optional(),

  RESEND_API: z.string().optional(),
  RESEND_AUDIENCE_ID: z.string().optional(),
});

// Parse and validate the environment variables
const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error('❌ Invalid environment variables:', env.error.format());
  throw new Error('Invalid environment variables');
}

export const {
  AUTH_SECRET,
  DEV,
  EMAIL_SERVER_HOST,
  EMAIL_SERVER_PORT,
  EMAIL_SERVER_USER,
  EMAIL_SERVER_PASSWORD,
  PG_DB_USER,
  PG_DB_PASSWORD,
  PG_DB_NAME,
  PG_DB_HOST,
  PG_DB_PORT,
  PG_DB_SSL,
  PG_DB_MAX_CONNECTIONS,
  PG_DB_IDLE_TIMEOUT,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GITHUB_ID,
  GITHUB_SECRET,
  NEXT_PUBLIC_MEASUREMENT_ID,
  NOTIFICATION_WEBHOOK,
  RESEND_API,
  RESEND_AUDIENCE_ID,
} = env.data;

import {
  PG_DB_HOST,
  PG_DB_IDLE_TIMEOUT,
  PG_DB_MAX_CONNECTIONS,
  PG_DB_NAME,
  PG_DB_PASSWORD,
  PG_DB_PORT,
  PG_DB_SSL,
  PG_DB_USER,
} from '@/config/env';

type dbClient = {
  user: string;
  password: string | undefined;
  database: string;
  host: string;
  port: number;
  ssl: boolean;
  max: number;
  idleTimeoutMillis: number;
  connectionTimeoutMillis: number;
};

export const pgDbConfig: dbClient = {
  user: PG_DB_USER,
  password: PG_DB_PASSWORD,
  database: PG_DB_NAME,
  host: PG_DB_HOST,
  port: PG_DB_PORT,
  ssl: PG_DB_SSL,
  max: PG_DB_MAX_CONNECTIONS,
  idleTimeoutMillis: PG_DB_IDLE_TIMEOUT,
  connectionTimeoutMillis: 2000,
};

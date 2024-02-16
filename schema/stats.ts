import { z } from 'zod';

export const statSchema = z.object({
  visitors: z.number(),
  customers: z.number(),
  orders: z.number(),
});

export const cookieOptionsSchema = z.object({
  sameSite: z.enum(["none", "lax", "strict"]),
  path: z.string(),
  maxAge: z.number(),
  httpOnly: z.boolean(),
  secure: z.boolean(),
});

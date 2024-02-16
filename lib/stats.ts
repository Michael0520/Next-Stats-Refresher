"use server";

import { cookies } from "next/headers";
import { statSchema, cookieOptionsSchema } from '@/schema/stats';
import { z } from "zod";

type Stats = z.infer<typeof statSchema>;
type CookieOptions = z.infer<typeof cookieOptionsSchema>;

let stats: Stats = {
  visitors: 10320,
  customers: 4628,
  orders: 3000,
};

const cookieOptions: CookieOptions = cookieOptionsSchema.parse({
  sameSite: "none",
  path: "/",
  maxAge: 60 * 60 * 24 * 30, // 30 days
  httpOnly: true,
  secure: true,
});

export async function getStats(): Promise<Stats> {
  const statsCookie = cookies().get("stats");
  return statsCookie ? JSON.parse(statsCookie.value) : stats
}

async function refreshStat(statKey: keyof Stats): Promise<void> {
  const currentStats = await getStats();
  currentStats[statKey] += getRandomInt(1, 100);
  cookies().set("stats", JSON.stringify(currentStats), cookieOptions);
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const refreshVisitors = () => refreshStat('visitors');
export const refreshCustomers = () => refreshStat('customers');
export const refreshOrders = () => refreshStat('orders');
export const refreshAll = async (): Promise<void> => {
  const statKeys: (keyof Stats)[] = ['visitors', 'customers', 'orders'];
  const currentStats = await getStats();

  statKeys.forEach(key => {
    currentStats[key] += getRandomInt(1, 100);
  });

  cookies().set("stats", JSON.stringify(currentStats), cookieOptions);
};

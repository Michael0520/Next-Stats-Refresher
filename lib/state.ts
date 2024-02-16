"use server";

import { cookies } from "next/headers";

// 產生一個介於 min 和 max 之間的隨機整數
function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

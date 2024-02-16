"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export const Counter = ({ value }: { value: number }) => {
  const v = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(v, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    v.set(value);
  }, [v, value]);

  return <motion.span>{display}</motion.span>;
}

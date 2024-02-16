"use client";

import Image from "next/image";
import React, { ReactNode } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo({ children }: { children: ReactNode }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative size-auto  rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective

        </CardItem>
        <CardItem translateZ="100" className="mt-4 w-full">
          {children}
        </CardItem>
        <CardItem
          translateZ={20}
          as="button"
          className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
        >
          Hover to see the animation effects →
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}


import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Counter } from "@/components/counter"
import {
  getStats,
  refreshAll
} from "@/lib/stats";
import Highlight from "@/components/highlight";
import { ThreeDCardDemo } from "@/components/3d-card";

export default async function Home() {
  let { visitors, customers, orders } = await getStats();

  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS and Framer Motion.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          You can hover over the cards to see the 3D effect. Click the button to refresh the stats.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          GitHub
        </Link>

      </div>
      <div className="grid grid-cols-1 place-content-center place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full space-y-4">
          <ThreeDCardDemo>
            <Highlight trigger={visitors} duration={450} className="group">
              <div className="group-data-[highlight=on]:duration-[200ms] overflow-hidden rounded-lg border border-white/[0.15] bg-gray-900 px-3 py-5 text-sky-500 shadow transition duration-1000 group-data-[highlight=on]:bg-sky-500 group-data-[highlight=on]:text-white md:px-4">
                <dt className="truncate text-sm font-medium text-white/50">
                  Visitors
                </dt>
                <dd className="relative mt-1 origin-center truncate text-lg font-semibold tabular-nums md:tracking-tight">
                  <Counter value={visitors} />
                </dd>
              </div>
            </Highlight>

          </ThreeDCardDemo>
        </div>
        <div className="w-full space-y-4">
          <ThreeDCardDemo>
            <Highlight trigger={customers} duration={500} className="group">
              <div className="group-data-[highlight=on]:duration-[150ms] overflow-hidden rounded-lg border border-white/[0.15] bg-gray-900 px-3 py-5 text-rose-500 shadow transition duration-1000 group-data-[highlight=on]:border-rose-500 md:px-4">
                <dt className="truncate text-sm font-medium text-white/50">
                  Customers
                </dt>
                <dd className="relative mt-1 origin-center truncate text-lg font-semibold tabular-nums md:tracking-tight">
                  <Counter value={customers} />
                </dd>
              </div>
            </Highlight>

          </ThreeDCardDemo>
        </div>
        <div className="w-full space-y-4">
          <ThreeDCardDemo>
            <Highlight trigger={orders} duration={350} className="group">
              <div className="relative overflow-hidden rounded-lg bg-gray-900 px-3 py-5 text-green-500 shadow md:px-4">
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-lg border border-white/[0.15]">
                  <div className="aspect-square w-full rounded-full bg-green-500/50 opacity-0 group-data-[highlight=off]:animate-[fadeOut_750ms_forwards] group-data-[highlight=on]:animate-[ripple_250ms_cubic-bezier(0.09,.6,.36,1)_forwards]" />
                </div>

                <dt className="truncate text-sm font-medium text-white/50">
                  Orders
                </dt>
                <dd className="duration-[750ms] group-data-[highlight=on]:duration-[250ms] relative mt-1 origin-center truncate text-lg font-semibold tabular-nums transition group-data-[highlight=on]:text-white md:tracking-tight">
                  <Counter value={orders} />
                </dd>
              </div>
            </Highlight>

          </ThreeDCardDemo>
        </div>
      </div>

      <form action={refreshAll} className="mx-auto w-fit">
        <Button className="" size="lg" variant="default">
          Refresh All Stats
        </Button>
      </form>

    </div>
  );
}

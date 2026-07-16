"use client";

import Link from "next/link";
import { useCashbox } from "@/components/cashbox-provider";
import { ImageSlot } from "@/components/image-slot";
import { Accent, LiveDot } from "@/components/ui";
import { STATS } from "@/lib/content";
import { formatEuro } from "@/lib/format";

export function Hero() {
  const { balance } = useCashbox();

  return (
    <section className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 pt-16 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-tint px-3.5 py-1.5 text-[12.5px] font-semibold text-brand">
          The café suspendu, city-wide
        </div>

        <h1 className="mb-5.5 text-[40px] leading-[1.05] font-extrabold tracking-[-0.02em] text-ink sm:text-[56px] sm:leading-[1.02]">
          A coffee for someone you haven’t met yet.
        </h1>

        <p className="mb-7.5 max-w-[520px] text-lg leading-relaxed">
          Pay for Brussels brings the <Accent>café suspendu</Accent> into the digital age.
          Your donation goes into a <Accent>shared, public account</Accent>. People in need
          spend it with a simple card, at neighborhood shops, <Accent>with dignity</Accent>.
        </p>

        <div className="mb-7 flex flex-wrap gap-3.5">
          <Link
            href="/#donate"
            className="rounded-xl bg-brand px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Donate now
          </Link>
          <Link
            href="/#transparency"
            className="rounded-xl border-[1.5px] border-brand-soft px-6.5 py-3.5 text-base font-semibold text-brand transition-colors hover:border-brand"
          >
            See where the money goes
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-4.5 text-[13.5px] font-medium">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2">
            <LiveDot />
            <span className="text-ink">
              <strong className="font-semibold">€{formatEuro(balance)}</strong> in the
              account right now
            </span>
          </div>
          <span className="text-faint">
            {STATS.partnerShops} partner shops · {STATS.activeCards} active cards
          </span>
        </div>
      </div>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[22px] shadow-[0_12px_40px_rgba(59,51,199,0.10)]">
        <ImageSlot label="Illustrated Brussels café / street scene" />
      </div>
    </section>
  );
}

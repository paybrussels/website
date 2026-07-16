"use client";

import Link from "next/link";
import { useState } from "react";
import { ImageSlot } from "@/components/image-slot";
import { Accent, SectionHeading } from "@/components/ui";
import { MAP_PINS, PLACE_FILTERS, PLACES } from "@/lib/content";

type Filter = (typeof PLACE_FILTERS)[number];

export function Places() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = PLACES.filter((place) => filter === "All" || place.type === filter);

  return (
    <section id="places" className="mx-auto max-w-[1200px] px-6 py-22">
      <SectionHeading title="Where the network lives" className="mb-10">
        Give or spend at these Brussels shops. Look for the <Accent>BPay sticker</Accent> in
        the window.
      </SectionHeading>

      <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-line">
          <ImageSlot label="Map of Brussels" />
          {MAP_PINS.map((pin, index) => (
            <span
              key={index}
              aria-hidden
              className="absolute h-[15px] w-[15px] rounded-full border-[3px] border-white bg-brand shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
              style={{ left: pin.left, top: pin.top }}
            />
          ))}
        </div>

        <div>
          <div className="mb-4.5 flex flex-wrap gap-2">
            {PLACE_FILTERS.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
                className={`cursor-pointer rounded-full border-[1.5px] px-3.5 py-1.5 text-[13px] font-semibold ${
                  filter === option
                    ? "border-brand bg-brand text-white"
                    : "border-line bg-white text-body"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            {visible.map((place) => (
              <div
                key={place.name}
                className="flex items-center justify-between gap-3 rounded-[14px] border border-line bg-white px-4.5 py-3.5"
              >
                <div>
                  <div className="text-[15px] font-semibold text-ink">{place.name}</div>
                  <div className="text-[12.5px] text-faint">
                    {place.type} · {place.hood}
                  </div>
                </div>
                <span className="rounded-full bg-brand-tint px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap text-brand">
                  don suspendu
                </span>
              </div>
            ))}

            <div className="flex items-center justify-between gap-3 rounded-[14px] bg-brand p-5 text-white">
              <span className="text-[15px] font-semibold">Run a shop? Join the network</span>
              <Link
                href="/merchants"
                className="rounded-[10px] bg-white px-3.5 py-2 text-[13px] font-semibold text-brand"
              >
                Join
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { FAQ_GROUPS } from "@/lib/content";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("0-0");

  return (
    <>
      {FAQ_GROUPS.map((group, groupIndex) => (
        <div key={group.title} className="mb-8.5">
          <div className="mb-3.5 text-[13px] font-bold tracking-[0.05em] text-brand uppercase">
            {group.title}
          </div>

          <div className="flex flex-col gap-2.5">
            {group.items.map((item, itemIndex) => {
              const id = `${groupIndex}-${itemIndex}`;
              const open = openId === id;

              return (
                <div
                  key={id}
                  className="overflow-hidden rounded-[14px] border border-line bg-white"
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : id)}
                      aria-expanded={open}
                      aria-controls={`faq-panel-${id}`}
                      className="flex w-full cursor-pointer items-center justify-between gap-3.5 px-5.5 py-4.5 text-left text-base font-semibold text-ink"
                    >
                      <span>{item.q}</span>
                      <span aria-hidden className="flex-none text-xl text-brand">
                        {open ? "−" : "+"}
                      </span>
                    </button>
                  </h3>

                  {open && (
                    <div
                      id={`faq-panel-${id}`}
                      className="px-5.5 pb-5 text-[15px] leading-[1.65]"
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}

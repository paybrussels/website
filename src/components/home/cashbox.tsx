"use client";

import Link from "next/link";
import { useCashbox } from "@/components/cashbox-provider";
import { LiveDot, SectionHeading } from "@/components/ui";
import { CHART_MAX, MONTH_LABELS, MONTHLY_FLOWS, STATS } from "@/lib/content";
import { formatEuro, timeAgo } from "@/lib/format";

export function Cashbox() {
  const { balance } = useCashbox();

  return (
    <section id="transparency" className="mx-auto max-w-[1200px] px-6 py-22">
      <div className="mb-4 flex justify-center">
        <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent">
          <LiveDot />
          LIVE
        </span>
      </div>

      <SectionHeading title="The open cashbox" className="mb-12">
        Every donation, every payout, in public. This is the actual account, updated live.
      </SectionHeading>

      <div className="grid items-start gap-6 lg:grid-cols-2">
        <div className="rounded-[22px] bg-brand p-9 text-white shadow-[0_16px_44px_rgba(59,51,199,0.18)]">
          <div className="mb-2.5 text-[13.5px] font-medium tracking-wide text-brand-soft">
            Donation account balance
          </div>
          <div className="mb-5 text-[44px] leading-none font-extrabold tracking-[-0.02em] tabular-nums sm:text-[56px]">
            €{formatEuro(balance)}
          </div>

          <div className="mb-4.5 flex flex-wrap gap-5.5 border-y border-white/15 py-4.5">
            <Stat value={STATS.allTimeDonated} label="donated all-time" />
            <Stat value={STATS.spentByCardholders} label="spent by cardholders" />
            <Stat value={STATS.activeCards} label="active cards this week" />
          </div>

          <div className="mb-5.5 text-[15px] text-brand-tint">
            ≈ <strong className="font-semibold text-white">1,600 coffees</strong> or{" "}
            <strong className="font-semibold text-white">500 warm meals</strong> 🎉
          </div>

          <Link
            href="/#donate"
            className="block w-full rounded-xl bg-white py-3.5 text-center text-base font-bold text-brand transition-colors hover:bg-brand-tint"
          >
            Donate
          </Link>
        </div>

        <LiveFeed />
      </div>

      <MonthlyChart />
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-[19px] font-bold tabular-nums">{value}</div>
      <div className="text-xs text-brand-soft">{label}</div>
    </div>
  );
}

function LiveFeed() {
  const { feed, now } = useCashbox();

  return (
    <div className="overflow-hidden rounded-[22px] border border-line bg-white">
      <div className="flex items-center justify-between border-b border-line px-6 py-5">
        <span className="text-[15px] font-bold text-ink">Live transactions</span>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
          <LiveDot className="h-[7px] w-[7px]" />
          updating
        </span>
      </div>

      <ul className="max-h-[360px] overflow-hidden">
        {feed.map((entry) => {
          const isIncoming = entry.direction === "in";

          return (
            <li
              key={entry.id}
              className={`flex items-center gap-3.5 border-b border-line-soft px-6 py-3.5 ${
                entry.isFresh ? "bp-fade-in" : ""
              }`}
            >
              <span
                aria-hidden
                className={`flex h-[34px] w-[34px] flex-none items-center justify-center rounded-[10px] text-[15px] font-bold ${
                  isIncoming
                    ? "bg-success-tint text-success"
                    : "bg-accent-tint text-accent"
                }`}
              >
                {isIncoming ? "↓" : "↑"}
              </span>

              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-medium text-ink">
                  {entry.description}
                </div>
                <div className="text-xs text-faint">
                  {entry.fixedLabel ??
                    (entry.timestamp ? timeAgo(entry.timestamp, now) : "")}
                </div>
              </div>

              <span
                className={`text-[14.5px] font-bold whitespace-nowrap tabular-nums ${
                  isIncoming ? "text-success" : "text-body"
                }`}
              >
                {isIncoming ? "+ €" : "− €"}
                {formatEuro(Math.abs(entry.amount))}
              </span>
            </li>
          );
        })}
      </ul>

      <p className="bg-canvas px-6 py-3 text-xs leading-normal text-faint">
        Donors appear only if they opt in. Cardholder spending is shown aggregated only,
        never per person, never per purchase.
      </p>
    </div>
  );
}

function MonthlyChart() {
  return (
    <div className="mt-6 rounded-[22px] border border-line bg-white px-8.5 py-7.5">
      <div className="mb-6.5 flex flex-wrap items-center justify-between gap-3.5">
        <div>
          <div className="text-base font-bold text-ink">Donations in vs. payouts out</div>
          <div className="text-[13px] text-faint">Last 12 months</div>
        </div>

        <div className="flex items-center gap-4.5 text-[13px] font-medium">
          <LegendSwatch className="bg-brand" label="Donated" />
          <LegendSwatch className="bg-accent" label="Paid out" />
          <a href="/ledger.csv" className="font-semibold text-brand hover:text-brand-dark">
            Download the full ledger (CSV)
          </a>
        </div>
      </div>

      <div className="flex h-[170px] items-end gap-2.5">
        {MONTHLY_FLOWS.map(([donated, paidOut], index) => (
          <div
            key={index}
            className="flex h-full flex-1 flex-col items-center gap-2"
            title={`${MONTH_LABELS[index]}: €${donated} in, €${paidOut} out`}
          >
            <div className="flex w-full flex-1 items-end justify-center gap-1">
              <div
                className="w-[42%] rounded-t bg-brand"
                style={{ height: `${(donated / CHART_MAX) * 100}%` }}
              />
              <div
                className="w-[42%] rounded-t bg-accent"
                style={{ height: `${(paidOut / CHART_MAX) * 100}%` }}
              />
            </div>
            <span className="text-[11px] text-faint">{MONTH_LABELS[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LegendSwatch({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span aria-hidden className={`h-[11px] w-[11px] rounded-[3px] ${className}`} />
      {label}
    </span>
  );
}

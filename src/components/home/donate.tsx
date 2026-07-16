"use client";

import { useState } from "react";
import { Accent, SectionHeading } from "@/components/ui";
import {
  AMOUNT_CHIPS,
  DONATION_URL,
  MAX_DONATION,
  MIN_DONATION,
} from "@/lib/content";
import { formatEuro } from "@/lib/format";

/**
 * TODO: confirm the destination reads `amount`; rename the param if not.
 */
function donationLink(amount: number): string {
  const url = new URL(DONATION_URL);
  url.searchParams.set("amount", String(amount));
  return url.toString();
}

export function Donate() {
  const [preset, setPreset] = useState<number | null>(10);
  const [custom, setCustom] = useState("");

  const customAmount = Number.parseFloat(custom);
  const amount = preset ?? customAmount;
  const valid =
    Number.isFinite(amount) && amount >= MIN_DONATION && amount <= MAX_DONATION;

  return (
    <section id="donate" className="border-y border-line bg-white">
      <div className="mx-auto max-w-[720px] px-6 py-22">
        <SectionHeading title="Top up the cashbox" className="mb-10.5">
          Pick an amount. That’s it.
        </SectionHeading>

        <div className="rounded-[20px] border border-line bg-canvas p-8.5">
          <fieldset>
            <legend className="mb-3 text-[13px] font-semibold text-ink">Amount</legend>
            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-5">
              {AMOUNT_CHIPS.map((chip) => {
                const isOther = chip.value === "other";
                const selected = isOther ? preset === null : preset === chip.value;

                return (
                  <button
                    key={chip.label}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setPreset(isOther ? null : (chip.value as number))}
                    className={`cursor-pointer rounded-xl border-[1.5px] px-1 py-3.5 text-center ${
                      selected
                        ? "border-brand bg-brand-tint text-brand"
                        : "border-line bg-white text-ink"
                    }`}
                  >
                    <div className="text-[17px] font-bold">{chip.label}</div>
                    <div
                      className={`mt-0.5 text-[10.5px] font-medium ${
                        selected ? "text-brand-mid" : "text-faint"
                      }`}
                    >
                      {chip.equivalent}
                    </div>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {preset === null && (
            <div className="mt-4">
              <label
                htmlFor="custom-amount"
                className="mb-1.5 block text-[13px] font-semibold text-ink"
              >
                Your amount
              </label>
              <div className="flex items-center gap-2 rounded-xl border-[1.5px] border-brand bg-white px-3.5 py-3 focus-within:border-brand">
                <span aria-hidden className="text-[17px] font-bold text-brand">
                  €
                </span>
                <input
                  id="custom-amount"
                  type="number"
                  inputMode="decimal"
                  autoFocus
                  min={MIN_DONATION}
                  max={MAX_DONATION}
                  step="0.01"
                  value={custom}
                  onChange={(event) => setCustom(event.target.value)}
                  placeholder="100"
                  className="w-full text-[17px] font-bold text-ink placeholder:font-medium placeholder:text-faint focus:outline-none"
                />
              </div>
              {custom !== "" && !valid && (
                <p className="mt-1.5 text-[13px] text-accent">
                  Enter an amount between €{MIN_DONATION} and €
                  {MAX_DONATION.toLocaleString("en-US")}.
                </p>
              )}
            </div>
          )}

          {valid ? (
            <a
              href={donationLink(amount)}
              className="mt-6.5 block w-full rounded-xl bg-brand py-4 text-center text-base font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Donate €{Number.isInteger(amount) ? amount : formatEuro(amount)}
            </a>
          ) : (
            <span
              aria-disabled
              className="mt-6.5 block w-full cursor-not-allowed rounded-xl bg-brand/40 py-4 text-center text-base font-bold text-white"
            >
              Donate
            </span>
          )}

          <p className="mt-4 text-center text-xs leading-normal text-faint">
            A flat 4% covers operations and the payment rails. The remaining{" "}
            <Accent>96% goes straight to cardholders</Accent>.
          </p>
        </div>
      </div>
    </section>
  );
}

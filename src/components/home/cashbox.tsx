import Link from "next/link";
import { LiveDot, SectionHeading } from "@/components/ui";
import { CASHBOX_EMBED_URL } from "@/lib/content";

export function Cashbox() {
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

      <div className="overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_16px_44px_rgba(59,51,199,0.10)]">
        <iframe
          src={CASHBOX_EMBED_URL}
          title="Pay for Brussels — Cagnotte"
          height={420}
          loading="lazy"
          className="block w-full border-0"
        />
        <p className="border-t border-line bg-canvas px-6 py-3 text-xs leading-normal text-faint">
          Donors appear only if they opt in. Cardholder spending is shown aggregated only,
          never per person, never per purchase.
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/#donate"
          className="rounded-xl bg-brand px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Donate
        </Link>
      </div>
    </section>
  );
}

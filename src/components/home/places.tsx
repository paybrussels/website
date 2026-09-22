import Link from "next/link";
import { Accent, SectionHeading } from "@/components/ui";
import { MERCHANT_MAP_EMBED_URL } from "@/lib/content";

export function Places() {
  return (
    <section id="places" className="mx-auto max-w-[1200px] px-6 py-22">
      <SectionHeading title="Where the network lives" className="mb-10">
        Give or spend at these Brussels shops. Look for the <Accent>BPay sticker</Accent> in
        the window.
      </SectionHeading>

      <div className="overflow-hidden rounded-[20px] border border-line bg-white">
        <iframe
          src={MERCHANT_MAP_EMBED_URL}
          title="Pay for Brussels — Merchant map"
          height={480}
          loading="lazy"
          className="block w-full border-0"
        />
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 rounded-[14px] bg-brand p-5 text-white">
        <span className="text-[15px] font-semibold">Run a shop? Join the network</span>
        <Link
          href="/merchants"
          className="rounded-[10px] bg-white px-3.5 py-2 text-[13px] font-semibold whitespace-nowrap text-brand"
        >
          Join
        </Link>
      </div>
    </section>
  );
}

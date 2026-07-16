import { ImageSlot } from "@/components/image-slot";
import { Accent, SectionHeading } from "@/components/ui";
import { NEXT_MEETUP } from "@/lib/content";

const ACTIONS = [
  { label: "Volunteer at events", href: "/contact" },
  { label: "Introduce us to a shop", href: "/contact" },
  { label: "Spread the word", href: "/contact" },
];

export function GetInvolved() {
  return (
    <section id="get-involved" className="border-y border-line bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-22">
        <SectionHeading title="Let’s hang out" className="mb-11">
          Once a month we meet at a partner shop that does <Accent>don suspendu</Accent>.
          Donors, merchants, cardholders, curious neighbors. Be where the action is.
        </SectionHeading>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col justify-center rounded-[20px] border border-line bg-canvas p-8">
            <div className="mb-2.5 text-[12.5px] font-semibold tracking-wider text-accent uppercase">
              Next meetup
            </div>
            <div className="mb-1.5 text-[26px] font-bold text-ink">{NEXT_MEETUP.when}</div>
            <div className="mb-1 text-[15.5px]">
              <Accent>{NEXT_MEETUP.venue}</Accent>, {NEXT_MEETUP.address}
            </div>
            <p className="mb-5.5 text-sm">Coffee’s on the suspended tab. Come say hi.</p>
            <a
              href="/meetup.ics"
              className="self-start rounded-xl bg-brand px-5.5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Add to calendar
            </a>
          </div>

          <div className="flex flex-col items-center justify-center rounded-[20px] bg-brand p-7.5 text-center text-white">
            <div className="mb-4 text-lg font-bold">Join the WhatsApp group</div>
            <div className="mb-4 h-[130px] w-[130px] overflow-hidden rounded-[14px] bg-white">
              <ImageSlot label="QR" />
            </div>
            <p className="text-[13.5px] text-brand-soft">
              Scan to hop in, or ask us at the next meetup.
            </p>
          </div>
        </div>

        <div className="mt-6.5 flex flex-wrap justify-center gap-6 text-[14.5px] font-medium">
          {ACTIONS.map((action) => (
            <a
              key={action.label}
              href={action.href}
              className="text-brand hover:text-brand-dark"
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

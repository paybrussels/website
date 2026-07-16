import Link from "next/link";
import { Accent, SectionHeading } from "@/components/ui";
import { HOW_IT_WORKS } from "@/lib/content";

const FAQ_SHORTCUTS = [
  "How is the weekly allowance set?",
  "Who decides who gets a card?",
  "What can the cards buy?",
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-line bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-22">
        <SectionHeading title="How a suspended donation works" className="mb-13">
          From the Naples tradition of <Accent>caffè sospeso</Accent>: pay for two coffees,
          leave one “suspended” for a stranger. We made it work city-wide.
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS.map((step) => (
            <div
              key={step.n}
              className="rounded-[18px] border border-line bg-canvas px-6.5 py-7.5"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-brand text-[17px] font-bold text-white">
                  {step.n}
                </span>
                <span
                  aria-hidden
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint text-brand"
                >
                  {step.icon}
                </span>
              </div>
              <h3 className="mb-2.5 text-[21px] font-bold text-ink">{step.title}</h3>
              <p className="text-[15px] leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8.5 rounded-[18px] bg-brand px-10 py-8.5">
          <div className="text-2xl leading-snug font-bold text-white">
            No queues. No vouchers. No stigma.
            <span className="mt-1.5 block text-base font-normal text-brand-soft">
              Just a card that works, in shops that welcome everyone.
            </span>
          </div>
        </div>

        <div className="mt-6.5 flex flex-wrap gap-5.5 text-sm font-medium">
          {FAQ_SHORTCUTS.map((question) => (
            <Link key={question} href="/faq" className="text-brand hover:text-brand-dark">
              {question}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

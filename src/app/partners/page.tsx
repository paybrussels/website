import type { Metadata } from "next";
import { SignupForm } from "@/components/signup-form";
import { Accent, Breadcrumb } from "@/components/ui";
import { PARTNER_CARDS } from "@/lib/content";

export const metadata: Metadata = {
  title: "For social organizations",
  description:
    "You already reach the people digital payments leave behind. We hand you the cards, keep them topped up from the shared account, and stay out of the way.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="mx-auto max-w-[1100px] px-6 pt-19 pb-10">
        <Breadcrumb current="For social organizations" />
        <h1 className="mb-5 max-w-[820px] text-[38px] font-extrabold tracking-[-0.02em] text-ink sm:text-[52px]">
          You know who needs a card. We make the card work.
        </h1>
        <p className="mb-7.5 max-w-[620px] text-[19px] leading-relaxed">
          You already reach the people digital payments leave behind. We hand you the cards,
          keep them topped up from the shared account, and stay out of the way,{" "}
          <Accent>dignity first, always</Accent>.
        </p>
        <a
          href="#partner-signup"
          className="inline-block rounded-xl bg-brand px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Talk to us
        </a>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pt-5 pb-15">
        <div className="grid gap-5 md:grid-cols-3">
          {PARTNER_CARDS.map((card) => (
            <div key={card.title} className="rounded-[18px] border border-line bg-white p-7">
              <div aria-hidden className="mb-3 text-[26px]">
                {card.icon}
              </div>
              <div className="mb-2 text-lg font-bold text-ink">{card.title}</div>
              <p className="text-[14.5px] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="partner-signup" className="border-t border-line bg-white">
        <div className="mx-auto max-w-[560px] px-6 py-18">
          <h2 className="mb-2 text-center text-[30px] font-extrabold text-ink">
            Get in touch
          </h2>
          <p className="mb-7.5 text-center text-[15px]">
            Tell us who you work with and we’ll set up a call.
          </p>
          <SignupForm
            className="bg-canvas"
            submitLabel="Send"
            fields={[
              { name: "organization", label: "Organization", placeholder: "Your organization" },
              { name: "contact", label: "Contact", placeholder: "you@org.be", type: "email" },
              {
                name: "who",
                label: "Who you support",
                placeholder: "A sentence or two",
                type: "textarea",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}

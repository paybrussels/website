import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq-accordion";
import { Breadcrumb } from "@/components/ui";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Fees, eligibility, what we publish, what we keep private, and how Pay for Brussels handles the legal side.",
};

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-[820px] px-6 pt-19 pb-15">
      <Breadcrumb current="FAQ" />
      <h1 className="mb-10 text-[36px] font-extrabold tracking-[-0.02em] text-ink sm:text-[48px]">
        Questions, answered
      </h1>
      <FaqAccordion />
    </section>
  );
}

import type { Metadata } from "next";
import { SignupForm } from "@/components/signup-form";
import { Accent, Breadcrumb } from "@/components/ui";
import { MERCHANT_STEPS, MERCHANT_VALUES } from "@/lib/content";

export const metadata: Metadata = {
  title: "For merchants",
  description:
    "Take digital payments with low-to-no transaction fees, get paid straight from the donation account, and put a sticker in your window that means something.",
};

export default function MerchantsPage() {
  return (
    <>
      <section className="mx-auto max-w-[1100px] px-6 pt-19 pb-10">
        <Breadcrumb current="For merchants" />
        <h1 className="mb-5 max-w-[760px] text-[38px] font-extrabold tracking-[-0.02em] text-ink sm:text-[52px]">
          Accept payments. Change your street.
        </h1>
        <p className="mb-7.5 max-w-[620px] text-[19px] leading-relaxed">
          Take digital payments with <Accent>low-to-no transaction fees</Accent>, get paid
          straight from the donation account, and put a sticker in your window that actually
          means something.
        </p>
        <a
          href="#merchant-signup"
          className="inline-block rounded-xl bg-brand px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Join the network
        </a>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pt-5 pb-15">
        <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
          {MERCHANT_VALUES.map((value) => (
            <div key={value.title} className="rounded-2xl border border-line bg-white p-6">
              <div aria-hidden className="mb-2.5 text-[26px]">
                {value.icon}
              </div>
              <div className="mb-1.5 text-base font-bold text-ink">{value.title}</div>
              <p className="text-sm leading-normal">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto max-w-[1100px] px-6 py-18">
          <h2 className="mb-8.5 text-center text-[32px] font-extrabold text-ink">
            How it works for shops
          </h2>
          <div className="grid gap-5.5 md:grid-cols-3">
            {MERCHANT_STEPS.map((step) => (
              <div key={step.n} className="rounded-2xl border border-line bg-canvas p-6.5">
                <span className="mb-3.5 flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-brand font-bold text-white">
                  {step.n}
                </span>
                <div className="mb-2 text-[17px] font-bold text-ink">{step.title}</div>
                <p className="text-[14.5px] leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="merchant-signup" className="mx-auto max-w-[560px] px-6 py-18">
        <h2 className="mb-2 text-center text-[30px] font-extrabold text-ink">
          Sign your shop up
        </h2>
        <p className="mb-7.5 text-center text-[15px]">
          We’ll be in touch within a couple of days.
        </p>
        <SignupForm
          className="bg-white"
          submitLabel="Request a terminal"
          fields={[
            { name: "shop", label: "Shop name", placeholder: "Café Belga" },
            { name: "contact", label: "Contact", placeholder: "you@shop.be", type: "email" },
            { name: "hood", label: "Neighborhood", placeholder: "Saint-Gilles" },
          ]}
        />
      </section>
    </>
  );
}

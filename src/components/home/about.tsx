import { ImageSlot } from "@/components/image-slot";
import { Accent } from "@/components/ui";
import { STATS, TEAM } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1100px] px-6 py-22">
      <h2 className="mb-8 text-center text-[32px] font-extrabold tracking-[-0.015em] text-ink sm:text-[40px]">
        From Brussels Pay to Pay for Brussels
      </h2>

      <div className="mx-auto mb-12 flex max-w-[720px] flex-col gap-5 text-[17px] leading-[1.7]">
        <p>
          We started as <Accent>Brussels Pay</Accent>, asking a big question: could Brussels
          have its own payment network, cheaper for merchants, independent, local? We spent a
          year on the legal and technical work: QR codes, terminals, an app, cards. We
          processed <Accent>~€125k across ~10k transactions</Accent>.
        </p>
        <p>
          Along the way we found the answer to a better question. A payment network is a
          means. Helping the people digital payments leave behind,{" "}
          <Accent>that’s a purpose</Accent>. By helping merchants, we could help people
          without access to digital money take part in the life of their own city.
        </p>
        <p>
          The payment network, the cards and terminals, became{" "}
          <a
            href="https://citizenpay.eu"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand underline"
          >
            Citizen Pay
          </a>
          . And we became <Accent>Pay for Brussels</Accent>, powered by{" "}
          <a
            href="https://lacaisse.eu"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-brand underline"
          >
            La Caisse
          </a>
          . Same rails, new destination: a suspended-donation system for the whole city, run
          in the open.
        </p>
      </div>

      <div className="mb-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {TEAM.map((member) => (
          <div key={member.slot} className="text-center">
            <div className="mb-3 aspect-square w-full overflow-hidden rounded-2xl border border-line">
              <ImageSlot label={member.name} />
            </div>
            <div className="text-[15px] font-semibold text-ink">{member.name}</div>
          </div>
        ))}
      </div>

      <p className="mx-auto max-w-[720px] rounded-2xl border border-line bg-canvas px-6.5 py-5.5 text-center text-[15px] leading-relaxed">
        Kickstarted by <Accent>{STATS.kickstartDonors} donors</Accent> who raised{" "}
        <Accent>{STATS.kickstartRaised}</Accent> through a{" "}
        <a href="/growfunding" className="font-semibold text-brand underline">
          growfunding
        </a>{" "}
        campaign.
      </p>
    </section>
  );
}

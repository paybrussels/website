import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Breadcrumb } from "@/components/ui";
import {
  ORGANIZATION,
  PRIVACY_CONTACT_EMAIL,
  PRIVACY_LAST_UPDATED,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What personal data Brussels Pay ASBL holds for donors, cardholders, shops and visitors, why we hold it, and how to get it changed or deleted.",
};

function H2({ children }: { children: ReactNode }) {
  return <h2 className="mt-10 mb-3 text-[22px] font-bold text-ink">{children}</h2>;
}

function List({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-3 flex list-disc flex-col gap-2.5 pl-5 marker:text-faint">
      {children}
    </ul>
  );
}

function Lead({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-[820px] px-6 pt-19 pb-15">
      <Breadcrumb current="Privacy" />
      <h1 className="mb-3 text-[36px] font-extrabold tracking-[-0.02em] text-ink sm:text-[48px]">
        Privacy
      </h1>
      <p className="mb-8 text-[13px] font-semibold text-faint">
        Last updated {PRIVACY_LAST_UPDATED}
      </p>

      <p className="text-[16.5px] leading-relaxed">
        Pay for Brussels is run by {ORGANIZATION.name}, a non-profit registered at{" "}
        {ORGANIZATION.address}, VAT {ORGANIZATION.vat}. We are the controller of the
        personal data described on this page.
      </p>
      <p className="mt-3.5 text-[16.5px] leading-relaxed">
        We collect as little as the job allows, and we publish only what the
        transparency promise needs. Here is the whole picture, in plain words.
      </p>

      <H2>What we collect, and why</H2>
      <List>
        <li>
          <Lead>If you donate.</Lead> The amount and date of your donation. Your name
          and email address only if you give them to us on the donation page. And
          whether you opted in to appear by name on the public ledger. We process this
          to carry out the donation itself, for our legitimate interest in keeping
          proper accounts, and because the law obliges us to keep accounting records.
        </li>
        <li>
          <Lead>If you hold a card.</Lead> Cards are issued to people supported by a
          partner social organization. For each cardholder we hold the identification
          needed to issue a card, and the spending on that card. Spending is never
          published per person or per purchase, only as an aggregate. We process this
          to perform the card agreement.
        </li>
        <li>
          <Lead>If you sign up as a shop or a social organization.</Lead> The shop or
          organization name, the contact email, the neighborhood, and whatever you
          write in the message. We process this to take the steps you asked for before
          we enter into a contract together.
        </li>
        <li>
          <Lead>Newsletter.</Lead> There isn’t one, and we do not send marketing
          email.
        </li>
        <li>
          <Lead>If you just visit the site.</Lead> We set no cookies and run no
          analytics. The fonts are bundled with the site, so your browser makes no
          request to Google Fonts. Two frames on this site, the live account and the
          merchant map, are served from paybrussels.lacaisse.eu, so your browser loads
          those directly from La Caisse. And if you join our WhatsApp group, that group
          lives on WhatsApp (Meta) and their privacy policy applies there, not ours.
        </li>
      </List>

      <H2>Who handles data for us</H2>
      <p className="mt-3">A short list, and it stays short:</p>
      <List>
        <li>
          <Lead>Google (Google Workspace)</Lead> for our email and documents: form
          submissions and correspondence are stored in our Google Workspace.
        </li>
        <li>
          <Lead>La Caisse (lacaisse.eu), by Citizen Pay</Lead>: treasury management,
          the donation account, card issuing and the public ledger.
        </li>
        <li>
          <Lead>The bank</Lead>, the payment institution the donation account runs on,
          as the regulated banking rails require.
        </li>
      </List>
      <p className="mt-3.5">
        We do not sell your data. We share it with nobody else, except where the law
        requires us to.
      </p>

      <H2>What is public</H2>
      <p className="mt-3">
        The open cashbox is the point of the project, so some of this is out in the
        open on purpose:
      </p>
      <List>
        <li>the live balance of the donation account;</li>
        <li>every donation, anonymised unless the donor opted in to be named;</li>
        <li>every payout to a shop;</li>
        <li>the full transaction history, live on our home page.</li>
      </List>
      <p className="mt-3.5">
        Cardholder spending is not in there. It never appears per person or per
        purchase, only aggregated. Dignity is the point.
      </p>

      <H2>How long we keep it</H2>
      <List>
        <li>
          Accounting records, including donations and payouts, for the period Belgian
          law requires: seven years.
        </li>
        <li>
          Signup form data until your request is handled, and a reasonable time after
          that in case we pick the conversation back up.
        </li>
        <li>
          Card data for the life of the card, plus the accounting period that follows
          it.
        </li>
        <li>Your ledger opt-in until you withdraw it.</li>
      </List>

      <H2>Your rights</H2>
      <p className="mt-3">Over the data we hold about you, you can ask us to:</p>
      <List>
        <li>give you access to it, or a copy you can take elsewhere (portability);</li>
        <li>correct it if it is wrong;</li>
        <li>erase it, or restrict what we do with it;</li>
        <li>stop processing it, where you object to what we are doing;</li>
        <li>
          withdraw your consent, including the opt-in to be named on the public ledger,
          at any time. Withdrawing it takes your name off the ledger from then on.
        </li>
      </List>
      <p className="mt-3.5">
        To exercise any of these, write to {ORGANIZATION.name}, {ORGANIZATION.address}.
      </p>
      {PRIVACY_CONTACT_EMAIL !== null && (
        <p className="mt-3.5">
          You can also email us at{" "}
          <a
            href={`mailto:${PRIVACY_CONTACT_EMAIL}`}
            className="font-medium text-brand underline underline-offset-2 hover:text-brand-dark"
          >
            {PRIVACY_CONTACT_EMAIL}
          </a>
          .
        </p>
      )}
      <p className="mt-3.5">
        If you think we have got it wrong, you can complain to the Belgian Data
        Protection Authority (Gegevensbeschermingsautoriteit / Autorité de protection
        des données), Rue de la Presse 35, 1000 Brussels:{" "}
        <a
          href="https://www.dataprotectionauthority.be"
          target="_blank"
          rel="noreferrer"
          className="font-medium break-words text-brand underline underline-offset-2 hover:text-brand-dark"
        >
          dataprotectionauthority.be
        </a>
        .
      </p>

      <H2>Changes to this page</H2>
      <p className="mt-3">
        If what we do with data changes, we will update this page and change the date
        at the top. No silent edits.
      </p>
    </section>
  );
}

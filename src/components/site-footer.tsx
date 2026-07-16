import Link from "next/link";
import { NAV_LINKS, PARTNER_LINKS } from "@/lib/content";
import { LanguageSwitcher } from "./language-provider";
import { NewsletterForm } from "./newsletter-form";

const LEGAL_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Ledger", href: "/ledger" },
  { label: "Statutes", href: "/statutes" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-footer text-brand-soft">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 pt-14 pb-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-brand text-lg font-extrabold text-white">
              B
            </span>
            <span className="text-base font-bold text-white">Pay for Brussels</span>
          </div>
          <p className="mb-4 max-w-[260px] text-sm leading-relaxed">
            A local payment system for a more inclusive Brussels.
          </p>
          <LanguageSwitcher variant="dark" />
        </div>

        <div>
          <div className="mb-3.5 text-[13px] font-bold text-white">Navigate</div>
          <div className="flex flex-col gap-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-brand-soft hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-[13px] font-bold text-white">For partners</div>
          <div className="flex flex-col gap-2.5 text-sm">
            {PARTNER_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-brand-soft hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3.5 text-[13px] font-bold text-white">
            Monthly update from the cashbox
          </div>
          <NewsletterForm />
          <div className="flex flex-wrap gap-4 text-[13px]">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-footer-dim hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-footer-line px-6 py-5.5 text-center text-[12.5px] leading-[1.7] text-footer-faint">
        <div>
          Powered by{" "}
          <a
            href="https://lacaisse.eu"
            target="_blank"
            rel="noreferrer"
            className="text-brand-soft hover:text-white"
          >
            La Caisse
          </a>{" "}
          · Payments by{" "}
          <a
            href="https://citizenpay.eu"
            target="_blank"
            rel="noreferrer"
            className="text-brand-soft hover:text-white"
          >
            Citizen Pay
          </a>{" "}
          · pay.brussels
        </div>
        <div className="mt-1.5">
          Brussels Pay ASBL · Cantersteen 47, 1000 Brussels · VAT BE1017806251
        </div>
        <div className="mt-1.5">© 2026 Pay for Brussels · Built in Brussels</div>
      </div>
    </footer>
  );
}

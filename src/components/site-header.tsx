"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/content";
import { LanguageSwitcher } from "./language-provider";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center gap-8 px-6">
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <Image
            src="/bpay-wordmark.png"
            alt="Pay for Brussels"
            width={1920}
            height={1308}
            priority
            className="h-[26px] w-auto"
          />
        </Link>

        <nav className="hidden flex-1 gap-6 text-[14.5px] font-medium lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body transition-colors hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <div className="hidden sm:block">
            <LanguageSwitcher variant="light" />
          </div>

          <Link
            href="/#donate"
            className="rounded-[11px] bg-brand px-5 py-2.5 text-[14.5px] font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Donate
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[11px] border border-line text-ink lg:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-canvas px-6 py-4 lg:hidden">
          <ul className="flex flex-col gap-4 text-[15px] font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-body transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 sm:hidden">
            <LanguageSwitcher variant="light" />
          </div>
        </nav>
      )}
    </header>
  );
}

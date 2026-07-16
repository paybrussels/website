import Link from "next/link";
import type { ReactNode } from "react";

export function LiveDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`bp-pulse inline-block h-2 w-2 rounded-full bg-accent ${className}`}
    />
  );
}

export function SectionHeading({
  title,
  children,
  className = "",
}: {
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="mb-3.5 text-[32px] font-extrabold tracking-[-0.015em] text-ink sm:text-[40px]">
        {title}
      </h2>
      {children && (
        <p className="mx-auto max-w-[640px] text-[17px] leading-relaxed">{children}</p>
      )}
    </div>
  );
}

export function Accent({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-brand">{children}</strong>;
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <div className="mb-3.5 text-[13px] font-semibold text-faint">
      <Link href="/" className="text-faint hover:text-brand">
        Home
      </Link>{" "}
      / {current}
    </div>
  );
}

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { STATS } from "@/lib/content";

export type FeedEntry = {
  id: number;
  direction: "in" | "out";
  description: string;
  /** Positive for money in, negative for money out. */
  amount: number;
  /** Absent for entries pinned to a fixed label. */
  timestamp?: number;
  fixedLabel?: string;
  isFresh?: boolean;
};

type CashboxValue = {
  balance: number;
  feed: FeedEntry[];
  /** Ticks periodically so relative timestamps re-render. */
  now: number;
};

const CashboxContext = createContext<CashboxValue | null>(null);

const BALANCE_ANIMATION_MS = 1400;
const NEW_ENTRY_INTERVAL_MS = 4600;
const CLOCK_INTERVAL_MS = 12_000;
const MAX_FEED_ENTRIES = 7;

function pick<T>(options: readonly T[]): T {
  return options[Math.floor(Math.random() * options.length)];
}

function seedFeed(now: number): FeedEntry[] {
  return [
    {
      id: 1,
      direction: "in",
      description: "Donation received, Anonymous",
      amount: 10,
      timestamp: now - 2 * 60_000,
    },
    {
      id: 2,
      direction: "in",
      description: "Round-up at partner shop",
      amount: 0.6,
      timestamp: now - 14 * 60_000,
    },
    {
      id: 3,
      direction: "out",
      description: "Weekly allowance loaded, 32 cards",
      amount: -320,
      fixedLabel: "Mon 09:00",
    },
    {
      id: 4,
      direction: "out",
      description: "Payout to Café Belga, Saint-Gilles",
      amount: -84.2,
      fixedLabel: "Tue",
    },
    {
      id: 5,
      direction: "in",
      description: "Donation received, Marie L.",
      amount: 25,
      timestamp: now - 30 * 3_600_000,
    },
  ];
}

function randomEntry(id: number): FeedEntry {
  const template = pick([
    {
      direction: "in" as const,
      description: "Donation received, Anonymous",
      amount: pick([5, 10, 20]),
    },
    {
      direction: "in" as const,
      description: "Round-up at partner shop",
      amount: pick([0.4, 0.6, 0.85, 1.2]),
    },
    {
      direction: "in" as const,
      description: "Donation received, a neighbor",
      amount: pick([10, 15, 50]),
    },
    {
      direction: "out" as const,
      description: "Payout to bakery, Ixelles",
      amount: -pick([12.5, 18, 23.4]),
    },
  ]);

  return { ...template, id, timestamp: Date.now(), isFresh: true };
}

/**
 * Simulates the live donation account. Swap the effects below for a
 * subscription to the real ledger when the API is available.
 */
export function CashboxProvider({ children }: { children: ReactNode }) {
  const [balance, setBalance] = useState(0);
  const [feed, setFeed] = useState<FeedEntry[]>([]);
  const [now, setNow] = useState(0);
  const nextId = useRef(100);

  useEffect(() => {
    setFeed(seedFeed(Date.now()));
    setNow(Date.now());

    const start = performance.now();
    let frame = requestAnimationFrame(function step(current) {
      const progress = Math.min(1, (current - start) / BALANCE_ANIMATION_MS);
      const eased = 1 - Math.pow(1 - progress, 3);
      setBalance(STATS.seedBalance * eased);
      if (progress < 1) frame = requestAnimationFrame(step);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  const addEntry = useCallback(() => {
    const entry = randomEntry(++nextId.current);
    setFeed((current) => [entry, ...current].slice(0, MAX_FEED_ENTRIES));
    setBalance((current) => Math.max(0, current + entry.amount));
  }, []);

  useEffect(() => {
    const entries = setInterval(addEntry, NEW_ENTRY_INTERVAL_MS);
    const clock = setInterval(() => setNow(Date.now()), CLOCK_INTERVAL_MS);

    return () => {
      clearInterval(entries);
      clearInterval(clock);
    };
  }, [addEntry]);

  return (
    <CashboxContext.Provider value={{ balance, feed, now }}>
      {children}
    </CashboxContext.Provider>
  );
}

export function useCashbox(): CashboxValue {
  const value = useContext(CashboxContext);
  if (!value) {
    throw new Error("useCashbox must be used inside a CashboxProvider");
  }
  return value;
}

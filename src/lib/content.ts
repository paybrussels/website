export const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Transparency", href: "/#transparency" },
  { label: "Places", href: "/#places" },
  { label: "Get involved", href: "/#get-involved" },
  { label: "About", href: "/#about" },
] as const;

export const PARTNER_LINKS = [
  { label: "Become a merchant", href: "/merchants" },
  { label: "Social organizations", href: "/partners" },
  { label: "FAQ", href: "/faq" },
] as const;

export const STATS = {
  kickstartDonors: 32,
  kickstartRaised: "€5,015",
} as const;

export const HOW_IT_WORKS = [
  {
    n: "1",
    icon: "♡",
    title: "You give",
    body: "Donate directly, or round up when you pay at a partner shop. Every euro lands in one shared donation account.",
  },
  {
    n: "2",
    icon: "▢",
    title: "We issue cards",
    body: "Together with social organizations, we give payment cards to people who need them. Each card carries a weekly allowance.",
  },
  {
    n: "3",
    icon: "↗",
    title: "They spend locally",
    body: "Cardholders pay like anyone else, a coffee, a warm meal, groceries, at partner shops. Shops get paid out from the account.",
  },
] as const;

/** TODO: replace with the real donation link. */
export const DONATION_URL = "https://TODO.example";

export const GROWFUNDING_URL = "https://growfunding.be/en/projects/brusselspay";

export const WHATSAPP_URL = "https://chat.whatsapp.com/GUvHQRzWpZS3QfpUc1xjxY";

/** La Caisse embeds. Their CSP allows framing from pay.brussels and localhost:3000. */
export const CASHBOX_EMBED_URL =
  "https://paybrussels.lacaisse.eu/embed/account/33cd267debadc251ae2164694ff11ce8";

export const MERCHANT_MAP_EMBED_URL = "https://paybrussels.lacaisse.eu/embed/merchants/map";

export const ORGANIZATION = {
  name: "Brussels Pay ASBL",
  vat: "BE1017806251",
  address: "Cantersteen 47, 1000 Brussels",
} as const;

/** Email for privacy and data requests. Rendered only when set. */
export const PRIVACY_CONTACT_EMAIL: string | null = null;

export const PRIVACY_LAST_UPDATED = "23 September 2026";

export const AMOUNT_CHIPS = [
  { value: 5, label: "€5", equivalent: "≈ 2 coffees" },
  { value: 10, label: "€10", equivalent: "≈ 1 warm meal" },
  { value: 25, label: "€25", equivalent: "≈ a week" },
  { value: 50, label: "€50", equivalent: "≈ 2 weeks" },
  { value: "other", label: "Other", equivalent: "you choose" },
] as const;

export const MIN_DONATION = 1;
export const MAX_DONATION = 10_000;

export const NEXT_MEETUP = {
  when: "Thursday 24 July · 18:30",
  venue: "Café Belga",
  address: "Place Eugène Flagey 18, Ixelles",
} as const;

export const TEAM = [
  { name: "Kevin Sundar Raj", slot: "team-1" },
  { name: "Monica Garavana", slot: "team-2" },
  { name: "Marta Oliveira", slot: "team-3" },
  { name: "Jonas Boury", slot: "team-4" },
] as const;

export const MERCHANT_VALUES = [
  {
    icon: "↓",
    title: "Low-to-no fees",
    body: "Bank-to-bank rails instead of card schemes. Keep what card networks used to take.",
  },
  {
    icon: "⤵",
    title: "Direct payouts",
    body: "Paid out from the donation account, straight to your bank. No middle layer.",
  },
  {
    icon: "☺",
    title: "New regulars",
    body: "Cardholders and donors seek out shops in the network. You become a fixture.",
  },
  {
    icon: "★",
    title: "A sticker that means something",
    body: "The BPay sticker tells your street you welcome everyone.",
  },
] as const;

export const MERCHANT_STEPS = [
  {
    n: "1",
    title: "Get set up",
    body: "Use a Citizen Terminal or a simple QR code. Keep your existing terminal if you like.",
  },
  {
    n: "2",
    title: "Receive tokens",
    body: "Customers scan and pay from their banking app. Suspended-donation cards work exactly the same way.",
  },
  {
    n: "3",
    title: "Get paid out",
    body: "Funds settle to your bank through our banking integration. Clear, scheduled payouts, no surprises.",
  },
] as const;

export const PARTNER_CARDS = [
  {
    icon: "▢",
    title: "We issue the cards",
    body: "You identify who needs one. We handle issuance, top-ups, and replacements, all from the shared account.",
  },
  {
    icon: "↺",
    title: "Weekly allowance, automatic",
    body: "Set together with you and reloaded every week. No forms, no queues, no re-applying.",
  },
  {
    icon: "♡",
    title: "Dignity by design",
    body: "A card that looks and works like anyone else’s. No vouchers, no labels, no per-purchase tracking.",
  },
] as const;

export const FAQ_GROUPS = [
  {
    title: "Donating",
    items: [
      {
        q: "Are there fees?",
        a: "A flat 1% covers payment rails and operations. Everything else, 99%, reaches cardholders. No percentage taken by card networks, because there are none.",
      },
      {
        q: "Is my donation tax-deductible?",
        a: "We are working toward the Belgian tax-certificate threshold. For now donations are not deductible; we will publish certificates the moment we qualify.",
      },
      {
        q: "Can I stay anonymous?",
        a: "Yes. Donors appear in the public feed only if they opt in. By default you show as “Anonymous”.",
      },
    ],
  },
  {
    title: "Cards",
    items: [
      {
        q: "Who is eligible for a card?",
        a: "Cards are issued through partner social organizations who already know the people they support. We do not decide individually, they do.",
      },
      {
        q: "How is the weekly allowance set?",
        a: "Together with partner organizations, based on need and the health of the shared account. It is a weekly allowance, taken from the common pot.",
      },
      {
        q: "Where do the cards work?",
        a: "At any partner shop across Brussels, cafés, restaurants, groceries, bakeries. Look for the BPay sticker in the window.",
      },
    ],
  },
  {
    title: "Transparency",
    items: [
      {
        q: "What is published?",
        a: "The live account balance, every donation (anonymised unless opted in), and every payout to a shop. Plus a downloadable monthly ledger.",
      },
      {
        q: "What is kept private?",
        a: "Cardholder spending is never shown per person or per purchase, only aggregated. Dignity is the point.",
      },
    ],
  },
  {
    title: "Legal",
    items: [
      {
        q: "Do you need a payment license?",
        a: "The system is a limited network and built on regulated banking rails with a partner institution. Our year of legal work went into exactly this.",
      },
      {
        q: "How is my data handled?",
        a: "GDPR-compliant, minimal by design. We collect only what a donation or a card requires, and publish only what the transparency promise needs.",
      },
    ],
  },
] as const;

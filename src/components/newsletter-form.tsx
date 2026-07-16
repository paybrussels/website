"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // TODO: post to the newsletter endpoint once it exists.
    setSubscribed(true);
  }

  if (subscribed) {
    return (
      <p className="mb-4 text-sm text-white">
        You’re on the list. See you in the next update.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="your@email.be"
        className="min-w-0 flex-1 rounded-[10px] border border-footer-input-line bg-footer-input px-3.5 py-2.5 text-sm text-white placeholder:text-footer-faint focus:border-brand focus:outline-none"
      />
      <button
        type="submit"
        className="cursor-pointer rounded-[10px] bg-brand px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Subscribe
      </button>
    </form>
  );
}

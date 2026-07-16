"use client";

import { useState, type FormEvent } from "react";

export type SignupField = {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "textarea";
};

export function SignupForm({
  fields,
  submitLabel,
  className = "",
}: {
  fields: SignupField[];
  submitLabel: string;
  className?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // TODO: post to the intake endpoint once it exists.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`rounded-[20px] border border-line p-8 text-center ${className}`}
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success text-[28px] text-white">
          ✓
        </div>
        <div className="text-lg font-bold text-ink">Thanks, we’ve got it.</div>
        <p className="mt-2 text-[15px]">We’ll be in touch shortly.</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-[11px] border-[1.5px] border-line bg-white px-3.5 py-3 text-[15px] text-ink placeholder:text-faint focus:border-brand focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 rounded-[20px] border border-line p-7.5 ${className}`}
    >
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="mb-1.5 block text-[13px] font-semibold text-ink"
          >
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              rows={3}
              required
              placeholder={field.placeholder}
              className={`${inputClass} resize-y`}
            />
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type ?? "text"}
              required
              placeholder={field.placeholder}
              className={inputClass}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="mt-1.5 cursor-pointer rounded-xl bg-brand py-3.5 text-base font-bold text-white transition-colors hover:bg-brand-dark"
      >
        {submitLabel}
      </button>
    </form>
  );
}

/**
 * Placeholder standing in for artwork that has not been produced yet.
 * Replace each usage with next/image once the real asset exists.
 */
export function ImageSlot({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex h-full w-full items-center justify-center bg-brand-tint p-4 text-center text-[13px] font-medium text-brand-mid ${className}`}
    >
      {label}
    </div>
  );
}

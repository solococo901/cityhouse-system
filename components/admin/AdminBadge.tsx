import type { ReactNode } from "react";

type AdminBadgeVariant = "success" | "warning" | "danger" | "neutral";

type AdminBadgeProps = {
  children: ReactNode;
  variant?: AdminBadgeVariant;
};

export default function AdminBadge({
  children,
  variant = "neutral",
}: AdminBadgeProps) {
  const variantClass = {
    success: "border-emerald-200 bg-emerald-50 text-emerald-700",
    warning: "border-amber-200 bg-amber-50 text-amber-700",
    danger: "border-red-200 bg-red-50 text-red-700",
    neutral: "border-slate-200 bg-slate-50 text-slate-600",
  };

  return (
    <span
      className={[
        "inline-flex h-8 items-center rounded-full border px-3 text-xs font-bold",
        variantClass[variant],
      ].join(" ")}
    >
      {children}
    </span>
  );
}
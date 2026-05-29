import type { ButtonHTMLAttributes, ReactNode } from "react";

type AdminButtonVariant = "primary" | "secondary" | "danger";

type AdminButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: AdminButtonVariant;
};

export default function AdminButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: AdminButtonProps) {
  const variantClass = {
    primary:
      "border-[#C9A45C] bg-[#C9A45C] text-[#0F1A41] hover:bg-[#B89246]",
    secondary:
      "border-slate-200 bg-white text-[#0F1A41] hover:border-[#C9A45C] hover:text-[#C9A45C]",
    danger:
      "border-red-200 bg-red-50 text-red-600 hover:border-red-300 hover:bg-red-100",
  };

  return (
    <button
      className={[
        "inline-flex h-11 items-center justify-center gap-2 rounded-2xl border px-5 text-sm font-bold transition-all disabled:cursor-not-allowed disabled:opacity-50",
        variantClass[variant],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
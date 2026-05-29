import type { ReactNode } from "react";

type AdminCardProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function AdminCard({
  title,
  description,
  children,
}: AdminCardProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      {title || description ? (
        <div className="border-b border-slate-200 px-6 py-5">
          {title ? (
            <h2 className="text-lg font-bold text-[#0F1A41]">{title}</h2>
          ) : null}

          {description ? (
            <p className="mt-1 text-sm font-bold leading-6 text-slate-500">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="p-6">{children}</div>
    </section>
  );
}
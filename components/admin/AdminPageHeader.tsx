import type { ReactNode } from "react";

type AdminPageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function AdminPageHeader({
  eyebrow = "CITYHOUSE ADMIN",
  title,
  description,
  children,
}: AdminPageHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#C9A45C]">
          {eyebrow}
        </p>

        <h1 className="mt-2 text-2xl font-bold tracking-[-0.02em] text-[#0F1A41] md:text-3xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-2 max-w-2xl text-sm font-bold leading-6 text-slate-500">
            {description}
          </p>
        ) : null}
      </div>

      {children ? <div className="flex flex-wrap gap-3">{children}</div> : null}
    </div>
  );
}
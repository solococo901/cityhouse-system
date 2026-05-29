type AdminSelectProps = {
  label: string;
  options: string[];
  value?: string;
};

export default function AdminSelect({
  label,
  options,
  value,
}: AdminSelectProps) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </label>

      <select
        value={value}
        disabled
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] outline-none transition-all disabled:opacity-100"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
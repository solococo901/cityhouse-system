type AdminTextareaProps = {
  label: string;
  placeholder?: string;
  value?: string;
  rows?: number;
};

export default function AdminTextarea({
  label,
  placeholder,
  value,
  rows = 5,
}: AdminTextareaProps) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase text-slate-500">
        {label}
      </label>

      <textarea
        value={value}
        placeholder={placeholder}
        rows={rows}
        readOnly
        className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold leading-6 text-[#0F1A41] outline-none transition-all placeholder:text-slate-300 focus:border-[#C9A45C]"
      />
    </div>
  );
}
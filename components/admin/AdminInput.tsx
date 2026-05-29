type AdminInputProps = {
  label: string;
  placeholder?: string;
  value?: string;
};

export default function AdminInput({
  label,
  placeholder,
  value,
}: AdminInputProps) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold  text-slate-500">
        {label}
      </label>

      <input
        value={value}
        placeholder={placeholder}
        readOnly
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] outline-none transition-all placeholder:text-slate-300 focus:border-[#C9A45C]"
      />
    </div>
  );
}
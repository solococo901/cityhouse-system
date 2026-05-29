import {
  Bell,
  Menu,
  Search,
  ShieldCheck,
} from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-40 h-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#0F1A41] transition-all hover:border-[#C9A45C] hover:text-[#C9A45C]">
            <Menu className="h-5 w-5" />
          </button>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
              CityHouse Admin
            </p>
            <h1 className="mt-1 text-lg font-bold text-[#0F1A41]">
              Quản trị hệ thống
            </h1>
          </div>
        </div>

        <div className="hidden h-11 w-[360px] items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 lg:flex">
          <Search className="h-4 w-4 text-slate-400" />
          <span className="text-sm font-bold text-slate-400">
            Tìm kiếm nhanh...
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#0F1A41] transition-all hover:border-[#C9A45C] hover:text-[#C9A45C]">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
          </button>

          <div className="hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 md:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F1A41] text-white">
              <ShieldCheck className="h-4 w-4 text-[#C9A45C]" />
            </div>

            <div>
              <p className="text-xs font-bold text-slate-400">Xin chào</p>
              <p className="text-sm font-bold text-[#0F1A41]">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
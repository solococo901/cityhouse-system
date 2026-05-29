"use client";

import {
  Bell,
  Search,
  Settings,
  User,
  PanelLeft,
} from "lucide-react";

export default function AdminTopbar() {
  return (
    <header className="sticky top-0 z-40 h-20 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-8">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-[#0F1A41] shadow-sm transition-all hover:border-[#C9A45C]/50 hover:bg-[#0F1A41] hover:text-white">
            <PanelLeft className="h-5 w-5" />
          </button>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-400">
              Xin chào
            </p>
            <h1 className="text-base font-inter font-bold text-[#0F1A41]">
              Admin CityHouse
            </h1>
          </div>
        </div>

        {/* Search */}
        <div className="hidden w-[420px] items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 lg:flex">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            placeholder="Tìm kiếm dự án, tin tức, khách hàng..."
            className="w-full bg-transparent text-sm font-medium text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:border-[#C9A45C]/50 hover:text-[#0F1A41]">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:border-[#C9A45C]/50 hover:text-[#0F1A41]">
            <Settings className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F1A41] text-white">
              <User className="h-4 w-4" />
            </div>

            <div className="hidden pr-2 md:block">
              <p className="text-sm font-bold text-[#0F1A41]">Admin</p>
              <p className="text-xs font-inter text-slate-400">
                Super Admin
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
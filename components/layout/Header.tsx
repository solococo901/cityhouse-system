"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Đang Hoạt Động", href: "#portfolio" },
  { label: "Sắp Ra Mắt", href: "#products" },
  { label: "Về Hệ Thống", href: "#journey" },
  { label: "Tư Vấn", href: "#contact" },
  { label: "Tin Tức", href: "#news" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0F1A41]/90 text-white backdrop-blur-md font-['Inter',_sans-serif]">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">
        <Link href="/" className="leading-none group">
          <div className="text-[22px] font-extrabold tracking-[0.15em] transition-colors duration-300 group-hover:text-amber-400">
            CITYHOUSE
          </div>
          <div className="mt-1 text-[7.5px] tracking-[0.38em] text-white/60 font-medium">
            APARTMENT · HOTEL · OFFICE
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-[12px] font-medium uppercase tracking-[0.15em] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-white/70 hover:text-white transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center border border-white/20 bg-[#0F1A41]">
            <button className="px-3 py-1.5 text-[11px] font-bold bg-white text-[#0F1A41]">
              VI
            </button>
            <button className="px-3 py-1.5 text-[11px] font-bold text-white/60 hover:text-white hover:bg-white/5 transition duration-300">
              EN
            </button>
          </div>

          <button className="border border-white/40 px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white hover:text-[#0F1A41] hover:border-white rounded-none">
            Liên Hệ Ngay
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center border border-white/15 bg-white/5 rounded-none lg:hidden text-white transition-colors hover:bg-white/10"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0F1A41] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-white/80 border-b border-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center border border-white/10 w-fit mt-2">
              <button className="px-4 py-2 bg-white text-[#0F1A41] font-bold text-[11px]">VI</button>
              <button className="px-4 py-2 text-white/60 font-bold text-[11px]">EN</button>
            </div>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-white text-[#0F1A41] py-3.5 text-center text-xs font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors duration-300 rounded-none"
            >
              Liên hệ ngay
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
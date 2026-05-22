"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // 1. Import hook lấy URL hiện tại
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Đang Hoạt Động", href: "/dang-hoat-dong" },
  { label: "Sắp Ra Mắt", href: "/sap-ra-mat" },
  { label: "Về Hệ Thống", href: "/ve-he-thong" },
  { label: "Tư Vấn", href: "/tu-van" },
  { label: "Tin Tức", href: "/tin-tuc" },

];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // 2. Khởi tạo biến lấy đường dẫn

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0F1A41]/90 text-white backdrop-blur-md font-['Inter',_sans-serif]">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6">
        <Link href="/" className="leading-none group">
          <div className="text-[22px] font-extrabold tracking-[0.15em] transition-colors duration-300 group-hover:text-[#FAA269]">
            CITYHOUSE
          </div>
          <div className="mt-1 text-[7.5px] tracking-[0.38em] text-white/60 font-medium">
            APARTMENT · HOTEL · OFFICE
          </div>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden items-center gap-8 text-[12px] font-medium uppercase tracking-[0.15em] lg:flex">
          {navItems.map((item) => {
            // Logic Active: Nếu URL hiện tại bắt đầu bằng href của menu thì cho sáng lên
            // (Chỉ áp dụng với các link có dấu / ở đầu, bỏ qua các link dạng #)
            const isActive = item.href.startsWith("/") && pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors duration-300 after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:bg-[#FAA269] after:transition-all after:duration-300 ${
                  isActive
                    ? "text-[#FAA269] after:w-full" // Đang Active: Chữ vàng, gạch chân full
                    : "text-white/70 hover:text-white after:w-0 hover:after:w-full" // Bình thường: Chữ xám, trỏ chuột mới gạch chân
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center rounded-xl border border-white/20 bg-[#0F1A41]">
            <button className="px-3 py-1.5 text-[11px]  rounded-xl font-bold bg-white text-[#0F1A41]">
              VI
            </button>
            <button className="px-3 py-1.5 text-[11px] rounded-xl  font-bold text-white/60 hover:text-white hover:bg-white/5 transition duration-300">
              EN
            </button>
          </div>

          <button className="border border-white/40 rounded-xl  px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white hover:text-[#0F1A41] hover:border-white rounded-none">
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

      {/* --- MOBILE NAVIGATION --- */}
      {open && (
        <div className="border-t border-white/10 bg-[#0F1A41] px-6 py-6 lg:hidden shadow-xl">
          <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
            {navItems.map((item) => {
              const isActive = item.href.startsWith("/") && pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 border-b border-white/5 transition-colors ${
                    isActive 
                      ? "text-amber-400" // Active trên mobile
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="flex items-center border border-white/10 w-fit mt-2">
              <button className="px-4 py-2 bg-white text-[#0F1A41] font-bold text-[11px]">VI</button>
              <button className="px-4 py-2 text-white/60 font-bold text-[11px]">EN</button>
            </div>

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 bg-white text-[#0F1A41] py-3.5 text-center text-xs font-bold uppercase tracking-widest hover:bg-amber-400 transition-colors duration-300 rounded-none"
            >
              Liên hệ ngay
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0F1A41] py-16 md:py-20 text-white font-['Inter',_sans-serif] border-t border-white/5">
      {/* Khung lưới chia 4 cột phẳng dứt khoát */}
      <div className="max-w-[1280px] mx-auto px-6 grid gap-12 md:grid-cols-4 items-start">
        
        {/* CỘT LOGO & INFO */}
        <div className="space-y-6">
          <div className="leading-none">
            <div className="text-[24px] font-bold tracking-[0.15em]">CITYHOUSE</div>
            <div className="mt-1.5 text-[8px] tracking-[0.38em] text-white/50 font-medium">
              APARTMENT · HOTEL · OFFICE
            </div>
          </div>

          <p className="text-xs leading-relaxed text-slate-400 font-light tracking-wide pt-2">
            Công ty TNHH CityHouse More <br />
            Mã số thuế: 0316749992
          </p>
        </div>

        {/* CỘT HỆ THỐNG */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400">
            System
          </h4>
          <div className="mt-6 flex flex-col gap-3 text-xs text-slate-300 font-light tracking-wide">
            <p className="hover:text-amber-400 cursor-pointer transition-colors duration-300">Hotel</p>
            <p className="hover:text-amber-400 cursor-pointer transition-colors duration-300">CityHouse & More</p>
            <p className="hover:text-amber-400 cursor-pointer transition-colors duration-300">Partner</p>
            <p className="hover:text-amber-400 cursor-pointer transition-colors duration-300">Business Consulting</p>
          </div>
        </div>

        {/* CỘT HỖ TRỢ */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400">
            Help
          </h4>
          <div className="mt-6 flex flex-col gap-3 text-xs text-slate-300 font-light tracking-wide">
            <p className="hover:text-amber-400 cursor-pointer transition-colors duration-300">About us</p>
            <p className="hover:text-amber-400 cursor-pointer transition-colors duration-300">Điều khoản điều kiện</p>
            <p className="hover:text-amber-400 cursor-pointer transition-colors duration-300">Khảo sát</p>
            <p className="hover:text-amber-400 cursor-pointer transition-colors duration-300">Chính sách bảo mật</p>
          </div>
        </div>

        {/* CỘT LIÊN HỆ */}
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400">
            Contact
          </h4>
          <div className="mt-6 flex flex-col gap-3.5 text-xs text-slate-300 font-light leading-relaxed tracking-wide">
            <p>485B Nguyễn Đình Chiểu, P. Bàn Cờ, TP.HCM</p>
            <p className="text-white font-medium">+84 878 253 545</p>
            <p className="hover:text-amber-400 cursor-pointer transition-colors duration-300">info@cityhousemore.com</p>
          </div>
        </div>

      </div>

      {/* CHÂN BOTTOM FOOTER: Đường kẻ chỉ phân tách siêu mảnh */}
      <div className="max-w-[1280px] mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] tracking-widest uppercase text-white/30 font-light">
        <div>
          Copyright © 2026 - CityHouse More. All rights reserved.
        </div>
        <div className="flex gap-4 text-[9px]">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
          <span className="text-white/10">|</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
        </div>
      </div>
    </footer>
  );
}
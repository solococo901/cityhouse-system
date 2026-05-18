"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    // Đồng bộ màu nền #0F1A41, bỏ px ở tag ngoài cùng để tránh lệch dòng
    <footer className="bg-[#0F1A41] text-white pt-16 pb-6 font-sans border-t border-white/10 selection:bg-amber-500/30">
      
      {/* Khung container chuẩn cấu trúc y hệt ContactSection: max-w-[1280px] mx-auto px-6 */}
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Khung lưới chia 4 cột phẳng dứt khoát, căn giữa trên mobile và trả về căn trái trên desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 text-center lg:text-left">
          
          {/* CỘT 1: LOGO & MẠNG XÃ HỘI */}
          <div className="flex flex-col items-center lg:items-start space-y-4 w-full">
            <div className="relative w-[220px] h-[60px]">
              <Image
                src="/images/logo-trang.png"
                alt="CityHouse Apartment - Hotel - Office"
                fill
                className="object-contain object-center lg:object-left"
                priority
              />
            </div>
            
            <div className="space-y-1 text-sm font-semibold tracking-wide text-white pt-1">
              <p className="uppercase">Công ty TNHH CityHouse More</p>
              <p className="text-gray-300 font-normal">Mã Số Thuế : 0316749902</p>
            </div>

            {/* Cụm mạng xã hội vàng đồng */}
            <div className="flex items-center justify-center lg:justify-start space-x-5 pt-3">
              <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-4 1.35-4 4v2z"/>
                </svg>
              </a>
              <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors" aria-label="X (Twitter)">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31.01 2.61.1 3.86.32v3.56c-.68-.19-1.38-.28-2.08-.28h-1.56v7.35c0 1.95-1.55 3.53-3.48 3.53-.94 0-1.83-.37-2.49-1.02-.65-.66-1.01-1.54-1.01-2.48 0-1.92 1.55-3.48 3.48-3.48.42 0 .84.08 1.24.23V4.2c-1.37-.36-2.82-.41-4.2-.14C2.1 4.83.47 7.7.07 11.24c-.47 4.13 2.45 7.84 6.55 8.35 4.9.61 9.2-3.13 9.2-7.99V6.26c1.17.84 2.57 1.32 4.02 1.38V4.06c-1.3-.04-2.52-.55-3.45-1.44a5.55 5.55 0 01-1.45-3.4H12.52v.8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* CỘT 2: HỆ THỐNG */}
          <div className="flex flex-col space-y-4 items-center lg:items-start w-full">
            <h4 className="text-base font-bold uppercase tracking-wider text-amber-500">
              Hệ Thống
            </h4>
            <ul className="space-y-3 text-[15px] text-gray-300 font-medium">
              <li><Link href="#" className="hover:text-white hover:underline">Khách sạn</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">CityHouse & More</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Đối tác</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Tuyển dụng</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Tư Vấn Kinh Doanh</Link></li>
            </ul>
          </div>

          {/* CỘT 3: HỖ TRỢ */}
          <div className="flex flex-col space-y-4 items-center lg:items-start w-full">
            <h4 className="text-base font-bold uppercase tracking-wider text-amber-500">
              Hỗ Trợ
            </h4>
            <ul className="space-y-3 text-[15px] text-gray-300 font-medium">
              <li><Link href="#" className="hover:text-white hover:underline">Về chúng tôi</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Điều khoản điều kiện</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Khiếu nại</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Chính sách thanh toán</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Chính sách bảo mật</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Hướng dẫn</Link></li>
            </ul>
          </div>

          {/* CỘT 4: THÔNG TIN LIÊN HỆ */}
          <div className="flex flex-col items-center lg:items-start space-y-4 w-full">
            <h4 className="text-base font-bold uppercase tracking-wider text-amber-500 w-full">
              Thông Tin Liên Hệ
            </h4>
            <div className="space-y-4 text-[15px] text-gray-300 font-medium flex flex-col items-center lg:items-start max-w-sm lg:max-w-none">
              
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-3">
                <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="leading-snug text-white">485B Nguyễn Đình Chiểu, P. Bàn Cờ, TP. Hồ Chí Minh.</span>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-1 lg:gap-3">
                <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25V16.5a2.25 2.25 0 0 0-2.25-2.25h-1.35c-.638 0-1.235.251-1.68.701l-.947.947a12.024 12.024 0 0 1-5.322-5.322l.947-.947a2.25 2.25 0 0 0 .701-1.68V4.5a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v2.25Z" />
                </svg>
                <a href="tel:+84878253545" className="hover:text-white hover:underline text-white font-semibold">+84 878 25 35 45</a>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-1 lg:gap-3">
                <svg className="w-5 h-5 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:Info@CityHouseMore.com" className="hover:text-white hover:underline">Info@CityHouseMore.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* DÒNG BẢN QUYỀN BOTTOM FULL-WIDTH */}
        <div className="pt-6 border-t border-white/5 text-center text-sm text-gray-400 font-medium tracking-wide">
          Copyright © 2009 - 2026 CityHouse More, Inc. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
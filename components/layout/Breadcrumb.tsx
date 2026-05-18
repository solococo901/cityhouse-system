"use client";

import Link from "next/link";

// Định nghĩa kiểu dữ liệu cho từng mục trong đường dẫn
export type BreadcrumbItem = {
  label: string;
  href?: string; // href không bắt buộc (vì mục cuối cùng người dùng đang đứng không cần link)
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="w-full bg-[#fbfcfd] border-b border-slate-200 pt-[76px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-3 flex items-center">
        <nav className="flex items-center gap-2 text-[13px] text-slate-500 font-light tracking-wide">
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <div key={index} className="flex items-center gap-2">
                {isLast || !item.href ? (
                  // Mục cuối cùng (trang hiện tại): Chữ đậm hơn, không click được
                  <span className="text-slate-800 font-medium">
                    {item.label}
                  </span>
                ) : (
                  // Các mục trước: Có link để quay lại, có hiệu ứng hover
                  <Link href={item.href} className="hover:text-slate-900 transition-colors">
                    {item.label}
                  </Link>
                )}

                {/* Dấu phân cách: Chỉ hiển thị nếu chưa phải mục cuối cùng */}
                {!isLast && (
                  <span className="text-[10px] opacity-50 mt-[1px]">›</span>
                )}
              </div>
            );
          })}
          
        </nav>
      </div>
    </div>
  );
}
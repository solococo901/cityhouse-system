"use client";

import { Lightbulb, TrendingUp, Settings } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tư Vấn Mô Hình",
    icon: Lightbulb,
    items: [
      "Định hướng mô hình",
      "Định vị thương hiệu",
      "Dự toán hiệu quả đầu tư",
    ],
  },
  {
    number: "02",
    title: "Quản Lý Khai Thác",
    icon: TrendingUp,
    items: [
      "Setup vận hành",
      "Marketing & Kinh doanh",
      "Phát triển giá trị bất động sản",
    ],
  },
  {
    number: "03",
    title: "Chuyển Giao Chủ Sở Hữu",
    icon: Settings,
    items: [
      "Định giá bất động sản",
      "Phương án nâng cấp",
      "Chuyển tiếp vận hành",
    ],
  },
];

export default function ServiceSection() {
  return (
    <section
      id="service"
      className="relative w-full overflow-hidden bg-cover bg-center bg-fixed py-24 border-b border-slate-100 font-['Inter',_sans-serif]"
      style={{
        backgroundImage: "url('/images/cityhouse-bg.webp')",
      }}
    >
      {/* Lớp phủ phẳng màu xám trắng cao cấp thay cho màu be vàng đục cũ */}
      <div className="absolute inset-0 bg-[#F8FAFC]/94 z-0" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* TIÊU ĐỀ SECTION */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-[#0F1A41] md:text-5xl">
            Đồng Hành Cùng Chủ Đầu Tư
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-xs leading-relaxed text-slate-500 font-light">
            Chúng tôi xây dựng hệ sinh thái vận hành và khai thác bất động sản toàn diện,
            tối ưu dòng tiền và gia tăng giá trị tài sản bền vững.
          </p>
          <div className="w-12 h-[2px] bg-[#0F1A41] mx-auto mt-6" />
        </div>

        {/* LƯỚI KHỐI DỊCH VỤ VUÔNG GÓC (ARCHITECTURAL SLABS) */}
        <div className="grid grid-cols-1 gap-0 border border-slate-200 divide-y md:grid-cols-3 md:divide-y-0 md:divide-x divide-slate-200 bg-white shadow-sm">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="
                  group relative overflow-hidden rounded-none p-8 bg-white
                  transition-all duration-500 cursor-pointer
                  hover:bg-[#0F1A41] min-h-[380px] flex flex-col justify-between
                "
              >
                <div>
                  {/* Khu vực Số và Icon đầu thẻ */}
                  <div className="mb-8 flex items-center justify-between">
                    {/* Số thứ tự lớn, tinh gọn, vuông góc */}
                    <div className="text-4xl font-bold tracking-tighter text-[#0F1A41]/20 group-hover:text-amber-400/30 transition-colors duration-500">
                      {step.number}
                    </div>

                    {/* Hộp chứa Icon tối giản */}
                    <div className="flex h-12 w-12 items-center justify-center border border-slate-200 bg-slate-50 text-[#0F1A41] rounded-none transition-all duration-500 group-hover:bg-white/10 group-hover:border-white/20 group-hover:text-white">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Tiêu đề bước quy trình */}
                  <h3 className="mb-5 text-xl font-bold uppercase tracking-wide text-[#0F1A41] group-hover:text-white transition-colors duration-500">
                    {step.title}
                  </h3>

                  {/* Danh sách dịch vụ chi tiết - Bỏ chấm tròn be cũ, thay bằng dấu gạch ngang kiến trúc cực mỏng */}
                  <ul className="space-y-3.5 text-xs text-slate-600 group-hover:text-slate-300 transition-colors duration-500 tracking-wide font-light">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <span className="h-[1px] w-3 shrink-0 bg-slate-300 group-hover:bg-amber-400 transition-colors duration-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Đường chỉ kẻ chân tinh tế kích hoạt khi hover */}
                <div className="w-0 h-[2px] bg-amber-400 mt-8 transition-all duration-500 group-hover:w-12" />
              </article>
            );
          })}
        </div>

        {/* NÚT XEM CHI TIẾT DƯỚI CHÂN KHỐI - Góc cạnh đồng điệu */}
        <div className="mt-14 text-center">
          <a
            href="#contact"
            className="inline-flex border border-[#0F1A41]/20 bg-[#0F1A41] px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white rounded-none transition-all duration-300 hover:bg-amber-400 hover:text-[#0F1A41] hover:border-amber-400 shadow-sm"
          >
            Xem Chi Tiết
          </a>
        </div>

      </div>
    </section>
  );
}
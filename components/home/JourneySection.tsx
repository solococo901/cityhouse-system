"use client";

import { useState } from "react";

const timelineItems = [
  {
    year: "2009",
    title: "Khởi đầu",
    description:
      "Từ hành trình cá nhân ở Dự án Saigon Pavillon, Founder từng bước xây dựng nền móng cho mô hình căn hộ dịch vụ cao cấp tại TP.HCM.",
  },
  {
    year: "2013",
    title: "Ra đời thương hiệu",
    description:
      "CityHouse chính thức hình thành, đặt nền tảng cho hệ sinh thái căn hộ dịch vụ, khách sạn và văn phòng tại trung tâm đô thị.",
  },
  {
    year: "2017",
    title: "Mở rộng hệ thống",
    description:
      "Mạng lưới vận hành được mở rộng với nhiều tòa nhà, chuẩn hóa trải nghiệm lưu trú và nâng cao chất lượng dịch vụ.",
  },
  {
    year: "2025",
    title: "Chuẩn hóa nền tảng",
    description:
      "CityHouse tiếp tục hoàn thiện hệ sinh thái vận hành, hướng đến mô hình bất động sản dòng tiền bền vững và chuyên nghiệp hơn.",
  },
];

export default function CityHouseTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative overflow-hidden py-20 md:py-28 font-['Inter',_sans-serif]">
      {/* Giữ nguyên Background ban đầu của bạn */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* Lớp phủ nâng tông tối màu Navy chiều sâu thay vì phủ màu đen xám cũ */}
      <div className="absolute inset-0 bg-[#0F1A41]/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

      <div className="relative w-full px-4 md:px-8 lg:px-[50px] z-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            {/* Tag nhỏ vuông góc ép bám font Inter */}

            <h2 className="text-3xl font-bold uppercase leading-[1.1] tracking-tight text-white md:text-5xl">
              15 năm phát triển và đồng hành
            </h2>
          </div>

          {/* MÀN HÌNH LỚN: Giữ nguyên cấu trúc logic & animation chuyển động của bạn */}
          <div className="mt-16 hidden lg:block">
            <div className="relative grid grid-cols-4 gap-7">
              <div className="absolute left-[10%] right-[10%] top-[62px] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {timelineItems.map((item, index) => {
                const isActive = index === activeIndex;
                const isPast = index <= activeIndex;

                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className="group relative pt-[62px] text-left outline-none"
                  >
                    {/* Quả bóng Timeline hình tròn */}
                    <div
                      className={`absolute left-1/2 top-0 z-10 flex h-[124px] w-[124px] -translate-x-1/2 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110 group-hover:border-white/60 group-hover:bg-[#0F1A41] group-hover:text-white group-hover:shadow-[0_20px_50px_rgba(15,26,65,0.8)] ${
                        isActive
                          ? "border-white/60 bg-[#0F1A41] text-white shadow-[0_20px_50px_rgba(15,26,65,0.8)]"
                          : isPast
                          ? "border-white/40 bg-[#0F1A41]/80 text-white shadow-[0_10px_30px_rgba(15,26,65,0.4)] backdrop-blur"
                          : "border-white/15 bg-[#0F1A41]/40 text-white/60 backdrop-blur"
                      }`}
                    >
                      <span className="text-2xl font-bold tracking-tight">
                        {item.year}
                      </span>
                    </div>

                    {/* Hộp Thẻ Nội Dung bên dưới */}
                    <div
                      className={`relative min-h-[245px] overflow-hidden  border px-6 pb-8 pt-[88px] transition-all duration-500 ${
                        isActive
                          ? "border-white/30 bg-[#0F1A41] text-white shadow-[0_30px_60px_rgba(15,26,65,0.7)]"
                          : "border-white/10 bg-[#0F1A41]/50 text-white backdrop-blur-md hover:-translate-y-3 hover:scale-[1.02] hover:border-white/30 hover:bg-[#0F1A41] hover:shadow-[0_30px_60px_rgba(15,26,65,0.6)]"
                      }`}
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.1)_50%,transparent_80%)]" />
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_48%)]" />

                      <div className="relative z-10">
                        <h3 className="text-center text-lg font-bold tracking-wide text-white uppercase">
                          {item.title}
                        </h3>

                        <p className="mt-4 text-center text-xs leading-relaxed text-slate-300 font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MÀN HÌNH MOBILE */}
          <div className="mt-10 grid gap-4 lg:hidden">
            {timelineItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative overflow-hidden rounded-[20px] border p-5 text-left transition-all duration-300 active:scale-[0.98] ${
                    isActive
                      ? "border-white/30 bg-[#0F1A41] text-white shadow-[0_20px_45px_rgba(15,26,65,0.6)]"
                      : "border-white/10 bg-[#0F1A41]/50 text-white backdrop-blur-md"
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_45%)]" />

                  <div className="relative z-10 flex items-start gap-4">
                    <div
                      className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border text-base font-bold ${
                        isActive
                          ? "border-white/40 bg-white/10 text-white"
                          : "border-white/15 bg-white/5 text-white/70"
                      }`}
                    >
                      {item.year}
                    </div>

                    <div>
                      <h3 className="text-base font-bold tracking-wide text-white uppercase">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-slate-300 font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
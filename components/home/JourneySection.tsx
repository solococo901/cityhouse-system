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
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative overflow-hidden py-10 md:py-18 font-['Inter',_sans-serif]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0F1A41]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

      {/* Luxury Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#FAA269]/10 blur-[120px]" />

      <div className="relative z-10 w-full px-4 md:px-8 lg:px-[50px]">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <h2 className="text-3xl font-bold uppercase leading-[1.1] tracking-tight text-white md:text-5xl">
              15 năm phát triển 
              và đồng hành
            </h2>
          </div>

          {/* DESKTOP */}
          <div className="mt-20 hidden lg:block">
            <div className="relative grid grid-cols-4 gap-7">
              {/* Line */}
              <div className="absolute left-[10%] right-[10%] top-[62px] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {timelineItems.map((item, index) => {
                const isActive = index === activeIndex;
                const isPast = index <= activeIndex;
                const isHighlight =
                  item.year === "2013" || item.year === "2025";

                return (
                  <button
                    key={item.year}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className="group relative pt-[62px] text-left outline-none"
                  >
                    {/* YEAR BALL */}
                    <div
                      className={`absolute left-1/2 top-0 z-10 flex h-[124px] w-[124px] -translate-x-1/2 items-center justify-center rounded-full border transition-all duration-500 group-hover:scale-110 ${
                        isHighlight
                          ? `
                            border-[#FAA269]
                            bg-[#FAA269]
                            text-[#0F1A41]
                            shadow-[0_20px_60px_rgba(250,162,105,0.45)]
                            ${isActive ? "scale-110" : ""}
                          `
                          : isActive
                          ? `
                            border-white/60
                            bg-[#0F1A41]
                            text-white
                            shadow-[0_20px_50px_rgba(15,26,65,0.8)]
                          `
                          : isPast
                          ? `
                            border-white/40
                            bg-[#0F1A41]/80
                            text-white
                            backdrop-blur
                          `
                          : `
                            border-white/15
                            bg-[#0F1A41]/40
                            text-white/60
                            backdrop-blur
                          `
                      }`}
                    >
                      {/* Glow Ring */}
                      {isHighlight && (
                        <div className="absolute inset-[-10px] rounded-full border border-[#FAA269]/30 animate-pulse" />
                      )}

                      <span className="text-2xl font-bold tracking-tight">
                        {item.year}
                      </span>
                    </div>

                    {/* CARD */}
                    <div
                      className={`relative min-h-[260px] overflow-hidden rounded-2xl border px-6 pb-8 pt-[92px] transition-all duration-500 ${
                        isHighlight
                          ? `
                            border-[#FAA269]/70
                            bg-gradient-to-b from-[#FAA269]/15 to-[#0F1A41]
                            text-white
                            shadow-[0_30px_80px_rgba(250,162,105,0.18)]
                            ${isActive ? "scale-[1.03]" : ""}
                          `
                          : isActive
                          ? `
                            border-white/30
                            bg-[#0F1A41]
                            text-white
                            shadow-[0_30px_60px_rgba(15,26,65,0.7)]
                          `
                          : `
                            border-white/10
                            bg-[#0F1A41]/50
                            text-white
                            backdrop-blur-md
                            hover:-translate-y-3
                            hover:scale-[1.02]
                            hover:bg-[#0F1A41]
                            hover:border-white/30
                            hover:shadow-[0_30px_60px_rgba(15,26,65,0.6)]
                          `
                      }`}
                    >
                      {/* Shine */}
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.1)_50%,transparent_80%)]" />

                      {/* Glow */}
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_48%)]" />

                      {/* Highlight Glow */}
                      {isHighlight && (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,162,105,0.18),transparent_60%)]" />
                      )}

                      <div className="relative z-10">
                        <h3
                          className={`text-center text-lg font-bold uppercase tracking-wide ${
                            isHighlight
                              ? "text-[#FAA269]"
                              : "text-white"
                          }`}
                        >
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

          {/* MOBILE */}
          <div className="mt-10 grid gap-4 lg:hidden">
            {timelineItems.map((item, index) => {
              const isActive = index === activeIndex;
              const isHighlight =
                item.year === "2013" || item.year === "2025";

              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`relative overflow-hidden rounded-[22px] border p-5 text-left transition-all duration-300 active:scale-[0.98] ${
                    isHighlight
                      ? `
                        border-[#FAA269]/70
                        bg-gradient-to-br from-[#FAA269]/15 to-[#0F1A41]
                        text-white
                        shadow-[0_20px_50px_rgba(250,162,105,0.2)]
                      `
                      : isActive
                      ? `
                        border-white/30
                        bg-[#0F1A41]
                        text-white
                        shadow-[0_20px_45px_rgba(15,26,65,0.6)]
                      `
                      : `
                        border-white/10
                        bg-[#0F1A41]/50
                        text-white
                        backdrop-blur-md
                      `
                  }`}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_45%)]" />

                  {isHighlight && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,162,105,0.12),transparent_55%)]" />
                  )}

                  <div className="relative z-10 flex items-start gap-4">
                    {/* YEAR */}
                    <div
                      className={`relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border text-base font-bold transition-all duration-300 ${
                        isHighlight
                          ? `
                            border-[#FAA269]
                            bg-[#FAA269]
                            text-[#0F1A41]
                            shadow-[0_10px_30px_rgba(250,162,105,0.35)]
                          `
                          : isActive
                          ? `
                            border-white/40
                            bg-white/10
                            text-white
                          `
                          : `
                            border-white/15
                            bg-white/5
                            text-white/70
                          `
                      }`}
                    >
                      {isHighlight && (
                        <div className="absolute inset-[-6px] rounded-full border border-[#FAA269]/30 animate-pulse" />
                      )}

                      {item.year}
                    </div>

                    <div>
                      <h3
                        className={`text-base font-bold uppercase tracking-wide ${
                          isHighlight
                            ? "text-[#FAA269]"
                            : "text-white"
                        }`}
                      >
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
"use client";

import { useMemo, useState } from "react";

const typeTabs = ["Tất cả", "Căn hộ dịch vụ", "Khách sạn", "Văn phòng", "Resort"] as const;
// Giữ nguyên chính xác danh sách quận của bạn, không thay đổi nội dung dữ liệu
const districtTabs = ["Tất cả", "Quận 1", "Quận 2", "Quận 3", "Quận Tân Bình", "Quận Phú Nhuận"] as const;

type TypeTab = (typeof typeTabs)[number];
type DistrictTab = (typeof districtTabs)[number];

type Project = {
  id: number;
  brand: "MARK" | "SOUL" | "VIBE" | "NEST";
  title: string;
  address: string;
  type: Exclude<TypeTab, "Tất cả">;
  district: Exclude<DistrictTab, "Tất cả">;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    brand: "MARK",
    title: "CityHouse Atelier Thảo Điền",
    address: "45 Nguyễn Duy Hiệu, P. An Khánh, TP. Thủ Đức",
    type: "Căn hộ dịch vụ",
    district: "Quận 2",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    brand: "SOUL",
    title: "CityHouse El Pino Realm",
    address: "70-72-74 Phó Đức Chính, P. Nguyễn Thái Bình, Quận 1",
    type: "Khách sạn",
    district: "Quận 1",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 3,
    brand: "VIBE",
    title: "CityHouse Lighthouse",
    address: "8 Trần Hưng Đạo, P. Nguyễn Thái Bình, Quận 1",
    type: "Văn phòng",
    district: "Quận 1",
    image:
      "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 4,
    brand: "NEST",
    title: "CityHouse Oasis",
    address: "42/4 Hồ Hảo Hớn, P. Cầu Ông Lãnh, Quận 1",
    type: "Căn hộ dịch vụ",
    district: "Quận 1",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 5,
    brand: "MARK",
    title: "CityHouse Abora",
    address: "174 Nam Kỳ Khởi Nghĩa, P. Xuân Hòa, Quận 3",
    type: "Khách sạn",
    district: "Quận 3",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 6,
    brand: "SOUL",
    title: "CityHouse Kim Nguyên",
    address: "19 Trường Sa, P. 17, Bình Thạnh",
    type: "Căn hộ dịch vụ",
    district: "Quận 1",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 7,
    brand: "VIBE",
    title: "CityHouse Ariosa",
    address: "351/10 Lê Văn Sỹ, P. 12, Quận 3",
    type: "Resort",
    district: "Quận 3",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 8,
    brand: "NEST",
    title: "CityHouse Villea",
    address: "12 Nguyễn Văn Trỗi, P. 11, Phú Nhuận",
    type: "Căn hộ dịch vụ",
    district: "Quận Phú Nhuận",
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1400&q=80",
  },
];

const brandStyles: Record<Project["brand"], string> = {
  MARK: "bg-[#c9a86a]",
  SOUL: "bg-[#6C56B5]",
  VIBE: "bg-[#1D9F9B]",
  NEST: "bg-[#7A5B40]",
};

const ITEMS_PER_PAGE = 4;

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M7 17 17 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  );
}

export default function CityHouseEcosystemSection() {
  const [activeType, setActiveType] = useState<TypeTab>("Tất cả");
  const [activeDistrict, setActiveDistrict] = useState<DistrictTab>("Tất cả");
  const [page, setPage] = useState(1);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchType = activeType === "Tất cả" || project.type === activeType;
      const matchDistrict = activeDistrict === "Tất cả" || project.district === activeDistrict;
      return matchType && matchDistrict;
    });
  }, [activeType, activeDistrict]);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  const visibleProjects = filteredProjects.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const changeType = (type: TypeTab) => {
    setActiveType(type);
    setPage(1);
  };

  const changeDistrict = (district: DistrictTab) => {
    setActiveDistrict(district);
    setPage(1);
  };

  return (
    <section className="relative  overflow-hidden bg-[#FDFDFD] py-24 border-b border-slate-100 font-['Inter',_sans-serif]">
      <div className="max-w-[1280px] mx-auto px-6 relative">
        
        {/* HEADER SECTION: Đưa về font-bold Inter, bỏ hẳn nút bo tròn */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl"> 
            <h2 className="text-2xl font-bold uppercase leading-[1.1] tracking-tight text-[#0F1A41] md:text-3xl">
              Hệ sinh thái bất động sản <span className="block mt-1 text-slate-400">dòng tiền</span>
            </h2>
          </div>

          <a
            href="/projects"
            className="inline-flex rounded-xl w-fit items-center justify-center gap-3 border border-[#0F1A41]/20 bg-amber-400 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0F1A41] rounded-none transition-all duration-300 hover:bg-amber-300 hover:text-[#082079] hover:border-amber-400 shadow-sm"
          >
            Xem tất cả
            <span className="text-sm leading-none">→</span>
          </a>
        </div>

        {/* BỘ LỌC (FILTER BLOCK): Thiết kế vách ngăn phẳng (Architectural Box) không bo góc */}
        <div className="border rounded-tl-xl rounded-tr-xl border-slate-200 bg-white p-0 rounded-none shadow-sm">
          {/* Hàng Loại hình dự án */}
          <div className="flex gap-1 overflow-x-auto p-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap border-b border-slate-100">
            {typeTabs.map((type) => {
              const isActive = type === activeType;

              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => changeType(type)}
                  className={`whitespace-nowrap rounded-xl px-4 py-2 text-[12px] font-bold uppercase tracking-wider rounded-none transition-all duration-300 ${
                    isActive
                      ? "bg-[#0F1A41] text-white"
                      : "bg-transparent text-[#0F1A41]/60 hover:bg-slate-50 hover:text-[#0F1A41]"
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>

          {/* Hàng Khu vực quận huyện */}
          <div className="flex gap-6 overflow-x-auto px-5 py-4.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap items-center bg-slate-50/50">
            {districtTabs.map((district) => {
              const isActive = district === activeDistrict;

              return (
                <button
                  key={district}
                  type="button"
                  onClick={() => changeDistrict(district)}
                  className={`relative whitespace-nowrap text-[12px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? "text-[#0F1A41]" : "text-[#0F1A41]/40 hover:text-[#0F1A41]"
                  }`}
                >
                  {district}
                  {isActive && <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#0F1A41]" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Trạng thái xem hiện tại */}
        {/* <div className="mt-8 mb-6 flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400">
              Selected view
            </div>
            <div className="mt-1 text-sm font-bold uppercase tracking-wide text-[#0F1A41]">
              {activeType} <span className="text-slate-300 mx-1">/</span> {activeDistrict}
            </div>
          </div>
        </div> */}

        {/* LƯỚI HIỂN THỊ DỰ ÁN: Không bo góc, ép sát khung ảnh mỏng */}
        {visibleProjects.length > 0 ? (
          <div className="grid gap-0 overflow-hidden rounded-b-xl border border-slate-200 divide-y md:divide-y-0 md:grid-cols-2 xl:grid-cols-4 xl:divide-x divide-slate-200 bg-white">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between bg-white p-6 transition-all duration-500 hover:bg-[#0F1A41] rounded-none relative"
              >
                <div>
                  {/* Khung ảnh vuông vức */}
                  <div className="relative h-[240px] rounded-xl overflow-hidden rounded-none bg-slate-100 mb-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41]/40 via-transparent to-transparent opacity-60" />
                    
                    {/* Nhãn Brand hộp vuông phẳng */}
                    <div className={`absolute left-0 top-0 ${brandStyles[project.brand]} px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-white rounded-none`}>
                      {project.brand}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold leading-tight uppercase text-[#0F1A41] group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>

                  <div className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-slate-500 group-hover:text-slate-300 transition-colors duration-300">
                    <PinIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400 group-hover:text-amber-400" />
                    <p>{project.address}</p>
                  </div>
                </div>

                {/* Phần Footer của Card: Đồng bộ line mỏng góc cạnh */}
                <div className="mt-6 flex items-end justify-between border-t border-slate-100 group-hover:border-white/10 pt-4">
                  <span className="text-[9px] uppercase leading-tight tracking-widest text-slate-400 group-hover:text-slate-400">
                    CityHouse <br /> Portfolio
                  </span>

                  <button className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F1A41] group-hover:text-amber-400 transition-all duration-300">
                    Xem dự án
                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-slate-200 p-12 text-center text-sm font-medium text-slate-400 bg-white rounded-none">
            Không có dự án phù hợp với bộ lọc này.
          </div>
        )}

        {/* HỆ THỐNG PHÂN TRANG (PAGINATION): Hộp nút vuông đồng điệu */}
        <div className="mt-12 flex  justify-center">
          <div className="inline-flex rounded-xl items-center border border-slate-200 bg-white p-0 rounded-none shadow-sm">
            <button
              type="button"
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              className="flex h-11  w-11 items-center justify-center text-[#0F1A41]/50 border-r border-slate-200 transition-all hover:bg-slate-50 hover:text-[#0F1A41]"
              aria-label="Trang trước"
            >
              ‹
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPage(item)}
                className={`flex h-11 w-11 items-center justify-center text-xs font-bold border-r last:border-r-0 border-slate-200 transition-all ${
                  page === item
                    ? "bg-[#0F1A41] text-white"
                    : "text-[#0F1A41]/70 hover:bg-slate-50 hover:text-[#0F1A41]"
                }`}
              >
                {item}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              className="flex h-11 w-11 items-center justify-center text-[#0F1A41]/50 transition-all hover:bg-slate-50 hover:text-[#0F1A41]"
              aria-label="Trang sau"
            >
              ›
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
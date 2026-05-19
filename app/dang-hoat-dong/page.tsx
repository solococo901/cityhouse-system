"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb"; // Đảm bảo bạn đã tạo file này như hướng dẫn trước

const typeTabs = ["Tất cả", "Căn hộ dịch vụ", "Khách sạn", "Văn phòng", "Resort"] as const;
const brandTabs = ["Tất cả", "MARK", "SOUL", "VIBE", "TERA", "NEST"] as const;
const districtTabs = ["Tất cả", "Quận 1", "Quận 2", "Quận 3", "Quận Tân Bình", "Quận Phú Nhuận", "Quận 7"] as const;

type TypeTab = (typeof typeTabs)[number];
type BrandTab = (typeof brandTabs)[number];
type DistrictTab = (typeof districtTabs)[number];

type Project = {
  id: number;
  brand: Exclude<BrandTab, "Tất cả">;
  title: string;
  address: string;
  type: Exclude<TypeTab, "Tất cả">;
  district: Exclude<DistrictTab, "Tất cả">;
  image: string;
};

// Dữ liệu danh sách dự án
const projects: Project[] = [
  {
    id: 1,
    brand: "NEST",
    title: "CityHouse Oasis",
    address: "Juan Mora, Quận 1",
    type: "Căn hộ dịch vụ",
    district: "Quận 1",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    brand: "MARK",
    title: "CityHouse Atelier",
    address: "Prisramatósio, Quận 2",
    type: "Căn hộ dịch vụ",
    district: "Quận 2",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    brand: "SOUL",
    title: "CityHouse El Pino",
    address: "Nethype, Quận 1",
    type: "Khách sạn",
    district: "Quận 1",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    brand: "MARK",
    title: "CityHouse Abora",
    address: "Vethsangur, Quận 3",
    type: "Khách sạn",
    district: "Quận 3",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 5,
    brand: "VIBE",
    title: "CityHouse Ariosa",
    address: "Chis Macari, Quận 3",
    type: "Resort",
    district: "Quận 3",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 6,
    brand: "VIBE",
    title: "CityHouse Lighthouse",
    address: "Peace Part, Quận 1",
    type: "Văn phòng",
    district: "Quận 1",
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function ActiveProjectsSection() {
  const [activeType, setActiveType] = useState<TypeTab>("Tất cả");
  const [activeBrand, setActiveBrand] = useState<BrandTab>("Tất cả");
  const [activeDistrict, setActiveDistrict] = useState<DistrictTab>("Tất cả");

  // Logic lọc dự án
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchType = activeType === "Tất cả" || project.type === activeType;
      const matchBrand = activeBrand === "Tất cả" || project.brand === activeBrand;
      const matchDistrict = activeDistrict === "Tất cả" || project.district === activeDistrict;
      return matchType && matchBrand && matchDistrict;
    });
  }, [activeType, activeBrand, activeDistrict]);

  // Cấu hình Breadcrumb cho trang danh sách
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Đang hoạt động" } // Mục hiện tại không cần href
  ];

  return (
    <>
      <Header />
      
      {/* Đẩy nội dung xuống dưới Header cố định */}
      <main className="min-h-screen font-['Inter',_sans-serif] bg-[#FDFDFD]">
        
        {/* Component Breadcrumb tự động hiển thị mảng dữ liệu đã truyền */}
        <Breadcrumb items={breadcrumbData} />

        <section id="portfolio" className="w-full">
          
          {/* KHỐI BANNER TIÊU ĐỀ */}
          <div className="relative h-[30vh] md:h-[45vh] w-full overflow-hidden flex items-center justify-center bg-[#0F1A41]">
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2200&auto=format&fit=crop"
              alt="Dự án đang hoạt động background"
              className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-normal"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1A41]/40 via-[#0F1A41]/70 to-[#0F1A41]" />

            <div className="relative z-10 text-center px-6">
              <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-md">
                Đang Hoạt Động
              </h1>
              <div className="w-16 h-[2px] bg-amber-400 mx-auto mt-5" />
            </div>
          </div>

          <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-20">

            {/* KHỐI BỘ LỌC ĐA TẦNG (ARCHITECTURAL FILTER BOX) */}
            <div className="border border-slate-200 rounded-xl bg-white p-0 rounded-none shadow-sm mb-10">

              {/* Tầng 1: Loại Hình Dự Án */}
              <div className="flex gap-1 overflow-x-auto p-3 border-b border-slate-100 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap">
                {typeTabs.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActiveType(type)}
                    className={`whitespace-nowrap px-4 rounded-xl py-2 text-[12px] font-bold uppercase tracking-wider rounded-none transition-all duration-300 ${
                      type === activeType
                        ? "bg-[#0F1A41] text-white"
                        : "bg-transparent text-[#0F1A41]/60 hover:bg-slate-50 hover:text-[#0F1A41]"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Tầng 2: Thương Hiệu (Brands) */}
              <div className="flex gap-1 overflow-x-auto p-3 border-b border-slate-100 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap bg-slate-50/30">
                {brandTabs.map((brand) => (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => setActiveBrand(brand)}
                    className={`whitespace-nowrap rounded-xl px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-none border transition-all duration-300 ${
                      brand === activeBrand
                        ? "border-[#0F1A41] bg-[#0F1A41] text-white"
                        : "border-slate-200 bg-white text-slate-500 hover:border-[#0F1A41] hover:text-[#0F1A41]"
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>

              {/* Tầng 3: Khu Vực Quận Huyện */}
              <div className="flex gap-6 overflow-x-auto px-5 py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap items-center bg-slate-50/60">
                {districtTabs.map((district) => {
                  const isActive = district === activeDistrict;
                  return (
                    <button
                      key={district}
                      type="button"
                      onClick={() => setActiveDistrict(district)}
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

            {/* LƯỚI TRIỂN LÃM DỰ ÁN (GALLERY GRID) */}
            {filteredProjects.length > 0 ? (
              <div className="grid rounded-xl overflow-hidden grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 border border-slate-200 bg-white divide-y md:divide-y-0 md:border-b-0">
                {filteredProjects.map((project) => (
                  <Link href={`/dang-hoat-dong/${project.id}`} key={project.id} className="block w-full">
                    <article
                      className="group flex flex-col justify-between h-full bg-white p-5 md:p-6 md:border-b md:border-r border-slate-200 last:border-r-0 xl:even:border-r xl:[&:nth-child(3n)]:border-r-0 transition-all duration-500 hover:bg-[#0F1A41] rounded-none cursor-pointer"
                    >
                      <div>
                        <div className="relative aspect-[3/2] overflow-hidden rounded-none bg-slate-100 mb-6">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-full rounded-xl overflow-hidden w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#0F1A41]/30 via-transparent to-transparent opacity-60" />

                          <div className="absolute left-0 top-0 bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#0F1A41] rounded-none border-r border-b border-slate-200">
                            {project.brand}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold uppercase tracking-wide text-[#0F1A41] group-hover:text-white transition-colors duration-300 leading-tight">
                          {project.title}
                        </h3>

                        <p className="mt-2 text-xs font-light text-slate-500 group-hover:text-slate-300 transition-colors duration-300 tracking-wide">
                          {project.address}
                        </p>
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-slate-100 group-hover:border-white/10 pt-4">
                        <span className="text-[9px] uppercase tracking-widest text-slate-400">
                          {project.type}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0F1A41] group-hover:text-amber-400 transition-colors duration-300 flex items-center gap-1.5">
                          Chi tiết
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1">
                            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="border border-slate-200 p-16 text-center text-xs font-bold uppercase tracking-wider text-slate-400 bg-white rounded-none">
                Không tìm thấy dự án phù hợp với bộ lọc hiện tại.
              </div>
            )}

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
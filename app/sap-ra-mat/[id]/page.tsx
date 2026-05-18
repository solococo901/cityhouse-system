"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";

// --- MOCK DATA (Sẵn sàng cho API Backend) ---
const comingSoonFullData = {
  title: "City House - El Pino Realm",
  brand: "MARK",
  launchDate: "05/2026",
  address: "70-72-74 Phó Đức Chính, P. Nguyễn Thái Bình (Q.1)",
  images: [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop",
  ],
  overview: [
    { icon: "🛏️", value: "40", label: "Phòng ngủ" },
    { icon: "🛁", value: "2", label: "1 hầm + 1 trệt + 5 tầng" },
    { icon: "🚗", value: "—", label: "Bãi đỗ xe" },
    { icon: "📐", value: "1,354", label: "Tổng diện tích" },
  ],
  details: {
    "Vị trí": "Quận 1",
    "Số căn": "21",
    "Giá bán": "Cập nhật sau",
    "Property ID": "H-1234",
    "Bedrooms": "6",
  },
  amenities: [
    "Sảnh lễ tân", "Phòng Gym", "An ninh 24/7", "Lễ tân 24/7", "Dọn phòng 24/7"
  ],
  description: "Ngay giữa Quận 1, El Pino Realm – Managed By CityHouse hiện diện như một điểm chạm dịu dàng của phong cách Indochine, nơi vẻ đẹp xưa được gìn giữ và tái hiện bằng tinh thần hiện đại. Mỗi đường nét đều gợi nhớ một Sài Gòn lịch lãm, thấm sâu vào ánh sáng, chất liệu và nhịp thở của toàn bộ tòa nhà.",
  floorPlan: {
    title: "Sơ Đồ",
    size: "1,425 Sq Ft",
    beds: "4L",
    baths: "2",
    price: "$4,345",
    image: "https://images.unsplash.com/photo-1614644147724-2d4785d69962?q=80&w=1200&auto=format&fit=crop", // Dùng ảnh placeholder sơ đồ
    description: "CityHouse Nguyễn Văn Thương dự kiến sẽ chính thức vận hành vào tháng 05/2026. Hãy cùng chờ đón một điểm lưu trú mới, kết nối linh hoạt giữa tuyến metro số 1 và những trục di chuyển trọng điểm của thành phố."
  },
  videoThumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  sidebarCTA: {
    title: "Liên Hệ Hợp Tác",
    description: "Khởi đầu kinh doanh, quản lý tài sản, vững bền giá trị. Cùng CityHouse.",
    buttonText: "Liên Hệ Ngay",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=400&auto=format&fit=crop"
    ]
  }
};

export default function ComingSoonFullPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isFloorPlanOpen, setIsFloorPlanOpen] = useState(true); // Trạng thái đóng/mở Floor Plan

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Sắp ra mắt", href: "/sap-ra-mat" },
    { label: comingSoonFullData.title }
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white font-sans">
        
        {/* BREADCRUMB */}
        <div className="w-full bg-[#f8f9fa]">
           <Breadcrumb items={breadcrumbData} />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-8 md:py-10">
          
          {/* HEADER DỰ ÁN */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl md:text-[40px] font-bold text-[#1a1a1a] tracking-tight mb-4">
                {comingSoonFullData.title}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-4">
                <span className="bg-[#2B4B77] text-white text-[11px] font-bold uppercase px-3 py-1.5 rounded-sm tracking-widest w-fit">
                  {comingSoonFullData.brand}
                </span>
                <div className="flex items-center gap-1.5 text-slate-500 text-[15px] font-light">
                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {comingSoonFullData.address}
                </div>
              </div>
            </div>
            <div className="text-[#2B4B77] text-xl md:text-[22px] font-medium tracking-wide mt-2 md:mt-0">
              Ra Mắt Vào {comingSoonFullData.launchDate}
            </div>
          </div>

          {/* GALLERY LƯỚI */}
          <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px]">
            <div onClick={() => openLightbox(0)} className="w-full lg:w-1/2 relative h-[300px] lg:h-full rounded-none overflow-hidden cursor-pointer group">
              <img src={comingSoonFullData.images[0]} alt="Main" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 h-[400px] lg:h-full">
              {comingSoonFullData.images.slice(1, 5).map((src, index) => (
                <div key={index} onClick={() => openLightbox(index + 1)} className="relative rounded-none overflow-hidden cursor-pointer group">
                  <img src={src} alt={`Detail ${index}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {index === 3 && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                       <span className="text-white text-lg font-medium tracking-wide drop-shadow-md">Xem thêm</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* === BỐ CỤC CHIA 2 CỘT (MAIN & SIDEBAR) === */}
          <div className="flex flex-col lg:flex-row gap-10 mt-12">
            
            {/* CỘT TRÁI (NỘI DUNG CHÍNH) - Chiếm 65% */}
            <div className="w-full lg:w-[65%] flex flex-col gap-10">
              
              {/* 1. Tổng Quan */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Tổng Quan</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border border-slate-200 rounded-xl">
                  {comingSoonFullData.overview.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <div className="text-2xl">{item.icon}</div>
                      <div className="font-bold text-lg text-[#1a1a1a]">{item.value}</div>
                      <div className="text-sm text-slate-500">{item.label}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 2. Thông Tin Chi Tiết */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Thông Tin Chi Tiết</h2>
                <div className="border border-slate-200 rounded-xl p-6 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 mb-8 border-b border-slate-100 pb-8">
                    {Object.entries(comingSoonFullData.details).map(([key, value], idx) => (
                      <div key={idx} className="flex flex-col gap-1">
                        <span className="text-sm text-slate-500 font-medium">{key}</span>
                        <span className="text-[15px] text-[#1a1a1a]">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* List Tiện ích */}
                  <div className="flex flex-wrap gap-x-6 gap-y-4 mb-8">
                    {comingSoonFullData.amenities.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[14.5px] text-[#1a1a1a]">
                        <svg className="w-4 h-4 text-[#2B4B77]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.118 3.121a1 1 0 001.414 0l5.952-5.95-1.062-1.062-5.6 5.6z"></path></svg>
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* Khối Description */}
                  <div className="p-5 border border-slate-200 rounded-lg bg-[#FAFAFA]">
                    <p className="text-[14.5px] text-slate-600 leading-relaxed font-light text-justify">
                      {comingSoonFullData.description}
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Floor Plans */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Floor Plans</h2>
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  {/* Header Accordion */}
                  <button 
                    onClick={() => setIsFloorPlanOpen(!isFloorPlanOpen)}
                    className="w-full flex items-center justify-between p-4 bg-[#F8F9FA] hover:bg-slate-100 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-[#1a1a1a] font-medium">
                      <svg className={`w-5 h-5 transition-transform ${isFloorPlanOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      {comingSoonFullData.floorPlan.title}
                    </div>
                    {/* Stats */}
                    <div className="hidden sm:flex items-center gap-6 text-[13px] text-slate-600">
                      <span className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg> {comingSoonFullData.floorPlan.size}</span>
                      <span className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> {comingSoonFullData.floorPlan.beds}</span>
                      <span className="flex items-center gap-1.5"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg> {comingSoonFullData.floorPlan.baths}</span>
                      <span className="font-semibold text-[#1a1a1a]">{comingSoonFullData.floorPlan.price}</span>
                    </div>
                  </button>
                  
                  {/* Nội dung xổ xuống */}
                  {isFloorPlanOpen && (
                    <div className="p-6 border-t border-slate-200">
                      <img src={comingSoonFullData.floorPlan.image} alt="Floor plan" className="w-full max-w-[500px] mx-auto h-auto object-contain mb-6 mix-blend-multiply" />
                      <div>
                        <h4 className="text-sm font-bold text-[#1a1a1a] mb-2">Thông Tin:</h4>
                        <p className="text-[14px] text-slate-500 leading-relaxed font-light">
                          {comingSoonFullData.floorPlan.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* 4. Video */}
              <section>
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Video</h2>
                <div className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer bg-slate-900">
                  <img src={comingSoonFullData.videoThumbnail} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/20" />
                  {/* Nút Play phong cách Youtube */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#FF0000] rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-[#CC0000] transition-colors">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>
                  </div>
                </div>
              </section>

            </div>

            {/* CỘT PHẢI (SIDEBAR) - Chiếm 35% */}
            <div className="w-full lg:w-[35%]">
              {/* Box Liên Hệ dính cố định khi cuộn chuột */}
              <div className="sticky top-[100px] w-full rounded-xl overflow-hidden shadow-2xl relative bg-[#1E293B]">
                {/* Background Gradient & Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] opacity-90" />
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" alt="bg" />
                
                <div className="relative z-10 p-8 flex flex-col h-full min-h-[450px]">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {comingSoonFullData.sidebarCTA.title}
                  </h3>
                  <p className="text-[15px] text-slate-300 font-light leading-relaxed mb-8 pr-4">
                    {comingSoonFullData.sidebarCTA.description}
                  </p>
                  
                  <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-medium px-6 py-3 rounded-md w-fit transition-colors duration-300 mb-12">
                    {comingSoonFullData.sidebarCTA.buttonText}
                  </button>

                  {/* 3 ảnh nhỏ dưới đáy */}
                  <div className="grid grid-cols-3 gap-3 mt-auto">
                    {comingSoonFullData.sidebarCTA.images.map((img, idx) => (
                      <div key={idx} className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/20 shadow-lg">
                        <img src={img} alt="project preview" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* LIGHTBOX MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl p-2 z-[100]">✕</button>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img src={comingSoonFullData.images[photoIndex]} alt="Zoomed" className="max-w-full max-h-full object-contain" />
            <button onClick={() => setPhotoIndex((photoIndex + comingSoonFullData.images.length - 1) % comingSoonFullData.images.length)} className="absolute left-4 text-white/50 hover:text-white text-5xl p-4">‹</button>
            <button onClick={() => setPhotoIndex((photoIndex + 1) % comingSoonFullData.images.length)} className="absolute right-4 text-white/50 hover:text-white text-5xl p-4">›</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
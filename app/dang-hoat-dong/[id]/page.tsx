"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Link from "next/link";

// --- DỮ LIỆU MOCK (Sau này lấy từ API Backend) ---
const projectDetailData = {
  title: "City House - El Pino Realm",
  brand: "MARK",
  descriptions: [
    "Ngay giữa Quận 1, El Pino Realm – Managed By CityHouse hiện diện như một điểm chạm dịu dàng của phong cách Indochine, nơi vẻ đẹp xưa được gìn giữ và tái hiện bằng tinh thần hiện đại. Mỗi đường nét đều gợi nhớ một Sài Gòn lịch lãm, thấm sâu vào ánh sáng, chất liệu và nhịp thở của toàn bộ tòa nhà.",
    "Đối diện Bảo tàng Mỹ thuật, El Pino Realm mở ra không gian Indochine cổ điển với sảnh nhuốm màu di sản, kết hợp phòng nghỉ hiện đại tông trắng – đen – xám. Từ sảnh đến tầng lửng, từng không gian đều như một chương nhỏ trong cuốn sách về di sản. Những đường cong, những gam màu trầm ấm và sự tĩnh tại tự nhiên dẫn bạn bước vào trạng thái thư giãn thuần khiết. Từ khung cửa sổ nhìn ra dấu ấn Sài Gòn xưa, từ ban công chạm đến nhịp sống nghệ thuật, nơi đây mang đến trải nghiệm lưu trú đầy thẩm mỹ, chiều sâu và cảm hứng.",
    "Hãy đến và tận hưởng City House – D1 El Pino Realm theo cách riêng của bạn."
  ],
  location: {
    address: "70-72-74 Phó Đức Chính, P. Nguyễn Thái Bình (Q.1)",
    mapImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop",
    mapUrl: "#" // Link Google Maps thực tế
  },
  amenities: [
    { id: 1, icon: "🛎️", label: "Lễ tân" },
    { id: 2, icon: "🛗", label: "Thang máy" },
    { id: 3, icon: "🚬", label: "Khu vực hút thuốc" },
    { id: 4, icon: "🤵‍♂️", label: "Bellman" },
    { id: 5, icon: "🏋️‍♀️", label: "Gym" },
    { id: 6, icon: "📹", label: "Camera an ninh" },
    { id: 7, icon: "📶", label: "Wifi miễn phí" },
    { id: 8, icon: "🍹", label: "Đồ ăn và thức uống chào mừng" },
    { id: 9, icon: "🧳", label: "Giữ hành lý" },
    { id: 10, icon: "🛋️", label: "Khu vực chờ" },
  ],
  nearbyPlaces: [
    { id: 1, name: "Chợ Bến Thành", distance: "228 m" },
    { id: 2, name: "Nhà thờ Đức Bà", distance: "1 km" },
    { id: 3, name: "Bảo tàng Mỹ Thuật TP.HCM", distance: "66 m" },
    { id: 4, name: "Takashimaya", distance: "340 m" },
  ]
};


// --- DỮ LIỆU CÁC LOẠI PHÒNG (Mô phỏng API Backend) ---
const roomsData = [
  {
    id: 1,
    name: "Standard Studio - City View",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
    area: "23m²",
    bed: "Giường King",
    capacity: "2 người",
    description: "Chốn nghỉ dưỡng lý tưởng giữa lòng thành phố. Với diện tích 23m² căn phòng được trang bị giường rộng rãi cùng các tiện nghi được chọn lọc kỹ lưỡng, mang đến sự thư thái và thoải mái.",
    amenities: [
      { icon: "🚿", label: "Phòng tắm đứng" },
      { icon: "💧", label: "Nước đóng chai miễn phí" },
      { icon: "🧊", label: "Tủ lạnh minibar" },
      { icon: "💨", label: "Máy sấy tóc" },
      { icon: "🧳", label: "Bàn ủi" },
    ],
    price: "1.800.000",
  },
  {
    id: 2,
    name: "Superior Studio - City View",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
    area: "40m²",
    bed: "Giường King",
    capacity: "2 người",
    description: "Chốn nghỉ dưỡng lý tưởng giữa lòng thành phố. Với diện tích 40m² căn phòng được trang bị giường rộng rãi cùng các tiện nghi được chọn lọc kỹ lưỡng, mang đến sự thư thái và thoải mái.",
    amenities: [
      { icon: "🚿", label: "Phòng tắm riêng" },
      { icon: "🧊", label: "Tủ lạnh lớn" },
      { icon: "🍳", label: "Bếp" },
      { icon: "💧", label: "Nước đóng chai miễn phí" },
      { icon: "💨", label: "Máy sấy" },
      { icon: "🧳", label: "Bàn ủi" },
    ],
    price: "2.250.000",
  },
  {
    id: 3,
    name: "Deluxe Studio with Balcony",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop",
    area: "43m²",
    bed: "Giường King",
    capacity: "2 Người",
    description: "Chốn nghỉ dưỡng lý tưởng giữa lòng thành phố. Với diện tích 43m² căn phòng được trang bị giường rộng rãi cùng các tiện nghi được chọn lọc kỹ lưỡng, mang đến sự thư thái và thoải mái.",
    amenities: [
      { icon: "🚿", label: "Phòng tắm đứng" },
      { icon: "🍳", label: "Bếp" },
      { icon: "🧊", label: "Tủ lạnh lớn" },
      { icon: "💧", label: "Nước đóng chai miễn phí" },
      { icon: "💨", label: "Máy sấy" },
      { icon: "🧳", label: "Bàn ủi" },
    ],
    price: "2.520.000",
  }
];


// --- DỮ LIỆU TIỆN ÍCH XUNG QUANH ---
const surroundingAmenitiesData = [
  { id: 1, image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800&auto=format&fit=crop", alt: "Chợ Bến Thành" },
  { id: 2, image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=800&auto=format&fit=crop", alt: "UBND Thành phố" },
  { id: 3, image: "https://images.unsplash.com/photo-1505051508008-923feaf9013e?q=80&w=800&auto=format&fit=crop", alt: "Tòa nhà Bitexco" },
  { id: 4, image: "https://images.unsplash.com/photo-1555529733-0e67056058ab?q=80&w=800&auto=format&fit=crop", alt: "Nhà hát Thành phố" },
  { id: 5, image: "https://images.unsplash.com/photo-1580982546377-df9a65d2146e?q=80&w=800&auto=format&fit=crop", alt: "Ga Metro" },
  { id: 6, image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop", alt: "Trung tâm thương mại" },
];

// --- DỮ LIỆU CÁC DỰ ÁN KHÁC (KHÁM PHÁ HỆ THỐNG) ---
const relatedProjectsData = [
  {
    id: 1,
    title: "CityHouse - Emerald",
    description: "Sự riêng biệt thông qua thiết kế, mong muốn có thể cho bạn trải nghiệm đa dạng ở cùng một nơi chốn ghé đến.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "CityHouse - City Oasis",
    description: "Sự riêng biệt thông qua thiết kế, mong muốn có thể cho bạn trải nghiệm đa dạng ở cùng một nơi chốn ghé đến.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "CityHouse - Abora",
    description: "Sự riêng biệt thông qua thiết kế, mong muốn có thể cho bạn trải nghiệm đa dạng ở cùng một nơi chốn ghé đến.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800&auto=format&fit=crop",
    link: "#"
  }
];

export default function ProjectDetailPage() {
  const images = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Đang hoạt động", href: "/dang-hoat-dong" },
    { label: projectDetailData.title }
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-white font-sans">

        {/* --- THANH BREADCRUMB --- */}
        <Breadcrumb items={breadcrumbData} />

        {/* --- 1. NỘI DUNG CHÍNH (GALLERY) --- */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 py-8 md:py-10">
          <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px]">

            {/* CỘT TRÁI: Ảnh lớn */}
            <div
              onClick={() => openLightbox(0)}
              className="w-full lg:w-1/2 relative h-[300px] lg:h-full rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={images[0]}
                alt="Main"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* CỘT PHẢI: Lưới 2x2 */}
            <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-4 h-[400px] lg:h-full">
              {images.slice(1, 5).map((src, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index + 1)}
                  className="relative rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <img
                    src={src}
                    alt={`Detail ${index}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                  {index === 3 && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <span className="text-white text-lg font-medium tracking-wide drop-shadow-md">Xem thêm</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- 2. SECTION THÔNG TIN & TIỆN ÍCH --- */}
        <div className="w-full bg-[#0A1128] text-white py-12 md:py-10 mt-4">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">

            {/* PHẦN TRÊN: GIỚI THIỆU & BẢN ĐỒ */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

              {/* Cột trái: Tên, Tag & Mô tả */}
              <div className="w-full lg:w-[65%]">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
                    {projectDetailData.title}
                  </h2>
                  {projectDetailData.brand && (
                    <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded-sm tracking-widest">
                      {projectDetailData.brand}
                    </span>
                  )}
                </div>

                <div className="space-y-4 text-[15px] text-gray-300 leading-relaxed font-light text-justify">
                  {projectDetailData.descriptions.map((paragraph, index) => (
                    <p key={index} className={index === projectDetailData.descriptions.length - 1 ? "font-medium text-white pt-2" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Cột phải: Bản đồ & Địa chỉ */}
              <div className="w-full lg:w-[35%] flex flex-col gap-4">
                <div className="relative w-full h-[200px] rounded-lg overflow-hidden border border-white/10">
                  <img
                    src={projectDetailData.location.mapImage}
                    alt="Map location"
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  <a href={projectDetailData.location.mapUrl} target="_blank" rel="noreferrer" className="absolute top-3 left-3 bg-white text-[#0A1128] text-xs font-semibold px-3 py-1.5 rounded flex items-center gap-1.5 shadow-md hover:bg-gray-100 transition-colors">
                    Mở trong Maps
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>

                <div className="flex items-start gap-3 text-gray-200 text-[15px] leading-relaxed">
                  <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <p dangerouslySetInnerHTML={{ __html: projectDetailData.location.address.replace(', P.', ', P.<br/>') }}></p>
                </div>
              </div>
            </div>

            {/* ĐƯỜNG KẺ NGĂN CÁCH */}
            <div className="w-full h-px bg-white/10 my-10"></div>

            {/* PHẦN DƯỚI: TIỆN NGHI & KHU VỰC */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

              {/* Cột trái: Tiện nghi */}
              <div className="w-full lg:w-[65%]">
                <h3 className="text-[#DCA963] text-xl font-medium mb-6">
                  Tiện nghi tại {projectDetailData.title.split(' - ')[1] || projectDetailData.title}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-4 text-[14px] text-gray-300 font-light">
                  {projectDetailData.amenities.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <span className="w-5 text-center">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Cột phải: Khám phá khu vực */}
              <div className="w-full lg:w-[35%]">
                <h3 className="text-[#DCA963] text-xl font-medium mb-6">
                  Khám phá khu vực
                </h3>

                <div className="flex flex-col gap-4 text-[14px] text-gray-300 font-light">
                  {projectDetailData.nearbyPlaces.map((place) => (
                    <div key={place.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <svg className="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        <span>{place.name}</span>
                      </div>
                      <span className="font-medium">{place.distance}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>


        {/* --- 3. SECTION LỰA CHỌN PHÒNG --- */}
        <div className="w-full bg-white py-12 md:py-10">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">

            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1128] mb-8">
              Lựa chọn phòng
            </h2>

            <div className="flex flex-col gap-6">
              {roomsData.map((room) => (
                <div
                  key={room.id}
                  className="flex flex-col md:flex-row bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >

                  {/* Cột trái: Ảnh phòng (Tỷ lệ 1/3) */}
                  <div className="w-full md:w-[35%] lg:w-[30%] relative h-[250px] md:h-auto">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Cột phải: Thông tin phòng (Tỷ lệ 2/3) */}
                  <div className="w-full md:w-[65%] lg:w-[70%] p-5 md:p-6 flex flex-col justify-between">

                    <div>
                      {/* Tên phòng */}
                      <h3 className="text-xl md:text-2xl font-bold text-[#0A1128] mb-3">
                        {room.name}
                      </h3>

                      {/* Các Badges thông số */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="flex items-center gap-1.5 border border-slate-300 rounded-full px-3 py-1 text-[13px] text-slate-600">
                          <svg className="w-3.5 h-3.5 text-[#B88645]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                          {room.area}
                        </span>
                        <span className="flex items-center gap-1.5 border border-slate-300 rounded-full px-3 py-1 text-[13px] text-slate-600">
                          <svg className="w-4 h-4 text-[#B88645]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                          {room.bed}
                        </span>
                        <span className="flex items-center gap-1.5 border border-slate-300 rounded-full px-3 py-1 text-[13px] text-slate-600">
                          <svg className="w-4 h-4 text-[#B88645]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                          {room.capacity}
                        </span>
                      </div>

                      {/* Mô tả ngắn */}
                      <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                        {room.description}
                      </p>
                    </div>

                    {/* Vùng Tiện ích & Giá tiền (Flex chia 2 bên) */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-auto pt-4 border-t border-slate-100">

                      {/* Tiện nghi phòng */}
                      <div className="w-full md:w-3/5">
                        <h4 className="font-semibold text-[#0A1128] text-[15px] mb-3">Tiện nghi phòng</h4>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                          {room.amenities.map((amenity, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-[13px] text-slate-600 font-light">
                              <span className="text-[#B88645] opacity-80">{amenity.icon}</span>
                              {amenity.label}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Giá & Nút Chọn phòng */}
                      <div className="w-full md:w-2/5 flex flex-col items-start md:items-end">
                        <div className="text-[#0A1128] font-bold text-lg md:text-xl">
                          {room.price} VNĐ<span className="text-sm font-normal">/đêm</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mb-3 mt-1">Đã bao gồm thuế phí</div>
                        
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* --- 4. SECTION TIỆN ÍCH XUNG QUANH --- */}
        <div className="w-full bg-white py-10 md:py-10 border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">

            <h2 className="text-xl md:text-3xl font-bold text-center text-[#0A1128] uppercase mb-8 md:mb-12">
              Tiện ích xung quanh City House - D1 El Pino Realm
            </h2>

            {/* Grid 6 ảnh (3 cột x 2 hàng) */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {surroundingAmenitiesData.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-[16/9] md:aspect-[3/2] rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay mờ hiển thị tên địa điểm khi hover (Tùy chọn, thêm cho đẹp) */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
                    <span className="text-white font-medium text-sm md:text-base drop-shadow-md tracking-wide">
                      {item.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* --- 5. SECTION KHÁM PHÁ HỆ THỐNG CITYHOUSE --- */}
        <div className="w-full bg-white py-12 md:py-10 pb-20 md:pb-10">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6">

            <h2 className="text-xl md:text-3xl font-bold text-center text-[#0A1128] uppercase mb-8 md:mb-12">
              Khám phá hệ thống Cityhouse
            </h2>

            {/* Grid 3 card dự án */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {relatedProjectsData.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col bg-white border border-slate-200 rounded-[20px] overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >

                  {/* Ảnh dự án */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Nội dung card */}
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-[#0A1128] mb-3 group-hover:text-[#B88645] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-[14px] text-slate-500 font-light leading-relaxed mb-8 flex-1">
                      {project.description}
                    </p>

                    {/* Nút xem chi tiết (Bo tròn pill) */}
                    <Link
                      href={project.link}
                      className="inline-flex items-center justify-center w-max bg-[#B88645] hover:bg-[#9a6e35] text-white text-[13px] md:text-sm font-medium py-2.5 px-6 rounded-full transition-colors duration-300"
                    >
                      Xem chi tiết
                      <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </Link>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </div>
      </main>

      {/* --- LIGHTBOX MODAL --- */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center animate-in fade-in duration-300">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl font-light p-2 transition-all z-[100]"
          >
            ✕
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={images[photoIndex]}
              alt="Zoomed"
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg select-none transition-all duration-500"
            />

            <button
              onClick={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
              className="absolute left-4 text-white/50 hover:text-white text-5xl p-4 transition-all"
            >
              ‹
            </button>
            <button
              onClick={() => setPhotoIndex((photoIndex + 1) % images.length)}
              className="absolute right-4 text-white/50 hover:text-white text-5xl p-4 transition-all"
            >
              ›
            </button>
          </div>

          <div className="absolute bottom-8 flex gap-3 px-4 overflow-x-auto max-w-full">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setPhotoIndex(idx)}
                className={`w-16 h-12 md:w-24 md:h-16 rounded-md overflow-hidden cursor-pointer border-2 transition-all ${idx === photoIndex ? "border-white scale-110 shadow-lg" : "border-transparent opacity-40 hover:opacity-80"
                  }`}
              >
                <img src={img} className="w-full h-full object-cover" alt="thumb" />
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
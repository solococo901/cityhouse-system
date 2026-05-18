"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";

// --- MOCK DATA ---
const stats = [
  { value: "30+", label: "Tòa nhà", sub: "800+ phòng khai thác" },
  { value: "127K+", label: "Lượt khách", sub: "Được phục vụ trong năm 2025" },
  { value: "07", label: "Quận trung tâm", sub: "Q.1, 2, 3, 7, Bình Thạnh, Phú Nhuận..." },
];

const coreInfo = [
  {
    icon: "🏢",
    title: "5 Thương hiệu",
    description: "Hệ sinh thái đa dạng đáp ứng mọi nhu cầu lưu trú từ tiêu chuẩn đến cao cấp.",
    tags: ["MARK", "SOUL", "VIBE", "TERA", "NEST"],
    link: "/thuong-hieu"
  },
  {
    icon: "💎",
    title: "Mức giá linh hoạt",
    description: "Giải pháp tài chính tối ưu cho cả khách lưu trú ngắn ngày và dài hạn.",
    tags: ["$25 - $250 / Ngày", "$500 - $2,500 / Tháng"],
    link: null
  },
  {
    icon: "🤝",
    title: "Tệp khách hàng",
    description: "Lựa chọn hàng đầu của các chuyên gia từ hơn 300 tập đoàn đa quốc gia.",
    tags: ["Adidas", "Nike", "H&M", "IKEA", "Sumitomo"],
    link: "/doi-tac"
  }
];

// Giả lập danh sách Logo đối tác
const partners = [
  "Thaco", "Suzuki", "Shopee", "FPT", "VIB", "Sumitomo", "Fujitec", "VietjetAir", 
  "VPBank", "Mapletree", "Infosys", "PwC", "Foxconn", "Deloitte", "Aeon", "Shinhan Bank", 
  "Vietnam Airlines", "Axon", "EY", "KPMG", "Orion", "Adidas", "Nike"
];

export default function AboutSystemPage() {
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Về hệ thống" }
  ];

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#FDFCF9] font-sans pb-16">
        
        <div className="bg-white">
           <Breadcrumb items={breadcrumbData} />
        </div>

        {/* --- 1. SECTION: CÂU CHUYỆN & LƯỚI ẢNH (THE STORY) --- */}
        {/* Đã giảm py-24 -> py-16, gap-20 -> gap-12 */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-6 py-12 md:py-10 flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          
          {/* Cột trái: Nội dung chữ */}
          <div className="w-full lg:w-[45%] flex flex-col">
            <span className="text-[#B88645] text-sm font-bold uppercase tracking-[0.2em] mb-3 block">
              Câu chuyện của CityHouse
            </span>
            {/* Giảm mb-8 -> mb-6 */}
            <h1 className="text-3xl md:text-[40px] font-bold text-[#0A1128] leading-[1.2] tracking-tight mb-6">
              Hành trình 15 năm với <br className="hidden lg:block"/> quản lý tài sản bền vững
            </h1>
            
            <div className="space-y-5 text-[15.5px] text-slate-600 leading-relaxed font-light text-justify">
              <p>
                Bắt đầu từ năm 2009 với hành trình của Founder tại dự án <strong className="text-[#0A1128] font-semibold">Saigon Pavilion</strong> (53-55 Bà Huyện Thanh Quan, Q.3, Tp.HCM - Coteccons Group), chúng tôi đã đặt những viên gạch đầu tiên cho phân khúc căn hộ dịch vụ cao cấp tại Quận 3.
              </p>
              <p>
                Năm 2013, thương hiệu <strong className="text-[#0A1128] font-semibold">CITYHOUSE</strong> chính thức ra đời, mang theo sứ mệnh không chỉ quản lý bất động sản mà còn nâng tầm trải nghiệm sống đô thị, kiến tạo những không gian lưu trú mang đậm dấu ấn cá nhân và sự tiện nghi hoàn hảo.
              </p>
            </div>
          </div>

          {/* Cột phải: Lưới ảnh nghệ thuật */}
          <div className="w-full lg:w-[55%]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="col-span-2 row-span-2 relative aspect-square md:aspect-auto md:h-full rounded-2xl overflow-hidden group shadow-sm">
                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop" alt="CityHouse Building" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-xl flex flex-col items-center">
                    <span className="text-lg font-extrabold tracking-[0.15em] text-[#0A1128]">CITYHOUSE</span>
                    <span className="text-[6.5px] tracking-[0.38em] text-slate-500 font-medium mt-1">APARTMENT · HOTEL · OFFICE</span>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm">
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop" alt="Interior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=400&auto=format&fit=crop" alt="Exterior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden group hidden md:block shadow-sm">
                <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=400&auto=format&fit=crop" alt="Balcony" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden group hidden md:block shadow-sm">
                <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=400&auto=format&fit=crop" alt="Bedroom" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>

        </section>

        {/* --- 2. SECTION: DẢI BĂNG CON SỐ (STATS) --- */}
        {/* Giảm py-20 -> py-16 */}
        <section className="w-full bg-[#0A1128] py-14 md:py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-center text-white/50 text-xs font-bold uppercase tracking-[0.3em] mb-10">
              Hệ thống CityHouse
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center pt-6 md:pt-0 px-4 first:pt-0">
                  <div className="text-5xl md:text-[56px] font-bold text-[#B88645] mb-2 font-serif">
                    {stat.value}
                  </div>
                  <div className="text-lg md:text-xl font-bold text-white mb-1.5">
                    {stat.label}
                  </div>
                  <div className="text-sm text-white/60 font-light max-w-[220px]">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 3. SECTION: CÁC TRỤ CỘT (INFO CARDS) --- */}
        {/* Giảm py-24 -> py-16 */}
        <section className="max-w-[1280px] mx-auto px-4 md:px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6">
            {coreInfo.map((info, idx) => (
              <div key={idx} className="bg-white rounded-[24px] p-6 lg:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:-translate-y-1.5 transition-transform duration-500 flex flex-col h-full">
                
                {/* Giảm icon size và mb */}
                <div className="w-12 h-12 rounded-xl bg-[#0A1128] text-xl flex items-center justify-center mb-5 shadow-sm">
                  {info.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#0A1128] mb-3">
                  {info.title}
                </h3>
                {/* Giảm mb */}
                <p className="text-[14.5px] text-slate-500 font-light leading-relaxed mb-6 flex-1">
                  {info.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {info.tags.map(tag => (
                    <span key={tag} className="bg-slate-50 text-slate-600 border border-slate-200 text-[11.5px] font-semibold px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {info.link && (
                  <Link href={info.link} className="inline-flex items-center text-[12.5px] font-bold uppercase tracking-wider text-[#B88645] hover:text-[#0A1128] transition-colors mt-auto w-fit">
                    Tìm hiểu thêm
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="bg-[#B88645] hover:bg-[#9a6e35] text-white px-7 py-3 text-[13px] font-bold uppercase tracking-widest transition-colors duration-300 rounded-full shadow-md shadow-amber-900/10">
              Xem toàn bộ hệ thống
            </button>
          </div>
        </section>

        {/* --- 4. SECTION: ĐỐI TÁC (PARTNERS) --- */}
        {/* Giảm py-24 -> py-16 */}
        <section className="w-full bg-white border-t border-slate-100 py-16 md:py-20">
          <div className="max-w-[1280px] mx-auto px-4 md:px-6 text-center">
            
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A1128] mb-3">
              Đối tác & Khách hàng doanh nghiệp
            </h2>
            <p className="text-[14.5px] text-slate-500 font-light mb-10 max-w-2xl mx-auto">
              Sự tin tưởng của hơn 300 tập đoàn và thương hiệu hàng đầu thế giới là minh chứng rõ nét nhất cho chất lượng dịch vụ chuẩn quốc tế tại CityHouse.
            </p>

            {/* Giảm gap */}
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-8 md:gap-x-10 md:gap-y-10 max-w-4xl mx-auto">
              {partners.map((partner, idx) => (
                <div 
                  key={idx} 
                  className="text-lg md:text-xl font-extrabold text-slate-300 hover:text-[#0A1128] transition-colors duration-300 cursor-default select-none"
                  style={{ fontFamily: idx % 2 === 0 ? 'sans-serif' : 'serif' }}
                >
                  {partner}
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
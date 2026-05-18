"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";

// --- MOCK DATA: BÀI VIẾT CHI TIẾT ---
const articleData = {
  id: 1,
  category: "Thị trường",
  categorySlug: "thi-truong",
  date: "2026-04-24", 
  displayDate: "24.04.2026",
  author: "CityHouse Editorial",
  title: "Xu hướng khai thác căn hộ dịch vụ cao cấp tại trung tâm TP.HCM năm 2026",
  featuredImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
  lead: "Sự dịch chuyển của dòng vốn đầu tư nước ngoài (FDI) cùng sự trở lại mạnh mẽ của đội ngũ chuyên gia quốc tế đang tạo ra một làn sóng mới cho phân khúc căn hộ dịch vụ cao cấp tại khu vực lõi trung tâm TP.HCM.",
  tags: ["Thị trường", "Căn hộ dịch vụ", "Đầu tư", "Quận 1"],
  tableOfContents: [
    { id: "tieu-chuan", title: "1. Tiêu chuẩn khắt khe tạo nên sự khác biệt" },
    { id: "xu-huong", title: "2. Sự lên ngôi của xu hướng Staycation & Workation" },
    { id: "bai-toan-dau-tu", title: "3. Bài toán đầu tư sinh lời bền vững" },
  ]
};

// --- MOCK DATA: SIDEBAR TIN NỔI BẬT ---
const trendingNews = [
  {
    id: 2,
    category: "Vận hành",
    date: "22.04.2026",
    title: "Chuẩn bị tài sản trước khi đưa vào vận hành thực tế",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Đầu tư",
    date: "20.04.2026",
    title: "Thương hiệu vận hành và giá trị tài sản gắn liền",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop",
  }
];

export default function NewsDetailPage() {
  const breadcrumbData = [
    { label: "Trang chủ", href: "/" },
    { label: "Tin tức", href: "/tin-tuc" },
    { label: articleData.category, href: `/tin-tuc?category=${articleData.categorySlug}` },
  ];

  return (
    <>
      <Header />
      
      {/* Giảm pb-24 -> pb-16 */}
      <main className="min-h-screen bg-white font-sans pb-16 ">
        
        <Breadcrumb items={breadcrumbData} />

        {/* Giảm pt-16 -> pt-10, Giảm gap-16 -> gap-12 */}
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-8 md:pt-10 flex flex-col lg:flex-row gap-10 lg:gap-12">
          
          {/* CỘT TRÁI: NỘI DUNG CHÍNH */}
          <article className="w-full lg:w-[68%] xl:w-[72%]">
            
            {/* ĐÃ CẬP NHẬT HEADER CHUẨN TẠP CHÍ TẠI ĐÂY */}
            <header className="mb-8">
              {/* Tiêu đề bài viết */}
              <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#0A1128] leading-[1.25] tracking-tight mb-6">
                {articleData.title}
              </h1>

              {/* Hàng chứa Tác giả & Meta Data */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100">
                
                {/* 1. Tác giả (Nằm bên trái) */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs border border-slate-200">
                    CH
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] text-slate-500">Đăng bởi</span>
                    <strong className="text-[13px] text-[#0A1128] font-semibold">{articleData.author}</strong>
                  </div>
                </div>

                {/* 2. Chuyên mục & Ngày tháng (Nằm bên phải) */}
                <div className="flex items-center gap-3 text-[11px] md:text-xs font-bold uppercase tracking-widest text-slate-500">
                  <Link href={`/tin-tuc?category=${articleData.categorySlug}`} className="text-[#B88645] hover:underline">
                    {articleData.category}
                  </Link>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <time dateTime={articleData.date}>{articleData.displayDate}</time>
                </div>

              </div>
            </header>

            {/* Giảm mb-10 -> mb-8 */}
            <figure className="w-full relative aspect-video md:aspect-[21/9] rounded-xl overflow-hidden mb-8 shadow-sm">
              <img 
                src={articleData.featuredImage} 
                alt={articleData.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </figure>

            <div className="prose prose-lg max-w-none prose-headings:text-[#0A1128] prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-[#B88645] prose-a:no-underline hover:prose-a:underline">
              
              <p className="text-[17px] md:text-lg font-medium text-[#0A1128] leading-relaxed mb-8">
                {articleData.lead}
              </p>

              {/* MỤC LỤC */}
              <div className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-5 mb-8">
                <h3 className="text-sm font-bold text-[#0A1128] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#B88645]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
                  Mục lục bài viết
                </h3>
                <ul className="flex flex-col gap-2.5 list-none pl-0">
                  {articleData.tableOfContents.map((item) => (
                    <li key={item.id} className="m-0">
                      <a href={`#${item.id}`} className="text-[14.5px] text-slate-600 hover:text-[#B88645] transition-colors font-medium flex items-start gap-2">
                         <span className="text-[#B88645] mt-0.5">↳</span> {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Giảm margin top các thẻ H2 (mt-12 -> mt-10) */}
              <h2 id="tieu-chuan" className="text-[22px] font-bold mt-10 mb-4 scroll-mt-24">
                1. Tiêu chuẩn khắt khe tạo nên sự khác biệt
              </h2>
              <p className="text-[15.5px]">
                Theo báo cáo mới nhất từ các đơn vị nghiên cứu thị trường, tỷ lệ lấp đầy của các dự án căn hộ dịch vụ tại Quận 1 và Quận 3 luôn duy trì ở mức trên 85% kể từ đầu năm. Khách hàng hiện đại không chỉ tìm kiếm một chỗ ngả lưng. Họ khao khát một trải nghiệm sống toàn diện. Các yếu tố như thiết kế nội thất mang đậm tính nghệ thuật (Indochine, Minimalist), tích hợp công nghệ Smart Home, và dịch vụ quản lý chuẩn khách sạn 5 sao đang trở thành <strong>"bộ tiêu chuẩn bắt buộc"</strong> thay vì tiện ích cộng thêm.
              </p>

              <blockquote className="border-l-4 border-[#B88645] bg-[#FDFCF9] pl-5 pr-4 py-5 my-8 rounded-r-xl italic text-[#0A1128] font-medium text-[17px] shadow-sm">
                "Không gian sống giờ đây phải kể được câu chuyện của người sở hữu, đồng thời phải vận hành mượt mà như một hệ sinh thái khép kín. Đó là bài toán mà các đơn vị quản lý chuyên nghiệp như CityHouse luôn phải đặt lên hàng đầu."
              </blockquote>

              <h2 id="xu-huong" className="text-[22px] font-bold mt-10 mb-4 scroll-mt-24">
                2. Sự lên ngôi của xu hướng Staycation & Workation
              </h2>
              <p className="text-[15.5px]">
                Một điểm đáng chú ý khác là sự dịch chuyển của xu hướng "Staycation" kết hợp "Workation". Các căn hộ dịch vụ giờ đây phải thiết kế thêm các không gian làm việc tối ưu (Co-working space) ngay trong tòa nhà, kết hợp với các mảng xanh, hồ bơi và khu vực thiền định để đáp ứng nhu cầu tái tạo năng lượng của cư dân.
              </p>

              <figure className="my-8">
                <img 
                  src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200&auto=format&fit=crop" 
                  alt="Không gian tích hợp đa năng" 
                  className="w-full rounded-xl"
                />
                <figcaption className="text-center text-[13px] text-slate-500 italic mt-3">
                  Không gian tích hợp đa năng đang trở thành xu hướng thiết kế chủ đạo tại CityHouse.
                </figcaption>
              </figure>

              <h2 id="bai-toan-dau-tu" className="text-[22px] font-bold mt-10 mb-4 scroll-mt-24">
                3. Bài toán đầu tư sinh lời bền vững
              </h2>
              <p className="text-[15.5px]">
                Đối với các nhà đầu tư, việc ủy thác quản lý cho một thương hiệu uy tín không chỉ giải quyết bài toán bảo trì tài sản mà còn tối ưu hóa lợi suất cho thuê. Việc áp dụng các giải pháp quản lý xanh, tiết kiệm năng lượng cũng đang trở thành một tiêu chí quan trọng để thu hút khách thuê dài hạn trong bối cảnh ESG (Môi trường, Xã hội và Quản trị) ngày càng được đề cao.
              </p>
            </div>

            {/* TAGS & SOCIAL SHARE */}
            <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              <div className="flex flex-wrap items-center gap-2">
                <svg className="w-5 h-5 text-slate-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
                {articleData.tags.map(tag => (
                  <Link href={`/tin-tuc?tag=${tag}`} key={tag} className="bg-slate-100 text-slate-600 text-[12.5px] font-medium px-3.5 py-1.5 rounded-full hover:bg-[#0A1128] hover:text-white transition-colors">
                    {tag}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[12px] font-bold text-[#0A1128] uppercase tracking-wider mr-2">Chia sẻ:</span>
                <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#1877F2] transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#000000] transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#0A88FF] transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                </button>
              </div>
            </div>

          </article>

          {/* CỘT PHẢI: SIDEBAR */}
          <aside className="w-full lg:w-[32%] xl:w-[28%]">
            <div className="sticky top-[90px] flex flex-col gap-8">
              
              <div className="bg-[#0A1128] p-6 rounded-xl text-white shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/10 rounded-full blur-2xl translate-x-8 -translate-y-8"></div>
                 <h3 className="text-lg font-bold mb-2 relative z-10">Đăng ký nhận bản tin</h3>
                 <p className="text-[12.5px] text-white/70 font-light mb-5 relative z-10">
                   Nhận những phân tích chuyên sâu mới nhất về thị trường BĐS.
                 </p>
                 <form className="relative z-10 flex flex-col gap-3">
                    <input type="email" placeholder="Email của bạn..." className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-amber-400 transition-colors" />
                    <button type="button" className="w-full bg-[#B88645] hover:bg-[#9a6e35] text-white text-[13px] font-bold uppercase tracking-wider py-2.5 rounded-lg transition-colors">
                      Đăng ký ngay
                    </button>
                 </form>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#0A1128] mb-5 uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-3">
                  Bài viết cùng chủ đề
                </h3>
                
                <div className="flex flex-col gap-5">
                  {trendingNews.map((news) => (
                    <Link href={`/tin-tuc/${news.id}`} key={news.id} className="group flex gap-3.5 items-start">
                      <div className="relative w-[90px] h-[65px] shrink-0 rounded-lg overflow-hidden bg-slate-200">
                        <img src={news.image} alt={news.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      </div>
                      <div className="flex flex-col justify-between py-0.5">
                        <h4 className="text-[13px] font-bold text-[#0A1128] leading-tight group-hover:text-[#B88645] transition-colors line-clamp-2 mb-1.5">
                          {news.title}
                        </h4>
                        <time className="text-[11px] font-medium text-slate-400">
                          {news.date}
                        </time>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </aside>

        </div>
      </main>

      <Footer />
    </>
  );
}
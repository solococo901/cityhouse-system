"use client";

import { ArrowRight } from "lucide-react";

const categories = ["Tất cả", "Phong thủy", "Thủ tục", "Pháp lý"];

const posts = [
  {
    title: "Xu hướng khai thác căn hộ dịch vụ",
    category: "Phong thủy",
    date: "24.04.2026",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Chuẩn bị tài sản trước vận hành",
    category: "Thủ tục",
    date: "22.04.2026",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Thương hiệu vận hành & giá trị tài sản",
    category: "Pháp lý",
    date: "20.04.2026",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="w-full bg-[#FDFDFD] py-10 border-b border-slate-100 font-['Inter',_sans-serif]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* HEADER SECTION: Đưa về chuẩn font-bold Inter, bỏ gạch chân mờ cũ */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
         
            <h2 className="text-3xl font-bold uppercase tracking-tight text-[#0F1A41] md:text-5xl">
              Kiến Thức & Cập Nhật
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-500 font-light">
              Góc nhìn chuyên sâu, ngắn gọn về quy trình vận hành, định hướng đầu tư và chiến lược khai thác bất động sản dòng tiền.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0F1A41] hover:text-amber-500 transition-colors duration-300 group"
          >
            Xem tất cả bài viết
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* CỤM TABS DANH MỤC: Chuyển hoàn toàn sang dạng thẻ hộp vuông tối giản */}
        <div className="mb-10 flex gap-0 overflow-x-auto rounded-xl border border-slate-200 p-0 rounded-none w-fit [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden bg-white">
          {categories.map((item, index) => (
            <button
              key={item}
              className={`shrink-0 px-6 py-3 text-[12px] font-bold uppercase tracking-wider rounded-none border-r last:border-r-0 border-slate-200 transition-all duration-300 ${
                index === 0
                  ? "bg-[#0F1A41] text-white"
                  : "bg-transparent text-[#0F1A41]/60 hover:bg-slate-50 hover:text-[#0F1A41]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* LƯỚI BÀI VIẾT TẠP CHÍ PHẲNG (JOURNAL GRID) */}
        <div className="grid grid-cols-1 gap-0 border border-slate-200 rounded-xl overflow-hidden divide-y md:grid-cols-3 md:divide-y-0 md:divide-x divide-slate-200 bg-white">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group flex flex-col justify-between p-6 bg-white transition-all duration-500 hover:bg-[#0F1A41] rounded-none cursor-pointer"
            >
              <div>
                {/* Khung ảnh vuông góc phẳng */}
                <div className="h-[210px] overflow-hidden rounded-none bg-slate-100 mb-5 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A41]/30 via-transparent to-transparent opacity-60" />
                </div>

                {/* Khối tag nhỏ và thời gian */}
                <div className="mb-3.5 flex items-center justify-between text-[11px] tracking-wide">
                  <span className="font-bold uppercase tracking-wider text-amber-500">
                    {post.category}
                  </span>
                  <span className="text-slate-400 group-hover:text-slate-400 transition-colors duration-300 font-light">
                    {post.date}
                  </span>
                </div>

                {/* Tiêu đề bài viết - Bỏ line-clamp lỏng lẻo, ép chặt text */}
                <h3 className="line-clamp-2 text-lg font-bold leading-snug uppercase tracking-wide text-[#0F1A41] group-hover:text-white transition-colors duration-300">
                  {post.title}
                </h3>
              </div>

              {/* Chân thẻ bài viết: Đồng bộ chỉ phân tách mỏng, nút Xem bài tinh giản */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-100 group-hover:border-white/10 pt-4">
                <span className="text-[10px] uppercase tracking-widest text-slate-400">
                  CityHouse Insight
                </span>

                <span className="inline-flex h-5 w-5 items-center justify-center text-[#0F1A41] group-hover:text-amber-400 transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
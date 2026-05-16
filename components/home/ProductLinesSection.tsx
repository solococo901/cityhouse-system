"use client";

const items = [
  {
    name: "MARK",
    desc: "Đại diện cho những dự án được phát triển tại các vị trí có giá trị lịch sử, văn hóa hoặc kiến trúc đặc trưng của đô thị.",
    image: "/images/brands/mark.png",
  },
  {
    name: "SOUL",
    desc: "Được xây dựng dựa trên triết lý sống chú trọng sức khỏe thể chất và trạng thái tinh thần.",
    image: "/images/brands/soul.jpg",
  },
  {
    name: "VIBE",
    desc: "Tập trung vào yếu tố thẩm mỹ và trải nghiệm không gian.",
    image: "/images/brands/vibe.jpg",
  },
  {
    name: "TERA",
    desc: "Tập hợp những công trình có đặc điểm kiến trúc hoặc vị trí khác biệt, không dễ xếp vào một khuôn mẫu tiêu chuẩn.",
    image: "/images/brands/tera.png",
  },
  {
    name: "NEST",
    desc: "Tập trung vào các công trình trong đô thị, nơi không gian được phát triển theo định hướng phù hợp với nhu cầu lưu trú hiện tại.",
    image: "/images/brands/nest.jpg",
  },
];

export default function ProductLinesSection() {
  return (
    <section id="products" className="w-full bg-[#FDFDFD] py-24 border-b border-slate-100 font-['Inter',_sans-serif]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* TIÊU ĐỀ SECTION - Ép sát khoảng trắng, tracking rộng */}
        <div className="mb-16 text-center">
         
          <h2 className="text-3xl font-bold uppercase tracking-tight text-[#0F1A41] md:text-5xl">
            5 Dòng Sản Phẩm Định Hình
          </h2>
          <div className="w-12 h-[2px] bg-[#0F1A41] mx-auto mt-6" />
        </div>

        {/* LƯỚI SẢN PHẨM: Vuông góc hoàn toàn, biến đổi thành một khối kiến trúc liền vách */}
        <div className="grid grid-cols-1 gap-0 border border-slate-200 divide-y sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 divide-slate-200 bg-white">
          {items.map((item) => (
            <article
              key={item.name}
              className="
                group relative w-full overflow-hidden rounded-none bg-[#0F1A41]
                h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px]
                transition-all duration-500 cursor-pointer
              "
            >
              {/* Hình ảnh sản phẩm */}
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 mix-blend-normal group-hover:scale-105 group-hover:opacity-30"
              />

              {/* LỚP PHỦ OVERLAY: Đơn giản hóa sang một tông tối đồng nhất để bảo vệ text dễ đọc */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0F1A41]/10 via-[#0F1A41]/30 to-[#0F1A41]/55 transition-all duration-500 group-hover:from-[#0F1A41]/85 group-hover:to-[#0F1A41]/95" />

              {/* BRAND TAG: Góc cạnh, nằm ở góc trên, tinh giản chi tiết */}
              <div className="absolute left-6 top-6 z-10">
                <p className="border border-white/20 bg-[#0F1A41]/40 backdrop-blur-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-white rounded-none shadow-sm transition-all duration-300 group-hover:border-amber-400 group-hover:text-amber-400">
                  {item.name}
                </p>
              </div>

              {/* KHỐI NỘI DUNG: Trượt nhẹ mượt mà khi hover */}
              <div
                className="
                  absolute inset-x-0 bottom-0 z-20 p-6 text-white
                  translate-y-4 opacity-90
                  group-hover:translate-y-0 group-hover:opacity-100
                  transition-all duration-500 flex flex-col gap-2
                "
              >
                <h3 className="text-2xl font-bold uppercase tracking-wide text-white group-hover:text-amber-400 transition-colors duration-300">
                  {item.name}
                </h3>

                <p className="text-xs leading-relaxed text-slate-300 font-light tracking-wide">
                  {item.desc}
                </p>

                {/* Đường line nhỏ trang trí tinh tế dưới chân khi hover kích hoạt */}
                <div className="w-0 h-[2px] bg-amber-400 mt-2 transition-all duration-500 group-hover:w-8" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
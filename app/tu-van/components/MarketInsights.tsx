"use client";
import { motion } from "framer-motion";

export default function MarketInsights() {
  const risks = [
    { title: "Định vị sai sản phẩm", desc: "Lựa chọn phân khúc không tương thích với vị trí và nhu cầu của khách hàng mục tiêu sẽ triệt tiêu khả năng cạnh tranh của tòa nhà." },
    { title: "Phát sinh tăng vốn đầu tư", desc: "Các biến số phát sinh trong thực tế thường gây phát sinh 15-30% ngân sách dự kiến, làm kéo dài thời gian hoàn vốn (ROI)." },
    { title: "Lợi nhuận không bền vững", desc: "Marketing và Vận hành không tối ưu khiến dòng tiền không ổn định, tài sản nhanh chóng xuống cấp và mất dần vị thế." }
  ];

  const solutions = [
    { num: "01", title: "Khác biệt hóa", desc: "Nghiên cứu và định hình giá trị độc đáo và bền vững cho dự án" },
    { num: "02", title: "Tối ưu giá trị kép", desc: "Tối ưu song song cả Dòng tiền thu nhập và Giá trị bất động sản" },
    { num: "03", title: "Quản lý gia sản", desc: "Tài sản được nhìn dưới góc độ Gia sản lâu dài qua nhiều thế hệ" }
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#F4F4F4] text-[#0F1A41] py-24 px-6 md:px-16 overflow-hidden">
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full grid grid-cols-4 md:grid-cols-12 border-l border-[#0F1A41]/[0.03]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-[#0F1A41]/[0.03] h-full w-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-blue-600 mb-4 block">Phân tích chiến lược</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.85]">
            RỦI RO <span className="font-light italic opacity-40">&</span> <br />
            GIẢI PHÁP
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* CỘT TRÁI: RỦI RO (Làm nổi bật mạnh) */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-xs font-inter uppercase tracking-[0.2em] text-red-600">Thực trạng & Thách thức</span>
            </div>
            
            <div className="flex flex-col h-full gap-4">
              {risks.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 bg-white p-8 border-l-8 border-red-600 shadow-[15px_15px_40px_rgba(0,0,0,0.04)] flex flex-col justify-center group"
                >
                  <h3 className="text-xl font-inter font-bold uppercase mb-3  group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#0F1A41]/70 font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CỘT PHẢI: GIẢI PHÁP (Thanh lịch, hiện đại) */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">Giải pháp CityHouse</span>
            </div>

            <div className="flex flex-col h-full gap-4">
              {solutions.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ backgroundColor: "#0F1A41", color: "#FFFFFF" }}
                  className="flex-1 p-8 border border-[#0F1A41]/10 flex flex-col justify-center gap-3 transition-all duration-500 group cursor-pointer bg-white/40 backdrop-blur-sm"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-4xl font-bold tracking-tighter opacity-10 group-hover:opacity-30 italic">
                      {item.num}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm opacity-60 group-hover:opacity-80 leading-relaxed italic">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}





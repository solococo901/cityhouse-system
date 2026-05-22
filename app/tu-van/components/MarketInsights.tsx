"use client";
import { motion } from "framer-motion";

export default function MarketInsights() {
  const risks = [
    { num:"01", title: "Đầu tư Tòa nhà mới không hiệu quả", desc: "- Thiết kế không đúng phân khúc khách hàng" , desc2: "- Phát sinh tăng vốn đầu tư xây dựng" },
    { num:"02", title: "Tòa nhà cũ lợi nhuận thấp ", desc: "- Nội thất không đẹp / cũ đã xuống cấp", desc2: "- Vận hành theo tiêu chuẩn thấp " }
   
  ];

  const solutions = [
    { num: "01", title: "Tư vấn mô hình tối ưu giá trị kép", desc: "- Dòng tiền lợi nhuận khai thác" , desc2:"- Giá trị gia tăng của chính bất động sản"},
    { num: "02", title: "Đầu tư cải tạo mới để tăng hiệu quả ", desc: "- Sửa chữa Nội thất theo xu hướng mới" , desc2:"- Nâng cấp tiêu chuẩn vận hành " },
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
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[1.1]">
            KHÓ KHĂN <span className="font-light italic opacity-40"> </span> <br />
            CỦA CHỦ TÒA NHÀ 
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
                  className="flex-1 bg-white p-8 rounded-xl border-l-8 border-red-600 shadow-[15px_15px_40px_rgba(0,0,0,0.04)] flex flex-col justify-center group"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-4xl text-[#ff0000] font-bold tracking-tighter opacity-50 group-hover:opacity-40 italic">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-inter text-[#ff0000] font-bold uppercase mt-2 mb-3  group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#0F1A41]/70 font-medium">
                    {item.desc}
                  </p>
                  <p className="text-sm leading-relaxed text-[#0F1A41]/70 font-medium">
                    {item.desc2}
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
                  className="flex-1 p-8 border rounded-xl border-[#0F1A41]/10 flex flex-col justify-center gap-3 transition-all duration-500 group cursor-pointer bg-white/40 backdrop-blur-sm"
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
                  <p className="text-sm opacity-60 group-hover:opacity-80 leading-relaxed italic">
                    {item.desc2}
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





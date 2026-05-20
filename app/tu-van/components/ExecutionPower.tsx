"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    label: "Tỷ lệ lấp đầy",
    value: 92,
    suffix: " %",
    sub: "Tối ưu hóa doanh thu thực tế",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-6 opacity-40">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    label: "Lượt khách năm 2025",
    value: 127,
    suffix: "k+",
    sub: "Hệ sinh thái đa dạng",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-6 opacity-40">
        <path d="M3 3h18v18H3V3z" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    )
  },
  {
    label: "Kinh nghiệm thị trường",
    value: 15,
    suffix: " + Năm",
    sub: "Kinh nghiệm thực chiến từ 2009",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-6 opacity-40">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  },
  {
    label: "Tăng trưởng doanh thu",
    value: 25,
    suffix: " %",
    sub: "Sau 6 tháng vận hành",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mb-6 opacity-40">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    )
  },
];

export default function ExecutionPower() {
  return (
    <section className="relative w-full bg-[#0F1A41] text-white py-10 px-6 md:px-16 overflow-hidden">
      
      {/* Background Grid Lines - Làm mờ đi để tạo cảm giác sang trọng */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full grid grid-cols-4 md:grid-cols-12 border-l border-white/[0.03]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white/[0.03] h-full w-full" />
          ))}
        </div>
      </div>
      
      {/* Blueprint Pattern - Chỉnh sang màu trắng với độ opacity cực thấp */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none text-white">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-dark" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-dark)" />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          
          {/* PHẦN CHỮ BÊN TRÁI */}
          <div className="md:col-span-4 space-y-6">
            <span className="text-[10px] tracking-[0.5em] uppercase text-blue-400 font-bold">The Power of Numbers</span>
            <h2 className="text-5xl font-bold uppercase tracking-tighter leading-none text-white">
              Năng lực <br /> <span className="font-light italic opacity-40 text-blue-200">Thực thi.</span>
            </h2>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs pt-6 border-t border-white/10">
              Mỗi con số là một minh chứng cho sự cam kết về hiệu quả và tính minh bạch trong quản trị tài sản của chúng tôi.
            </p>
          </div>

          {/* HỆ THỐNG SỐ LIỆU BÊN PHẢI */}
          <div className="md:col-span-8 grid grid-cols-1 overflow-hidden rounded-xl sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ backgroundColor: "#152354", y: -5 }}
                className="bg-[#0F1A41]  p-12 flex flex-col group transition-all duration-500 cursor-default"
              >
                {/* Icon màu xanh sáng hơn để nổi bật trên nền tối */}
                {/* <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  {stat.icon}
                </div> */}

                <div className="mb-4">
                  <span className="text-6xl font-light tracking-tighter text-white">
                    <CountUp end={stat.value} duration={3} enableScrollSpy scrollSpyOnce />
                  </span>
                  <span className="text-xl font-light opacity-30 ml-2 text-blue-200 group-hover:opacity-100 transition-opacity">
                    {stat.suffix}
                  </span>
                </div>

                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2 text-blue-400 group-hover:text-white transition-colors">
                    {stat.label}
                  </h3>
                  <p className="text-xs text-white/40 group-hover:text-white/70 font-light italic">
                    {stat.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
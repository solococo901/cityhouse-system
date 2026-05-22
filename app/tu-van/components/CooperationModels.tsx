"use client";
import { motion } from "framer-motion";

const cooperationModels = [
  {
    id: "01",
    title: "Đầu tư cải tạo mới",
    desc: "CityHouse chịu 100% chi phí đầu tư nội thất tòa nhà theo concept mới.",
    tag: " "
  },
  {
    id: "02",
    title: "Thuê khoán toàn bộ",
    desc: "Cam kết lợi nhuận cố định hàng tháng cho chủ đầu tư",
    tag: ""
  },
  {
    id: "03",
    title: "Quản lý gia sản",
    desc: "CityHouse vận hành tòa nhà, chia sẻ lợi nhuận theo tỷ lệ thỏa thuận.",
    tag: " "
  }
];

export default function CooperationModels() {
  return (
    <section className="relative w-full bg-[#0F1A41] text-white py-10 px-6 md:px-16 overflow-hidden">
      
      {/* Background Decor - Blueprint Grid (Trắng mờ trên nền xanh) */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <div className="grid grid-cols-4 md:grid-cols-12 h-full w-full border-l border-white">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-white h-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="mb-10">
         
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9]">
            PHƯƠNG THỨC <br /> 
            <span className="font-light italic  text-[#FAA269]">HỢP TÁC</span>
          </h2>
        </div>

        {/* Horizontal Layout - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10 auto-rows-fr">
  {cooperationModels.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.15, duration: 0.8 }}
      whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
      className="relative p-10 flex flex-col justify-between min-h-[280px]
                 border-r border-b border-white/10
                 group cursor-pointer transition-all duration-500"
    >
      {/* Large Background ID */}
      <span className="absolute -bottom-6 -right-2 text-[140px] font-black italic opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none">
        {item.id}
      </span>

      {/* Top */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[10px] font-mono font-bold px-2 py-1 border border-blue-400/30 text-blue-400">
            {item.id}
          </span>

          <div className="h-[1px] w-10 bg-blue-500/50 group-hover:w-16 transition-all duration-500"></div>
        </div>

        <h3 className="text-2xl font-bold text-[#FAA269] uppercase tracking-tight group-hover:text-[#f88639] transition-colors">
          {item.title}
        </h3>

        <span className="mt-4 inline-block text-[9px] uppercase tracking-[0.2em] px-2 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {item.tag}
        </span>
      </div>

      {/* Bottom */}
      <div className="relative mt-10">
        <p className="text-sm leading-relaxed text-white/50 group-hover:text-white/80 font-light transition-colors max-w-[90%]">
          {item.desc}
        </p>

        {/* Decorative Cross */}
        <div className="mt-10 relative w-6 h-6 text-blue-500 opacity-20 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-700">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current"></div>
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-current"></div>
        </div>
      </div>
    </motion.div>
  ))}
</div>
      </div>
    </section>
  );
}
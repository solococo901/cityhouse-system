"use client";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Khảo sát Bất động sản",
    desc: "Đánh giá chi tiết về vị trí, quy mô và phân tích tiềm năng khai thác thực tế của tài sản.",
    tag: ""
  },
  {
    id: "02",
    title: "XÁC ĐỊNH MÔ HÌNH PHÙ HỢP NHẤT",
    desc: "Đề xuất phân khúc sản phẩm phù hợp, đảm bảo tính bền vững và lợi nhuận tối ưu.",
    tag: ""
  },
  {
    id: "03",
    title: "Triển khai vận hành",
    desc: "Giám sát quá trình bàn giao, thiết lập bộ máy nhân sự và quy trình vận hành chuyên nghiệp.",
    tag: ""
  },
  {
    id: "04",
    title: "Tối ưu dòng tiền",
    desc: "Liên tục tinh chỉnh quy trình và dịch vụ để gia tăng hiệu quả kinh doanh thực tế.",
    tag: ""
  }
];

export default function StrategicRoadmap() {
  return (
    <section className="relative w-full bg-white text-[#0F1A41] py-10 px-6 md:px-16 overflow-hidden">
      
      {/* Background Decor - Blueprint Grid nhẹ */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full grid grid-cols-4 md:grid-cols-12 border-l border-[#0F1A41]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-[#0F1A41] h-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none">
            Qui trình <br /> <span className="font-light italic opacity-30">Kiến tạo giá trị.</span>
          </h2>
        </div>

        {/* 4 Columns Layout */}
        <div className="grid grid-cols-1 rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10  group hover:bg-[#0F1A41] transition-all duration-500 cursor-default"
            >
              {/* Step ID */}
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-sm text-[#FAA269] group-hover:text-[#ff761a] transition-colors">
                  [{step.id}]
                </span>
                <div className="h-px w-12 bg-slate-200 group-hover:bg-white/20 transition-all group-hover:w-16"></div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <span className="text-[8px] uppercase tracking-[0.3em] text-slate-400 group-hover:text-white/40 font-bold">
                  {step.tag}
                </span>
                <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-white transition-colors leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 group-hover:text-white/60 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="mt-12 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40">
                Cam kết minh bạch trong từng giai đoạn
            </span>
        </div>
      </div>
    </section>
  );
}
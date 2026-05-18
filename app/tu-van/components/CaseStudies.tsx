"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const cases = [
  {
    id: "01",
    name: "Cityhouse - Kim Nguyên",
    location: "Phú Nhuận, TP. HCM",
    stats: [
      { label: "Diện tích sàn", value: "2.500 m²" },
      { label: "Số phòng", value: "54 phòng" }
    ],
    before: "/images/bellita.png",
    after: "/images/bellita2.png",
    desc: "Dự án xây mới hướng đến nhóm khách hàng business cấp trung"
  },
  {
    id: "02",
    name: "CityHouse - CityOasis",
    location: "Quận 3, TP. HCM",
    stats: [
      { label: "Diện tích sàn", value: "1.200 m²" },
      { label: "Số phòng", value: "27 phòng" }
    ],
    before: "https://images.unsplash.com/photo-1512918766671-ed6a07be061f?q=80&w=2070",
    after: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069",
    desc: "Dự án cải tạo hướng đến nhóm khách hàng du lịch  cấp trung"
  },
  {
    id: "03",
    name: "CityHouse -  Atelier",
    location: "Quận 2, TP. HCM",
    stats: [
      { label: "Diện tích sàn", value: "3.200 m²" },
      { label: "Số phòng", value: "45 phòng" }
    ],
    before: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
    desc: "Dự án tiếp quản vận hành hướng đến nhóm khách hàng business cao cấp"
  },
  {
    id: "04",
    name: "CityHouse - Elpino",
    location: "Quận 1, TP. HCM",
    stats: [
      { label: "Diện tích sàn", value: "1.800 m²" },
      { label: "Số phòng", value: "37 phòng" }
    ],
    before: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000",
    after: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
    desc: "Dự án setup vận hành hướng đến nhóm khách hàng du lịch cao cấp "
  }
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section className="relative w-full bg-white text-[#0F1A41] py-24 px-6 md:px-16 overflow-hidden">
      
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Header Section */}
      <div className="container mx-auto mb-12 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 items-end gap-8">
          <div className="md:col-span-8">
            <span className="text-[10px] tracking-[0.5em] uppercase text-blue-600 font-bold mb-4 block">Dự án đã thực hiện</span>
            <h2 className="text-3xl md:text-6xl font-bold uppercase tracking-tighter leading-none text-[#0F1A41]">
              Sự chuyển hóa <br /> <span className="font-light italic opacity-30">Giá trị.</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-slate-200 pt-12">
        
        {/* LEFT/TOP: Project Navigation */}
        {/* Mobile: order-1 (dưới title), Desktop: order-1 (bên trái) */}
        <div className="lg:col-span-3 order-1">
          <p className="text-[10px] tracking-widest uppercase opacity-60 mb-6 font-bold text-blue-600">
            Dự án tiêu biểu ({cases.length})
          </p>
          
          <div className="no-scrollbar overflow-x-auto lg:overflow-y-auto flex lg:flex-col gap-4 max-h-none lg:max-h-[600px] pr-2 pb-4 lg:pb-0">
            {cases.map((project, index) => (
              <motion.button
                key={`${project.id}-${index}`}
                onClick={() => setActiveCase(index)}
                initial={false}
                animate={{ 
                  backgroundColor: activeCase === index ? "rgba(37, 99, 235, 0.05)" : "rgba(255, 255, 255, 0)",
                  borderColor: activeCase === index ? "#2563eb" : "rgba(0, 0, 0, 0.05)"
                }}
                className="min-w-[200px] lg:min-w-full text-left p-5 transition-all border block group relative"
              >
                <span className={`text-[10px] font-mono block mb-1 transition-opacity duration-300 ${activeCase === index ? "opacity-100 text-blue-600" : "opacity-40"}`}>
                  [{project.id}]
                </span>
                <h4 className={`text-xs md:text-sm uppercase font-bold tracking-wider transition-colors duration-300 ${activeCase === index ? "text-[#0F1A41]" : "text-slate-400 group-hover:text-slate-600"}`}>
                  {project.name}
                </h4>
                {activeCase === index && (
                    <motion.div layoutId="activeLine" className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 hidden lg:block" />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* RIGHT/BOTTOM: Display Area */}
        {/* Mobile: order-2, Desktop: order-2 */}
        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 order-2 lg:sticky lg:top-10 h-fit">
          
          {/* Slider Box */}
          <div className="md:col-span-8 group relative h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="border border-slate-200 p-2 bg-slate-50 shadow-xl"
              >
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={cases[activeCase].before} alt="Trước" className="grayscale opacity-80" />}
                  itemTwo={<ReactCompareSliderImage src={cases[activeCase].after} alt="Sau" />}
                  className="h-[350px] md:h-[550px] object-cover"
                />
              </motion.div>
            </AnimatePresence>
            
            <div className="absolute bottom-6 left-6 flex gap-2 pointer-events-none z-10">
               <span className="px-3 py-1 bg-white/90 text-[8px] md:text-[9px] uppercase tracking-widest backdrop-blur-sm border border-slate-200 text-slate-600 shadow-sm">Hiện trạng</span>
               <span className="px-3 py-1 bg-blue-600 text-white text-[8px] md:text-[9px] uppercase tracking-widest shadow-lg">Sau cải tạo</span>
            </div>
          </div>

          {/* Info Box */}
          <div className="md:col-span-4 flex flex-col justify-between py-2">
            <div className="space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`info-${activeCase}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-blue-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
                      {cases[activeCase].location}
                    </p>
                    <h3 className="text-2xl font-bold text-[#0F1A41] uppercase tracking-tighter md:hidden mb-4">
                      {cases[activeCase].name}
                    </h3>
                    <p className="text-sm text-slate-500 font-light leading-relaxed italic border-l-2 border-blue-600/20 pl-4">
                      "{cases[activeCase].desc}"
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
                    {cases[activeCase].stats.map((s, i) => (
                      <div key={i}>
                        <p className="text-[8px] uppercase tracking-widest text-slate-400 mb-1 font-semibold">{s.label}</p>
                        <p className="text-2xl font-light text-[#0F1A41] tracking-tighter">{s.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button 
              whileHover={{ x: 8 }}
              className="mt-12 flex items-center gap-4 group w-fit"
            >
              <div className="h-[1px] w-8 bg-blue-600 group-hover:w-12 transition-all duration-500"></div>
              {/* <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                Xem chi tiết hồ sơ
              </span> */}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
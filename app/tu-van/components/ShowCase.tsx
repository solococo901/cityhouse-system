"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const brands = [
  { id: "01", name: "MARK", sub: "Urban Timeless", desc: "Định vị giá trị văn hóa và chuẩn mực lưu trú cao cấp.", img: "/images/brands/mark.png", tag: "High-End Standards" },
  { id: "02", name: "SOUL", sub: "Urban Rhythm", desc: "Cân bằng thân tâm với không gian xanh và nhịp sống chậm.", img: "/images/brands/soul.jpg", tag: "Wellness Living" },
  { id: "03", name: "VIBE", sub: "Urban Visual", desc: "Ngôn ngữ kiến trúc mạnh mẽ, đề cao cảm xúc thị giác.", img: "/images/brands/vibe.jpg", tag: "Visual Experience" },
  { id: "04", name: "TERA", sub: "Urban Modern", desc: "Tôn trọng cá tính riêng biệt với cách tiếp cận phá cách.", img: "/images/brands/tera.png", tag: "Unique Personality" },
  { id: "05", name: "NEST", sub: "Urban Cozy", desc: "Tối ưu hóa không gian lưu trú, duy trì hiệu quả vận hành.", img: "/images/brands/nest.jpg", tag: "Optimization" }
];

export default function BrandShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showIndicator, setShowIndicator] = useState(true);

  // Ẩn dấu ">" khi người dùng đã cuộn được một khoảng nhất định
  const handleScroll = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollLeft > 100) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    }
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => { isDown = false; };
    const handleMouseUp = () => { isDown = false; };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; 
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#0F1A41] text-white py-10 overflow-hidden border-t border-white/5">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none">
        <div className="grid grid-cols-6 md:grid-cols-12 h-full w-full text-white">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-current h-full" />
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="container mx-auto px-6 md:px-16 mb-16 relative z-10">
        <span className="text-[10px] tracking-[0.5em] uppercase text-blue-400 font-bold mb-4 block">
          Các dòng sản phẩm
        </span>
        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9]">
          Hệ sinh thái <br /> <span className="font-light italic text-white/40">Thương hiệu.</span>
        </h2>
      </div>

      {/* Scroll Container Wrapper */}
      <div className="relative group">
        
        {/* DẤU CHỈ DẪN CUỘN (SCROLL INDICATOR) */}
        {showIndicator && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="absolute right-4  top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:flex flex-col items-center gap-2"
          >
            <motion.div 
              animate={{ x: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="bg-white/10 backdrop-blur-md p-6 border border-white/20 rounded-full"
            >
              <span className="text-4xl font-light text-white/80 leading-none">›</span>
            </motion.div>
            
          </motion.div>
        )}

        {/* Scroll Area */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-8 px-6 md:px-16 overflow-x-auto cursor-grab active:cursor-grabbing select-none
                     [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                     relative z-10"
        >
          {brands.map((brand, i) => (
            <div 
              key={i}
              className="flex-shrink-0 w-[280px] md:w-[400px]"
            >
              {/* Image Frame */}
              <div className="relative rounded-xl aspect-[4/5] overflow-hidden border border-white/10 mb-8 bg-white/5 shadow-2xl">
                <img 
                  src={brand.img} 
                  alt={brand.name} 
                  draggable={false}
                  className="w-full h-full object-cover grayscale-[0.2] brightness-90"
                />
                <div className="absolute top-0 left-0 bg-white text-[#0F1A41] px-4 py-2 text-[10px] font-mono font-bold">
                  {brand.id}
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-[0.2em] border border-white/20 shadow-sm">
                    {brand.tag}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-3xl font-bold uppercase tracking-tighter text-white">
                    {brand.name}
                  </h3>
                  <div className="h-[1px] flex-1 bg-white/10"></div>
                </div>
                <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-blue-400 opacity-90 italic">
                  {brand.sub}
                </p>
                <p className="text-xs text-white/60 font-light leading-relaxed max-w-[90%]">
                  {brand.desc}
                </p>
              </div>
            </div>
          ))}
          
          <div className="flex-shrink-0 w-12 md:w-32 h-1" />
        </div>
      </div>
    </section>
  );
}
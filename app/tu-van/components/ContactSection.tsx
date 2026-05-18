"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative w-full bg-[#F4F4F4] text-[#0F1A41] py-24 px-6 md:px-16 overflow-hidden">
      
      {/* Background Decor: Hệ lưới Blueprint tối mờ trên nền sáng */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full grid grid-cols-4 md:grid-cols-12 border-l border-[#0F1A41]/[0.03]">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-[#0F1A41]/[0.03] h-full w-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* CỘT TRÁI: THÔNG ĐIỆP */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] tracking-[0.5em] uppercase text-blue-600 font-bold mb-4 block">
                THAM GIA HỆ THỐNG
              </span>
              <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[1.1] mb-6">
                Khởi đầu hành trình <br /> 
                <span className="font-light italic text-[#0F1A41]/30">Quản lý gia sản</span><br/>
                <span className="font-light italic text-[#0F1A41]/30">Vững bền gia tộc</span>
              </h2>
              <div className="h-[2px] w-24 bg-blue-600 mb-8"></div>
              <p className="text-sm md:text-base text-[#0F1A41]/60 font-medium leading-relaxed max-w-md">
                Tại CityHouse, sự minh bạch không chỉ là cam kết, mà là hệ thống vận hành thực tế 
                giúp Chủ đầu tư hoàn toàn an tâm về tài sản của mình.
              </p>
            </motion.div>

            {/* Thông tin thêm phía dưới */}
            <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#0F1A41]/10">
                <div>
                    <p className="text-[9px] uppercase tracking-widest text-[#0F1A41]/40 mb-2 font-bold">Văn phòng chính</p>
                    <p className="text-xs font-bold text-[#0F1A41]/80 leading-relaxed">485B Nguyễn Đình Chiểu, <br/>Phường Bàn Cờ, Quận 3, TP.HCM</p>
                </div>
                <div>
                    <p className="text-[9px] uppercase tracking-widest text-[#0F1A41]/40 mb-2 font-bold">Hotline </p>
                    <p className="text-xs font-bold text-[#0F1A41]/80">0878 25 35 45</p>
                </div>
            </div>
          </div>

          {/* CỘT PHẢI: FORM ĐĂNG KÝ (Style Light hiện đại) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-xl bg-white border border-[#0F1A41]/10 p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden group"
            >
              {/* Trang trí góc Form - Accent Blue */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-600/20"></div>
              
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 text-[#0F1A41]">
                Tham quan & Hợp tác
              </h3>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#0F1A41]/40 font-bold italic">Họ tên của bạn</label>
                  <input 
                    type="text" 
                    placeholder="Nhập tên của bạn..." 
                    className="w-full bg-[#F9F9F9] border border-[#0F1A41]/10 px-4 py-4 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder:text-[#0F1A41]/20 text-[#0F1A41]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#0F1A41]/40 font-bold italic">Số điện thoại</label>
                    <input 
                      type="tel" 
                      placeholder="090 ..." 
                      className="w-full bg-[#F9F9F9] border border-[#0F1A41]/10 px-4 py-4 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder:text-[#0F1A41]/20 text-[#0F1A41]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#0F1A41]/40 font-bold italic">Email</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="w-full bg-[#F9F9F9] border border-[#0F1A41]/10 px-4 py-4 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder:text-[#0F1A41]/20 text-[#0F1A41]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#0F1A41]/40 font-bold italic">Lời nhắn của bạn</label>
                  <textarea 
                    rows={4}
                    placeholder="Nội dung cần tư vấn..." 
                    className="w-full bg-[#F9F9F9] border border-[#0F1A41]/10 px-4 py-4 text-sm focus:outline-none focus:border-blue-600 transition-colors placeholder:text-[#0F1A41]/20 text-[#0F1A41] resize-none"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01, backgroundColor: "#0F1A41" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 text-white font-bold uppercase tracking-[0.2em] py-5 text-xs transition-all flex items-center justify-center gap-3 group shadow-lg shadow-blue-600/20"
                >
                  Gửi yêu cầu tư vấn
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-2 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </motion.button>
              </form>
              
              <p className="text-[9px] text-[#0F1A41]/40 mt-6 text-center italic font-medium">
                Bằng cách nhấn gửi, bạn đồng ý với chính sách quyền riêng tư của chúng tôi.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
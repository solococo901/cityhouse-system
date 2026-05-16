"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    note: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Không thể gửi thông tin.");
        return;
      }

      setMessage("Gửi yêu cầu thành công. CityHouse sẽ liên hệ bạn sớm.");
      setForm({ full_name: "", phone: "", email: "", note: "" });
    } catch {
      setMessage("Có lỗi xảy ra, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-[#0F1A41] py-24 md:py-32 text-white font-['Inter',_sans-serif]"
    >
      {/* Hệ lưới kiến trúc chìm mảnh dưới nền */}
      <div className="absolute inset-0 z-0">
        <div className="grid h-full w-full grid-cols-4 border-l border-white/[0.02] md:grid-cols-12">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="h-full w-full border-r border-white/[0.02]"
            />
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-0 h-[350px] w-[350px] bg-amber-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] bg-amber-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Thay đổi từ grid-cols-12 với tỉ lệ 5/7 sang tỉ lệ 7/5 để cột trái rộng hẳn ra */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* KHỐI THÔNG TIN BÊN TRÁI: Tăng từ col-span-5 lên col-span-7 để kéo dài diện tích chữ */}
          <div className="space-y-10 lg:col-span-7 pt-4 w-full">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-amber-400">
                Connect With Us
              </span>

              {/* Tiêu đề chính: Dùng ngắt dòng chủ động tinh tế, kết hợp whitespace-nowrap ngăn vỡ chữ */}
              <h2 className="mb-6 text-4xl font-bold uppercase leading-[1.2] tracking-tight md:text-5xl lg:text-[54px] text-white max-w-full">
                Khởi Đầu Hành Trình <br />
                <span className="text-amber-100/90 whitespace-nowrap">Quản Lý Gia Sản</span> <br />
                <span className="text-amber-100/90 whitespace-nowrap">Vững Bền Gia Tộc</span>
              </h2>

              <p className="max-w-xl text-xs leading-relaxed text-slate-400 font-light tracking-wide">
                Tại CityHouse, sự minh bạch không chỉ là cam kết, mà là hệ thống vận hành thực tế giúp Chủ đầu tư hoàn toàn an tâm về tài sản của mình.
              </p>
            </motion.div>

            {/* Thông tin liên hệ phụ dưới vách ngăn mảnh */}
            <div className="grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 max-w-xl">
              <div>
                <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-white/30">
                  Văn phòng chiến lược
                </p>
                <p className="text-xs font-light leading-relaxed text-slate-300">
                  485B Nguyễn Đình Chiểu, phường Bàn Cờ, TP.HCM
                </p>
              </div>

              <div>
                <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-white/30">
                  Thời gian làm việc
                </p>
                <p className="text-xs font-light leading-relaxed text-slate-300">
                  Thứ 2 - Thứ 7 <span className="text-white/20 mx-1">|</span> 08:00 - 18:00
                </p>
              </div>
            </div>
          </div>

          {/* KHỐI FORM ĐĂNG KÝ BÊN PHẢI: Hạ từ col-span-7 xuống col-span-5 để nhường không gian */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end w-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-md rounded-none shadow-2xl relative"
            >
              <div className="absolute right-0 top-0 h-12 w-12 border-r border-t border-amber-400/20" />

              <h3 className="mb-8 text-xl font-bold uppercase tracking-wide text-white">
                Tham Quan & Hợp Tác
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Họ tên của bạn
                  </label>
                  <input
                    type="text"
                    value={form.full_name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, full_name: e.target.value }))
                    }
                    placeholder="Nhập tên của bạn..."
                    className="w-full border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white rounded-none outline-none transition-all placeholder:text-white/20 focus:border-amber-400 focus:bg-white/10"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="090 ..."
                      className="w-full border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white rounded-none outline-none transition-all placeholder:text-white/20 focus:border-amber-400 focus:bg-white/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, email: e.target.value }))
                      }
                      placeholder="your@email.com"
                      className="w-full border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white rounded-none outline-none transition-all placeholder:text-white/20 focus:border-amber-400 focus:bg-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                    Lời nhắn của bạn
                  </label>
                  <textarea
                    rows={4}
                    value={form.note}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, note: e.target.value }))
                    }
                    placeholder="Nội dung cần tư vấn..."
                    className="w-full resize-none border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white rounded-none outline-none transition-all placeholder:text-white/20 focus:border-amber-400 focus:bg-white/10"
                  />
                </div>

                {message && (
                  <div className="border border-white/10 bg-white/[0.04] px-4 py-3 text-xs leading-relaxed text-slate-300 rounded-none">
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 bg-white text-[#0F1A41] py-4.5 text-xs font-bold uppercase tracking-[0.2em] rounded-none transition-all duration-300 hover:bg-amber-400 hover:text-[#0F1A41] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? "Đang gửi..." : "Gửi yêu cầu tư vấn"}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>

              <p className="mt-5 text-center text-[9px] font-light tracking-wide text-white/20">
                Bằng cách nhấn gửi, bạn đồng ý với chính sách quyền riêng tư của chúng tôi.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
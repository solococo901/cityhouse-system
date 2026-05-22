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


      const res = await fetch("http://localhost:3001/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    
      // const res = await fetch("/api/leads", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(form),
      // });

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
      className="relative w-full overflow-hidden bg-[#F4F5F7] py-24 md:py-32 text-[#0F1A41] font-['Inter',_sans-serif] border-t border-[#0F1A41]/10"
    >
      {/* Hệ lưới kiến trúc chìm mảnh dưới nền - Đổi sang màu tối mờ */}
      <div className="absolute inset-0 z-0">
        <div className="grid h-full w-full grid-cols-4 border-l border-[#0F1A41]/[0.02] md:grid-cols-12">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="h-full w-full border-r border-[#0F1A41]/[0.03]"
            />
          ))}
        </div>
      </div>

      {/* Đèn Blur chuyển sang tông hổ phách dịu để tiệp với nền sáng */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* KHỐI THÔNG TIN BÊN TRÁI */}
          <div className="space-y-10 lg:col-span-7 pt-4 w-full">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-amber-600">
                Tham Gia Hệ Thống
              </span>

              <h2 className="mb-6 text-4xl font-bold uppercase leading-[1.2] tracking-tight md:text-5xl lg:text-[54px] text-[#0F1A41] max-w-full">
                Khởi Đầu Hành Trình <br />
                <span className="text-[#0F1A41]/70 whitespace-nowrap">Quản Lý Gia Sản</span> <br />
                <span className="text-[#0F1A41]/70 whitespace-nowrap">Vững Bền Gia Tộc</span>
              </h2>

              <p className="max-w-xl text-xs leading-relaxed text-slate-600 font-light tracking-wide">
                Tại CityHouse, sự minh bạch không chỉ là cam kết, mà là hệ thống vận hành thực tế giúp Chủ đầu tư hoàn toàn an tâm về tài sản của mình.
              </p>
            </motion.div>

            {/* Thông tin liên hệ phụ dưới vách ngăn mảnh */}
            <div className="grid grid-cols-1 gap-6 border-t border-[#0F1A41]/10 pt-8 sm:grid-cols-2 max-w-xl">
              <div>
                <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-[#0F1A41]/40">
                  Văn phòng chiến lược
                </p>
                <p className="text-xs font-semibold leading-relaxed text-[#0F1A41]/80">
                  485B Nguyễn Đình Chiểu, phường Bàn Cờ, TP.HCM
                </p>
              </div>

              <div>
                <p className="mb-2 text-[9px] font-bold uppercase tracking-widest text-[#0F1A41]/40">
                  Hotline
                </p>
                <p className="text-xs font-semibold leading-relaxed text-[#0F1A41]/80">
                  0878 25 35 45
                </p>
              </div>
            </div>
          </div>

          {/* KHỐI FORM ĐĂNG KÝ BÊN PHẢI */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end w-full">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-md border rounded-xl border-[#0F1A41]/10 bg-[#0F1A41] p-6 md:p-8 rounded-none shadow-2xl relative text-white"
            >
              {/* Form giữ khối màu Navy đậm để tạo điểm nhấn tương phản cực mạnh (Pop-up effect) */}
              <div className="absolute right-0 top-0 h-12 w-12 border-r border-t border-amber-400/20" />

              <h3 className="mb-8 text-xl font-bold uppercase tracking-wide text-white">
                Tham Quan & Hợp Tác
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold  uppercase tracking-widest text-white/40">
                    Họ tên của bạn
                  </label>
                  <input
                    type="text"
                    value={form.full_name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, full_name: e.target.value }))
                    }
                    placeholder="Nhập tên của bạn..."
                    className="w-full border rounded-xl border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-[#FAA269] focus:bg-white/10"
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
                      className="w-full  rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white rounded-none outline-none transition-all placeholder:text-white/20 focus:border-[#FAA269] focus:bg-white/10"
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
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white rounded-none outline-none transition-all placeholder:text-white/20 focus:border-[#FAA269] focus:bg-white/10"
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
                    className="w-full resize-none border rounded-xl border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white rounded-none outline-none transition-all placeholder:text-white/20 focus:border-[#FAA269] focus:bg-white/10"
                  />
                </div>

                {message && (
                  <div className="border  rounded-xl border-red-500 bg-white/[0.04] px-4 py-3 text-xs leading-relaxed text-slate-300" role="alert">
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center rounded-xl justify-center gap-3 bg-[#FAA269] text-[#0F1A41] py-4.5 text-xs font-bold uppercase tracking-[0.2em] rounded-none transition-all duration-300 hover:bg-[#f8741d] hover:text-[#0F1A41] disabled:cursor-not-allowed disabled:opacity-50"
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
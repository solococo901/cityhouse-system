"use client";

const featureItems = [
  {
    eyebrow: "Quy mô",
    value: "30+ Tòa Nhà",
    description: "800+ phòng cao cấp",
  },
  {
    eyebrow: "Khách hàng",
    value: "127.000+",
    description: "Lượt khách năm 2025",
  },
  {
    eyebrow: "Giá trị tài sản",
    value: "3.000 Tỷ",
    description: "Đang trực tiếp quản lý",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0F1A41] pt-[76px] text-white font-['Inter',_sans-serif]">
      {/* Background Video: Tăng opacity từ 40% lên 65% để video hiển thị rõ nét hơn hẳn */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-65 mix-blend-normal"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/video-intro.mp4" type="video/mp4" />
      </video>

      {/* LỚP PHỦ 1: Giảm độ mờ lớp phủ phẳng xuống để lộ chi tiết video, chủ yếu giữ tương phản vừa đủ cho phần text trung tâm */}
      <div className="absolute inset-0 bg-[#0F1A41]/35 z-[1]" />

      {/* LỚP PHỦ 2 (GRADIENT VIGNETTE): Tạo dải tối ở đỉnh (đỡ Navbar) và đáy (đỡ phần Stats), trung tâm trong suốt để lộ rõ video */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1A41]/80 via-[#0F1A41]/20 to-[#0F1A41]/95 z-[2]" />
      
      {/* LỚP PHỦ 3 (RADIAL GLOW): Bắt sáng nhẹ ngay vùng rìa màn hình, đẩy khối video ở giữa nổi bật lên */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(15,26,65,0.4)_100%)] z-[2]" />

      {/* Đẩy z-index của container nội dung lên z-10 để luôn nằm trên các lớp phủ */}
      <div className="relative z-10 flex min-h-[calc(100vh-76px)] flex-col justify-between">
        <div className="max-w-[1280px] w-full mx-auto px-6 text-center pt-20 md:pt-28 my-auto">
          {/* Tag giới thiệu nhỏ */}
          <div className="mb-6 inline-flex border border-white/20 bg-[#0F1A41]/60 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-amber-400 rounded-none backdrop-blur-md">
            CityHouse More
          </div>

          {/* Tiêu đề chính: Thêm drop-shadow mạnh hơn một chút để text luôn "nổi" trên nền video chuyển động */}
          <h1 className="mx-auto max-w-5xl text-5xl font-bold uppercase leading-[1.15] tracking-tight md:text-7xl lg:text-8xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            Quản Lý Gia Sản <br className="hidden md:block" /> 
            <span className="text-amber-100/95 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
              Vững Bền Gia Tộc
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white font-medium tracking-wide md:text-base drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Hệ sinh thái căn hộ dịch vụ, khách sạn và văn phòng được phát triển
            cho nhà đầu tư đang tìm kiếm dòng tiền bền vững tại đô thị.
          </p>

          {/* Hệ thống nút bấm góc cảnh */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] bg-white text-[#0F1A41] rounded-none transition-all duration-300 hover:bg-amber-400 hover:text-[#0F1A41] shadow-xl"
            >
              Khám phá hệ thống
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] border border-white/40 bg-[#0F1A41]/40 text-white rounded-none backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white"
            >
              Liên hệ tư vấn
            </a>
          </div>
        </div>

        {/* Hệ thống Thống kê dưới chân trang (Độ mờ background tăng nhẹ lên bg-[#0F1A41]/90 để làm bệ đỡ vững chãi cho data) */}
        <div className="w-full border-t border-white/10 bg-[#0F1A41]/90 backdrop-blur-md">
          <div className="mx-auto max-w-[1280px] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {featureItems.map((item) => (
              <div
                key={item.eyebrow}
                className="group relative px-6 py-8 text-center transition-all duration-500 hover:bg-white/[0.03] md:py-10"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.06),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400/80">
                    {item.eyebrow}
                  </div>
                  <div className="text-[36px] font-bold leading-none tracking-tight text-white md:text-[40px] lg:text-[46px]">
                    {item.value}
                  </div>
                  <div className="mt-3 text-xs font-light tracking-wide text-slate-300">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
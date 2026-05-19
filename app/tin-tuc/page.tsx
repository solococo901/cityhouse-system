"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb"; // Đảm bảo bạn đã tạo file này như hướng dẫn trước


// --- DỮ LIỆU BỘ LỌC ---
const categories = ["Tất cả", "Vận hành", "Đầu tư", "Pháp lý", "Thị trường"] as const;
type Category = typeof categories[number];

// --- MOCK DATA TIN TỨC ---
const newsData = [
    {
        id: 1,
        category: "Thị trường",
        date: "24.04.2026",
        title: "Xu hướng khai thác căn hộ dịch vụ cao cấp tại trung tâm TP.HCM năm 2026",
        excerpt: "Sự dịch chuyển của dòng vốn FDI cùng sự trở lại của đội ngũ chuyên gia quốc tế đang tạo ra một làn sóng mới cho phân khúc căn hộ dịch vụ cao cấp...",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
        isFeatured: true, // Bài viết nổi bật to nhất
    },
    {
        id: 2,
        category: "Vận hành",
        date: "22.04.2026",
        title: "Chuẩn bị tài sản trước khi đưa vào vận hành thực tế",
        excerpt: "Những bước chuẩn bị quan trọng từ thiết kế, nội thất đến setup dịch vụ để tối ưu hóa doanh thu ngay từ tháng đầu tiên.",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        category: "Đầu tư",
        date: "20.04.2026",
        title: "Thương hiệu vận hành và giá trị tài sản gắn liền",
        excerpt: "Tại sao các dự án có thương hiệu quản lý chuyên nghiệp luôn định giá cao hơn thị trường 20-30%?",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 4,
        category: "Pháp lý",
        date: "18.04.2026",
        title: "Các lưu ý pháp lý quan trọng khi khai thác cho thuê",
        excerpt: "Tổng hợp các quy định mới nhất về phòng cháy chữa cháy và đăng ký tạm trú cho khách nước ngoài.",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 5,
        category: "Vận hành",
        date: "15.04.2026",
        title: "Tối ưu trải nghiệm khách lưu trú dài hạn",
        excerpt: "Khách hàng lưu trú dài hạn cần nhiều hơn một chỗ ngủ. Họ cần một cộng đồng và phong cách sống.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 6,
        category: "Đầu tư",
        date: "12.04.2026",
        title: "Mô hình hợp tác vận hành Win-Win",
        excerpt: "Giải pháp an nhàn cho chủ nhà: Bàn giao tài sản, nhận báo cáo định kỳ và dòng tiền ổn định mỗi tháng.",
        image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop",
    }
];

export default function NewsMagazinePage() {
    const [activeCategory, setActiveCategory] = useState<Category>("Tất cả");

    // Tách bài viết nổi bật (Featured) và bài viết thường
    const featuredArticle = newsData.find(news => news.isFeatured);
    const standardArticles = newsData.filter(news => !news.isFeatured);

    // Logic lọc bài viết
    const filteredArticles = useMemo(() => {
        if (activeCategory === "Tất cả") return standardArticles;
        return newsData.filter((news) => news.category === activeCategory);
    }, [activeCategory, standardArticles]);


    const breadcrumbData = [
        { label: "Trang chủ", href: "/" },
        { label: "Tin Tức" } // Mục hiện tại không cần href
    ];

    return (
        <>
            <Header />

            <main className="min-h-screen bg-white font-sans pb-24 ">
                <Breadcrumb items={breadcrumbData} />
                {/* --- 1. HERO BANNER --- */}
                <div className="relative h-[30vh] md:h-[45vh] w-full overflow-hidden flex items-center justify-center bg-[#0F1A41]">
                    <img
                        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2200&auto=format&fit=crop"
                        alt="Dự án đang hoạt động background"
                        className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-normal"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0F1A41]/40 via-[#0F1A41]/70 to-[#0F1A41]" />

                    <div className="relative z-10 text-center px-6">
                        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white drop-shadow-md">
                            Tin Tức
                        </h1>
                        <div className="w-16 h-[2px] bg-amber-400 mx-auto mt-5" />
                    </div>
                </div>

                <div className="max-w-[1280px] mx-auto px-4 md:px-6 pt-12 md:pt-16">

                    {/* --- 2. HEADER SECTION & FILTER --- */}
                    <div className="flex flex-col  md:flex-row justify-between md:items-end gap-6 border-b border-slate-200 pb-8 mb-10">
                        <div>
                            <h2 className="text-3xl md:text-[40px] font-bold text-[#1a1a1a] tracking-tight mb-2">
                                Góc nhìn & Phân tích
                            </h2>
                            <p className="text-[15px] text-slate-500 font-light">
                                Cập nhật xu hướng vận hành, pháp lý và đầu tư bất động sản.
                            </p>
                        </div>

                        {/* BỘ LỌC CATEGORY */}
                        <div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-nowrap md:flex-wrap pb-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`whitespace-nowrap px-5 py-2 text-[12px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 border ${category === activeCategory
                                        ? "bg-[#0A1128] border-[#0A1128] text-white shadow-md"
                                        : "bg-white border-slate-200 text-slate-500 hover:border-[#0A1128] hover:text-[#0A1128]"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* --- 3. BÀI VIẾT NỔI BẬT (Chỉ hiện khi ở tab "Tất cả") --- */}
                    {activeCategory === "Tất cả" && featuredArticle && (
                        <Link href={`/tin-tuc/${featuredArticle.id}`} className="group block mb-16">
                            <div className="flex rounded-xl flex-col lg:flex-row gap-0 lg:gap-0  overflow-hidden border border-slate-200 bg-white hover:shadow-xl transition-shadow duration-500">
                                {/* Ảnh lớn */}
                                <div className="w-full lg:w-[60%] relative aspect-video lg:aspect-auto">
                                    <img
                                        src={featuredArticle.image}
                                        alt={featuredArticle.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                {/* Nội dung bài nổi bật */}
                                <div className="w-full lg:w-[40%] p-8 lg:p-12 flex flex-col justify-center bg-white z-10">
                                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">
                                        <span className="text-[#B88645]">{featuredArticle.category}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                        <span>{featuredArticle.date}</span>
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-[#1a1a1a] leading-snug mb-4 group-hover:text-[#B88645] transition-colors duration-300">
                                        {featuredArticle.title}
                                    </h3>
                                    <p className="text-[15px] text-slate-500 font-light leading-relaxed mb-8 line-clamp-3">
                                        {featuredArticle.excerpt}
                                    </p>
                                    <span className="inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-[#0A1128] group-hover:text-[#B88645] transition-colors">
                                        Đọc tiếp
                                        <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )}

                    {/* --- 4. LƯỚI CÁC BÀI VIẾT TIÊU CHUẨN --- */}
                    {filteredArticles.length > 0 ? (
                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-8 md:gap-y-12">
                            {filteredArticles.map((news) => (
                                <Link href={`/tin-tuc/${news.id}`} key={news.id} className="group flex flex-col cursor-pointer">

                                    {/* Ảnh bài viết */}
                                    <div className="relative  rounded-xl aspect-[4/3] w-full overflow-hidden  bg-slate-100 mb-5">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Badge Category trên ảnh */}
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#0A1128] ">
                                            {news.category}
                                        </div>
                                    </div>

                                    {/* Ngày tháng */}
                                    <div className="text-[11px] font-bold tracking-widest text-slate-400 mb-3">
                                        {news.date}
                                    </div>

                                    {/* Tiêu đề bài viết */}
                                    <h3 className="text-xl font-bold text-[#1a1a1a] leading-snug group-hover:text-[#B88645] transition-colors duration-300 mb-3 line-clamp-2">
                                        {news.title}
                                    </h3>

                                    {/* Đoạn trích dẫn ngắn */}
                                    <p className="text-[14px] text-slate-500 font-light leading-relaxed line-clamp-2">
                                        {news.excerpt}
                                    </p>

                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="w-full py-20 text-center flex flex-col items-center bg-slate-50 border border-slate-100">
                            <svg className="w-12 h-12 text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                            <h3 className="text-lg font-bold text-slate-700 mb-1">Chưa có bài viết</h3>
                            <p className="text-sm text-slate-500 font-light">Hiện tại chưa có bài viết nào trong chuyên mục này.</p>
                        </div>
                    )}

                    {/* --- 5. NÚT XEM THÊM (PAGINATION) --- */}
                    {filteredArticles.length > 0 && (
                        <div className="mt-16 flex justify-center">
                            <button className="border border-[#0A1128] text-[#0A1128] hover:bg-[#0A1128] hover:text-white px-8 py-3 text-[13px] font-bold uppercase tracking-widest transition-colors duration-300 rounded-full">
                                Xem thêm bài viết
                            </button>
                        </div>
                    )}

                </div>
            </main>

            <Footer />
        </>
    );
}
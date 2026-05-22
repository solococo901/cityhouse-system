"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb";

export default function ActiveProjectsSection() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const styleId = "cityhouse-cloudbeds-premium-theme";
        let styleTag = document.getElementById(styleId);

        if (!styleTag) {
            styleTag = document.createElement("style");
            styleTag.id = styleId;
            
            // BẮT BUỘC: Thêm attribute định danh theo tài liệu của Cloudbeds
            styleTag.setAttribute("data-cb-immersive-experience-root", "");

            styleTag.textContent = `
                :is(#cb-bookingengine, .cb-bookingengine-root) {
                   #cb-bookingengine-main-layout {
                        background-image: linear-gradient(rgba(253, 253, 253, 0.85), rgba(253, 253, 253, 0.85)), 
                                          url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80') !important;
                        background-size: cover !important;
                        background-position: center !important;
                        background-attachment: fixed !important;
                        padding: 32px 16px !important;
                    }
                .cb-card{
                border-radius: 12px !important;}
            .cb-landing-page.d-1uzm9j5{
            
            min-height: 100px!important;
            max-height: 100px!important;
            height: calc(0vh - var(--booking-engine-space-36));
            
            
            }


            `;
            
            document.head.appendChild(styleTag);
        }

        return () => {};
    }, []);

    const breadcrumbData = [
        { label: "Trang chủ", href: "/" },
        { label: "Booking" }
    ];

    return (
        <>
            <Header />

            {/* main có nền sáng sạch sẽ, font Inter hiện đại */}
            <main className="min-h-screen font-['Inter',_sans-serif] bg-[#FDFDFD]">

                <Breadcrumb items={breadcrumbData} />

                <Script
                    src="https://hotels.cloudbeds.com/assets/immersive_experience/loader.js"
                    strategy="afterInteractive"
                />

                <Script
                    src="https://static1.cloudbeds.com/booking-engine/latest/static/js/immersive-experience/cb-immersive-experience.js"
                    strategy="lazyOnload"
                />

                {/* Container bọc ngoài: dùng max-w-7xl để layout mở rộng cân đối như ảnh mẫu */}
                <section className="w-full mx-auto px-4 md:px-8 pb-24 mt-6 relative z-10">
                    <div className="bg-white border border-gray-100 p-1 md:p-2 shadow-sm min-h-[120px]">
                        {isMounted && (
                            <cb-immersive-experience mode="standard" property-code="WA6U2F" />
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
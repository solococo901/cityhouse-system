"use client";
import { motion } from "framer-motion";

export default function PortfolioSection() {
    return (
        <section className="w-full bg-white py-12 md:py-10 px-4 md:px-16">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden border border-slate-200 shadow-2xl"
                >
                    <img
                        src="/images/hethong.jpg"
                        alt="CityHouse Portfolio Grid"
                        className="w-full h-auto object-cover display-block transition-transform duration-[5s] hover:scale-105"
                    />

                    {/* Decorative Blueprint Corner - Đồng bộ với style kiến trúc */}
                    <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#0F1A41]/10 m-4 md:m-8"></div>
                    <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#0F1A41]/10 m-4 md:m-8"></div>
                </motion.div>
            </div>
        </section>
    );
}
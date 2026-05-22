"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/layout/Breadcrumb"; // Đảm bảo bạn đã tạo file này như hướng dẫn trước
import Hero from "./components/Hero";
import MarketInsights from "./components/MarketInsights";
import ExecutionPower from "./components/ExecutionPower";
import CaseStudies from "./components/CaseStudies";
import BrandShowcase from "./components/ShowCase";
import StrategicRoadmap from "./components/StrategicRoadmap";
import CooperationModels from "./components/CooperationModels";
import ContactSection from "./components/ContactSection";
import PortfolioSection from "./components/PortfolioSection";


export default function NewsMagazinePage() {

    const breadcrumbData = [
        { label: "Trang chủ", href: "/" },
        { label: "Tư Vấn" } // Mục hiện tại không cần href
    ];

    return (
        <>
            <Header />

            <main className="min-h-screen bg-white font-sans pb-24 ">
                <Breadcrumb items={breadcrumbData} />
                <Hero />
                <MarketInsights />
                {/* <CoreServices /> */}
                <ExecutionPower />
                <CaseStudies />
                <BrandShowcase />
                <StrategicRoadmap />
                <CooperationModels />
                <ContactSection />
                <PortfolioSection />
            </main>
            <Footer />
        </>
    );
}
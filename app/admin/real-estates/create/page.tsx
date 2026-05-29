"use client";

import { useState, type ElementType } from "react";

import Link from "next/link";
import {
  ArrowLeft,
  BadgeDollarSign,
  Building2,
  Car,
  Check,
  FileCheck,
  Home,
  ImagePlus,
  MapPinned,
  Plus,
  Save,
  Search,
  ShieldCheck,
  Sparkles,
  Trash2,
  Trees,
} from "lucide-react";

import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminInput from "@/components/admin/AdminInput";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminSelect from "@/components/admin/AdminSelect";
import AdminTextarea from "@/components/admin/AdminTextarea";

type Language = "vi" | "en";

type LanguageTabsProps = {
  activeLang: Language;
  onChange: (lang: Language) => void;
};

type RealEstateUnit = {
  id: number;
};

const realEstateAmenityOptions = [
  {
    id: "legal-clear",
    iconKey: "legal",
    nameVi: "Pháp lý rõ ràng",
    nameEn: "Clear legal status",
  },
  {
    id: "pink-book",
    iconKey: "document",
    nameVi: "Sổ hồng",
    nameEn: "Pink book",
  },
  {
    id: "central-location",
    iconKey: "location",
    nameVi: "Vị trí trung tâm",
    nameEn: "Central location",
  },
  {
    id: "frontage",
    iconKey: "frontage",
    nameVi: "Mặt tiền",
    nameEn: "Frontage",
  },
  {
    id: "parking",
    iconKey: "parking",
    nameVi: "Bãi xe",
    nameEn: "Parking",
  },
  {
    id: "security",
    iconKey: "security",
    nameVi: "An ninh",
    nameEn: "Security",
  },
  {
    id: "green-area",
    iconKey: "green",
    nameVi: "Không gian xanh",
    nameEn: "Green space",
  },
  {
    id: "investment",
    iconKey: "investment",
    nameVi: "Tiềm năng đầu tư",
    nameEn: "Investment potential",
  },
];

function getRealEstateAmenityIcon(iconKey: string): ElementType {
  const icons = {
    legal: ShieldCheck,
    document: FileCheck,
    location: MapPinned,
    frontage: Home,
    parking: Car,
    security: ShieldCheck,
    green: Trees,
    investment: BadgeDollarSign,
  };

  return icons[iconKey as keyof typeof icons] || Sparkles;
}

function LanguageTabs({ activeLang, onChange }: LanguageTabsProps) {
  return (
    <div className="mb-5 inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-1 font-inter">
      <button
        type="button"
        onClick={() => onChange("vi")}
        className={[
          "h-10 rounded-xl px-5 text-sm font-bold transition-all",
          activeLang === "vi"
            ? "bg-[#0F1A41] text-white shadow-sm"
            : "text-slate-400 hover:text-[#0F1A41]",
        ].join(" ")}
      >
        Tiếng Việt
      </button>

      <button
        type="button"
        onClick={() => onChange("en")}
        className={[
          "h-10 rounded-xl px-5 text-sm font-bold transition-all",
          activeLang === "en"
            ? "bg-[#0F1A41] text-white shadow-sm"
            : "text-slate-400 hover:text-[#0F1A41]",
        ].join(" ")}
      >
        English
      </button>
    </div>
  );
}

function UploadBox({
  title,
  description,
  height = "h-40",
}: {
  title: string;
  description: string;
  height?: string;
}) {
  return (
    <button
      type="button"
      className={[
        "flex w-full flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 text-center transition hover:border-[#C9A45C] hover:bg-[#C9A45C]/5",
        height,
      ].join(" ")}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#0F1A41] shadow-sm">
        <ImagePlus className="h-6 w-6" />
      </div>

      <h3 className="mt-3 text-sm font-bold text-[#0F1A41]">{title}</h3>

      <p className="mt-1 text-xs font-bold text-slate-400">{description}</p>
    </button>
  );
}

export default function AdminCreateRealEstatePage() {
  const [overviewLang, setOverviewLang] = useState<Language>("vi");
  const [descriptionLang, setDescriptionLang] = useState<Language>("vi");
  const [unitLang, setUnitLang] = useState<Language>("vi");
  const [seoLang, setSeoLang] = useState<Language>("vi");

  const [units, setUnits] = useState<RealEstateUnit[]>([
    {
      id: 1,
    },
  ]);

  const [amenitySearchValue, setAmenitySearchValue] = useState("");

  const [selectedAmenities, setSelectedAmenities] = useState<
    Record<number, string[]>
  >({});

  const filteredAmenities = amenitySearchValue.trim()
    ? realEstateAmenityOptions.filter((amenity) => {
        const searchValue = amenitySearchValue.toLowerCase();

        return (
          amenity.nameVi.toLowerCase().includes(searchValue) ||
          amenity.nameEn.toLowerCase().includes(searchValue)
        );
      })
    : [];

  const handleAddUnit = () => {
    setUnits((prev) => [
      ...prev,
      {
        id: Date.now(),
      },
    ]);
  };

  const handleRemoveUnit = (unitId: number) => {
    setUnits((prev) => {
      if (prev.length === 1) return prev;

      return prev.filter((unit) => unit.id !== unitId);
    });

    setSelectedAmenities((prev) => {
      const next = { ...prev };

      delete next[unitId];

      return next;
    });
  };

  const handleToggleAmenity = (unitId: number, amenityId: string) => {
    setSelectedAmenities((prev) => {
      const currentAmenities = prev[unitId] || [];

      const nextAmenities = currentAmenities.includes(amenityId)
        ? currentAmenities.filter((id) => id !== amenityId)
        : [...currentAmenities, amenityId];

      return {
        ...prev,
        [unitId]: nextAmenities,
      };
    });
  };

  const handleClearAmenities = (unitId: number) => {
    setSelectedAmenities((prev) => ({
      ...prev,
      [unitId]: [],
    }));
  };

  return (
    <div className="space-y-6 font-inter">
      <AdminPageHeader
        title="Thêm Bất động sản mới"
        description="Dựng layout form thêm bất động sản. Giai đoạn này chưa xử lý lưu dữ liệu."
      >
        <Link href="/admin/real-estates">
          <AdminButton variant="secondary">
            <ArrowLeft className="h-4 w-4" />
            Quay lại
          </AdminButton>
        </Link>

        <AdminButton>
          <Save className="h-4 w-4" />
          Lưu Bất động sản
        </AdminButton>
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <AdminCard
            title="Thông tin chung"
            description="Các thông tin dùng chung cho cả Tiếng Việt và English."
          >
            <div className="space-y-5">
              <div className="rounded-md bg-[#0F1A41]/5 px-4 py-3 text-xs font-bold leading-6 text-[#0F1A41]">
                Slug, Google Map và các dữ liệu kỹ thuật chỉ cần nhập một lần.
                URL sẽ tự sinh theo dạng /vi/real-estates/slug và
                /en/real-estates/slug.
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <AdminInput
                  label="Slug"
                  placeholder="can-ho-cao-cap-quan-1"
                />

                <AdminInput
                  label="Google Map Iframe URL"
                  placeholder="Dán link iframe Google Map tại đây"
                />

                <AdminInput
                  label="Google Map URL"
                  placeholder="Dán link Google Map tại đây"
                />

                <AdminInput
                  label="Mã sản phẩm"
                  placeholder="RE-001"
                />
              </div>
            </div>
          </AdminCard>

          <AdminCard
            title="Thông tin tổng quan"
            description="Thông tin chính hiển thị trên trang chi tiết Bất động sản."
          >
            <LanguageTabs
              activeLang={overviewLang}
              onChange={setOverviewLang}
            />

            <div className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <AdminInput
                  label={
                    overviewLang === "vi"
                      ? "Tên bất động sản"
                      : "Real estate name"
                  }
                  placeholder={
                    overviewLang === "vi"
                      ? "Ví dụ: Căn hộ cao cấp Quận 1"
                      : "Example: Premium Apartment District 1"
                  }
                />

                <AdminInput
                  label={overviewLang === "vi" ? "Địa chỉ" : "Address"}
                  placeholder={
                    overviewLang === "vi"
                      ? "Nhập địa chỉ tiếng Việt"
                      : "Enter English address"
                  }
                />

                <AdminInput
                  label={
                    overviewLang === "vi" ? "Tiêu đề ngắn" : "Short heading"
                  }
                  placeholder={
                    overviewLang === "vi"
                      ? "Căn hộ cao cấp tại trung tâm Quận 1"
                      : "Premium apartment in the heart of District 1"
                  }
                />

                <AdminInput
                  label={
                    overviewLang === "vi" ? "Mô tả ngắn" : "Short description"
                  }
                  placeholder={
                    overviewLang === "vi"
                      ? "Nhập mô tả ngắn hiển thị ở đầu trang"
                      : "Enter short description for hero section"
                  }
                />
              </div>
            </div>
          </AdminCard>

          <AdminCard
            title="Thông số bất động sản"
            description="Các thông số quan trọng như diện tích, phòng ngủ, pháp lý và giá."
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <AdminInput label="Diện tích" placeholder="85m²" />

              <AdminInput label="Số phòng ngủ" placeholder="2 phòng ngủ" />

              <AdminInput label="Số phòng tắm" placeholder="2 phòng tắm" />

              <AdminInput label="Hướng" placeholder="Đông Nam" />

              <AdminInput
                label="Giá bán / giá thuê"
                placeholder="5.500.000.000"
              />

              <AdminInput label="Đơn vị giá" placeholder="VNĐ" />

              <AdminInput
                label="Pháp lý"
                placeholder="Sổ hồng / Hợp đồng mua bán"
              />

              <AdminInput
                label="Tình trạng bàn giao"
                placeholder="Hoàn thiện / Nội thất cơ bản"
              />
            </div>
          </AdminCard>

          <AdminCard
            title="Mô tả chi tiết"
            description="Nội dung dài cho trang chi tiết Bất động sản."
          >
            <LanguageTabs
              activeLang={descriptionLang}
              onChange={setDescriptionLang}
            />

            <AdminTextarea
              label={
                descriptionLang === "vi"
                  ? "Mô tả chi tiết tiếng Việt"
                  : "Detail description English"
              }
              placeholder={
                descriptionLang === "vi"
                  ? "Nhập nội dung chi tiết tiếng Việt..."
                  : "Enter English detail content..."
              }
              rows={8}
            />
          </AdminCard>

          <AdminCard
            title="Gallery Đầu Trang"
            description="Quản lý hình ảnh hiển thị ở đầu trang chi tiết Bất động sản."
          >
            <div className="space-y-5">
              <div className="rounded-md bg-slate-50 px-4 py-3 text-xs font-bold leading-6 text-slate-500">
                Gallery này sẽ hiển thị ở đầu trang chi tiết Bất động sản. Ảnh
                chính nên dùng tỷ lệ ngang, rõ không gian, mặt tiền hoặc view
                tổng thể.
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <label className="mb-2 block text-xs font-bold text-slate-700">
                    Ảnh chính lớn
                  </label>

                  <UploadBox
                    title="Tải ảnh chính"
                    description="Khuyến nghị 1200x800px"
                    height="h-72"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item}>
                      <label className="mb-2 block text-xs font-bold text-slate-700">
                        Ảnh phụ {item}
                      </label>

                      <UploadBox
                        title="Ảnh phụ"
                        description="JPG / PNG / WEBP"
                        height="h-32"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold text-slate-700">
                  Album hình mở rộng
                </label>

                <UploadBox
                  title="Tải thêm album hình"
                  description="Dùng cho nút Xem thêm ở trang Bất động sản Detail"
                  height="h-36"
                />
              </div>
            </div>
          </AdminCard>

          <AdminCard
            title="Danh sách sản phẩm / mặt bằng"
            description="Quản lý các sản phẩm con, căn hộ, mặt bằng hoặc lựa chọn bên trong bất động sản."
          >
            <div className="space-y-5">
              <div className="rounded-md bg-[#0F1A41]/5 px-4 py-3 text-xs font-bold leading-6 text-[#0F1A41]">
                Mỗi sản phẩm con có thông tin dùng chung như diện tích, giá,
                pháp lý và ảnh. Nội dung tên sản phẩm, mô tả, tiện ích sẽ nhập
                theo tab Tiếng Việt hoặc English.
              </div>

              <LanguageTabs activeLang={unitLang} onChange={setUnitLang} />

              {units.map((unit, index) => {
                const unitNumber = String(index + 1).padStart(2, "0");
                const selectedAmenityIds = selectedAmenities[unit.id] || [];

                return (
                  <div
                    key={unit.id}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F1A41] text-white">
                          <Home className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="text-sm font-bold text-[#0F1A41]">
                            Sản phẩm {unitNumber}
                          </h3>

                          <p className="mt-1 text-xs font-bold text-slate-400">
                            {unitLang === "vi"
                              ? "Đang nhập nội dung Tiếng Việt"
                              : "Editing English content"}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveUnit(unit.id)}
                        className={[
                          "flex h-10 w-10 items-center justify-center rounded-2xl border transition-all",
                          units.length === 1
                            ? "cursor-not-allowed border-slate-100 bg-slate-100 text-slate-300"
                            : "border-red-100 bg-white text-red-500 hover:bg-red-50",
                        ].join(" ")}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <AdminInput
                        label={
                          unitLang === "vi"
                            ? "Tên sản phẩm"
                            : "Product name"
                        }
                        placeholder={
                          unitLang === "vi"
                            ? "Ví dụ: Căn hộ 2 phòng ngủ"
                            : "Example: 2-bedroom apartment"
                        }
                      />

                      <AdminInput label="Diện tích" placeholder="85m²" />

                      <AdminInput label="Số phòng ngủ" placeholder="2" />

                      <AdminInput label="Số phòng tắm" placeholder="2" />

                      <AdminInput label="View / Hướng" placeholder="Đông Nam" />

                      <AdminInput
                        label="Giá bán / giá thuê"
                        placeholder="5.500.000.000"
                      />

                      <AdminInput label="Đơn vị giá" placeholder="VNĐ" />

                      <AdminInput
                        label="Số thứ tự hiển thị"
                        placeholder="1"
                      />

                      <div className="md:col-span-2">
                        <AdminTextarea
                          label={
                            unitLang === "vi"
                              ? "Mô tả sản phẩm"
                              : "Product description"
                          }
                          placeholder={
                            unitLang === "vi"
                              ? "Nhập mô tả sản phẩm tiếng Việt..."
                              : "Enter English product description..."
                          }
                          rows={4}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <div className="rounded-3xl border border-slate-200 bg-white p-5">
                          <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                              <h4 className="text-sm font-bold text-[#0F1A41]">
                                {unitLang === "vi"
                                  ? "Tiện ích sản phẩm"
                                  : "Product amenities"}
                              </h4>

                              <p className="mt-1 text-xs font-bold leading-5 text-slate-400">
                                {unitLang === "vi"
                                  ? "Chọn các tiện ích có trong sản phẩm này."
                                  : "Select amenities available in this product."}
                              </p>
                            </div>

                            <div className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 lg:w-[320px]">
                              <Search className="h-4 w-4 text-slate-400" />

                              <input
                                value={amenitySearchValue}
                                onChange={(event) =>
                                  setAmenitySearchValue(event.target.value)
                                }
                                placeholder={
                                  unitLang === "vi"
                                    ? "Tìm tiện ích bất động sản..."
                                    : "Search amenities..."
                                }
                                className="h-11 w-full bg-transparent text-sm font-bold text-[#0F1A41] outline-none placeholder:text-slate-400"
                              />
                            </div>
                          </div>

                          <div className="mb-4 flex flex-wrap items-center gap-2">
                            <div className="rounded-full bg-[#0F1A41]/5 px-3 py-2 text-xs font-bold text-[#0F1A41]">
                              {unitLang === "vi" ? "Đã chọn" : "Selected"}{" "}
                              {selectedAmenityIds.length}{" "}
                              {unitLang === "vi" ? "tiện ích" : "amenities"}
                            </div>

                            {selectedAmenityIds.length > 0 && (
                              <button
                                type="button"
                                onClick={() => handleClearAmenities(unit.id)}
                                className="rounded-full border border-red-100 bg-red-50 px-3 py-2 text-xs font-bold text-red-500 transition hover:bg-red-100"
                              >
                                {unitLang === "vi"
                                  ? "Bỏ chọn tất cả"
                                  : "Clear all"}
                              </button>
                            )}
                          </div>

                          {amenitySearchValue.trim() ? (
                            filteredAmenities.length > 0 ? (
                              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
                                {filteredAmenities.map((amenity) => {
                                  const Icon = getRealEstateAmenityIcon(
                                    amenity.iconKey
                                  );
                                  const isSelected =
                                    selectedAmenityIds.includes(amenity.id);
                                  const label =
                                    unitLang === "vi"
                                      ? amenity.nameVi
                                      : amenity.nameEn;

                                  return (
                                    <button
                                      key={amenity.id}
                                      type="button"
                                      onClick={() =>
                                        handleToggleAmenity(unit.id, amenity.id)
                                      }
                                      className={[
                                        "group relative flex min-h-[74px] flex-col items-start justify-between rounded-2xl border p-3 text-left transition-all",
                                        isSelected
                                          ? "border-[#0F1A41] bg-[#0F1A41] text-white shadow-sm"
                                          : "border-slate-200 bg-slate-50 text-[#0F1A41] hover:border-[#C9A45C] hover:bg-[#C9A45C]/5",
                                      ].join(" ")}
                                    >
                                      <div className="flex w-full items-start justify-between gap-2">
                                        <span
                                          className={[
                                            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all",
                                            isSelected
                                              ? "bg-white/10 text-[#C9A45C]"
                                              : "bg-white text-[#0F1A41] shadow-sm group-hover:text-[#C9A45C]",
                                          ].join(" ")}
                                        >
                                          <Icon className="h-4 w-4" />
                                        </span>

                                        <span
                                          className={[
                                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all",
                                            isSelected
                                              ? "border-[#C9A45C] bg-[#C9A45C] text-[#0F1A41]"
                                              : "border-slate-200 bg-white text-transparent",
                                          ].join(" ")}
                                        >
                                          <Check className="h-3.5 w-3.5" />
                                        </span>
                                      </div>

                                      <span className="mt-3 line-clamp-2 text-xs font-bold leading-5">
                                        {label}
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>
                            ) : (
                              <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
                                <p className="text-sm font-bold text-slate-400">
                                  {unitLang === "vi"
                                    ? "Không tìm thấy tiện ích phù hợp."
                                    : "No matching amenities found."}
                                </p>
                              </div>
                            )
                          ) : (
                            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
                              <p className="text-sm font-bold text-slate-400">
                                {unitLang === "vi"
                                  ? "Nhập tên tiện ích để tìm và chọn."
                                  : "Type an amenity name to search and select."}
                              </p>
                            </div>
                          )}

                          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                            <div className="mb-3 flex items-center justify-between gap-3">
                              <h5 className="text-xs font-bold uppercase tracking-[0.12em] text-[#0F1A41]">
                                {unitLang === "vi"
                                  ? "Tiện ích đã chọn"
                                  : "Selected amenities"}
                              </h5>

                              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-400 shadow-sm">
                                {selectedAmenityIds.length}
                              </span>
                            </div>

                            {selectedAmenityIds.length > 0 ? (
                              <div className="flex flex-wrap gap-2">
                                {selectedAmenityIds.map((amenityId) => {
                                  const amenity =
                                    realEstateAmenityOptions.find(
                                      (item) => item.id === amenityId
                                    );

                                  if (!amenity) return null;

                                  const Icon = getRealEstateAmenityIcon(
                                    amenity.iconKey
                                  );

                                  const label =
                                    unitLang === "vi"
                                      ? amenity.nameVi
                                      : amenity.nameEn;

                                  return (
                                    <button
                                      key={amenity.id}
                                      type="button"
                                      onClick={() =>
                                        handleToggleAmenity(unit.id, amenity.id)
                                      }
                                      className="inline-flex items-center gap-2 rounded-full border border-[#0F1A41]/10 bg-white px-3 py-2 text-xs font-bold text-[#0F1A41] shadow-sm transition hover:border-red-100 hover:bg-red-50 hover:text-red-500"
                                    >
                                      <Icon className="h-3.5 w-3.5" />

                                      <span>{label}</span>

                                      <span className="ml-1 text-sm leading-none">
                                        ×
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>
                            ) : (
                              <div className="rounded-xl border border-dashed border-slate-300 bg-white px-4 py-5 text-center">
                                <p className="text-xs font-bold text-slate-400">
                                  {unitLang === "vi"
                                    ? "Chưa chọn tiện ích nào."
                                    : "No amenities selected yet."}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label className="mb-2 block text-xs font-bold text-slate-700">
                          Ảnh sản phẩm
                        </label>

                        <UploadBox
                          title="Tải ảnh sản phẩm"
                          description="Ảnh này hiển thị bên trái card sản phẩm"
                          height="h-48"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#0F1A41]">
                      Thêm sản phẩm khác
                    </h3>

                    <p className="mt-1 text-xs font-bold leading-6 text-slate-400">
                      Dùng để thêm căn hộ, mặt bằng, shophouse hoặc sản phẩm bất
                      động sản khác.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddUnit}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-[#0F1A41] px-5 text-sm font-bold text-white transition-all hover:bg-[#C9A45C] hover:text-[#0F1A41]"
                  >
                    <Plus className="h-4 w-4" />
                    Thêm sản phẩm
                  </button>
                </div>
              </div>
            </div>
          </AdminCard>

          <AdminCard
            title="SEO"
            description="Thông tin tối ưu hiển thị trên Google theo từng ngôn ngữ."
          >
            <LanguageTabs activeLang={seoLang} onChange={setSeoLang} />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <AdminInput
                label="SEO Title"
                placeholder={
                  seoLang === "vi"
                    ? "Căn hộ cao cấp Quận 1 - CityHouse"
                    : "Premium Apartment in District 1 - CityHouse"
                }
              />

              <AdminInput
                label="SEO Keyword"
                placeholder={
                  seoLang === "vi"
                    ? "căn hộ cao cấp quận 1, bất động sản cityhouse"
                    : "premium apartment district 1, cityhouse real estate"
                }
              />

              <div className="md:col-span-2">
                <AdminTextarea
                  label="SEO Description"
                  placeholder={
                    seoLang === "vi"
                      ? "Nhập mô tả SEO tiếng Việt..."
                      : "Enter English SEO description..."
                  }
                  rows={4}
                />
              </div>
            </div>
          </AdminCard>
        </div>

        <aside className="space-y-6">
          <AdminCard
            title="Ảnh đại diện"
            description="Ảnh chính hiển thị ở danh sách và trang chi tiết."
          >
            <UploadBox
              title="Tải ảnh đại diện"
              description="Khuyến nghị ảnh ngang, rõ sản phẩm hoặc mặt tiền"
              height="h-56"
            />
          </AdminCard>

          <AdminCard
            title="Phân loại"
            description="Các dữ liệu này sẽ lấy từ phần dữ liệu chung sau này."
          >
            <div className="space-y-5">
              <AdminSelect
                label="Nhóm Property"
                options={[
                  "Bất động sản",
                  "Văn phòng",
                  "Căn hộ dịch vụ",
                  "Khách sạn",
                  "Resort",
                ]}
              />

              <AdminSelect
                label="Brand / Collection"
                options={["CityHouse", "Tera", "Soul", "Mark", "Vibe", "Nest"]}
              />

              <AdminSelect
                label="Khu vực"
                options={["Quận 1", "Phú Nhuận", "Tân Bình", "Quận 7"]}
              />

              <AdminSelect
                label="Loại giao dịch"
                options={["Bán", "Cho thuê", "Bán hoặc cho thuê"]}
              />

              <AdminSelect
                label="Loại hiển thị"
                options={[
                  "Bất động sản thường",
                  "Bất động sản nổi bật",
                  "Bất động sản mới",
                  "Bất động sản ưu tiên",
                ]}
              />

              <AdminSelect
                label="Trạng thái"
                options={["Đang hiển thị", "Tạm ẩn", "Bản nháp"]}
              />
            </div>
          </AdminCard>

          <AdminCard
            title="Địa điểm xung quanh"
            description="Chọn địa điểm từ kho nearby places và nhập khoảng cách."
          >
            <div className="space-y-3">
              {[
                "Chợ Bến Thành - 800m",
                "Saigon Centre - 1km",
                "Phố đi bộ Nguyễn Huệ - 1.2km",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-[#0F1A41]"
                >
                  {item}
                </div>
              ))}
            </div>
          </AdminCard>

          <AdminCard
            title="Bất động sản liên quan"
            description="Chọn các sản phẩm khác để hiển thị ở cuối trang chi tiết."
          >
            <div className="space-y-3">
              {[
                "Căn hộ cao cấp Quận 1",
                "Shophouse trung tâm",
                "Nhà phố Phú Nhuận",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-[#0F1A41]"
                >
                  {item}
                </div>
              ))}
            </div>
          </AdminCard>
        </aside>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import AdminRichEditor from "@/components/admin/AdminRichEditor";
import Link from "next/link";
import {
    ArrowLeft,
    Bath,
    BedDouble,
    Check,
    Coffee,
    CookingPot,
    DoorOpen,
    ImagePlus,
    Plus,
    Refrigerator,
    Save,
    Search,
    Snowflake,
    Sparkles,
    Trash2,
    Tv,
    WashingMachine,
    Wifi,
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

type Room = {
    id: number;
};

const roomAmenityOptions = [
    {
        id: "wifi",
        iconKey: "wifi",
        nameVi: "Wifi tốc độ cao",
        nameEn: "High-speed Wifi",
    },
    {
        id: "air-conditioner",
        iconKey: "air-conditioner",
        nameVi: "Máy lạnh",
        nameEn: "Air conditioner",
    },
    {
        id: "fridge",
        iconKey: "fridge",
        nameVi: "Tủ lạnh",
        nameEn: "Refrigerator",
    },
    {
        id: "kitchen",
        iconKey: "kitchen",
        nameVi: "Bếp nhỏ",
        nameEn: "Kitchenette",
    },
    {
        id: "private-bathroom",
        iconKey: "bathroom",
        nameVi: "Phòng tắm riêng",
        nameEn: "Private bathroom",
    },
    {
        id: "smart-tv",
        iconKey: "tv",
        nameVi: "Smart TV",
        nameEn: "Smart TV",
    },
    {
        id: "washing-machine",
        iconKey: "washing",
        nameVi: "Máy giặt",
        nameEn: "Washing machine",
    },
    {
        id: "balcony",
        iconKey: "balcony",
        nameVi: "Ban công",
        nameEn: "Balcony",
    },
    {
        id: "coffee-table",
        iconKey: "coffee",
        nameVi: "Bàn trà",
        nameEn: "Coffee table",
    },
];

function getRoomAmenityIcon(iconKey: string) {
    const icons = {
        wifi: Wifi,
        "air-conditioner": Snowflake,
        fridge: Refrigerator,
        kitchen: CookingPot,
        bathroom: Bath,
        tv: Tv,
        washing: WashingMachine,
        balcony: DoorOpen,
        coffee: Coffee,
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

export default function AdminCreateHotelPage() {
    const [overviewLang, setOverviewLang] = useState<Language>("vi");
    const [descriptionLang, setDescriptionLang] = useState<Language>("vi");
    const [roomLang, setRoomLang] = useState<Language>("vi");
    const [seoLang, setSeoLang] = useState<Language>("vi");
    const [contentHtml, setContentHtml] = useState("");
    const [rooms, setRooms] = useState<Room[]>([
        {
            id: 1,
        },
    ]);

    const [roomAmenitySearchValue, setRoomAmenitySearchValue] = useState("");

    const [selectedRoomAmenities, setSelectedRoomAmenities] = useState<
        Record<number, string[]>
    >({});

    const filteredRoomAmenities = roomAmenitySearchValue.trim()
        ? roomAmenityOptions.filter((amenity) => {
            const searchValue = roomAmenitySearchValue.toLowerCase();

            return (
                amenity.nameVi.toLowerCase().includes(searchValue) ||
                amenity.nameEn.toLowerCase().includes(searchValue)
            );
        })
        : [];

    const handleAddRoom = () => {
        setRooms((prev) => [
            ...prev,
            {
                id: Date.now(),
            },
        ]);
    };

    const handleRemoveRoom = (roomId: number) => {
        setRooms((prev) => {
            if (prev.length === 1) return prev;

            return prev.filter((room) => room.id !== roomId);
        });

        setSelectedRoomAmenities((prev) => {
            const next = { ...prev };

            delete next[roomId];

            return next;
        });
    };

    const handleToggleRoomAmenity = (roomId: number, amenityId: string) => {
        setSelectedRoomAmenities((prev) => {
            const currentAmenities = prev[roomId] || [];

            const nextAmenities = currentAmenities.includes(amenityId)
                ? currentAmenities.filter((id) => id !== amenityId)
                : [...currentAmenities, amenityId];

            return {
                ...prev,
                [roomId]: nextAmenities,
            };
        });
    };

    const handleClearRoomAmenities = (roomId: number) => {
        setSelectedRoomAmenities((prev) => ({
            ...prev,
            [roomId]: [],
        }));
    };

    return (
        <div className="space-y-6 font-inter">
            <AdminPageHeader
                title="Thêm Hotel mới"
                description="Dựng layout form thêm hotel, khách sạn hoặc căn hộ dịch vụ. Giai đoạn này chưa xử lý lưu dữ liệu."
            >
                <Link href="/admin/hotels">
                    <AdminButton variant="secondary">
                        <ArrowLeft className="h-4 w-4" />
                        Quay lại
                    </AdminButton>
                </Link>

                <AdminButton>
                    <Save className="h-4 w-4" />
                    Lưu Hotel
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
                                URL sẽ tự sinh theo dạng /vi/hotels/slug và /en/hotels/slug.
                            </div>

                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <AdminInput label="Slug" placeholder="cityhouse-kim-nguyen" />

                                <AdminInput
                                    label="Google Map Iframe URL"
                                    placeholder="Dán link iframe Google Map tại đây"
                                />

                                <AdminInput
                                    label="Google Map URL"
                                    placeholder="Dán link Google Map tại đây"
                                />
                            </div>
                        </div>
                    </AdminCard>

                    <AdminCard
                        title="Thông tin tổng quan"
                        description="Thông tin chính hiển thị trên trang chi tiết Hotel."
                    >
                        <LanguageTabs
                            activeLang={overviewLang}
                            onChange={setOverviewLang}
                        />

                        <div className="space-y-5">
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <AdminInput
                                    label={overviewLang === "vi" ? "Tên Hotel" : "Hotel name"}
                                    placeholder={
                                        overviewLang === "vi"
                                            ? "Ví dụ: CityHouse - Kim Nguyên"
                                            : "Example: CityHouse - Kim Nguyen"
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


                            </div>
                        </div>
                    </AdminCard>

                    <AdminCard
                        title="Mô tả chi tiết"
                        description="Nội dung dài cho trang chi tiết Hotel."
                    >
                        <LanguageTabs
                            activeLang={descriptionLang}
                            onChange={setDescriptionLang}
                        />

                        <AdminRichEditor
                            label={descriptionLang === "vi" ? "Nội dung (vi):" : "Content (en):"}
                            value={contentHtml}
                            onChange={setContentHtml}
                            minHeight={520}
                        />
                    </AdminCard>

                    <AdminCard
                        title="Gallery Đầu Trang"
                        description="Quản lý hình ảnh hiển thị ở đầu trang chi tiết Hotel."
                    >
                        <div className="space-y-5">
                            <div className="rounded-md bg-slate-50 px-4 py-3 text-xs font-bold leading-6 text-slate-500">
                                Gallery này sẽ hiển thị ở đầu trang chi tiết Hotel. Ảnh chính
                                nên dùng tỷ lệ ngang, rõ không gian phòng hoặc mặt tiền.
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
                                    description="Dùng cho nút Xem thêm ở trang Hotel Detail"
                                    height="h-36"
                                />
                            </div>
                        </div>
                    </AdminCard>

                    <AdminCard
                        title="Danh sách phòng"
                        description="Quản lý các loại phòng hiển thị ở section Lựa chọn phòng."
                    >
                        <div className="space-y-5">
                            <div className="rounded-md bg-[#0F1A41]/5 px-4 py-3 text-xs font-bold leading-6 text-[#0F1A41]">
                                Mỗi phòng có thông tin dùng chung như diện tích, số khách, giá
                                và ảnh. Nội dung tên phòng, mô tả, tiện nghi phòng sẽ nhập theo
                                tab Tiếng Việt hoặc English.
                            </div>

                            <LanguageTabs activeLang={roomLang} onChange={setRoomLang} />

                            {rooms.map((room, index) => {
                                const roomNumber = String(index + 1).padStart(2, "0");
                                const selectedAmenityIds = selectedRoomAmenities[room.id] || [];

                                return (
                                    <div
                                        key={room.id}
                                        className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
                                    >
                                        <div className="mb-5 flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F1A41] text-white">
                                                    <BedDouble className="h-5 w-5" />
                                                </div>

                                                <div>
                                                    <h3 className="text-sm font-bold text-[#0F1A41]">
                                                        Phòng {roomNumber}
                                                    </h3>

                                                    <p className="mt-1 text-xs font-bold text-slate-400">
                                                        {roomLang === "vi"
                                                            ? "Đang nhập nội dung Tiếng Việt"
                                                            : "Editing English content"}
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => handleRemoveRoom(room.id)}
                                                className={[
                                                    "flex h-10 w-10 items-center justify-center rounded-2xl border transition-all",
                                                    rooms.length === 1
                                                        ? "cursor-not-allowed border-slate-100 bg-slate-100 text-slate-300"
                                                        : "border-red-100 bg-white text-red-500 hover:bg-red-50",
                                                ].join(" ")}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>

                                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                            <AdminInput
                                                label={roomLang === "vi" ? "Tên phòng" : "Room name"}
                                                placeholder={
                                                    roomLang === "vi"
                                                        ? "Ví dụ: Studio Deluxe"
                                                        : "Example: Studio Deluxe"
                                                }
                                            />

                                            <AdminInput label="Diện tích" placeholder="35m²" />

                                            <AdminInput label="Số khách" placeholder="2 khách" />



                                            <AdminInput
                                                label="Giá tham khảo"
                                                placeholder="1.200.000"
                                            />

                                            <AdminInput label="Đơn vị giá" placeholder="/ đêm" />

                                            <div className="md:col-span-2">
                                                <AdminRichEditor
                                                    label={descriptionLang === "vi" ? "Mô tả chi tiết (vi):" : "Content (en):"}
                                                    value={contentHtml}
                                                    onChange={setContentHtml}
                                                    minHeight={220}
                                                />
                                            </div>

                                            <div className="md:col-span-2">
                                                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                                                    <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                                                        <div>
                                                            <h4 className="text-sm font-bold text-[#0F1A41]">
                                                                {roomLang === "vi"
                                                                    ? "Tiện nghi phòng"
                                                                    : "Room amenities"}
                                                            </h4>

                                                            <p className="mt-1 text-xs font-bold leading-5 text-slate-400">
                                                                {roomLang === "vi"
                                                                    ? "Chọn các tiện nghi có trong loại phòng này."
                                                                    : "Select amenities available in this room type."}
                                                            </p>
                                                        </div>

                                                        <div className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 lg:w-[320px]">
                                                            <Search className="h-4 w-4 text-slate-400" />

                                                            <input
                                                                value={roomAmenitySearchValue}
                                                                onChange={(event) =>
                                                                    setRoomAmenitySearchValue(event.target.value)
                                                                }
                                                                placeholder={
                                                                    roomLang === "vi"
                                                                        ? "Tìm tiện nghi phòng..."
                                                                        : "Search amenities..."
                                                                }
                                                                className="h-11 w-full bg-transparent text-sm font-bold text-[#0F1A41] outline-none placeholder:text-slate-400"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="mb-4 flex flex-wrap items-center gap-2">
                                                        <div className="rounded-full bg-[#0F1A41]/5 px-3 py-2 text-xs font-bold text-[#0F1A41]">
                                                            {roomLang === "vi" ? "Đã chọn" : "Selected"}{" "}
                                                            {selectedAmenityIds.length}{" "}
                                                            {roomLang === "vi" ? "tiện nghi" : "amenities"}
                                                        </div>

                                                        {selectedAmenityIds.length > 0 && (
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    handleClearRoomAmenities(room.id)
                                                                }
                                                                className="rounded-full border border-red-100 bg-red-50 px-3 py-2 text-xs font-bold text-red-500 transition hover:bg-red-100"
                                                            >
                                                                {roomLang === "vi"
                                                                    ? "Bỏ chọn tất cả"
                                                                    : "Clear all"}
                                                            </button>
                                                        )}
                                                    </div>

                                                    {roomAmenitySearchValue.trim() ? (
                                                        filteredRoomAmenities.length > 0 && (
                                                            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
                                                                {filteredRoomAmenities.map((amenity) => {
                                                                    const Icon = getRoomAmenityIcon(amenity.iconKey);
                                                                    const isSelected = selectedAmenityIds.includes(amenity.id);
                                                                    const label = roomLang === "vi" ? amenity.nameVi : amenity.nameEn;

                                                                    return (
                                                                        <button
                                                                            key={amenity.id}
                                                                            type="button"
                                                                            onClick={() => handleToggleRoomAmenity(room.id, amenity.id)}
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
                                                        )
                                                    ) : (
                                                        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
                                                            <p className="text-sm font-bold text-slate-400">
                                                                {roomLang === "vi"
                                                                    ? "Nhập tên tiện nghi để tìm và chọn."
                                                                    : "Type an amenity name to search and select."}
                                                            </p>
                                                        </div>
                                                    )}



                                                    <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                                        <div className="mb-3 flex items-center justify-between gap-3">
                                                            <h5 className="text-xs font-bold uppercase tracking-[0.12em] text-[#0F1A41]">
                                                                {roomLang === "vi"
                                                                    ? "Tiện nghi đã chọn"
                                                                    : "Selected amenities"}
                                                            </h5>

                                                            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-400 shadow-sm">
                                                                {selectedAmenityIds.length}
                                                            </span>
                                                        </div>

                                                        {selectedAmenityIds.length > 0 ? (
                                                            <div className="flex flex-wrap gap-2">
                                                                {selectedAmenityIds.map((amenityId) => {
                                                                    const amenity = roomAmenityOptions.find(
                                                                        (item) => item.id === amenityId
                                                                    );

                                                                    if (!amenity) return null;

                                                                    const Icon = getRoomAmenityIcon(
                                                                        amenity.iconKey
                                                                    );

                                                                    const label =
                                                                        roomLang === "vi"
                                                                            ? amenity.nameVi
                                                                            : amenity.nameEn;

                                                                    return (
                                                                        <button
                                                                            key={amenity.id}
                                                                            type="button"
                                                                            onClick={() =>
                                                                                handleToggleRoomAmenity(
                                                                                    room.id,
                                                                                    amenity.id
                                                                                )
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
                                                                    {roomLang === "vi"
                                                                        ? "Chưa chọn tiện nghi nào."
                                                                        : "No amenities selected yet."}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="md:col-span-2">
                                                <label className="mb-2 block text-xs font-bold text-slate-700">
                                                    Ảnh phòng
                                                </label>

                                                <UploadBox
                                                    title="Tải ảnh phòng"
                                                    description="Ảnh này hiển thị bên trái card phòng"
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
                                            Thêm phòng khác
                                        </h3>

                                        <p className="mt-1 text-xs font-bold leading-6 text-slate-400">
                                            Dùng để thêm Standard Studio, Superior Studio, Deluxe
                                            Studio, Suite...
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleAddRoom}
                                        className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-[#0F1A41] px-5 text-sm font-bold text-white transition-all hover:bg-[#C9A45C] hover:text-[#0F1A41]"
                                    >
                                        <Plus className="h-4 w-4" />
                                        Thêm phòng
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
                                        ? "CityHouse Kim Nguyên - Căn hộ dịch vụ gần sân bay"
                                        : "CityHouse Kim Nguyen - Serviced Apartment Near Airport"
                                }
                            />

                            <AdminInput
                                label="SEO Keyword"
                                placeholder={
                                    seoLang === "vi"
                                        ? "cityhouse kim nguyên, căn hộ dịch vụ phú nhuận"
                                        : "cityhouse kim nguyen, serviced apartment phu nhuan"
                                }
                            />

                            <div className="md:col-span-2">

                                <AdminRichEditor
                                    label={seoLang === "vi" ? "Nhập mô tả SEO tiếng Việt..." : "Enter English SEO description..."}
                                    value={contentHtml}
                                    onChange={setContentHtml}
                                    minHeight={120}
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
                            description="Khuyến nghị ảnh ngang, rõ mặt tiền hoặc không gian nổi bật"
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
                                options={["Căn hộ dịch vụ", "Khách sạn", "Văn phòng", "Resort"]}
                            />

                            <AdminSelect
                                label="Brand / Collection"
                                options={["Tera", "Soul", "Mark", "Vibe", "Nest"]}
                            />

                            <AdminSelect
                                label="Khu vực"
                                options={["Quận 1", "Phú Nhuận", "Tân Bình", "Quận 7"]}
                            />

                            <AdminSelect
                                label="Loại hiển thị"
                                options={[
                                    "Hotel thường",
                                    "Hotel nổi bật",
                                    "Hotel mới",
                                    "Hotel ưu tiên",
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
                                "Chợ Bến Thành - 500m",
                                "Phố đi bộ Nguyễn Huệ - 1.2km",
                                "Sân bay Tân Sơn Nhất - 4km",
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
                        title="Hotel liên quan"
                        description="Chọn các Hotel khác để hiển thị ở cuối trang chi tiết."
                    >
                        <div className="space-y-3">
                            {[
                                "CityHouse - Lighthouse SG",
                                "CityHouse - El Pino Realm",
                                "CityHouse - Tera The S",
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
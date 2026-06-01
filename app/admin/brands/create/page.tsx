"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, ReactNode, useMemo, useState } from "react";
import {
    ArrowLeft,
    CheckCircle2,
    Eye,
    ImagePlus,
    Layers3,
    Save,
    Search,
    Star,
} from "lucide-react";

import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type LanguageKey = "vi" | "en";

type BrandStatus = "active" | "draft" | "hidden";

type TranslatedValue = {
    vi: string;
    en: string;
};

const statusOptions: { label: string; value: BrandStatus }[] = [
    { label: "Đang hiển thị", value: "active" },
    { label: "Bản nháp", value: "draft" },
    { label: "Tạm ẩn", value: "hidden" },
];

function createSlug(value: string) {
    return value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "d")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

export default function AdminCreateBrandPage() {
    const [activeLanguage, setActiveLanguage] = useState<LanguageKey>("vi");

    const [name, setName] = useState<TranslatedValue>({
        vi: "",
        en: "",
    });

    const [displayName, setDisplayName] = useState<TranslatedValue>({
        vi: "",
        en: "",
    });

    const [slug, setSlug] = useState<TranslatedValue>({
        vi: "",
        en: "",
    });

    const [shortDescription, setShortDescription] = useState<TranslatedValue>({
        vi: "",
        en: "",
    });

    const [description, setDescription] = useState<TranslatedValue>({
        vi: "",
        en: "",
    });

    const [imageUrl, setImageUrl] = useState("");
    const [imageAlt, setImageAlt] = useState("");

    const [sortOrder, setSortOrder] = useState("1");
    const [status, setStatus] = useState<BrandStatus>("draft");
    const [showOnHomepage, setShowOnHomepage] = useState(true);
    const [isFeatured, setIsFeatured] = useState(false);

    const checklist = useMemo(() => {
        return [
            {
                label: "Có tên Brand tiếng Việt",
                done: Boolean(name.vi.trim()),
            },
            {
                label: "Có tên Brand English",
                done: Boolean(name.en.trim()),
            },
            {
                label: "Có slug tiếng Việt",
                done: Boolean(slug.vi.trim()),
            },
            {
                label: "Có slug English",
                done: Boolean(slug.en.trim()),
            },
            {
                label: "Có mô tả ngắn tiếng Việt",
                done: Boolean(shortDescription.vi.trim()),
            },
            {
                label: "Có mô tả ngắn English",
                done: Boolean(shortDescription.en.trim()),
            },
            {
                label: "Có ảnh đại diện",
                done: Boolean(imageUrl.trim()),
            },
            {
                label: "Có alt text cho ảnh",
                done: Boolean(imageAlt.trim()),
            },
        ];
    }, [name, slug, shortDescription, imageUrl, imageAlt]);

    const completedCount = checklist.filter((item) => item.done).length;

    const handleChangeTranslatedValue = (
        setter: (value: TranslatedValue) => void,
        currentValue: TranslatedValue,
        value: string,
    ) => {
        setter({
            ...currentValue,
            [activeLanguage]: value,
        });
    };

    const handleChangeName = (value: string) => {
        setName({
            ...name,
            [activeLanguage]: value,
        });

        if (!slug[activeLanguage]) {
            setSlug({
                ...slug,
                [activeLanguage]: createSlug(value),
            });
        }

        if (!displayName[activeLanguage]) {
            setDisplayName({
                ...displayName,
                [activeLanguage]: value,
            });
        }

        if (!imageAlt) {
            setImageAlt(`CityHouse ${value}`);
        }
    };

    const handleSubmitBrand = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const payload = {
            name,
            displayName,
            slug,
            shortDescription,
            description,
            imageUrl,
            imageAlt,
            sortOrder: Number(sortOrder),
            status,
            showOnHomepage,
            isFeatured,
        };

        console.log("Create brand payload ready for backend:", payload);
    };

    return (
        <form onSubmit={handleSubmitBrand} className="space-y-5">
            <AdminPageHeader
                title="Thêm Brand mới"
                description="Tạo dòng sản phẩm mới để hiển thị trong section Brand / Collection của CityHouse."
            >
                <div className="flex flex-wrap items-center gap-2">
                    <Link href="/admin/brands">
                        <AdminButton variant="secondary">
                            <ArrowLeft className="h-4 w-4" />
                            Quay lại
                        </AdminButton>
                    </Link>

                    <AdminButton variant="secondary" type="button">
                        <Eye className="h-4 w-4" />
                        Xem trước
                    </AdminButton>

                    <AdminButton type="submit">
                        <Save className="h-4 w-4" />
                        Lưu Brand
                    </AdminButton>
                </div>
            </AdminPageHeader>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">
                <div className="space-y-5">
                    <AdminCard>
                        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <h2 className="text-base font-bold text-[#0F1A41]">
                                    Ngôn ngữ nội dung
                                </h2>

                                <p className="mt-1 text-xs font-bold leading-5 text-slate-400">
                                    Nhập riêng nội dung Tiếng Việt và English cho Brand.
                                </p>
                            </div>

                            <div className="inline-flex w-fit rounded-2xl border border-slate-200 bg-slate-50 p-1">
                                <button
                                    type="button"
                                    onClick={() => setActiveLanguage("vi")}
                                    className={[
                                        "h-9 rounded-xl px-4 text-xs font-bold transition",
                                        activeLanguage === "vi"
                                            ? "bg-[#0F1A41] text-white shadow-sm"
                                            : "text-slate-400 hover:text-[#0F1A41]",
                                    ].join(" ")}
                                >
                                    Tiếng Việt
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setActiveLanguage("en")}
                                    className={[
                                        "h-9 rounded-xl px-4 text-xs font-bold transition",
                                        activeLanguage === "en"
                                            ? "bg-[#0F1A41] text-white shadow-sm"
                                            : "text-slate-400 hover:text-[#0F1A41]",
                                    ].join(" ")}
                                >
                                    English
                                </button>
                            </div>
                        </div>
                    </AdminCard>

                    <AdminCard>
                        <div className="mb-5 flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
                            <div>
                                <h2 className="text-base font-bold text-[#0F1A41]">
                                    Thông tin Brand
                                </h2>

                                <p className="mt-1 text-xs font-bold leading-5 text-slate-400">
                                    Nhập thông tin chính của dòng sản phẩm như MARK, SOUL, VIBE,
                                    TERA hoặc NEST.
                                </p>
                            </div>

                            <Layers3 className="h-5 w-5 text-[#C9A45C]" />
                        </div>

                        <div className="grid grid-cols-1 gap-5">
                            <AdminTextInput
                                label={
                                    activeLanguage === "vi"
                                        ? "Tên Brand tiếng Việt"
                                        : "English Brand name"
                                }
                                placeholder={
                                    activeLanguage === "vi"
                                        ? "Ví dụ: MARK"
                                        : "Example: MARK"
                                }
                                value={name[activeLanguage]}
                                onChange={(event) => handleChangeName(event.target.value)}
                            />

                            <AdminTextInput
                                label={
                                    activeLanguage === "vi"
                                        ? "Tên hiển thị ngắn"
                                        : "Short display name"
                                }
                                placeholder={
                                    activeLanguage === "vi"
                                        ? "Ví dụ: Dòng căn hộ trung tâm"
                                        : "Example: Central living collection"
                                }
                                value={displayName[activeLanguage]}
                                onChange={(event) =>
                                    handleChangeTranslatedValue(
                                        setDisplayName,
                                        displayName,
                                        event.target.value,
                                    )
                                }
                            />

                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_190px]">
                                <AdminTextInput
                                    label="Slug"
                                    placeholder={
                                        activeLanguage === "vi" ? "mark" : "mark-en"
                                    }
                                    value={slug[activeLanguage]}
                                    onChange={(event) =>
                                        handleChangeTranslatedValue(
                                            setSlug,
                                            slug,
                                            createSlug(event.target.value),
                                        )
                                    }
                                />

                                <div>
                                    <label className="mb-2 block text-xs font-bold text-slate-700">
                                        URL Preview
                                    </label>

                                    <div className="flex h-11 items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 text-xs font-bold text-slate-400">
                                        /brands/{slug[activeLanguage] || "brand"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AdminCard>

                    <AdminCard>
                        <div className="mb-5 flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
                            <div>
                                <h2 className="text-base font-bold text-[#0F1A41]">
                                    Mô tả hiển thị
                                </h2>

                                <p className="mt-1 text-xs font-bold leading-5 text-slate-400">
                                    Nội dung này dùng cho card Brand ngoài website và có thể mở
                                    rộng cho trang chi tiết Brand sau này.
                                </p>
                            </div>

                            <Layers3 className="h-5 w-5 text-[#C9A45C]" />
                        </div>

                        <div className="grid grid-cols-1 gap-5">
                            <AdminTextareaField
                                label={
                                    activeLanguage === "vi"
                                        ? "Mô tả ngắn tiếng Việt"
                                        : "English short description"
                                }
                                placeholder={
                                    activeLanguage === "vi"
                                        ? "Nhập mô tả ngắn hiển thị trên card Brand..."
                                        : "Enter short description shown on the Brand card..."
                                }
                                value={shortDescription[activeLanguage]}
                                onChange={(event) =>
                                    handleChangeTranslatedValue(
                                        setShortDescription,
                                        shortDescription,
                                        event.target.value,
                                    )
                                }
                            />


                        </div>
                    </AdminCard>
                </div>

                <div className="space-y-5">
                    <AdminCard>
                        <div className="mb-5 flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
                            <div>
                                <h2 className="text-base font-bold text-[#0F1A41]">
                                    Ảnh đại diện
                                </h2>

                                <p className="mt-1 text-xs font-bold text-slate-400">
                                    Dùng cho card Brand ngoài trang chủ.
                                </p>
                            </div>

                            <ImagePlus className="h-5 w-5 text-[#C9A45C]" />
                        </div>

                        <div className="space-y-4">
                            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50">
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt={imageAlt || name[activeLanguage]}
                                        className="h-52 w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-52 items-center justify-center text-slate-300">
                                        <ImagePlus className="h-10 w-10" />
                                    </div>
                                )}
                            </div>

                            <AdminTextInput
                                label="Image URL"
                                placeholder="https://..."
                                value={imageUrl}
                                onChange={(event) => setImageUrl(event.target.value)}
                            />

                            <AdminTextInput
                                label="Alt text"
                                placeholder="Mô tả ảnh cho SEO..."
                                value={imageAlt}
                                onChange={(event) => setImageAlt(event.target.value)}
                            />

                            <button
                                type="button"
                                className="flex h-10 w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white text-xs font-bold text-[#0F1A41] transition hover:border-[#C9A45C] hover:text-[#C9A45C]"
                            >
                                <Search className="h-4 w-4" />
                                Chọn từ Media Library
                            </button>
                        </div>
                    </AdminCard>

                    <AdminCard>
                        <div className="mb-5 flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
                            <div>
                                <h2 className="text-base font-bold text-[#0F1A41]">
                                    Cài đặt hiển thị
                                </h2>

                                <p className="mt-1 text-xs font-bold text-slate-400">
                                    Quản lý trạng thái và thứ tự hiển thị ngoài website.
                                </p>
                            </div>

                            <Star className="h-5 w-5 text-[#C9A45C]" />
                        </div>

                        <div className="space-y-4">
                            <AdminSelectField
                                label="Trạng thái"
                                value={status}
                                onChange={(event) =>
                                    setStatus(event.target.value as BrandStatus)
                                }
                            >
                                {statusOptions.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </AdminSelectField>

                            <AdminTextInput
                                label="Thứ tự hiển thị"
                                type="number"
                                value={sortOrder}
                                onChange={(event) => setSortOrder(event.target.value)}
                            />

                            <AdminCheckbox
                                checked={showOnHomepage}
                                label="Hiển thị ở homepage"
                                description="Brand sẽ xuất hiện trong section 5 dòng sản phẩm định hình."
                                onChange={() => setShowOnHomepage((current) => !current)}
                            />

                        </div>
                    </AdminCard>


                </div>
            </div>
        </form>
    );
}

function AdminTextInput({
    label,
    value,
    onChange,
    placeholder,
    type = "text",
}: {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
}) {
    return (
        <div>
            <label className="mb-2 block text-xs font-bold text-slate-700">
                {label}
            </label>

            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C]"
            />
        </div>
    );
}

function AdminTextareaField({
    label,
    value,
    onChange,
    placeholder,
}: {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
}) {
    return (
        <div>
            <label className="mb-2 block text-xs font-bold text-slate-700">
                {label}
            </label>

            <textarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                rows={4}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold leading-6 text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C]"
            />
        </div>
    );
}

function AdminSelectField({
    label,
    value,
    onChange,
    children,
}: {
    label: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    children: ReactNode;
}) {
    return (
        <div>
            <label className="mb-2 block text-xs font-bold text-slate-700">
                {label}
            </label>

            <select
                value={value}
                onChange={onChange}
                className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] outline-none transition focus:border-[#C9A45C]"
            >
                {children}
            </select>
        </div>
    );
}

function AdminCheckbox({
    checked,
    label,
    description,
    onChange,
}: {
    checked: boolean;
    label: string;
    description: string;
    onChange: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onChange}
            className="flex w-full items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-left transition hover:border-[#C9A45C]"
        >
            <span
                className={[
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold",
                    checked
                        ? "border-[#C9A45C] bg-[#C9A45C] text-white"
                        : "border-slate-300 bg-white text-transparent",
                ].join(" ")}
            >
                ✓
            </span>

            <span>
                <span className="block text-xs font-bold text-[#0F1A41]">
                    {label}
                </span>

                <span className="mt-1 block text-xs font-bold leading-5 text-slate-400">
                    {description}
                </span>
            </span>
        </button>
    );
}
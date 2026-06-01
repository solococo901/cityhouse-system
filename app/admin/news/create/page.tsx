"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, ReactNode, useMemo, useState } from "react";
import {
    ArrowLeft,
    CalendarDays,
    CheckCircle2,
    Clock,
    Eye,
    FileText,
    Globe2,
    ImagePlus,
    Link2,
    Plus,
    Save,
    Search,
    Star,
    Tag,
} from "lucide-react";

import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";
import AdminRichEditor from "@/components/admin/AdminRichEditor";

type LanguageKey = "vi" | "en";

type NewsStatus = "draft" | "published" | "hidden" | "scheduled";

type TranslatedValue = {
    vi: string;
    en: string;
};

type TocItem = {
    id: string;
    title: string;
    level: number;
};

type RelatedPost = {
    id: number;
    title: string;
    category: string;
    image: string;
};

const categories = ["Thị trường", "Vận hành", "Đầu tư", "Pháp lý"];

const tagOptions = [
    "Thị trường",
    "Căn hộ dịch vụ",
    "Đầu tư",
    "Quận 1",
    "Pháp lý",
    "Vận hành",
];

const relatedPosts: RelatedPost[] = [
    {
        id: 1,
        title: "Chuẩn bị tài sản trước khi đưa vào vận hành thực tế",
        category: "Vận hành",
        image:
            "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "Thương hiệu vận hành và giá trị tài sản dài hạn",
        category: "Đầu tư",
        image:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "Các lưu ý pháp lý quan trọng khi khai thác cho thuê",
        category: "Pháp lý",
        image:
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop",
    },
];

const statusOptions: { label: string; value: NewsStatus }[] = [
    { label: "Bản nháp", value: "draft" },
    { label: "Đã đăng", value: "published" },
    { label: "Tạm ẩn", value: "hidden" },
    { label: "Hẹn lịch đăng", value: "scheduled" },
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

function removeHtmlTags(value: string) {
    return value.replace(/<[^>]*>/g, "").trim();
}

function extractTocFromHtml(html: string): TocItem[] {
    if (!html) {
        return [];
    }

    const headingRegex = /<h2[^>]*>(.*?)<\/h2>/gi;
    const tocItems: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(html)) !== null) {
        const title = removeHtmlTags(match[1]);

        if (title) {
            tocItems.push({
                id: createSlug(title),
                title,
                level: 2,
            });
        }
    }

    return tocItems;
}

function addIdToH2Headings(html: string) {
    if (!html) {
        return "";
    }

    return html.replace(
        /<h2([^>]*)>(.*?)<\/h2>/gi,
        (fullMatch, attributes, innerHtml) => {
            const title = removeHtmlTags(innerHtml);
            const headingId = createSlug(title);

            if (!title || attributes.includes("id=")) {
                return fullMatch;
            }

            return `<h2${attributes} id="${headingId}">${innerHtml}</h2>`;
        },
    );
}

export default function AdminNewsCreatePage() {
    const [activeLanguage, setActiveLanguage] = useState<LanguageKey>("vi");

    const [title, setTitle] = useState<TranslatedValue>({
        vi: "",
        en: "",
    });

    const [slug, setSlug] = useState<TranslatedValue>({
        vi: "",
        en: "",
    });

    const [excerpt, setExcerpt] = useState<TranslatedValue>({
        vi: "",
        en: "",
    });

    const [content, setContent] = useState<TranslatedValue>({
        vi: "",
        en: "",
    });

    const [seoTitle, setSeoTitle] = useState<TranslatedValue>({
        vi: "",
        en: "",
    });

    const [seoDescription, setSeoDescription] = useState<TranslatedValue>({
        vi: "",
        en: "",
    });

    const [canonicalUrl, setCanonicalUrl] = useState("");
    const [ogTitle, setOgTitle] = useState("");
    const [ogDescription, setOgDescription] = useState("");
    const [ogImageUrl, setOgImageUrl] = useState("");
    const [tagSearch, setTagSearch] = useState("");
    const [authorName, setAuthorName] = useState("CityHouse Editorial");
    const [category, setCategory] = useState("Thị trường");
    const [status, setStatus] = useState<NewsStatus>("draft");
    const [publishedAt, setPublishedAt] = useState("2026-04-24");
    const [scheduledAt, setScheduledAt] = useState("");
    const [isFeatured, setIsFeatured] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [allowIndex, setAllowIndex] = useState(true);

    const [thumbnailUrl, setThumbnailUrl] = useState(
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    );

    const [thumbnailAlt, setThumbnailAlt] = useState("");

    const [selectedTags, setSelectedTags] = useState<string[]>([
        "Thị trường",
        "Căn hộ dịch vụ",
        "Đầu tư",
    ]);

    const [selectedRelatedPosts, setSelectedRelatedPosts] = useState<number[]>([
        1,
        2,
    ]);

    const tocItems = useMemo(() => {
        return extractTocFromHtml(content[activeLanguage]);
    }, [content, activeLanguage]);

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

    const filteredTagOptions = tagOptions.filter((tagName) =>
        tagName.toLowerCase().includes(tagSearch.toLowerCase()),
    );

    const handleChangeTitle = (value: string) => {
        setTitle({
            ...title,
            [activeLanguage]: value,
        });

        if (!slug[activeLanguage]) {
            setSlug({
                ...slug,
                [activeLanguage]: createSlug(value),
            });
        }

        if (!seoTitle[activeLanguage]) {
            setSeoTitle({
                ...seoTitle,
                [activeLanguage]: value,
            });
        }

        if (!ogTitle) {
            setOgTitle(value);
        }
    };

    const handleChangeContent = (value: string) => {
        setContent({
            ...content,
            [activeLanguage]: value,
        });
    };

    const handleToggleTag = (tagName: string) => {
        setSelectedTags((currentTags) => {
            if (currentTags.includes(tagName)) {
                return currentTags.filter((tag) => tag !== tagName);
            }

            return [...currentTags, tagName];
        });
    };

    const handleToggleRelatedPost = (postId: number) => {
        setSelectedRelatedPosts((currentPosts) => {
            if (currentPosts.includes(postId)) {
                return currentPosts.filter((id) => id !== postId);
            }

            return [...currentPosts, postId];
        });
    };

    const handleSubmitNews = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const contentWithHeadingIds = {
            vi: addIdToH2Headings(content.vi),
            en: addIdToH2Headings(content.en),
        };

        const payload = {
            title,
            slug,
            excerpt,
            content: contentWithHeadingIds,
            tocItems: {
                vi: extractTocFromHtml(contentWithHeadingIds.vi),
                en: extractTocFromHtml(contentWithHeadingIds.en),
            },
            seoTitle,
            seoDescription,
            canonicalUrl,
            ogTitle,
            ogDescription,
            ogImageUrl,
            authorName,
            category,
            status,
            publishedAt,
            scheduledAt,
            isFeatured,
            isVisible,
            allowIndex,
            thumbnailUrl,
            thumbnailAlt,
            tags: selectedTags,
            relatedPostIds: selectedRelatedPosts,
        };

        console.log("News layout payload ready for backend:", payload);
    };

    return (
        <form onSubmit={handleSubmitNews} className="space-y-5">
            <AdminPageHeader
                title="Thêm bài viết mới"
                description="Layout nhập bài viết đầy đủ tính năng cho hệ thống tin tức CityHouse."
            >
                <div className="flex flex-wrap items-center gap-2">
                    <Link href="/admin/news">
                        <AdminButton variant="secondary">
                            <ArrowLeft className="h-4 w-4" />
                            Quay lại
                        </AdminButton>
                    </Link>

                    <AdminButton variant="secondary" type="button">
                        <Eye className="h-4 w-4" />
                        Xem trước
                    </AdminButton>

                    <AdminButton variant="secondary" type="button">
                        <Save className="h-4 w-4" />
                        Lưu nháp
                    </AdminButton>

                    <AdminButton type="submit">
                        <CheckCircle2 className="h-4 w-4" />
                        Lưu bài viết
                    </AdminButton>
                </div>
            </AdminPageHeader>

            <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">
                <div className="space-y-5">
                    <AdminCard>
                        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <h2 className="text-base font-bold text-[#0F1A41]">
                                    Nội dung bài viết
                                </h2>

                                <p className="mt-1 text-xs font-bold leading-5 text-slate-400">
                                    Nhập nội dung riêng cho Tiếng Việt và English. Mỗi ngôn ngữ có
                                    tiêu đề, slug, sapo, nội dung và SEO riêng.
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

                        <div className="mt-5 grid grid-cols-1 gap-5">
                            <AdminTextInput
                                label={
                                    activeLanguage === "vi"
                                        ? "Tiêu đề bài viết"
                                        : "Post title"
                                }
                                placeholder={
                                    activeLanguage === "vi"
                                        ? "Ví dụ: Xu hướng khai thác căn hộ dịch vụ cao cấp tại TP.HCM"
                                        : "Example: Premium serviced apartment operation trends in Ho Chi Minh City"
                                }
                                value={title[activeLanguage]}
                                onChange={(event) => handleChangeTitle(event.target.value)}
                            />

                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_170px]">
                                <AdminTextInput
                                    label="Slug"
                                    placeholder="xu-huong-khai-thac-can-ho-dich-vu"
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
                                        /tin-tuc/{slug[activeLanguage] || "slug"}
                                    </div>
                                </div>
                            </div>

                            <AdminTextareaField
                                label={
                                    activeLanguage === "vi"
                                        ? "Mô tả ngắn / Sapo"
                                        : "Short description"
                                }
                                placeholder={
                                    activeLanguage === "vi"
                                        ? "Nhập đoạn mô tả ngắn hiển thị dưới tiêu đề bài viết..."
                                        : "Enter the short introduction shown below the article title..."
                                }
                                value={excerpt[activeLanguage]}
                                onChange={(event) =>
                                    handleChangeTranslatedValue(
                                        setExcerpt,
                                        excerpt,
                                        event.target.value,
                                    )
                                }
                            />
                        </div>
                    </AdminCard>

                    <AdminCard>
                        <div className="mb-5 flex flex-col gap-2 border-b border-slate-100 pb-5">
                            <h2 className="text-base font-bold text-[#0F1A41]">
                                Nội dung chi tiết
                            </h2>

                            <p className="text-xs font-bold leading-5 text-slate-400">
                                Viết bài tại đây. Hình ảnh trong bài viết chèn trực tiếp trong
                                editor. Mục lục tự động lấy từ Heading 2.
                            </p>
                        </div>

                        <AdminRichEditor
                            label={
                                activeLanguage === "vi"
                                    ? "Nội dung bài viết tiếng Việt"
                                    : "English article content"
                            }
                            value={content[activeLanguage]}
                            onChange={handleChangeContent}
                            minHeight={620}
                        />
                    </AdminCard>

                    <AdminCard>
                        <div className="mb-5 flex flex-col gap-2 border-b border-slate-100 pb-5">
                            <h2 className="text-base font-bold text-[#0F1A41]">
                                Mục lục tự động
                            </h2>

                            <p className="text-xs font-bold leading-5 text-slate-400">
                                Không nhập thủ công. Hệ thống sẽ tự lấy các Heading 2 trong nội
                                dung để tạo mục lục.
                            </p>
                        </div>

                        {tocItems.length > 0 ? (
                            <div className="rounded-2xl border border-[#C9A45C]/30 bg-[#C9A45C]/5 p-4">
                                <div className="mb-3 flex items-center justify-between gap-3">
                                    <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#8A6A22]">
                                        Preview mục lục
                                    </h3>

                                    <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-[#8A6A22] shadow-sm">
                                        {tocItems.length} mục
                                    </span>
                                </div>

                                <div className="space-y-2">
                                    {tocItems.map((item, index) => (
                                        <div
                                            key={`${item.id}-${index}`}
                                            className="flex items-start gap-3 rounded-xl bg-white px-3 py-3"
                                        >
                                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0F1A41] text-[11px] font-bold text-white">
                                                {index + 1}
                                            </span>

                                            <div className="min-w-0">
                                                <p className="text-xs font-bold leading-5 text-[#0F1A41]">
                                                    {item.title}
                                                </p>

                                                <p className="mt-1 text-[11px] font-bold text-slate-400">
                                                    #{item.id}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-5 text-center">
                                <p className="text-sm font-bold text-[#0F1A41]">
                                    Chưa có mục lục
                                </p>

                                <p className="mt-2 text-xs font-bold leading-5 text-slate-400">
                                    Hãy thêm Heading 2 trong editor. Sau này frontend sẽ dùng các
                                    Heading 2 này để tạo box “Mục lục bài viết”.
                                </p>
                            </div>
                        )}
                    </AdminCard>

                    <AdminCard>
                        <div className="mb-5 flex flex-col gap-2 border-b border-slate-100 pb-5">
                            <h2 className="text-base font-bold text-[#0F1A41]">
                                SEO bài viết
                            </h2>

                            <p className="text-xs font-bold leading-5 text-slate-400">
                                Chuẩn bị đầy đủ thông tin SEO cho từng bài viết khi nối backend.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5">
                            <AdminTextInput
                                label="Meta title"
                                placeholder="Nhập tiêu đề SEO..."
                                value={seoTitle[activeLanguage]}
                                onChange={(event) =>
                                    handleChangeTranslatedValue(
                                        setSeoTitle,
                                        seoTitle,
                                        event.target.value,
                                    )
                                }
                            />

                            <AdminTextareaField
                                label="Meta description"
                                placeholder="Nhập mô tả SEO..."
                                value={seoDescription[activeLanguage]}
                                onChange={(event) =>
                                    handleChangeTranslatedValue(
                                        setSeoDescription,
                                        seoDescription,
                                        event.target.value,
                                    )
                                }
                            />

                            <AdminTextInput
                                label="Canonical URL"
                                placeholder="https://cityhousebooking.com/tin-tuc/slug-bai-viet"
                                value={canonicalUrl}
                                onChange={(event) => setCanonicalUrl(event.target.value)}
                            />

                            <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                                <AdminTextInput
                                    label="OG title"
                                    placeholder="Tiêu đề khi chia sẻ mạng xã hội..."
                                    value={ogTitle}
                                    onChange={(event) => setOgTitle(event.target.value)}
                                />

                                <AdminTextInput
                                    label="OG image"
                                    placeholder="URL ảnh chia sẻ..."
                                    value={ogImageUrl}
                                    onChange={(event) => setOgImageUrl(event.target.value)}
                                />
                            </div>

                            <AdminTextareaField
                                label="OG description"
                                placeholder="Mô tả khi chia sẻ mạng xã hội..."
                                value={ogDescription}
                                onChange={(event) => setOgDescription(event.target.value)}
                            />

                            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                                    Google Preview
                                </p>

                                <h3 className="line-clamp-1 text-sm font-bold text-[#1a0dab]">
                                    {seoTitle[activeLanguage] ||
                                        title[activeLanguage] ||
                                        "Tiêu đề bài viết sẽ hiển thị tại đây"}
                                </h3>

                                <p className="mt-1 line-clamp-1 text-xs font-bold text-emerald-700">
                                    cityhousebooking.com/tin-tuc/
                                    {slug[activeLanguage] || "slug-bai-viet"}
                                </p>

                                <p className="mt-2 line-clamp-2 text-xs font-bold leading-5 text-slate-500">
                                    {seoDescription[activeLanguage] ||
                                        excerpt[activeLanguage] ||
                                        "Mô tả SEO của bài viết sẽ hiển thị tại đây."}
                                </p>
                            </div>
                        </div>
                    </AdminCard>
                </div>

                <div className="space-y-5">
                    <AdminCard>
                        <div className="mb-5 flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
                            <div>
                                <h2 className="text-base font-bold text-[#0F1A41]">
                                    Xuất bản
                                </h2>

                                <p className="mt-1 text-xs font-bold text-slate-400">
                                    Cài đặt trạng thái bài viết.
                                </p>
                            </div>

                            <FileText className="h-5 w-5 text-[#C9A45C]" />
                        </div>

                        <div className="space-y-4">
                            <AdminSelectField
                                label="Trạng thái"
                                value={status}
                                onChange={(event) =>
                                    setStatus(event.target.value as NewsStatus)
                                }
                            >
                                {statusOptions.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </AdminSelectField>

                            <AdminTextInput
                                label="Ngày đăng"
                                type="date"
                                value={publishedAt}
                                onChange={(event) => setPublishedAt(event.target.value)}
                            />

                            <AdminTextInput
                                label="Hẹn lịch đăng"
                                type="datetime-local"
                                value={scheduledAt}
                                onChange={(event) => setScheduledAt(event.target.value)}
                            />

                            <AdminTextInput
                                label="Tác giả"
                                value={authorName}
                                onChange={(event) => setAuthorName(event.target.value)}
                            />

                            <AdminCheckbox
                                checked={isFeatured}
                                label="Bài viết nổi bật"
                                description="Hiển thị bài viết ở vị trí nổi bật trên trang tin tức."
                                onChange={() => setIsFeatured((current) => !current)}
                            />

                            <AdminCheckbox
                                checked={isVisible}
                                label="Hiển thị ngoài frontend"
                                description="Tắt mục này nếu muốn ẩn bài viết khỏi website."
                                onChange={() => setIsVisible((current) => !current)}
                            />

                            <AdminCheckbox
                                checked={allowIndex}
                                label="Cho phép Google index"
                                description="Bật để bài viết được phép xuất hiện trên công cụ tìm kiếm."
                                onChange={() => setAllowIndex((current) => !current)}
                            />
                        </div>
                    </AdminCard>

                    <AdminCard>
                        <div className="mb-5 flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
                            <div>
                                <h2 className="text-base font-bold text-[#0F1A41]">
                                    Ảnh đại diện
                                </h2>

                                <p className="mt-1 text-xs font-bold text-slate-400">
                                    Dùng cho card tin tức, ảnh hero bài viết và SEO.
                                </p>
                            </div>

                            <ImagePlus className="h-5 w-5 text-[#C9A45C]" />
                        </div>

                        <div className="space-y-4">
                            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                                {thumbnailUrl ? (
                                    <img
                                        src={thumbnailUrl}
                                        alt={thumbnailAlt || "News thumbnail"}
                                        className="h-48 w-full object-cover"
                                    />
                                ) : (
                                    <div className="flex h-48 items-center justify-center text-slate-300">
                                        <ImagePlus className="h-10 w-10" />
                                    </div>
                                )}
                            </div>

                            <AdminTextInput
                                label="Image URL"
                                placeholder="https://..."
                                value={thumbnailUrl}
                                onChange={(event) => setThumbnailUrl(event.target.value)}
                            />

                            <AdminTextInput
                                label="Alt text"
                                placeholder="Mô tả ảnh cho SEO..."
                                value={thumbnailAlt}
                                onChange={(event) => setThumbnailAlt(event.target.value)}
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
                                    Danh mục
                                </h2>

                                <p className="mt-1 text-xs font-bold text-slate-400">
                                    Danh mục dùng cho filter ở trang tin tức.
                                </p>
                            </div>

                            <Link2 className="h-5 w-5 text-[#C9A45C]" />
                        </div>

                        <AdminSelectField
                            label="Danh mục chính"
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                        >
                            {categories.map((item) => (
                                <option key={item}>{item}</option>
                            ))}
                        </AdminSelectField>
                    </AdminCard>

                    <AdminCard>
                        <div className="mb-5 flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
                            <div>
                                <h2 className="text-base font-bold text-[#0F1A41]">Tags</h2>

                                <p className="mt-1 text-xs font-bold text-slate-400">
                                    Tags hiển thị cuối trang chi tiết bài viết.
                                </p>
                            </div>

                            <Tag className="h-5 w-5 text-[#C9A45C]" />
                        </div>

                        <div className="space-y-4">
                            <div className="relative">
                                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" />

                                <input
                                    value={tagSearch}
                                    onChange={(event) => setTagSearch(event.target.value)}
                                    placeholder="Tìm tag..."
                                    className="h-10 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-xs font-bold text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C]"
                                />
                            </div>

                            {selectedTags.length > 0 && (
                                <div className="rounded-2xl border border-[#C9A45C]/30 bg-[#C9A45C]/5 p-3">
                                    <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8A6A22]">
                                        Đã chọn {selectedTags.length} tag
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {selectedTags.map((tagName) => (
                                            <button
                                                key={tagName}
                                                type="button"
                                                onClick={() => handleToggleTag(tagName)}
                                                className="rounded-full border border-[#C9A45C] bg-white px-3 py-2 text-xs font-bold text-[#8A6A22] transition hover:bg-[#C9A45C]/10"
                                            >
                                                {tagName} ×
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2">
                                {filteredTagOptions.length > 0 ? (
                                    filteredTagOptions.map((tagName) => {
                                        const isSelected = selectedTags.includes(tagName);

                                        return (
                                            <button
                                                key={tagName}
                                                type="button"
                                                onClick={() => handleToggleTag(tagName)}
                                                className={[
                                                    "rounded-full border px-3 py-2 text-xs font-bold transition",
                                                    isSelected
                                                        ? "border-[#C9A45C] bg-[#C9A45C]/10 text-[#8A6A22]"
                                                        : "border-slate-200 bg-white text-slate-400 hover:border-[#C9A45C] hover:text-[#C9A45C]",
                                                ].join(" ")}
                                            >
                                                {tagName}
                                            </button>
                                        );
                                    })
                                ) : (
                                    <div className="w-full rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-center">
                                        <p className="text-xs font-bold text-slate-400">
                                            Không tìm thấy tag phù hợp.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <button
                                type="button"
                                className="flex h-10 w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white text-xs font-bold text-[#0F1A41] transition hover:border-[#C9A45C] hover:text-[#C9A45C]"
                            >
                                <Plus className="h-4 w-4" />
                                Thêm tag mới sau này
                            </button>
                        </div>
                    </AdminCard>

                    <AdminCard>
                        <div className="mb-5 flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
                            <div>
                                <h2 className="text-base font-bold text-[#0F1A41]">
                                    Bài viết liên quan
                                </h2>

                                <p className="mt-1 text-xs font-bold text-slate-400">
                                    Dùng cho block “Bài viết cùng chủ đề”.
                                </p>
                            </div>

                            <Star className="h-5 w-5 text-[#C9A45C]" />
                        </div>

                        <div className="space-y-3">
                            {relatedPosts.map((post) => {
                                const isSelected = selectedRelatedPosts.includes(post.id);

                                return (
                                    <button
                                        key={post.id}
                                        type="button"
                                        onClick={() => handleToggleRelatedPost(post.id)}
                                        className={[
                                            "flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition",
                                            isSelected
                                                ? "border-[#C9A45C] bg-[#C9A45C]/10"
                                                : "border-slate-100 bg-white hover:border-[#C9A45C]",
                                        ].join(" ")}
                                    >
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="h-14 w-16 shrink-0 rounded-xl object-cover"
                                        />

                                        <div className="min-w-0">
                                            <p className="line-clamp-2 text-xs font-bold leading-5 text-[#0F1A41]">
                                                {post.title}
                                            </p>

                                            <span className="mt-1 inline-flex rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold text-slate-500">
                                                {post.category}
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}

                            <button
                                type="button"
                                className="flex h-10 w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white text-xs font-bold text-[#0F1A41] transition hover:border-[#C9A45C] hover:text-[#C9A45C]"
                            >
                                <Search className="h-4 w-4" />
                                Tìm bài viết liên quan
                            </button>
                        </div>
                    </AdminCard>

                    <AdminCard>
                        <div className="space-y-4">
                            <StatusInfo
                                icon={<Globe2 className="h-4 w-4" />}
                                label="Ngôn ngữ"
                                value={activeLanguage === "vi" ? "Tiếng Việt" : "English"}
                            />

                            <StatusInfo
                                icon={<Clock className="h-4 w-4" />}
                                label="Trạng thái"
                                value={
                                    statusOptions.find((item) => item.value === status)?.label ||
                                    "Bản nháp"
                                }
                            />

                            <StatusInfo
                                icon={<CalendarDays className="h-4 w-4" />}
                                label="Ngày đăng"
                                value={publishedAt || "Chưa chọn"}
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

function StatusInfo({
    icon,
    label,
    value,
}: {
    icon: ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
            <div className="flex items-center gap-2 text-slate-400">
                {icon}
                <span className="text-xs font-bold">{label}</span>
            </div>

            <span className="text-xs font-bold text-[#0F1A41]">{value}</span>
        </div>
    );
}
"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, ReactNode, useState } from "react";
import {
  ArrowLeft,
  ChevronDown,
  Eye,
  ImagePlus,
  Link2,
  Save,
  UploadCloud,
} from "lucide-react";

import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type LanguageKey = "vi" | "en";

type TranslatedValue = {
  vi: string;
  en: string;
};

export default function AdminCreatePartnerPage() {
  const [activeLanguage, setActiveLanguage] = useState<LanguageKey>("vi");

  const [isVisible, setIsVisible] = useState(true);
  const [sortOrder, setSortOrder] = useState("0");

  const [name, setName] = useState<TranslatedValue>({
    vi: "",
    en: "",
  });

  const [websiteUrl, setWebsiteUrl] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [logoAlt, setLogoAlt] = useState("");

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

    if (!logoAlt) {
      setLogoAlt(`${value} logo`);
    }
  };

  const handleSubmitPartner = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      isVisible,
      sortOrder: Number(sortOrder),
      name,
      websiteUrl,
      logoUrl,
      logoAlt,
    };

    console.log("Create partner payload ready for backend:", payload);
  };

  return (
    <form onSubmit={handleSubmitPartner} className="space-y-5">
      <AdminPageHeader
        title="Thêm Partner"
        description="Thêm logo đối tác hiển thị ngoài website."
      >
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/admin/partners">
            <AdminButton variant="secondary">
              <ArrowLeft className="h-4 w-4" />
              Quay lại
            </AdminButton>
          </Link>

          <AdminButton type="submit">
            <Save className="h-4 w-4" />
            Lưu Partner
          </AdminButton>

          <AdminButton variant="secondary" type="button">
            Thao tác
            <ChevronDown className="h-4 w-4" />
          </AdminButton>
        </div>
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="space-y-5">
          <AdminCard>
            <div className="mb-6 flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div>
                <h2 className="text-base font-bold text-[#0F1A41]">
                  Nội dung Partner
                </h2>

                <p className="mt-1 text-xs font-bold leading-5 text-slate-400">
                  Nhập thông tin logo đối tác và thứ tự hiển thị ngoài website.
                </p>
              </div>

              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-50 hover:text-[#0F1A41]"
              >
                −
              </button>
            </div>

            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-6">
                <label className="flex items-center gap-3 text-sm font-bold text-[#0F1A41]">
                  <span>Hiển thị:</span>

                  <input
                    type="checkbox"
                    checked={isVisible}
                    onChange={() => setIsVisible((current) => !current)}
                    className="h-4 w-4 rounded border-slate-300 accent-[#C9A45C]"
                  />
                </label>

                <div className="flex items-center gap-3">
                  <label className="text-sm font-bold text-[#0F1A41]">
                    Số thứ tự:
                  </label>

                  <input
                    type="number"
                    value={sortOrder}
                    onChange={(event) => setSortOrder(event.target.value)}
                    className="h-11 w-20 rounded-xl border border-slate-200 bg-white px-3 text-sm font-bold text-[#0F1A41] outline-none transition focus:border-[#C9A45C]"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white">
                <div className="flex border-b border-slate-200">
                  <button
                    type="button"
                    onClick={() => setActiveLanguage("vi")}
                    className={[
                      "border-r border-slate-200 px-5 py-3 text-sm font-bold transition",
                      activeLanguage === "vi"
                        ? "bg-white text-[#0F1A41]"
                        : "bg-slate-50 text-slate-400 hover:text-[#0F1A41]",
                    ].join(" ")}
                  >
                    Tiếng Việt
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveLanguage("en")}
                    className={[
                      "px-5 py-3 text-sm font-bold transition",
                      activeLanguage === "en"
                        ? "bg-white text-[#0F1A41]"
                        : "bg-slate-50 text-slate-400 hover:text-[#0F1A41]",
                    ].join(" ")}
                  >
                    Tiếng Anh
                  </button>
                </div>

                <div className="p-5">
                  <AdminTextInput
                    label={
                      activeLanguage === "vi"
                        ? "Tên đối tác tiếng Việt"
                        : "Partner name"
                    }
                    placeholder={
                      activeLanguage === "vi"
                        ? "Nhập tên đối tác..."
                        : "Enter partner name..."
                    }
                    value={name[activeLanguage]}
                    onChange={(event) => handleChangeName(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </AdminCard>
        </div>

        <div className="space-y-5">
          <AdminCard>
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div>
                <h2 className="text-base font-bold text-[#0F1A41]">
                  Nút Link Website
                </h2>

                <p className="mt-1 text-xs font-bold text-slate-400">
                  Link này có thể để trống nếu logo không cần click.
                </p>
              </div>

              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-50 hover:text-[#0F1A41]"
              >
                −
              </button>
            </div>

            <div className="relative">
              <Link2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" />

              <input
                value={websiteUrl}
                onChange={(event) => setWebsiteUrl(event.target.value)}
                placeholder="Link liên kết..."
                className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm font-bold text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C]"
              />
            </div>
          </AdminCard>

          <AdminCard>
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-slate-100 pb-5">
              <div>
                <h2 className="text-base font-bold text-[#0F1A41]">
                  Logo Partner
                </h2>

                <p className="mt-1 text-xs font-bold text-slate-400">
                  Nên dùng logo nền trong suốt hoặc nền trắng.
                </p>
              </div>

              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 transition hover:bg-slate-50 hover:text-[#0F1A41]"
              >
                −
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex h-52 items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50">
                {logoUrl ? (
                  <img
                    src={logoUrl}
                    alt={logoAlt || name[activeLanguage]}
                    className="max-h-32 max-w-[80%] object-contain"
                  />
                ) : (
                  <div className="text-center text-slate-300">
                    <ImagePlus className="mx-auto h-12 w-12" />

                    <p className="mt-3 text-xs font-bold text-slate-400">
                      Chưa có logo
                    </p>
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-center">
                <UploadCloud className="mx-auto h-10 w-10 text-slate-400" />

                <p className="mt-3 text-sm font-bold text-slate-500">
                  Kéo và thả hình vào đây
                </p>

                <p className="mt-1 text-xs font-bold text-slate-400">hoặc</p>

                <button
                  type="button"
                  className="mt-3 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-emerald-700"
                >
                  Chọn hình
                </button>
              </div>

              <AdminTextInput
                label="Logo URL"
                placeholder="https://..."
                value={logoUrl}
                onChange={(event) => setLogoUrl(event.target.value)}
              />

              <AdminTextInput
                label="Alt text"
                placeholder="Mô tả logo..."
                value={logoAlt}
                onChange={(event) => setLogoAlt(event.target.value)}
              />

              <div className="rounded-xl bg-slate-50 px-4 py-3 text-xs font-bold leading-5 text-slate-500">
                Width: 600px · Height: 300px · Hỗ trợ: jpg, png, jpeg, gif, webp
              </div>
            </div>
          </AdminCard>

          <AdminCard>
            <div className="flex items-start gap-3 rounded-2xl bg-[#0F1A41] p-4 text-white">
              <Eye className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A45C]" />

              <div>
                <h3 className="text-sm font-bold">Ghi chú hiển thị</h3>

                <p className="mt-2 text-xs font-bold leading-5 text-white/60">
                  Nếu không nhập link website, logo chỉ hiển thị như hình ảnh
                  thông thường và không cần bấm được.
                </p>
              </div>
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
        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C]"
      />
    </div>
  );
}
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Building2,
  Eye,
  EyeOff,
  ImagePlus,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type PartnerStatus = "active" | "draft" | "hidden";

type PartnerItem = {
  id: number;
  name: string;
  logoUrl: string;
  logoAlt: string;
  sortOrder: number;
  status: PartnerStatus;
  showOnHomepage: boolean;
};

const statusOptions: { label: string; value: "all" | PartnerStatus }[] = [
  { label: "Tất cả trạng thái", value: "all" },
  { label: "Đang hiển thị", value: "active" },
  { label: "Bản nháp", value: "draft" },
  { label: "Tạm ẩn", value: "hidden" },
];

const demoPartners: PartnerItem[] = [
  {
    id: 1,
    name: "Partner 01",
    logoUrl: "https://dummyimage.com/320x160/0F1A41/C9A45C.png&text=PARTNER+01",
    logoAlt: "Partner 01 logo",
    sortOrder: 1,
    status: "active",
    showOnHomepage: true,
  },
  {
    id: 2,
    name: "Partner 02",
    logoUrl: "https://dummyimage.com/320x160/f8fafc/0F1A41.png&text=PARTNER+02",
    logoAlt: "Partner 02 logo",
    sortOrder: 2,
    status: "active",
    showOnHomepage: true,
  },
  {
    id: 3,
    name: "Partner 03",
    logoUrl: "https://dummyimage.com/320x160/e2e8f0/0F1A41.png&text=PARTNER+03",
    logoAlt: "Partner 03 logo",
    sortOrder: 3,
    status: "active",
    showOnHomepage: true,
  },
  {
    id: 4,
    name: "Partner 04",
    logoUrl: "https://dummyimage.com/320x160/ffffff/0F1A41.png&text=PARTNER+04",
    logoAlt: "Partner 04 logo",
    sortOrder: 4,
    status: "hidden",
    showOnHomepage: false,
  },
];

export default function AdminPartnersPage() {
  const [partners] = useState<PartnerItem[]>(demoPartners);
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | PartnerStatus>("all");

  const filteredPartners = useMemo(() => {
    const searchText = searchValue.toLowerCase();

    return partners
      .filter((partner) => {
        const matchesSearch =
          partner.name.toLowerCase().includes(searchText) ||
          partner.logoAlt.toLowerCase().includes(searchText);

        const matchesStatus =
          statusFilter === "all" || partner.status === statusFilter;

        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }, [partners, searchValue, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: partners.length,
      active: partners.filter((partner) => partner.status === "active").length,
      homepage: partners.filter((partner) => partner.showOnHomepage).length,
      hidden: partners.filter((partner) => partner.status === "hidden").length,
    };
  }, [partners]);

  return (
    <div className="space-y-5">
      <AdminPageHeader
        title="Quản lý Logo Partner"
        description="Quản lý logo đối tác hiển thị ngoài website."
      >
        <Link href="/admin/partners/create">
          <AdminButton>
            <Plus className="h-4 w-4" />
            Thêm Partner
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <PartnerStatCard
          label="Tổng Partner"
          value={stats.total}
          description="Tất cả logo đối tác"
        />

        <PartnerStatCard
          label="Đang hiển thị"
          value={stats.active}
          description="Logo đang bật"
        />

        <PartnerStatCard
          label="Trên Homepage"
          value={stats.homepage}
          description="Hiển thị trang chủ"
        />

        <PartnerStatCard
          label="Tạm ẩn"
          value={stats.hidden}
          description="Logo chưa hiển thị"
        />
      </div>

      <AdminCard>
        <div className="mb-5 flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-bold text-[#0F1A41]">
              Danh sách Logo Partner
            </h2>

            <p className="mt-1 text-xs font-bold leading-5 text-slate-400">
              Danh sách logo đối tác dùng để hiển thị ngoài website.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" />

              <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Tìm partner..."
                className="h-10 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-xs font-bold text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C] sm:w-64"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value as "all" | PartnerStatus)
              }
              className="h-10 rounded-2xl border border-slate-200 bg-white px-4 text-xs font-bold text-[#0F1A41] outline-none transition focus:border-[#C9A45C]"
            >
              {statusOptions.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[920px]">
            <div className="grid grid-cols-[140px_1.5fr_120px_170px_140px_120px] gap-4 rounded-2xl bg-slate-50 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
              <div>Logo</div>
              <div>Tên đối tác</div>
              <div>Thứ tự</div>
              <div>Homepage</div>
              <div>Trạng thái</div>
              <div className="text-right">Thao tác</div>
            </div>

            <div className="divide-y divide-slate-100">
              {filteredPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="grid grid-cols-[140px_1.5fr_120px_170px_140px_120px] gap-4 px-4 py-4 transition hover:bg-slate-50/70"
                >
                  <div className="flex items-center">
                    <div className="flex h-16 w-28 items-center justify-center overflow-hidden rounded-2xl border border-slate-100 bg-white p-3">
                      {partner.logoUrl ? (
                        <img
                          src={partner.logoUrl}
                          alt={partner.logoAlt || partner.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <ImagePlus className="h-6 w-6 text-slate-300" />
                      )}
                    </div>
                  </div>

                  <div className="flex min-w-0 flex-col justify-center">
                    <h3 className="truncate text-sm font-bold text-[#0F1A41]">
                      {partner.name}
                    </h3>

                    <p className="mt-1 text-xs font-bold text-slate-400">
                      {partner.logoAlt}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <span className="text-sm font-bold text-[#0F1A41]">
                      {partner.sortOrder}
                    </span>
                  </div>

                  <div className="flex items-center">
                    {partner.showOnHomepage ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                        <Eye className="h-3.5 w-3.5" />
                        Đang bật
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                        <EyeOff className="h-3.5 w-3.5" />
                        Đang tắt
                      </span>
                    )}
                  </div>

                  <div className="flex items-center">
                    <PartnerStatusBadge status={partner.status} />
                  </div>

                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/admin/partners/${partner.id}/edit`}>
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-[#C9A45C] hover:text-[#C9A45C]"
                        aria-label="Sửa partner"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                    </Link>

                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition hover:bg-red-100"
                      aria-label="Xóa partner"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredPartners.length === 0 && (
              <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
                <p className="text-sm font-bold text-[#0F1A41]">
                  Không tìm thấy Partner phù hợp.
                </p>

                <p className="mt-2 text-xs font-bold text-slate-400">
                  Hãy thử đổi từ khóa tìm kiếm hoặc bộ lọc trạng thái.
                </p>
              </div>
            )}
          </div>
        </div>
      </AdminCard>
    </div>
  );
}

function PartnerStatCard({
  label,
  value,
  description,
}: {
  label: string;
  value: number;
  description: string;
}) {
  return (
    <AdminCard>
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
            {label}
          </p>

          <p className="mt-3 text-3xl font-bold text-[#0F1A41]">{value}</p>

          <p className="mt-1 text-xs font-bold text-slate-400">
            {description}
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C9A45C]/10 text-[#C9A45C]">
          <Building2 className="h-5 w-5" />
        </div>
      </div>
    </AdminCard>
  );
}

function PartnerStatusBadge({ status }: { status: PartnerStatus }) {
  const label =
    status === "active"
      ? "Đang hiển thị"
      : status === "draft"
        ? "Bản nháp"
        : "Tạm ẩn";

  const className =
    status === "active"
      ? "bg-emerald-50 text-emerald-700"
      : status === "draft"
        ? "bg-amber-50 text-amber-700"
        : "bg-slate-100 text-slate-500";

  return (
    <span
      className={[
        "inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em]",
        className,
      ].join(" ")}
    >
      {label}
    </span>
  );
}
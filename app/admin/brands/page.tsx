"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Eye,
  EyeOff,
  ImagePlus,
  Layers3,
  Pencil,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type BrandStatus = "active" | "draft" | "hidden";

type BrandItem = {
  id: number;
  name: string;
  slug: string;
  shortDescription: string;
  imageUrl: string;
  imageAlt: string;
  linkedProductsCount: number;
  sortOrder: number;
  status: BrandStatus;
  isFeatured: boolean;
  showOnHomepage: boolean;
};

const statusOptions: { label: string; value: "all" | BrandStatus }[] = [
  { label: "Tất cả trạng thái", value: "all" },
  { label: "Đang hiển thị", value: "active" },
  { label: "Bản nháp", value: "draft" },
  { label: "Tạm ẩn", value: "hidden" },
];

const demoBrands: BrandItem[] = [
  {
    id: 1,
    name: "MARK",
    slug: "mark",
    shortDescription:
      "Dòng sản phẩm dành cho khách hàng yêu thích vị trí trung tâm, thiết kế riêng tư và dịch vụ tiêu chuẩn.",
    imageUrl:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=900&auto=format&fit=crop",
    imageAlt: "CityHouse Mark brand image",
    linkedProductsCount: 5,
    sortOrder: 1,
    status: "active",
    isFeatured: true,
    showOnHomepage: true,
  },
  {
    id: 2,
    name: "SOUL",
    slug: "soul",
    shortDescription:
      "Không gian sống giàu cảm xúc, phù hợp nhóm khách yêu thích sự ấm áp và phong cách boutique.",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=900&auto=format&fit=crop",
    imageAlt: "CityHouse Soul brand image",
    linkedProductsCount: 3,
    sortOrder: 2,
    status: "active",
    isFeatured: false,
    showOnHomepage: true,
  },
  {
    id: 3,
    name: "VIBE",
    slug: "vibe",
    shortDescription:
      "Dòng sản phẩm trẻ trung, năng động, phù hợp khách lưu trú hiện đại và linh hoạt.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
    imageAlt: "CityHouse Vibe brand image",
    linkedProductsCount: 4,
    sortOrder: 3,
    status: "active",
    isFeatured: false,
    showOnHomepage: true,
  },
  {
    id: 4,
    name: "TERA",
    slug: "tera",
    shortDescription:
      "Dòng sản phẩm tối ưu khai thác, cân bằng giữa hiệu quả vận hành và trải nghiệm lưu trú.",
    imageUrl:
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=900&auto=format&fit=crop",
    imageAlt: "CityHouse Tera brand image",
    linkedProductsCount: 2,
    sortOrder: 4,
    status: "active",
    isFeatured: false,
    showOnHomepage: true,
  },
  {
    id: 5,
    name: "NEST",
    slug: "nest",
    shortDescription:
      "Dòng sản phẩm hướng đến sự tiện nghi, riêng tư và cảm giác an trú dài hạn.",
    imageUrl:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=900&auto=format&fit=crop",
    imageAlt: "CityHouse Nest brand image",
    linkedProductsCount: 6,
    sortOrder: 5,
    status: "active",
    isFeatured: false,
    showOnHomepage: true,
  },
];

export default function AdminBrandsPage() {
  const [brands] = useState<BrandItem[]>(demoBrands);
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | BrandStatus>("all");

  const filteredBrands = useMemo(() => {
    return brands
      .filter((brand) => {
        const searchText = searchValue.toLowerCase();

        const matchesSearch =
          brand.name.toLowerCase().includes(searchText) ||
          brand.slug.toLowerCase().includes(searchText) ||
          brand.shortDescription.toLowerCase().includes(searchText);

        const matchesStatus =
          statusFilter === "all" || brand.status === statusFilter;

        return matchesSearch && matchesStatus;
      })
      .sort((a, b) => a.sortOrder - b.sortOrder);
  }, [brands, searchValue, statusFilter]);

  const stats = useMemo(() => {
    return {
      total: brands.length,
      active: brands.filter((brand) => brand.status === "active").length,
      homepage: brands.filter((brand) => brand.showOnHomepage).length,
      featured: brands.filter((brand) => brand.isFeatured).length,
    };
  }, [brands]);

  return (
    <div className="space-y-5">
      <AdminPageHeader
        title="Quản lý Brand"
        description="Quản lý danh sách 5 dòng sản phẩm định hình của CityHouse như MARK, SOUL, VIBE, TERA và NEST."
      >
        <Link href="/admin/brands/create">
          <AdminButton>
            <Plus className="h-4 w-4" />
            Thêm Brand
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <BrandStatCard
          label="Tổng Brand"
          value={stats.total}
          description="Tất cả dòng sản phẩm"
        />

        <BrandStatCard
          label="Đang hiển thị"
          value={stats.active}
          description="Brand đang bật"
        />

        <BrandStatCard
          label="Trên Homepage"
          value={stats.homepage}
          description="Đang hiển thị trang chủ"
        />

        <BrandStatCard
          label="Nổi bật"
          value={stats.featured}
          description="Brand được ưu tiên"
        />
      </div>

      <AdminCard>
        <div className="mb-5 flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-bold text-[#0F1A41]">
              Danh sách Brand
            </h2>

            <p className="mt-1 text-xs font-bold leading-5 text-slate-400">
              Danh sách này dùng để hiển thị section “5 dòng sản phẩm định
              hình” ngoài website.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-300" />

              <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Tìm brand..."
                className="h-10 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-xs font-bold text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C] sm:w-64"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value as "all" | BrandStatus)
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
          <div className="min-w-[1060px]">
            <div className="grid grid-cols-[90px_1.4fr_1.6fr_120px_120px_150px_140px_120px] gap-4 rounded-2xl bg-slate-50 px-4 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
              <div>Ảnh</div>
              <div>Brand</div>
              <div>Mô tả ngắn</div>
              <div>Sản phẩm</div>
              <div>Thứ tự</div>
              <div>Homepage</div>
              <div>Trạng thái</div>
              <div className="text-right">Thao tác</div>
            </div>

            <div className="divide-y divide-slate-100">
              {filteredBrands.map((brand) => (
                <div
                  key={brand.id}
                  className="grid grid-cols-[90px_1.4fr_1.6fr_120px_120px_150px_140px_120px] gap-4 px-4 py-4 transition hover:bg-slate-50/70"
                >
                  <div>
                    <div className="h-16 w-20 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                      {brand.imageUrl ? (
                        <img
                          src={brand.imageUrl}
                          alt={brand.imageAlt || brand.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-slate-300">
                          <ImagePlus className="h-5 w-5" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-sm font-bold text-[#0F1A41]">
                        {brand.name}
                      </h3>

                      {brand.isFeatured && (
                        <span className="rounded-full bg-[#C9A45C]/10 px-2 py-1 text-[10px] font-bold text-[#8A6A22]">
                          Nổi bật
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-xs font-bold text-slate-400">
                      /{brand.slug}
                    </p>
                  </div>

                  <div>
                    <p className="line-clamp-2 text-xs font-bold leading-5 text-slate-500">
                      {brand.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {brand.linkedProductsCount} sản phẩm
                    </span>
                  </div>

                  <div className="flex items-center">
                    <span className="text-sm font-bold text-[#0F1A41]">
                      {brand.sortOrder}
                    </span>
                  </div>

                  <div className="flex items-center">
                    {brand.showOnHomepage ? (
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
                    <BrandStatusBadge status={brand.status} />
                  </div>

                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/admin/brands/${brand.id}/edit`}>
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-[#C9A45C] hover:text-[#C9A45C]"
                        aria-label="Sửa brand"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                    </Link>

                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 transition hover:bg-red-100"
                      aria-label="Xóa brand"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredBrands.length === 0 && (
              <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center">
                <p className="text-sm font-bold text-[#0F1A41]">
                  Không tìm thấy Brand phù hợp.
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

function BrandStatCard({
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
          <Layers3 className="h-5 w-5" />
        </div>
      </div>
    </AdminCard>
  );
}

function BrandStatusBadge({ status }: { status: BrandStatus }) {
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
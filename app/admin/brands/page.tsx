import Link from "next/link";
import {
  Building2,
  Crown,
  Edit3,
  Eye,
  Gem,
  Grid3X3,
  Layers3,
  MoreHorizontal,
  Plus,
  Search,
  Sparkles,
  Star,
  Trash2,
} from "lucide-react";

import AdminBadge from "@/components/admin/AdminBadge";
import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type BrandStatus = "active" | "hidden";

type Brand = {
  id: number;
  name: string;
  slug: string;
  iconKey: string;
  description: string;
  totalProperties: number;
  status: BrandStatus;
};

const brands: Brand[] = [
  {
    id: 1,
    name: "CityHouse",
    slug: "cityhouse",
    iconKey: "building",
    description: "Thương hiệu chính của hệ thống CityHouse.",
    totalProperties: 18,
    status: "active",
  },
  {
    id: 2,
    name: "Mark",
    slug: "mark",
    iconKey: "crown",
    description: "Collection cao cấp, hiện đại, phù hợp khách hàng doanh nhân.",
    totalProperties: 5,
    status: "active",
  },
  {
    id: 3,
    name: "Soul",
    slug: "soul",
    iconKey: "sparkles",
    description: "Collection mang cảm giác ấm áp, tinh tế và giàu trải nghiệm.",
    totalProperties: 4,
    status: "active",
  },
  {
    id: 4,
    name: "Vibe",
    slug: "vibe",
    iconKey: "star",
    description: "Collection trẻ trung, năng động, phù hợp khách lưu trú ngắn ngày.",
    totalProperties: 6,
    status: "active",
  },
  {
    id: 5,
    name: "Tera",
    slug: "tera",
    iconKey: "layers",
    description: "Collection có quy mô lớn, phù hợp vận hành nhiều loại sản phẩm.",
    totalProperties: 3,
    status: "active",
  },
  {
    id: 6,
    name: "Nest",
    slug: "nest",
    iconKey: "gem",
    description: "Collection nhỏ gọn, riêng tư, tối ưu cho khách ở dài hạn.",
    totalProperties: 2,
    status: "hidden",
  },
];

function BrandIcon({ iconKey }: { iconKey: string }) {
  const iconClassName = "h-5 w-5 text-[#C9A45C]";

  if (iconKey === "building") {
    return <Building2 className={iconClassName} />;
  }

  if (iconKey === "crown") {
    return <Crown className={iconClassName} />;
  }

  if (iconKey === "sparkles") {
    return <Sparkles className={iconClassName} />;
  }

  if (iconKey === "star") {
    return <Star className={iconClassName} />;
  }

  if (iconKey === "layers") {
    return <Layers3 className={iconClassName} />;
  }

  if (iconKey === "gem") {
    return <Gem className={iconClassName} />;
  }

  return <Grid3X3 className={iconClassName} />;
}

export default function AdminBrandsPage() {
  const activeTotal = brands.filter((brand) => brand.status === "active").length;
  const hiddenTotal = brands.filter((brand) => brand.status === "hidden").length;

  const totalProperties = brands.reduce(
    (total, brand) => total + brand.totalProperties,
    0,
  );

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Brand / Collection"
        description="Quản lý thương hiệu và collection dùng để phân loại sản phẩm CityHouse."
      >
        <Link href="/admin/brands/create">
          <AdminButton>
            <Plus className="h-4 w-4" />
            Thêm brand mới
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <AdminCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Tổng brand
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#0F1A41]">
                {brands.length}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F1A41] text-white">
              <Grid3X3 className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Đang hiển thị
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#0F1A41]">
                {activeTotal}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <Eye className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Tạm ẩn
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#0F1A41]">
                {hiddenTotal}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <MoreHorizontal className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Đang dùng
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#0F1A41]">
                {totalProperties}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C9A45C]/10 text-[#8A6A22]">
              <Building2 className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>
      </div>

      <AdminCard>
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#0F1A41]">
              Danh sách brand / collection
            </h2>

            <p className="mt-1 text-sm font-bold text-slate-400">
              Brand dùng để nhóm các sản phẩm theo định vị thương hiệu, phong cách và tệp khách hàng.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                placeholder="Tìm brand..."
                className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm font-bold text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C] sm:w-[260px]"
              />
            </div>

            <select className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] outline-none transition focus:border-[#C9A45C]">
              <option>Tất cả trạng thái</option>
              <option>Đang hiển thị</option>
              <option>Tạm ẩn</option>
            </select>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A45C]/40 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#C9A45C]/20 bg-[#C9A45C]/10">
                    <BrandIcon iconKey={brand.iconKey} />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0F1A41]">
                      {brand.name}
                    </h3>

                    <p className="mt-1 text-xs font-bold text-slate-400">
                      /{brand.slug}
                    </p>
                  </div>
                </div>

                {brand.status === "active" ? (
                  <AdminBadge>Đang hiển thị</AdminBadge>
                ) : (
                  <AdminBadge>Tạm ẩn</AdminBadge>
                )}
              </div>

              <p className="mt-4 min-h-[72px] text-sm font-bold leading-6 text-slate-500">
                {brand.description}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Icon key
                  </p>

                  <p className="mt-2 text-sm font-bold text-[#0F1A41]">
                    {brand.iconKey}
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                    Đang dùng
                  </p>

                  <p className="mt-2 text-sm font-bold text-[#0F1A41]">
                    {brand.totalProperties} sản phẩm
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <p className="text-xs font-bold text-slate-400">
                  ID: #{brand.id}
                </p>

                <div className="flex items-center gap-2">
                  <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition hover:border-[#C9A45C] hover:text-[#C9A45C]">
                    <Eye className="h-4 w-4" />
                  </button>

                  <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition hover:border-[#C9A45C] hover:text-[#C9A45C]">
                    <Edit3 className="h-4 w-4" />
                  </button>

                  <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition hover:border-red-300 hover:text-red-500">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-[#C9A45C]/20 bg-[#C9A45C]/10 p-4">
          <h3 className="text-sm font-bold text-[#0F1A41]">
            Gợi ý database sau này
          </h3>

          <p className="mt-2 text-xs font-bold leading-6 text-slate-500">
            Bảng brands nên lưu name, slug, iconKey, description, logoUrl,
            coverImageUrl, sortOrder và status. Khi thêm Hotel, Văn phòng hoặc
            Bất động sản thì chọn brand từ kho này.
          </p>
        </div>
      </AdminCard>
    </div>
  );
}
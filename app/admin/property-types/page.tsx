import Link from "next/link";
import {
  Building,
  Building2,
  Edit3,
  Eye,
  Home,
  Hotel,
  Layers3,
  MoreHorizontal,
  Plus,
  Search,
  Store,
  Trash2,
} from "lucide-react";

import AdminBadge from "@/components/admin/AdminBadge";
import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type PropertyTypeStatus = "active" | "hidden";

type PropertyType = {
  id: number;
  name: string;
  slug: string;
  iconKey: string;
  description: string;
  totalProperties: number;
  status: PropertyTypeStatus;
};

const propertyTypes: PropertyType[] = [
  {
    id: 1,
    name: "Căn hộ dịch vụ",
    slug: "can-ho-dich-vu",
    iconKey: "apartment",
    description: "Nhóm các căn hộ dịch vụ CityHouse đang vận hành.",
    totalProperties: 12,
    status: "active",
  },
  {
    id: 2,
    name: "Khách sạn",
    slug: "khach-san",
    iconKey: "hotel",
    description: "Nhóm hotel, boutique hotel và mô hình lưu trú ngắn ngày.",
    totalProperties: 8,
    status: "active",
  },
  {
    id: 3,
    name: "Văn phòng",
    slug: "van-phong",
    iconKey: "office",
    description: "Nhóm văn phòng cho thuê, workspace và business hub.",
    totalProperties: 6,
    status: "active",
  },
  {
    id: 4,
    name: "Resort",
    slug: "resort",
    iconKey: "resort",
    description: "Nhóm resort hoặc sản phẩm lưu trú nghỉ dưỡng.",
    totalProperties: 2,
    status: "hidden",
  },
  {
    id: 5,
    name: "Bất động sản",
    slug: "bat-dong-san",
    iconKey: "real-estate",
    description: "Nhóm sản phẩm bất động sản bán, thuê hoặc đầu tư.",
    totalProperties: 4,
    status: "active",
  },
];

function PropertyTypeIcon({ iconKey }: { iconKey: string }) {
  const iconClassName = "h-5 w-5 text-[#C9A45C]";

  if (iconKey === "apartment") {
    return <Building className={iconClassName} />;
  }

  if (iconKey === "hotel") {
    return <Hotel className={iconClassName} />;
  }

  if (iconKey === "office") {
    return <Building2 className={iconClassName} />;
  }

  if (iconKey === "resort") {
    return <Store className={iconClassName} />;
  }

  if (iconKey === "real-estate") {
    return <Home className={iconClassName} />;
  }

  return <Layers3 className={iconClassName} />;
}

export default function AdminPropertyTypesPage() {
  const activeTotal = propertyTypes.filter(
    (propertyType) => propertyType.status === "active",
  ).length;

  const hiddenTotal = propertyTypes.filter(
    (propertyType) => propertyType.status === "hidden",
  ).length;

  const totalProperties = propertyTypes.reduce(
    (total, propertyType) => total + propertyType.totalProperties,
    0,
  );

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Nhóm Property"
        description="Quản lý nhóm lớn dùng cho filter Hotel, Văn phòng, Resort và Bất động sản."
      >
        <Link href="/admin/property-types/create">
          <AdminButton>
            <Plus className="h-4 w-4" />
            Thêm nhóm mới
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <AdminCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Tổng nhóm
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#0F1A41]">
                {propertyTypes.length}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F1A41] text-white">
              <Layers3 className="h-5 w-5" />
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
              Danh sách nhóm property
            </h2>

            <p className="mt-1 text-sm font-bold text-slate-400">
              Các nhóm này sẽ dùng cho filter ngoài website và phân loại sản phẩm trong admin.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                placeholder="Tìm nhóm property..."
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

        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100">
          <div className="grid grid-cols-[1.4fr_1fr_1.5fr_1fr_120px] bg-slate-50 px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            <div>Nhóm</div>
            <div>Slug</div>
            <div>Mô tả</div>
            <div>Đang dùng</div>
            <div className="text-right">Thao tác</div>
          </div>

          <div className="divide-y divide-slate-100">
            {propertyTypes.map((propertyType) => (
              <div
                key={propertyType.id}
                className="grid grid-cols-[1.4fr_1fr_1.5fr_1fr_120px] items-center px-5 py-4 transition hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C9A45C]/20 bg-[#C9A45C]/10">
                    <PropertyTypeIcon iconKey={propertyType.iconKey} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#0F1A41]">
                      {propertyType.name}
                    </h3>

                    <div className="mt-1">
                      {propertyType.status === "active" ? (
                        <AdminBadge>Đang hiển thị</AdminBadge>
                      ) : (
                        <AdminBadge>Tạm ẩn</AdminBadge>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <span className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-bold text-slate-500">
                    {propertyType.slug}
                  </span>
                </div>

                <div>
                  <p className="max-w-[360px] text-sm font-bold leading-6 text-slate-500">
                    {propertyType.description}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {propertyType.totalProperties} sản phẩm
                  </p>
                </div>

                <div className="flex items-center justify-end gap-2">
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
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#C9A45C]/20 bg-[#C9A45C]/10 p-4">
            <h3 className="text-sm font-bold text-[#0F1A41]">
              Dùng cho frontend
            </h3>

            <p className="mt-2 text-xs font-bold leading-6 text-slate-500">
              Các nhóm này sẽ xuất hiện ở filter ngoài website như: Tất cả, Căn hộ dịch vụ,
              Khách sạn, Văn phòng, Resort.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <h3 className="text-sm font-bold text-[#0F1A41]">
              Dùng cho admin
            </h3>

            <p className="mt-2 text-xs font-bold leading-6 text-slate-500">
              Khi thêm Hotel, Văn phòng hoặc Bất động sản, admin có thể chọn nhóm
              property phù hợp để phân loại dữ liệu.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <h3 className="text-sm font-bold text-[#0F1A41]">
              Gợi ý database
            </h3>

            <p className="mt-2 text-xs font-bold leading-6 text-slate-500">
              Bảng property_types nên lưu name, slug, iconKey, description, sortOrder
              và status.
            </p>
          </div>
        </div>
      </AdminCard>
    </div>
  );
}
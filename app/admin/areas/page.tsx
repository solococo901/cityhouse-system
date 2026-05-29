import Link from "next/link";
import {
  Building2,
  Edit3,
  Eye,
  Map,
  MapPin,
  MoreHorizontal,
  Navigation,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

import AdminBadge from "@/components/admin/AdminBadge";
import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type AreaStatus = "active" | "hidden";

type Area = {
  id: number;
  name: string;
  slug: string;
  city: string;
  districtType: string;
  description: string;
  totalProperties: number;
  totalNearbyPlaces: number;
  status: AreaStatus;
};

const areas: Area[] = [
  {
    id: 1,
    name: "Quận 1",
    slug: "quan-1",
    city: "TP. Hồ Chí Minh",
    districtType: "Trung tâm",
    description: "Khu vực trung tâm, phù hợp khách công tác, du lịch và lưu trú ngắn ngày.",
    totalProperties: 9,
    totalNearbyPlaces: 12,
    status: "active",
  },
  {
    id: 2,
    name: "Quận 2",
    slug: "quan-2",
    city: "TP. Hồ Chí Minh",
    districtType: "Cao cấp",
    description: "Khu vực hiện đại, nhiều căn hộ cao cấp, phù hợp khách ở dài hạn.",
    totalProperties: 5,
    totalNearbyPlaces: 8,
    status: "active",
  },
  {
    id: 3,
    name: "Quận 3",
    slug: "quan-3",
    city: "TP. Hồ Chí Minh",
    districtType: "Trung tâm",
    description: "Khu vực thuận tiện di chuyển, gần trung tâm hành chính và thương mại.",
    totalProperties: 4,
    totalNearbyPlaces: 7,
    status: "active",
  },
  {
    id: 4,
    name: "Tân Bình",
    slug: "tan-binh",
    city: "TP. Hồ Chí Minh",
    districtType: "Gần sân bay",
    description: "Khu vực gần sân bay Tân Sơn Nhất, phù hợp khách công tác và transit.",
    totalProperties: 7,
    totalNearbyPlaces: 10,
    status: "active",
  },
  {
    id: 5,
    name: "Phú Nhuận",
    slug: "phu-nhuan",
    city: "TP. Hồ Chí Minh",
    districtType: "Kết nối tốt",
    description: "Khu vực kết nối nhanh về trung tâm, sân bay và các quận lân cận.",
    totalProperties: 6,
    totalNearbyPlaces: 9,
    status: "active",
  },
  {
    id: 6,
    name: "Quận 7",
    slug: "quan-7",
    city: "TP. Hồ Chí Minh",
    districtType: "Đô thị mới",
    description: "Khu vực đô thị mới, phù hợp khách gia đình, chuyên gia và lưu trú dài hạn.",
    totalProperties: 3,
    totalNearbyPlaces: 6,
    status: "hidden",
  },
];

export default function AdminAreasPage() {
  const activeTotal = areas.filter((area) => area.status === "active").length;
  const hiddenTotal = areas.filter((area) => area.status === "hidden").length;

  const totalProperties = areas.reduce(
    (total, area) => total + area.totalProperties,
    0,
  );

  const totalNearbyPlaces = areas.reduce(
    (total, area) => total + area.totalNearbyPlaces,
    0,
  );

  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Khu vực"
        description="Quản lý danh sách khu vực dùng cho filter, địa chỉ và phân loại sản phẩm trên website."
      >
        <Link href="/admin/areas/create">
          <AdminButton>
            <Plus className="h-4 w-4" />
            Thêm khu vực
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <AdminCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Tổng khu vực
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#0F1A41]">
                {areas.length}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F1A41] text-white">
              <Map className="h-5 w-5" />
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
                Sản phẩm
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

        <AdminCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Địa điểm gần
              </p>

              <h3 className="mt-2 text-3xl font-bold text-[#0F1A41]">
                {totalNearbyPlaces}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Navigation className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>
      </div>

      <AdminCard>
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#0F1A41]">
              Danh sách khu vực
            </h2>

            <p className="mt-1 text-sm font-bold text-slate-400">
              Khu vực sẽ được dùng khi thêm Hotel, Văn phòng, Bất động sản và khi lọc ngoài website.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                placeholder="Tìm khu vực..."
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
          <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr_120px] bg-slate-50 px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            <div>Khu vực</div>
            <div>Thành phố</div>
            <div>Loại khu vực</div>
            <div>Sản phẩm</div>
            <div>Địa điểm gần</div>
            <div className="text-right">Thao tác</div>
          </div>

          <div className="divide-y divide-slate-100">
            {areas.map((area) => (
              <div
                key={area.id}
                className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr_120px] items-center px-5 py-4 transition hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C9A45C]/20 bg-[#C9A45C]/10">
                    <MapPin className="h-5 w-5 text-[#C9A45C]" />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#0F1A41]">
                      {area.name}
                    </h3>

                    <p className="mt-1 text-xs font-bold text-slate-400">
                      /{area.slug}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {area.city}
                  </p>
                </div>

                <div>
                  <span className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-bold text-slate-500">
                    {area.districtType}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {area.totalProperties} sản phẩm
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {area.totalNearbyPlaces} địa điểm
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
              Dùng cho filter frontend
            </h3>

            <p className="mt-2 text-xs font-bold leading-6 text-slate-500">
              Website có thể lọc sản phẩm theo khu vực như Quận 1, Quận 2, Tân Bình,
              Phú Nhuận hoặc Quận 7.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <h3 className="text-sm font-bold text-[#0F1A41]">
              Dùng cho form admin
            </h3>

            <p className="mt-2 text-xs font-bold leading-6 text-slate-500">
              Khi thêm Hotel, Văn phòng hoặc Bất động sản, admin chọn khu vực từ kho
              này để dữ liệu đồng nhất.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <h3 className="text-sm font-bold text-[#0F1A41]">
              Gợi ý database
            </h3>

            <p className="mt-2 text-xs font-bold leading-6 text-slate-500">
              Bảng areas nên lưu name, slug, city, districtType, description,
              sortOrder và status.
            </p>
          </div>
        </div>
      </AdminCard>
    </div>
  );
}
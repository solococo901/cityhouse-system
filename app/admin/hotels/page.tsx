import Link from "next/link";
import {
  Eye,
  MoreVertical,
  Pencil,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";

import AdminBadge from "@/components/admin/AdminBadge";
import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const hotels = [
  {
    id: 1,
    name: "CityHouse - Kim Nguyên",
    type: "Căn hộ dịch vụ",
    brand: "Tera",
    area: "Phú Nhuận",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop",
    status: "Đang hiển thị",
    updatedAt: "20/05/2026",
  },
  {
    id: 2,
    name: "CityHouse - Lighthouse SG",
    type: "Khách sạn",
    brand: "Soul",
    area: "Quận 1",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
    status: "Đang hiển thị",
    updatedAt: "18/05/2026",
  },
  {
    id: 3,
    name: "CityHouse - El Pino Realm",
    type: "Căn hộ dịch vụ",
    brand: "Mark",
    area: "Quận 1",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop",
    status: "Tạm ẩn",
    updatedAt: "12/05/2026",
  },
  {
    id: 4,
    name: "CityHouse - Tera The S",
    type: "Căn hộ dịch vụ",
    brand: "Tera",
    area: "Tân Bình",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600&auto=format&fit=crop",
    status: "Đang hiển thị",
    updatedAt: "08/05/2026",
  },
];

export default function AdminHotelsPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Danh sách Hotel"
      >
        <Link href="/admin/hotels/create">
          <AdminButton>
            <Plus className="h-4 w-4" />
            Thêm Hotel mới
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <AdminCard>
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex h-12 w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 xl:max-w-[420px]">
            <Search className="h-4 w-4 text-slate-400" />

            <input
              placeholder="Tìm kiếm hotel..."
              className="h-full flex-1 bg-transparent text-sm font-bold text-[#0F1A41] outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <select className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] outline-none transition-all focus:border-[#C9A45C]">
              <option>Tất cả nhóm</option>
              <option>Căn hộ dịch vụ</option>
              <option>Khách sạn</option>
              <option>Resort</option>
            </select>

            <select className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] outline-none transition-all focus:border-[#C9A45C]">
              <option>Tất cả khu vực</option>
              <option>Quận 1</option>
              <option>Phú Nhuận</option>
              <option>Tân Bình</option>
            </select>

            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] transition-all hover:border-[#C9A45C] hover:text-[#C9A45C]">
              <SlidersHorizontal className="h-4 w-4" />
              Bộ lọc
            </button>
          </div>
        </div>
      </AdminCard>

      <AdminCard
        title="Danh sách Hotel"
        description="Dữ liệu hiện tại là demo để dựng layout, chưa kết nối backend."
      >
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="hidden bg-slate-50 px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-400 xl:grid xl:grid-cols-[96px_1.5fr_150px_140px_140px_140px_120px]">
            <div>Ảnh</div>
            <div>Tên Hotel</div>
            <div>Nhóm</div>
            <div>Brand</div>
            <div>Khu vực</div>
            <div>Trạng thái</div>
            <div className="text-right">Thao tác</div>
          </div>

          <div className="divide-y divide-slate-200">
            {hotels.map((hotel) => (
              <div
                key={hotel.id}
                className="grid grid-cols-1 gap-4 px-5 py-4 transition-all hover:bg-slate-50 xl:grid-cols-[96px_1.5fr_150px_140px_140px_140px_120px] xl:items-center"
              >
                <div>
                  <div className="h-16 w-24 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {hotel.name}
                  </p>

                  <p className="mt-1 text-xs font-bold text-slate-400">
                    Cập nhật: {hotel.updatedAt}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 xl:hidden">
                    Nhóm
                  </p>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {hotel.type}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 xl:hidden">
                    Brand
                  </p>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {hotel.brand}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 xl:hidden">
                    Khu vực
                  </p>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {hotel.area}
                  </p>
                </div>

                <div>
                  <AdminBadge
                    variant={
                      hotel.status === "Đang hiển thị" ? "success" : "warning"
                    }
                  >
                    {hotel.status}
                  </AdminBadge>
                </div>

                <div className="flex items-center justify-start gap-2 xl:justify-end">
                  <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all hover:border-[#C9A45C] hover:text-[#C9A45C]">
                    <Eye className="h-4 w-4" />
                  </button>

                  <Link href={`/admin/hotels/${hotel.id}/edit`}>
                    <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all hover:border-[#C9A45C] hover:text-[#C9A45C]">
                      <Pencil className="h-4 w-4" />
                    </button>
                  </Link>

                  <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all hover:border-[#C9A45C] hover:text-[#C9A45C]">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-slate-200 pt-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-bold text-slate-400">
            Hiển thị 1 - 4 trong 4 Hotel
          </p>

          <div className="flex items-center gap-2">
            <button className="h-10 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-400">
              Trước
            </button>

            <button className="h-10 rounded-xl border border-[#C9A45C] bg-[#C9A45C] px-4 text-sm font-bold text-[#0F1A41]">
              1
            </button>

            <button className="h-10 rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-400">
              Sau
            </button>
          </div>
        </div>
      </AdminCard>
    </div>
  );
}
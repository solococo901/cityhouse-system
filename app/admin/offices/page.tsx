import Link from "next/link";
import {
  Building2,
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

const offices = [
  {
    id: 1,
    name: "CityHouse Office Quận 1",
    type: "Văn phòng",
    brand: "CityHouse",
    area: "Quận 1",
    capacity: "6 - 20 người",
    price: "12.000.000 / tháng",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
    status: "Đang hiển thị",
    updatedAt: "22/05/2026",
  },
  {
    id: 2,
    name: "CityHouse Workspace Phú Nhuận",
    type: "Văn phòng riêng",
    brand: "Nest",
    area: "Phú Nhuận",
    capacity: "4 - 12 người",
    price: "8.500.000 / tháng",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
    status: "Đang hiển thị",
    updatedAt: "18/05/2026",
  },
  {
    id: 3,
    name: "CityHouse Business Hub Tân Bình",
    type: "Tòa nhà văn phòng",
    brand: "Tera",
    area: "Tân Bình",
    capacity: "20 - 80 người",
    price: "Liên hệ",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    status: "Tạm ẩn",
    updatedAt: "14/05/2026",
  },
  {
    id: 4,
    name: "CityHouse Office Nguyễn Huệ",
    type: "Mặt bằng thương mại",
    brand: "Soul",
    area: "Quận 1",
    capacity: "10 - 30 người",
    price: "25.000.000 / tháng",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    status: "Đang hiển thị",
    updatedAt: "10/05/2026",
  },
];

export default function AdminOfficesPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Danh sách Văn phòng"
        description="Quản lý danh sách văn phòng, mặt bằng thương mại và tòa nhà văn phòng trong hệ thống CITYHOUSE."
      >
        <Link href="/admin/offices/create">
          <AdminButton>
            <Plus className="h-4 w-4" />
            Thêm Văn phòng mới
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <AdminCard>
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex h-12 w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 xl:max-w-[420px]">
            <Search className="h-4 w-4 text-slate-400" />

            <input
              placeholder="Tìm kiếm văn phòng..."
              className="h-full flex-1 bg-transparent text-sm font-bold text-[#0F1A41] outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <select className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] outline-none transition-all focus:border-[#C9A45C]">
              <option>Tất cả nhóm</option>
              <option>Văn phòng</option>
              <option>Văn phòng riêng</option>
              <option>Tòa nhà văn phòng</option>
              <option>Mặt bằng thương mại</option>
            </select>

            <select className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] outline-none transition-all focus:border-[#C9A45C]">
              <option>Tất cả khu vực</option>
              <option>Quận 1</option>
              <option>Quận 3</option>
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
        title="Danh sách Văn phòng"
        description="Dữ liệu hiện tại là demo để dựng layout, chưa kết nối backend."
      >
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="hidden bg-slate-50 px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-400 2xl:grid 2xl:grid-cols-[96px_1.4fr_160px_130px_130px_150px_140px_120px]">
            <div>Ảnh</div>
            <div>Tên Văn phòng</div>
            <div>Nhóm</div>
            <div>Brand</div>
            <div>Khu vực</div>
            <div>Sức chứa</div>
            <div>Trạng thái</div>
            <div className="text-right">Thao tác</div>
          </div>

          <div className="divide-y divide-slate-200">
            {offices.map((office) => (
              <div
                key={office.id}
                className="grid grid-cols-1 gap-4 px-5 py-4 transition-all hover:bg-slate-50 2xl:grid-cols-[96px_1.4fr_160px_130px_130px_150px_140px_120px] 2xl:items-center"
              >
                <div>
                  <div className="h-16 w-24 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <img
                      src={office.image}
                      alt={office.name}
                      className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-[#C9A45C]" />

                    <p className="text-sm font-bold text-[#0F1A41]">
                      {office.name}
                    </p>
                  </div>

                  <p className="mt-1 text-xs font-bold text-slate-400">
                    Cập nhật: {office.updatedAt}
                  </p>

                  <p className="mt-1 text-xs font-bold text-slate-400 2xl:hidden">
                    {office.price}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 2xl:hidden">
                    Nhóm
                  </p>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {office.type}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 2xl:hidden">
                    Brand
                  </p>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {office.brand}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 2xl:hidden">
                    Khu vực
                  </p>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {office.area}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 2xl:hidden">
                    Sức chứa
                  </p>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {office.capacity}
                  </p>
                </div>

                <div>
                  <AdminBadge
                    variant={
                      office.status === "Đang hiển thị" ? "success" : "warning"
                    }
                  >
                    {office.status}
                  </AdminBadge>
                </div>

                <div className="flex items-center justify-start gap-2 2xl:justify-end">
                  <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all hover:border-[#C9A45C] hover:text-[#C9A45C]">
                    <Eye className="h-4 w-4" />
                  </button>

                  <Link href={`/admin/offices/${office.id}/edit`}>
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
            Hiển thị 1 - 4 trong 4 Văn phòng
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
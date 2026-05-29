import Link from "next/link";
import {
  BadgeDollarSign,
  Eye,
  Home,
  MapPinned,
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

const realEstates = [
  {
    id: 1,
    name: "Căn hộ cao cấp Quận 1",
    type: "Bất động sản",
    transactionType: "Bán",
    area: "Quận 1",
    size: "85m²",
    price: "5.5 tỷ",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
    status: "Đang hiển thị",
    updatedAt: "22/05/2026",
  },
  {
    id: 2,
    name: "Shophouse trung tâm CityHouse",
    type: "Shophouse",
    transactionType: "Cho thuê",
    area: "Quận 1",
    size: "120m²",
    price: "Liên hệ",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=900&auto=format&fit=crop",
    status: "Đang hiển thị",
    updatedAt: "18/05/2026",
  },
  {
    id: 3,
    name: "Nhà phố Phú Nhuận",
    type: "Nhà phố",
    transactionType: "Bán",
    area: "Phú Nhuận",
    size: "96m²",
    price: "8.2 tỷ",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop",
    status: "Tạm ẩn",
    updatedAt: "14/05/2026",
  },
  {
    id: 4,
    name: "Mặt bằng thương mại Tân Bình",
    type: "Mặt bằng",
    transactionType: "Cho thuê",
    area: "Tân Bình",
    size: "150m²",
    price: "35 triệu / tháng",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=900&auto=format&fit=crop",
    status: "Đang hiển thị",
    updatedAt: "10/05/2026",
  },
];

export default function AdminRealEstatesPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Danh sách Bất động sản"
        description="Quản lý danh sách bất động sản, căn hộ, nhà phố, shophouse và mặt bằng trong hệ thống CITYHOUSE."
      >
        <Link href="/admin/real-estates/create">
          <AdminButton>
            <Plus className="h-4 w-4" />
            Thêm Bất động sản mới
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <AdminCard>
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex h-12 w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 xl:max-w-[420px]">
            <Search className="h-4 w-4 text-slate-400" />

            <input
              placeholder="Tìm kiếm bất động sản..."
              className="h-full flex-1 bg-transparent text-sm font-bold text-[#0F1A41] outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <select className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] outline-none transition-all focus:border-[#C9A45C]">
              <option>Tất cả loại</option>
              <option>Bất động sản</option>
              <option>Căn hộ</option>
              <option>Nhà phố</option>
              <option>Shophouse</option>
              <option>Mặt bằng</option>
            </select>

            <select className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] outline-none transition-all focus:border-[#C9A45C]">
              <option>Tất cả giao dịch</option>
              <option>Bán</option>
              <option>Cho thuê</option>
              <option>Bán hoặc cho thuê</option>
            </select>

            <select className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] outline-none transition-all focus:border-[#C9A45C]">
              <option>Tất cả khu vực</option>
              <option>Quận 1</option>
              <option>Quận 3</option>
              <option>Phú Nhuận</option>
              <option>Tân Bình</option>
              <option>Quận 7</option>
            </select>

            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] transition-all hover:border-[#C9A45C] hover:text-[#C9A45C]">
              <SlidersHorizontal className="h-4 w-4" />
              Bộ lọc
            </button>
          </div>
        </div>
      </AdminCard>

      <AdminCard
        title="Danh sách Bất động sản"
        description="Dữ liệu hiện tại là demo để dựng layout, chưa kết nối backend."
      >
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="hidden bg-slate-50 px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-400 2xl:grid 2xl:grid-cols-[96px_1.4fr_150px_130px_130px_130px_150px_120px]">
            <div>Ảnh</div>
            <div>Tên Bất động sản</div>
            <div>Loại</div>
            <div>Giao dịch</div>
            <div>Khu vực</div>
            <div>Diện tích</div>
            <div>Trạng thái</div>
            <div className="text-right">Thao tác</div>
          </div>

          <div className="divide-y divide-slate-200">
            {realEstates.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 gap-4 px-5 py-4 transition-all hover:bg-slate-50 2xl:grid-cols-[96px_1.4fr_150px_130px_130px_130px_150px_120px] 2xl:items-center"
              >
                <div>
                  <div className="h-16 w-24 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4 text-[#C9A45C]" />

                    <p className="text-sm font-bold text-[#0F1A41]">
                      {item.name}
                    </p>
                  </div>

                  <p className="mt-1 text-xs font-bold text-slate-400">
                    Cập nhật: {item.updatedAt}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2 2xl:hidden">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#0F1A41]/5 px-3 py-1 text-xs font-bold text-[#0F1A41]">
                      <BadgeDollarSign className="h-3.5 w-3.5" />
                      {item.price}
                    </span>

                    <span className="inline-flex items-center gap-1 rounded-full bg-[#C9A45C]/10 px-3 py-1 text-xs font-bold text-[#0F1A41]">
                      <MapPinned className="h-3.5 w-3.5" />
                      {item.area}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 2xl:hidden">
                    Loại
                  </p>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {item.type}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 2xl:hidden">
                    Giao dịch
                  </p>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {item.transactionType}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 2xl:hidden">
                    Khu vực
                  </p>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {item.area}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 2xl:hidden">
                    Diện tích
                  </p>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {item.size}
                  </p>
                </div>

                <div>
                  <AdminBadge
                    variant={
                      item.status === "Đang hiển thị" ? "success" : "warning"
                    }
                  >
                    {item.status}
                  </AdminBadge>
                </div>

                <div className="flex items-center justify-start gap-2 2xl:justify-end">
                  <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all hover:border-[#C9A45C] hover:text-[#C9A45C]">
                    <Eye className="h-4 w-4" />
                  </button>

                  <Link href={`/admin/real-estates/${item.id}/edit`}>
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
            Hiển thị 1 - 4 trong 4 Bất động sản
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
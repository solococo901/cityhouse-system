import Link from "next/link";
import {
  Edit3,
  Eye,
  ImageIcon,
  MapPin,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type NearbyPlace = {
  id: number;
  name: string;
  image: string;
};

const nearbyPlaces: NearbyPlace[] = [
  {
    id: 1,
    name: "Sân bay Tân Sơn Nhất",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Chợ Bến Thành",
    image:
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Phố đi bộ Nguyễn Huệ",
    image:
      "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Saigon Centre",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Landmark 81",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Công viên Lê Văn Tám",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function AdminNearbyPlacesPage() {
  const totalImages = nearbyPlaces.filter((place) => place.image).length;

  return (
    <div className="space-y-5">
      <AdminPageHeader
        title="Địa điểm xung quanh"
        description="Quản lý kho địa điểm đơn giản gồm hình ảnh và tên địa điểm."
      >
        <Link href="/admin/nearby-places/create">
          <AdminButton>
            <Plus className="h-4 w-4" />
            Thêm địa điểm
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Tổng địa điểm
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {nearbyPlaces.length}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0F1A41] text-white">
              <MapPin className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Có hình ảnh
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {totalImages}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#C9A45C]/10 text-[#8A6A22]">
              <ImageIcon className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Dữ liệu
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                Demo
              </h3>
            </div>

            <div className="rounded-2xl bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-500">
              Layout
            </div>
          </div>
        </AdminCard>
      </div>

      <AdminCard>
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-bold text-[#0F1A41]">
              Danh sách địa điểm
            </h2>

            <p className="mt-1 text-xs font-bold leading-5 text-slate-400">
              Mỗi địa điểm chỉ gồm hình ảnh đại diện và tên địa điểm.
            </p>
          </div>

          <div className="relative w-full sm:w-[280px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              placeholder="Tìm địa điểm..."
              className="h-10 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-xs font-bold text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C]"
            />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {nearbyPlaces.map((place) => (
            <div
              key={place.id}
              className="group flex min-h-[92px] items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A45C]/40 hover:shadow-lg"
            >
              <div className="h-[68px] w-[68px] shrink-0 overflow-hidden rounded-2xl bg-slate-100">
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Địa điểm
                </p>

                <h3 className="mt-1 line-clamp-2 text-[13px] font-bold leading-5 text-[#0F1A41]">
                  {place.name}
                </h3>

                <div className="mt-2 flex items-center gap-1.5">
                  <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-[#C9A45C] hover:text-[#C9A45C]">
                    <Eye className="h-3.5 w-3.5" />
                  </button>

                  <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-[#C9A45C] hover:text-[#C9A45C]">
                    <Edit3 className="h-3.5 w-3.5" />
                  </button>

                  <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-red-300 hover:text-red-500">
                    <Trash2 className="h-3.5 w-3.5" />
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
            Bảng nearby_places chỉ cần lưu name, imageUrl, sortOrder và status.
            Khi thêm Hotel, Văn phòng hoặc Bất động sản thì chọn địa điểm này và
            nhập khoảng cách riêng ở form sản phẩm.
          </p>
        </div>
      </AdminCard>
    </div>
  );
}
import Link from "next/link";
import {
  Check,
  Grid3X3,
  ImageIcon,
  ListFilter,
  Search,
  Upload,
} from "lucide-react";

import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type MediaItem = {
  id: number;
  name: string;
  image: string;
  type: string;
};

const mediaItems: MediaItem[] = [
  {
    id: 1,
    name: "CityHouse Kim Nguyên",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    type: "Hotel",
  },
  {
    id: 2,
    name: "CityHouse Office",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    type: "Văn phòng",
  },
  {
    id: 3,
    name: "News Thumbnail",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    type: "Tin tức",
  },
  {
    id: 4,
    name: "Real Estate Cover",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
    type: "Bất động sản",
  },
  {
    id: 5,
    name: "Partner Banner",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    type: "Đối tác",
  },
  {
    id: 6,
    name: "Event Gallery",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    type: "Sự kiện",
  },
  {
    id: 7,
    name: "Nearby Place",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    type: "Địa điểm",
  },
  {
    id: 8,
    name: "Homepage Hero",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    type: "Trang chủ",
  },
  {
    id: 9,
    name: "Apartment Lobby",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    type: "Hotel",
  },
  {
    id: 10,
    name: "Office Meeting Room",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1200&auto=format&fit=crop",
    type: "Văn phòng",
  },
  {
    id: 11,
    name: "Luxury Room",
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop",
    type: "Hotel",
  },
  {
    id: 12,
    name: "City View",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
    type: "Gallery",
  },
];

export default function AdminMediaPage() {
  return (
    <div className="space-y-5">
      <AdminPageHeader
        title="Thư viện hình ảnh"
        description="Quản lý hình ảnh theo dạng thư viện media, giống WordPress Media Library."
      >
        <Link href="/admin/media/upload">
          <AdminButton>
            <Upload className="h-4 w-4" />
            Tải ảnh lên
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <AdminCard>
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F1A41] text-white">
              <ImageIcon className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-base font-bold text-[#0F1A41]">
                Tất cả hình ảnh
              </h2>

              <p className="mt-1 text-xs font-bold text-slate-400">
                {mediaItems.length} hình ảnh trong thư viện
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative w-full sm:w-[280px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                placeholder="Tìm hình ảnh..."
                className="h-10 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-xs font-bold text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C]"
              />
            </div>

            <button className="flex h-10 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-xs font-bold text-[#0F1A41] transition hover:border-[#C9A45C] hover:text-[#C9A45C]">
              <ListFilter className="h-4 w-4" />
              Lọc
            </button>

            <button className="flex h-10 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-xs font-bold text-[#0F1A41] transition hover:border-[#C9A45C] hover:text-[#C9A45C]">
              <Grid3X3 className="h-4 w-4" />
              Grid
            </button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
          {mediaItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="group relative aspect-square overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A45C] hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#0F1A41]/0 transition group-hover:bg-[#0F1A41]/35" />

              <div className="absolute left-2 top-2 hidden h-6 w-6 items-center justify-center rounded-full bg-[#C9A45C] text-[#0F1A41] shadow-sm group-hover:flex">
                <Check className="h-3.5 w-3.5" />
              </div>

              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-[#0F1A41]/95 to-[#0F1A41]/0 p-3 pt-8 text-left transition group-hover:translate-y-0">
                <p className="truncate text-xs font-bold text-white">
                  {item.name}
                </p>

                <p className="mt-1 truncate text-[10px] font-bold uppercase tracking-[0.12em] text-white/55">
                  {item.type}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-bold text-slate-400">
            Hiển thị {mediaItems.length} hình ảnh demo
          </p>

          <div className="flex items-center gap-2">
            <button className="h-8 rounded-xl border border-slate-200 bg-white px-3 text-xs font-bold text-slate-400">
              Trước
            </button>

            <button className="h-8 rounded-xl bg-[#0F1A41] px-3 text-xs font-bold text-white">
              1
            </button>

            <button className="h-8 rounded-xl border border-slate-200 bg-white px-3 text-xs font-bold text-slate-400">
              Sau
            </button>
          </div>
        </div>
      </AdminCard>
    </div>
  );
}
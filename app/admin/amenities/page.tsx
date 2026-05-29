import {
  Bath,
  Car,
  CheckCircle2,
  Dumbbell,
  Edit3,
  Eye,
  MoreHorizontal,
  Plus,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Trash2,
  Wifi,
} from "lucide-react";

import Link from "next/link";

import AdminBadge from "@/components/admin/AdminBadge";
import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type AmenityGroup = "hotel" | "office" | "real-estate" | "shared";

type Amenity = {
  id: number;
  name: string;
  iconKey: string;
  group: AmenityGroup;
  usedIn: number;
  status: "active" | "hidden";
};

const amenities: Amenity[] = [
  {
    id: 1,
    name: "Wifi tốc độ cao",
    iconKey: "wifi",
    group: "shared",
    usedIn: 18,
    status: "active",
  },
  {
    id: 2,
    name: "Bãi xe",
    iconKey: "car",
    group: "shared",
    usedIn: 15,
    status: "active",
  },
  {
    id: 3,
    name: "Hồ bơi",
    iconKey: "pool",
    group: "hotel",
    usedIn: 6,
    status: "active",
  },
  {
    id: 4,
    name: "Phòng gym",
    iconKey: "gym",
    group: "hotel",
    usedIn: 7,
    status: "active",
  },
  {
    id: 5,
    name: "Phòng họp",
    iconKey: "meeting-room",
    group: "office",
    usedIn: 9,
    status: "active",
  },
  {
    id: 6,
    name: "Pantry",
    iconKey: "pantry",
    group: "office",
    usedIn: 8,
    status: "active",
  },
  {
    id: 7,
    name: "Sổ hồng",
    iconKey: "legal-book",
    group: "real-estate",
    usedIn: 4,
    status: "active",
  },
  {
    id: 8,
    name: "Pháp lý rõ ràng",
    iconKey: "shield-check",
    group: "real-estate",
    usedIn: 5,
    status: "active",
  },
];

const groupLabels: Record<AmenityGroup, string> = {
  hotel: "Hotel",
  office: "Văn phòng",
  "real-estate": "Bất động sản",
  shared: "Dùng chung",
};

const groupClassNames: Record<AmenityGroup, string> = {
  hotel: "border-blue-100 bg-blue-50 text-blue-700",
  office: "border-purple-100 bg-purple-50 text-purple-700",
  "real-estate": "border-emerald-100 bg-emerald-50 text-emerald-700",
  shared: "border-[#C9A45C]/30 bg-[#C9A45C]/10 text-[#8A6A22]",
};

function AmenityIcon({ iconKey }: { iconKey: string }) {
  const iconClassName = "h-5 w-5 text-[#C9A45C]";

  if (iconKey === "wifi") {
    return <Wifi className={iconClassName} />;
  }

  if (iconKey === "car") {
    return <Car className={iconClassName} />;
  }

  if (iconKey === "pool") {
    return <Bath className={iconClassName} />;
  }

  if (iconKey === "gym") {
    return <Dumbbell className={iconClassName} />;
  }

  if (iconKey === "shield-check") {
    return <ShieldCheck className={iconClassName} />;
  }

  return <CheckCircle2 className={iconClassName} />;
}

function getGroupTotal(group: AmenityGroup) {
  return amenities.filter((amenity) => amenity.group === group).length;
}

export default function AdminAmenitiesPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Tiện nghi"
        description="Quản lý kho tiện nghi dùng chung cho Hotel, Văn phòng và Bất động sản."
      >
        <Link href="/admin/amenities/create">
          <AdminButton>
            <Plus className="h-4 w-4" />
            Thêm tiện nghi
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <AdminCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Tổng tiện nghi
              </p>
              <h3 className="mt-2 text-3xl font-bold text-[#0F1A41]">
                {amenities.length}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F1A41] text-white">
              <SlidersHorizontal className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Hotel
              </p>
              <h3 className="mt-2 text-3xl font-bold text-[#0F1A41]">
                {getGroupTotal("hotel")}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Bath className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Văn phòng
              </p>
              <h3 className="mt-2 text-3xl font-bold text-[#0F1A41]">
                {getGroupTotal("office")}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-700">
              <Wifi className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                Bất động sản
              </p>
              <h3 className="mt-2 text-3xl font-bold text-[#0F1A41]">
                {getGroupTotal("real-estate")}
              </h3>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <ShieldCheck className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>
      </div>

      <AdminCard>
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#0F1A41]">
              Danh sách tiện nghi
            </h2>

            <p className="mt-1 text-sm font-bold text-slate-400">
              Dữ liệu hiện tại là demo layout, sau này sẽ nối database và CRUD thật.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                placeholder="Tìm tiện nghi..."
                className="h-11 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-sm font-bold text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C] sm:w-[260px]"
              />
            </div>

            <select className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-[#0F1A41] outline-none transition focus:border-[#C9A45C]">
              <option>Tất cả nhóm</option>
              <option>Hotel</option>
              <option>Văn phòng</option>
              <option>Bất động sản</option>
              <option>Dùng chung</option>
            </select>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr_120px] bg-slate-50 px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
            <div>Tiện nghi</div>
            <div>Nhóm</div>
            <div>Icon key</div>
            <div>Đang dùng</div>
            <div className="text-right">Thao tác</div>
          </div>

          <div className="divide-y divide-slate-100">
            {amenities.map((amenity) => (
              <div
                key={amenity.id}
                className="grid grid-cols-[1.4fr_1fr_1fr_1fr_120px] items-center px-5 py-4 transition hover:bg-slate-50"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C9A45C]/20 bg-[#C9A45C]/10">
                    <AmenityIcon iconKey={amenity.iconKey} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#0F1A41]">
                      {amenity.name}
                    </h3>

                    <div className="mt-1">
                      {amenity.status === "active" ? (
                        <AdminBadge variant="success">Đang hiển thị</AdminBadge>
                      ) : (
                        <AdminBadge variant="warning">Tạm ẩn</AdminBadge>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <span
                    className={[
                      "inline-flex rounded-full border px-3 py-1 text-xs font-bold",
                      groupClassNames[amenity.group],
                    ].join(" ")}
                  >
                    {groupLabels[amenity.group]}
                  </span>
                </div>

                <div>
                  <span className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-bold text-slate-500">
                    {amenity.iconKey}
                  </span>
                </div>

                <div>
                  <p className="text-sm font-bold text-[#0F1A41]">
                    {amenity.usedIn} mục
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

                  <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition hover:border-[#0F1A41] hover:text-[#0F1A41]">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-[#C9A45C]/20 bg-[#C9A45C]/10 p-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-sm font-bold text-[#0F1A41]">
              Ghi chú cho database sau này
            </h3>

            <p className="mt-1 text-xs font-bold leading-6 text-slate-500">
              Mỗi tiện nghi nên lưu name, iconKey, group, status. Khi thêm Hotel,
              Văn phòng hoặc Bất động sản thì chỉ chọn từ kho này.
            </p>
          </div>

          <div className="rounded-2xl bg-white px-4 py-3 text-xs font-bold text-[#8A6A22] shadow-sm">
            amenities table
          </div>
        </div>
      </AdminCard>
    </div>
  );
}
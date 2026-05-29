import Link from "next/link";
import {
  CalendarDays,
  Clock,
  Edit3,
  Eye,
  MapPin,
  PartyPopper,
  Plus,
  Search,
  Trash2,
  Users,
} from "lucide-react";

import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type EventStatus = "upcoming" | "completed" | "hidden";

type EventItem = {
  id: number;
  title: string;
  slug: string;
  image: string;
  location: string;
  date: string;
  time: string;
  guests: number;
  status: EventStatus;
};

const events: EventItem[] = [
  {
    id: 1,
    title: "CityHouse Investment Day 2026",
    slug: "cityhouse-investment-day-2026",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    location: "Quận 1, TP.HCM",
    date: "12.06.2026",
    time: "09:00 - 11:30",
    guests: 120,
    status: "upcoming",
  },
  {
    id: 2,
    title: "Workshop vận hành căn hộ dịch vụ",
    slug: "workshop-van-hanh-can-ho-dich-vu",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
    location: "Phú Nhuận, TP.HCM",
    date: "25.05.2026",
    time: "14:00 - 16:00",
    guests: 80,
    status: "completed",
  },
  {
    id: 3,
    title: "Tour tham quan hệ thống CityHouse",
    slug: "tour-tham-quan-he-thong-cityhouse",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    location: "Tân Bình, TP.HCM",
    date: "18.05.2026",
    time: "10:00 - 12:00",
    guests: 45,
    status: "completed",
  },
  {
    id: 4,
    title: "Networking chủ đầu tư bất động sản dòng tiền",
    slug: "networking-chu-dau-tu-bat-dong-san-dong-tien",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    location: "Quận 3, TP.HCM",
    date: "08.07.2026",
    time: "18:00 - 20:30",
    guests: 150,
    status: "upcoming",
  },
  {
    id: 5,
    title: "Sự kiện nội bộ CityHouse More",
    slug: "su-kien-noi-bo-cityhouse-more",
    image:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1200&auto=format&fit=crop",
    location: "Quận 1, TP.HCM",
    date: "01.05.2026",
    time: "17:00 - 19:00",
    guests: 60,
    status: "hidden",
  },
];

const statusLabels: Record<EventStatus, string> = {
  upcoming: "Sắp diễn ra",
  completed: "Đã kết thúc",
  hidden: "Tạm ẩn",
};

const statusClassNames: Record<EventStatus, string> = {
  upcoming: "border-emerald-100 bg-emerald-50 text-emerald-700",
  completed: "border-blue-100 bg-blue-50 text-blue-700",
  hidden: "border-slate-200 bg-slate-100 text-slate-500",
};

function StatusBadge({ status }: { status: EventStatus }) {
  return (
    <span
      className={[
        "inline-flex rounded-full border px-3 py-1 text-[11px] font-bold",
        statusClassNames[status],
      ].join(" ")}
    >
      {statusLabels[status]}
    </span>
  );
}

export default function AdminEventsPage() {
  const upcomingTotal = events.filter(
    (event) => event.status === "upcoming",
  ).length;

  const completedTotal = events.filter(
    (event) => event.status === "completed",
  ).length;

  const totalGuests = events.reduce((total, event) => total + event.guests, 0);

  return (
    <div className="space-y-5">
      <AdminPageHeader
        title="Sự kiện"
        description="Quản lý các sự kiện, workshop, networking và hoạt động thương hiệu CityHouse."
      >
        <Link href="/admin/events/create">
          <AdminButton>
            <Plus className="h-4 w-4" />
            Thêm sự kiện
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Tổng sự kiện
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {events.length}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0F1A41] text-white">
              <PartyPopper className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Sắp diễn ra
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {upcomingTotal}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <CalendarDays className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Đã kết thúc
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {completedTotal}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Clock className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Khách tham dự
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {totalGuests}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#C9A45C]/10 text-[#8A6A22]">
              <Users className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>
      </div>

      <AdminCard>
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-bold text-[#0F1A41]">
              Danh sách sự kiện
            </h2>

            <p className="mt-1 text-xs font-bold leading-5 text-slate-400">
              Quản lý sự kiện dạng bảng, gọn và dễ thao tác trong admin.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative w-full sm:w-[280px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                placeholder="Tìm sự kiện..."
                className="h-10 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-xs font-bold text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C]"
              />
            </div>

            <select className="h-10 rounded-2xl border border-slate-200 bg-white px-4 text-xs font-bold text-[#0F1A41] outline-none transition focus:border-[#C9A45C]">
              <option>Tất cả trạng thái</option>
              <option>Sắp diễn ra</option>
              <option>Đã kết thúc</option>
              <option>Tạm ẩn</option>
            </select>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100">
          <div className="grid grid-cols-[1.8fr_150px_140px_140px_110px_120px] bg-slate-50 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
            <div>Sự kiện</div>
            <div>Ngày giờ</div>
            <div>Địa điểm</div>
            <div>Trạng thái</div>
            <div>Khách</div>
            <div className="text-right">Thao tác</div>
          </div>

          <div className="divide-y divide-slate-100">
            {events.map((event) => (
              <div
                key={event.id}
                className="grid grid-cols-[1.8fr_150px_140px_140px_110px_120px] items-center px-5 py-4 transition hover:bg-slate-50"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="h-14 w-20 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-bold text-[#0F1A41]">
                      {event.title}
                    </h3>

                    <p className="mt-1 truncate text-xs font-bold text-slate-400">
                      /{event.slug}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-xs font-bold text-[#0F1A41]">
                    <CalendarDays className="h-3.5 w-3.5 text-slate-300" />
                    {event.date}
                  </p>

                  <p className="mt-1 text-xs font-bold text-slate-400">
                    {event.time}
                  </p>
                </div>

                <div>
                  <p className="line-clamp-2 flex items-center gap-2 text-xs font-bold text-slate-500">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-300" />
                    {event.location}
                  </p>
                </div>

                <div>
                  <StatusBadge status={event.status} />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#0F1A41]">
                    {event.guests}
                  </p>
                </div>

                <div className="flex items-center justify-end gap-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition hover:border-[#C9A45C] hover:text-[#C9A45C]">
                    <Eye className="h-3.5 w-3.5" />
                  </button>

                  <button className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition hover:border-[#C9A45C] hover:text-[#C9A45C]">
                    <Edit3 className="h-3.5 w-3.5" />
                  </button>

                  <button className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 text-slate-400 transition hover:border-red-300 hover:text-red-500">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
          <p className="text-xs font-bold text-slate-400">
            Hiển thị {events.length} sự kiện demo
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
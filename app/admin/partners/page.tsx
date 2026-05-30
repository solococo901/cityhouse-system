import Link from "next/link";
import {
  Building2,
  Edit3,
  Eye,
  Handshake,
  ImageIcon,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type PartnerStatus = "active" | "hidden";

type Partner = {
  id: number;
  name: string;
  logo: string;
  website: string;
  type: string;
  sortOrder: number;
  status: PartnerStatus;
};

const partners: Partner[] = [
  {
    id: 1,
    name: "CityHouse Group",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800&auto=format&fit=crop",
    website: "cityhouse.com.vn",
    type: "Vận hành",
    sortOrder: 1,
    status: "active",
  },
  {
    id: 2,
    name: "Sanverse",
    logo: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
    website: "sanverse.vn",
    type: "Công nghệ",
    sortOrder: 2,
    status: "active",
  },
  {
    id: 3,
    name: "Real Estate Partner",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    website: "partner.vn",
    type: "Bất động sản",
    sortOrder: 3,
    status: "active",
  },
  {
    id: 4,
    name: "Hospitality Partner",
    logo: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
    website: "hospitality.vn",
    type: "Khách sạn",
    sortOrder: 4,
    status: "hidden",
  },
];

const statusLabels: Record<PartnerStatus, string> = {
  active: "Đang hiển thị",
  hidden: "Tạm ẩn",
};

const statusClassNames: Record<PartnerStatus, string> = {
  active: "border-emerald-100 bg-emerald-50 text-emerald-700",
  hidden: "border-slate-200 bg-slate-100 text-slate-500",
};

function StatusBadge({ status }: { status: PartnerStatus }) {
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

export default function AdminPartnersPage() {
  const activeTotal = partners.filter(
    (partner) => partner.status === "active",
  ).length;

  const hiddenTotal = partners.filter(
    (partner) => partner.status === "hidden",
  ).length;

  const imageTotal = partners.filter((partner) => partner.logo).length;

  return (
    <div className="space-y-5">
      <AdminPageHeader
        title="Đối tác"
        description="Quản lý logo đối tác, thương hiệu hợp tác và thứ tự hiển thị trên website."
      >
        <Link href="/admin/partners/create">
          <AdminButton>
            <Plus className="h-4 w-4" />
            Thêm đối tác
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Tổng đối tác
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {partners.length}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0F1A41] text-white">
              <Handshake className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Đang hiển thị
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {activeTotal}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
              <Eye className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Tạm ẩn
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {hiddenTotal}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-500">
              <Building2 className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Có logo
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {imageTotal}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#C9A45C]/10 text-[#8A6A22]">
              <ImageIcon className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>
      </div>

      <AdminCard>
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-bold text-[#0F1A41]">
              Danh sách đối tác
            </h2>

            <p className="mt-1 text-xs font-bold leading-5 text-slate-400">
              Quản lý logo, tên đối tác, website, loại đối tác và trạng thái hiển thị.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative w-full sm:w-[280px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                placeholder="Tìm đối tác..."
                className="h-10 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-xs font-bold text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C]"
              />
            </div>

            <select className="h-10 rounded-2xl border border-slate-200 bg-white px-4 text-xs font-bold text-[#0F1A41] outline-none transition focus:border-[#C9A45C]">
              <option>Tất cả loại</option>
              <option>Vận hành</option>
              <option>Công nghệ</option>
              <option>Bất động sản</option>
              <option>Khách sạn</option>
            </select>

            <select className="h-10 rounded-2xl border border-slate-200 bg-white px-4 text-xs font-bold text-[#0F1A41] outline-none transition focus:border-[#C9A45C]">
              <option>Tất cả trạng thái</option>
              <option>Đang hiển thị</option>
              <option>Tạm ẩn</option>
            </select>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100">
          <div className="grid grid-cols-[80px_1.4fr_1fr_1fr_100px_130px_120px] bg-slate-50 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
            <div>Logo</div>
            <div>Đối tác</div>
            <div>Website</div>
            <div>Loại</div>
            <div>Thứ tự</div>
            <div>Trạng thái</div>
            <div className="text-right">Thao tác</div>
          </div>

          <div className="divide-y divide-slate-100">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="grid grid-cols-[80px_1.4fr_1fr_1fr_100px_130px_120px] items-center px-5 py-4 transition hover:bg-slate-50"
              >
                <div>
                  <div className="h-12 w-12 overflow-hidden rounded-2xl border border-slate-100 bg-slate-100">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="min-w-0 pr-4">
                  <h3 className="truncate text-sm font-bold text-[#0F1A41]">
                    {partner.name}
                  </h3>

                  <p className="mt-1 text-xs font-bold text-slate-400">
                    ID: #{partner.id}
                  </p>
                </div>

                <div>
                  <p className="truncate text-xs font-bold text-slate-500">
                    {partner.website}
                  </p>
                </div>

                <div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-500">
                    {partner.type}
                  </span>
                </div>

                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F1A41] text-xs font-bold text-white">
                    {partner.sortOrder}
                  </div>
                </div>

                <div>
                  <StatusBadge status={partner.status} />
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
            Hiển thị {partners.length} đối tác demo
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
import Link from "next/link";
import {
  Building2,
  Eye,
  Pencil,
  Plus,
  Search,
  SlidersHorizontal,
} from "lucide-react";

/**
 * BƯỚC HIỆN TẠI:
 * Đây là trang danh sách dự án trong Admin Dashboard.
 *
 * Hiện tại:
 * - Chưa kết nối backend NestJS
 * - Chưa dùng database PostgreSQL
 * - Dùng dữ liệu mẫu để dựng giao diện trước
 *
 * Sau này:
 * - Phần mockProjects sẽ được thay bằng API:
 *   GET /api/projects
 */

const mockProjects = [
  {
    id: "1",
    name: "CityHouse - Kim Nguyên",
    slug: "cityhouse-kim-nguyen",
    type: "Đang hoạt động",
    brand: "MARK",
    district: "Phú Nhuận",
    status: "Đã xuất bản",
    rooms: 45,
    updatedAt: "28/05/2026",
  },
  {
    id: "2",
    name: "CityHouse - CityOasis",
    slug: "cityhouse-cityoasis",
    type: "Đang hoạt động",
    brand: "SOUL",
    district: "Quận 1",
    status: "Đã xuất bản",
    rooms: 120,
    updatedAt: "25/05/2026",
  },
  {
    id: "3",
    name: "CityHouse - Elpino",
    slug: "cityhouse-elpino",
    type: "Sắp ra mắt",
    brand: "VIBE",
    district: "Quận 7",
    status: "Bản nháp",
    rooms: 80,
    updatedAt: "20/05/2026",
  },
  {
    id: "4",
    name: "CityHouse - Atelier",
    slug: "cityhouse-atelier",
    type: "Đang hoạt động",
    brand: "TERA",
    district: "Quận 3",
    status: "Ẩn",
    rooms: 60,
    updatedAt: "18/05/2026",
  },
];

/**
 * Hàm này dùng để đổi màu badge trạng thái.
 * Mục đích:
 * - Đã xuất bản: xanh
 * - Bản nháp: vàng
 * - Ẩn: xám
 */
function getStatusClass(status: string) {
  if (status === "Đã xuất bản") {
    return "bg-emerald-50 text-emerald-700 ring-emerald-200";
  }

  if (status === "Bản nháp") {
    return "bg-amber-50 text-amber-700 ring-amber-200";
  }

  return "bg-slate-100 text-slate-600 ring-slate-200";
}

/**
 * Hàm này dùng để đổi màu loại dự án.
 * Mục đích:
 * - Đang hoạt động: navy
 * - Sắp ra mắt: gold
 */
function getTypeClass(type: string) {
  if (type === "Đang hoạt động") {
    return "bg-[#0F1A41] text-white";
  }

  return "bg-[#C9A45C] text-[#0F1A41]";
}

export default function AdminProjectsPage() {
  return (
    <div className="space-y-8">
      {/* 
        PHẦN 1: Header của trang
        Gồm breadcrumb nhỏ, tiêu đề, mô tả và nút thêm dự án
      */}
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-bold text-[#C9A45C]">
            Admin / Quản lý dự án
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#0F1A41]">
            Quản lý dự án
          </h1>

          <p className="mt-2 max-w-2xl text-sm font-inter leading-6 text-slate-500">
            Quản lý danh sách dự án đang hoạt động và dự án sắp ra mắt trong hệ
            thống CityHouse.
          </p>
        </div>

        <Link
          href="/admin/projects/create"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0F1A41] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#0F1A41]/20 transition-all hover:-translate-y-0.5 hover:bg-[#C9A45C] hover:text-[#0F1A41]"
        >
          <Plus className="h-4 w-4" />
          Thêm dự án
        </Link>
      </div>

      {/* 
        PHẦN 2: Thống kê nhanh
        Ở bước này chỉ dùng số liệu mẫu.
        Sau này có thể lấy từ API dashboard.
      */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-slate-400">Tổng dự án</p>
              <h2 className="mt-2 text-3xl font-inter font-bold text-[#0F1A41]">35+</h2>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F1A41] text-white">
              <Building2 className="h-6 w-6" />
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold text-slate-400">Đang hoạt động</p>
          <h2 className="mt-2 text-3xl font-inter font-bold text-emerald-600">28</h2>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-bold text-slate-400">Sắp ra mắt</p>
          <h2 className="mt-2 text-3xl font-inter font-bold text-[#C9A45C]">7</h2>
        </div>
      </div>

      {/* 
        PHẦN 3: Khung danh sách dự án
        Gồm thanh tìm kiếm, filter và table.
      */}
      <section className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
        {/* Thanh công cụ trên table */}
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#0F1A41]">
              Danh sách dự án
            </h2>
            <p className="mt-1 text-sm font-inter text-slate-400">
              Quản lý nội dung hiển thị trên website.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Ô tìm kiếm */}
            <div className="flex h-11 min-w-[260px] items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                placeholder="Tìm dự án..."
                className="w-full bg-transparent text-sm font-inter font-semibold text-slate-700 outline-none placeholder:text-slate-400"
              />
            </div>

            {/* Nút filter */}
            <button className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-inter font-bold text-slate-600 transition-all hover:border-[#C9A45C] hover:text-[#0F1A41]">
              <SlidersHorizontal className="h-4 w-4" />
              Bộ lọc
            </button>
          </div>
        </div>

        {/* Table danh sách dự án */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[980px] border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80">
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Dự án
                </th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Loại
                </th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Brand
                </th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Khu vực
                </th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Số phòng
                </th>
                <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Trạng thái
                </th>
                <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Hành động
                </th>
              </tr>
            </thead>

            <tbody>
              {mockProjects.map((project) => (
                <tr
                  key={project.id}
                  className="border-b border-slate-100 transition-all hover:bg-slate-50"
                >
                  {/* Tên dự án */}
                  <td className="px-5 py-5">
                    <div>
                      <p className="font-bold text-[#0F1A41]">
                        {project.name}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-400">
                        /{project.slug}
                      </p>
                    </div>
                  </td>

                  {/* Loại dự án */}
                  <td className="px-5 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ${getTypeClass(
                        project.type
                      )}`}
                    >
                      {project.type}
                    </span>
                  </td>

                  {/* Brand */}
                  <td className="px-5 py-5">
                    <span className="font-bold text-[#0F1A41]">
                      {project.brand}
                    </span>
                  </td>

                  {/* Khu vực */}
                  <td className="px-5 py-5">
                    <span className="text-sm font-semibold text-slate-600">
                      {project.district}
                    </span>
                  </td>

                  {/* Số phòng */}
                  <td className="px-5 py-5">
                    <span className="text-sm font-bold text-slate-700">
                      {project.rooms}
                    </span>
                  </td>

                  {/* Trạng thái */}
                  <td className="px-5 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold ring-1 ${getStatusClass(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </span>
                  </td>

                  {/* Hành động */}
                  <td className="px-5 py-5">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/dang-hoat-dong/${project.slug}`}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all hover:border-[#C9A45C] hover:text-[#0F1A41]"
                        title="Xem ngoài website"
                      >
                        <Eye className="h-4 w-4" />
                      </Link>

                      <Link
                        href={`/admin/projects/${project.id}`}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F1A41] text-white transition-all hover:bg-[#C9A45C] hover:text-[#0F1A41]"
                        title="Chỉnh sửa"
                      >
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
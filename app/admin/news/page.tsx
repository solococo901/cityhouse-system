import Link from "next/link";
import {
  CalendarDays,
  Edit3,
  Eye,
  FileText,
  Newspaper,
  Plus,
  Search,
  Star,
  Trash2,
} from "lucide-react";

import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type NewsStatus = "published" | "draft" | "hidden";

type NewsPost = {
  id: number;
  title: string;
  slug: string;
  category: string;
  image: string;
  date: string;
  views: number;
  status: NewsStatus;
  isFeatured: boolean;
};

const newsPosts: NewsPost[] = [
  {
    id: 1,
    title: "Xu hướng khai thác căn hộ dịch vụ cao cấp tại trung tâm TP.HCM năm 2026",
    slug: "xu-huong-khai-thac-can-ho-dich-vu-cao-cap-tai-trung-tam-tphcm-nam-2026",
    category: "Thị trường",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    date: "24.04.2026",
    views: 1240,
    status: "published",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Chuẩn bị tài sản trước khi đưa vào vận hành thực tế",
    slug: "chuan-bi-tai-san-truoc-khi-dua-vao-van-hanh-thuc-te",
    category: "Vận hành",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1200&auto=format&fit=crop",
    date: "22.04.2026",
    views: 860,
    status: "published",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Thương hiệu vận hành và giá trị tài sản dài hạn",
    slug: "thuong-hieu-van-hanh-va-gia-tri-tai-san-dai-han",
    category: "Đầu tư",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
    date: "20.04.2026",
    views: 720,
    status: "published",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Các lưu ý pháp lý quan trọng khi khai thác cho thuê",
    slug: "cac-luu-y-phap-ly-quan-trong-khi-khai-thac-cho-thue",
    category: "Pháp lý",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop",
    date: "18.04.2026",
    views: 540,
    status: "draft",
    isFeatured: false,
  },
  {
    id: 5,
    title: "Tối ưu trải nghiệm khách lưu trú dài hạn",
    slug: "toi-uu-trai-nghiem-khach-luu-tru-dai-han",
    category: "Vận hành",
    image:
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=1200&auto=format&fit=crop",
    date: "15.04.2026",
    views: 460,
    status: "hidden",
    isFeatured: false,
  },
];

const statusLabels: Record<NewsStatus, string> = {
  published: "Đã đăng",
  draft: "Bản nháp",
  hidden: "Tạm ẩn",
};

const statusClassNames: Record<NewsStatus, string> = {
  published: "border-emerald-100 bg-emerald-50 text-emerald-700",
  draft: "border-amber-100 bg-amber-50 text-amber-700",
  hidden: "border-slate-200 bg-slate-100 text-slate-500",
};

function StatusBadge({ status }: { status: NewsStatus }) {
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

export default function AdminNewsPage() {
  const publishedTotal = newsPosts.filter(
    (post) => post.status === "published",
  ).length;

  const draftTotal = newsPosts.filter((post) => post.status === "draft").length;

  const totalViews = newsPosts.reduce((total, post) => total + post.views, 0);

  return (
    <div className="space-y-5">
      <AdminPageHeader
        title="Tin tức"
        description="Quản lý bài viết, danh mục, trạng thái hiển thị và bài viết nổi bật."
      >
        <Link href="/admin/news/create">
          <AdminButton>
            <Plus className="h-4 w-4" />
            Thêm bài viết
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Tổng bài viết
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {newsPosts.length}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0F1A41] text-white">
              <Newspaper className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Đã đăng
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {publishedTotal}
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
                Bản nháp
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {draftTotal}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
              <FileText className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Lượt xem
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {totalViews.toLocaleString("vi-VN")}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#C9A45C]/10 text-[#8A6A22]">
              <Eye className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>
      </div>

      <AdminCard>
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-bold text-[#0F1A41]">
              Danh sách bài viết
            </h2>

            <p className="mt-1 text-xs font-bold leading-5 text-slate-400">
              Quản lý bài viết dạng bảng, gọn và dễ thao tác trong admin.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative w-full sm:w-[280px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                placeholder="Tìm bài viết..."
                className="h-10 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-xs font-bold text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C]"
              />
            </div>

            <select className="h-10 rounded-2xl border border-slate-200 bg-white px-4 text-xs font-bold text-[#0F1A41] outline-none transition focus:border-[#C9A45C]">
              <option>Tất cả danh mục</option>
              <option>Thị trường</option>
              <option>Vận hành</option>
              <option>Đầu tư</option>
              <option>Pháp lý</option>
            </select>

            <select className="h-10 rounded-2xl border border-slate-200 bg-white px-4 text-xs font-bold text-[#0F1A41] outline-none transition focus:border-[#C9A45C]">
              <option>Tất cả trạng thái</option>
              <option>Đã đăng</option>
              <option>Bản nháp</option>
              <option>Tạm ẩn</option>
            </select>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100">
          <div className="grid grid-cols-[1.8fr_120px_120px_120px_110px_120px] bg-slate-50 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
            <div>Bài viết</div>
            <div>Danh mục</div>
            <div>Ngày đăng</div>
            <div>Trạng thái</div>
            <div>Lượt xem</div>
            <div className="text-right">Thao tác</div>
          </div>

          <div className="divide-y divide-slate-100">
            {newsPosts.map((post) => (
              <div
                key={post.id}
                className="grid grid-cols-[1.8fr_120px_120px_120px_110px_120px] items-center px-5 py-4 transition hover:bg-slate-50"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="h-14 w-20 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="truncate text-sm font-bold text-[#0F1A41]">
                        {post.title}
                      </h3>

                      {post.isFeatured && (
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#C9A45C]/10 px-2 py-1 text-[10px] font-bold text-[#8A6A22]">
                          <Star className="h-3 w-3" />
                          Nổi bật
                        </span>
                      )}
                    </div>

                    <p className="mt-1 truncate text-xs font-bold text-slate-400">
                      /{post.slug}
                    </p>
                  </div>
                </div>

                <div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-500">
                    {post.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <CalendarDays className="h-3.5 w-3.5 text-slate-300" />
                  {post.date}
                </div>

                <div>
                  <StatusBadge status={post.status} />
                </div>

                <div>
                  <p className="text-xs font-bold text-[#0F1A41]">
                    {post.views.toLocaleString("vi-VN")}
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
            Hiển thị {newsPosts.length} bài viết demo
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
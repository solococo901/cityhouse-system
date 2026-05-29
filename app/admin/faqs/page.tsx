import Link from "next/link";
import {
  Edit3,
  Eye,
  FileQuestion,
  HelpCircle,
  MessageCircleQuestion,
  Plus,
  Search,
  Trash2,
} from "lucide-react";

import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

type FaqStatus = "active" | "hidden";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
  category: string;
  sortOrder: number;
  status: FaqStatus;
};

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "CityHouse có hỗ trợ khách thuê dài hạn không?",
    answer:
      "Có. CityHouse có nhiều lựa chọn căn hộ dịch vụ phù hợp cho khách lưu trú dài hạn, chuyên gia và doanh nhân.",
    category: "Khách thuê",
    sortOrder: 1,
    status: "active",
  },
  {
    id: 2,
    question: "Tôi là chủ nhà, có thể hợp tác vận hành với CityHouse không?",
    answer:
      "Có. Chủ nhà có thể gửi thông tin tài sản để CityHouse đánh giá mô hình hợp tác, vận hành và khai thác dòng tiền.",
    category: "Chủ đầu tư",
    sortOrder: 2,
    status: "active",
  },
  {
    id: 3,
    question: "CityHouse có quản lý văn phòng cho thuê không?",
    answer:
      "Có. Hệ thống có thể giới thiệu và quản lý các sản phẩm văn phòng, workspace hoặc mặt bằng thương mại phù hợp.",
    category: "Văn phòng",
    sortOrder: 3,
    status: "active",
  },
  {
    id: 4,
    question: "Website CityHouse có cho đặt phòng trực tiếp không?",
    answer:
      "Không. Website hiện tại dùng để giới thiệu thương hiệu, sản phẩm và nhận thông tin liên hệ từ khách quan tâm.",
    category: "Website",
    sortOrder: 4,
    status: "active",
  },
  {
    id: 5,
    question: "Khách hàng có thể gửi yêu cầu tư vấn ở đâu?",
    answer:
      "Khách hàng có thể gửi thông tin qua form liên hệ, form khách quan tâm hoặc liên hệ trực tiếp với đội ngũ CityHouse.",
    category: "Liên hệ",
    sortOrder: 5,
    status: "hidden",
  },
];

const statusLabels: Record<FaqStatus, string> = {
  active: "Đang hiển thị",
  hidden: "Tạm ẩn",
};

const statusClassNames: Record<FaqStatus, string> = {
  active: "border-emerald-100 bg-emerald-50 text-emerald-700",
  hidden: "border-slate-200 bg-slate-100 text-slate-500",
};

function StatusBadge({ status }: { status: FaqStatus }) {
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

export default function AdminFaqsPage() {
  const activeTotal = faqs.filter((faq) => faq.status === "active").length;
  const hiddenTotal = faqs.filter((faq) => faq.status === "hidden").length;

  return (
    <div className="space-y-5">
      <AdminPageHeader
        title="FAQ"
        description="Quản lý câu hỏi thường gặp hiển thị trên website CityHouse."
      >
        <Link href="/admin/faqs/create">
          <AdminButton>
            <Plus className="h-4 w-4" />
            Thêm FAQ
          </AdminButton>
        </Link>
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Tổng FAQ
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                {faqs.length}
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0F1A41] text-white">
              <HelpCircle className="h-5 w-5" />
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
              <FileQuestion className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>

        <AdminCard>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
                Danh mục
              </p>

              <h3 className="mt-2 text-2xl font-bold leading-none text-[#0F1A41]">
                5
              </h3>
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#C9A45C]/10 text-[#8A6A22]">
              <MessageCircleQuestion className="h-5 w-5" />
            </div>
          </div>
        </AdminCard>
      </div>

      <AdminCard>
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-base font-bold text-[#0F1A41]">
              Danh sách FAQ
            </h2>

            <p className="mt-1 text-xs font-bold leading-5 text-slate-400">
              Quản lý câu hỏi, câu trả lời, danh mục, thứ tự hiển thị và trạng thái.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative w-full sm:w-[280px]">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                placeholder="Tìm FAQ..."
                className="h-10 w-full rounded-2xl border border-slate-200 bg-white pl-10 pr-4 text-xs font-bold text-[#0F1A41] outline-none transition placeholder:text-slate-300 focus:border-[#C9A45C]"
              />
            </div>

            <select className="h-10 rounded-2xl border border-slate-200 bg-white px-4 text-xs font-bold text-[#0F1A41] outline-none transition focus:border-[#C9A45C]">
              <option>Tất cả danh mục</option>
              <option>Khách thuê</option>
              <option>Chủ đầu tư</option>
              <option>Văn phòng</option>
              <option>Website</option>
              <option>Liên hệ</option>
            </select>

            <select className="h-10 rounded-2xl border border-slate-200 bg-white px-4 text-xs font-bold text-[#0F1A41] outline-none transition focus:border-[#C9A45C]">
              <option>Tất cả trạng thái</option>
              <option>Đang hiển thị</option>
              <option>Tạm ẩn</option>
            </select>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-100">
          <div className="grid grid-cols-[80px_1.4fr_1.7fr_130px_130px_120px] bg-slate-50 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">
            <div>Thứ tự</div>
            <div>Câu hỏi</div>
            <div>Câu trả lời</div>
            <div>Danh mục</div>
            <div>Trạng thái</div>
            <div className="text-right">Thao tác</div>
          </div>

          <div className="divide-y divide-slate-100">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="grid grid-cols-[80px_1.4fr_1.7fr_130px_130px_120px] items-center px-5 py-4 transition hover:bg-slate-50"
              >
                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F1A41] text-xs font-bold text-white">
                    {faq.sortOrder}
                  </div>
                </div>

                <div className="pr-4">
                  <h3 className="line-clamp-2 text-sm font-bold leading-6 text-[#0F1A41]">
                    {faq.question}
                  </h3>
                </div>

                <div className="pr-4">
                  <p className="line-clamp-2 text-xs font-bold leading-5 text-slate-500">
                    {faq.answer}
                  </p>
                </div>

                <div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-500">
                    {faq.category}
                  </span>
                </div>

                <div>
                  <StatusBadge status={faq.status} />
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
            Hiển thị {faqs.length} FAQ demo
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
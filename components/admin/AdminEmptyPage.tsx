import AdminBadge from "@/AdminBadge";
import AdminCard from "@/AdminCard";
import AdminPageHeader from "@/AdminPageHeader";

type AdminEmptyPageProps = {
  title: string;
  description: string;
  badge?: string;
};

export default function AdminEmptyPage({
  title,
  description,
  badge = "Đang dựng layout",
}: AdminEmptyPageProps) {
  return (
    <div className="space-y-6">
      <AdminPageHeader title={title} description={description}>
        <AdminBadge variant="warning">{badge}</AdminBadge>
      </AdminPageHeader>

      <AdminCard
        title="Nội dung đang được chuẩn bị"
        description="Giai đoạn này chỉ dựng khung giao diện admin, chưa xử lý chức năng thật."
      >
        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#C9A45C]">
            CITYHOUSE SYSTEM
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[#0F1A41]">
            {title}
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm font-bold leading-6 text-slate-500">
            Trang này đã có route và layout. Bước sau mình sẽ bắt đầu thiết kế
            giao diện chi tiết cho từng module.
          </p>
        </div>
      </AdminCard>
    </div>
  );
}
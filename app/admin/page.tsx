import AdminBadge from "@/components/admin/AdminBadge";
import AdminButton from "@/components/admin/AdminButton";
import AdminCard from "@/components/admin/AdminCard";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

const overviewCards = [
  {
    label: "Hotel",
    value: "0",
    description: "Danh sách hotel và căn hộ dịch vụ",
  },
  {
    label: "Văn phòng",
    value: "0",
    description: "Danh sách văn phòng đang hiển thị",
  },
  {
    label: "Bất động sản",
    value: "0",
    description: "Danh sách bất động sản trong hệ thống",
  },
  {
    label: "Lead mới",
    value: "0",
    description: "Khách hàng và chủ đầu tư quan tâm",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <AdminPageHeader
        title="Dashboard CITYHOUSE"
        description="Tổng quan hệ thống quản trị website CITYHOUSE. Giai đoạn này chỉ dựng layout, chưa xử lý chức năng thật."
      >
        <AdminButton>Thêm dữ liệu mẫu</AdminButton>
        <AdminButton variant="secondary">Xem website</AdminButton>
      </AdminPageHeader>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {overviewCards.map((item) => (
          <AdminCard key={item.label}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-slate-400">
                  {item.label}
                </p>

                <p className="mt-3 text-3xl font-bold text-[#0F1A41]">
                  {item.value}
                </p>

                <p className="mt-2 text-xs font-bold leading-5 text-slate-400">
                  {item.description}
                </p>
              </div>

              <AdminBadge variant="neutral">Demo</AdminBadge>
            </div>
          </AdminCard>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <AdminCard
          title="Cấu trúc quản lý chính"
          description="Các module chính sẽ được xây dựng sau khi hoàn tất layout tổng."
        >
          <div className="space-y-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-bold text-[#0F1A41]">
                Quản lý Hotel
              </p>
              <p className="mt-1 text-xs font-bold leading-5 text-slate-500">
                Dùng cho hotel, khách sạn, căn hộ dịch vụ thuộc hệ thống
                CityHouse.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-bold text-[#0F1A41]">
                Quản lý Văn phòng
              </p>
              <p className="mt-1 text-xs font-bold leading-5 text-slate-500">
                Dùng cho văn phòng, mặt bằng thương mại hoặc tòa nhà văn phòng.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-bold text-[#0F1A41]">
                Quản lý Bất động sản
              </p>
              <p className="mt-1 text-xs font-bold leading-5 text-slate-500">
                Dùng cho bất động sản bán, cho thuê hoặc các sản phẩm mở rộng.
              </p>
            </div>
          </div>
        </AdminCard>

        <AdminCard
          title="Dữ liệu chung"
          description="Các dữ liệu này sẽ được dùng lại cho nhiều module khác nhau."
        >
          <div className="flex flex-wrap gap-3">
            <AdminBadge variant="success">Tiện nghi</AdminBadge>
            <AdminBadge variant="success">Nhóm Property</AdminBadge>
            <AdminBadge variant="success">Brand / Collection</AdminBadge>
            <AdminBadge variant="success">Khu vực</AdminBadge>
            <AdminBadge variant="success">Địa điểm xung quanh</AdminBadge>
          </div>

          <p className="mt-5 text-sm font-bold leading-6 text-slate-500">
            Ví dụ: Quận 1, Mark, Soul, Wifi, Chợ Bến Thành sẽ được tạo một lần
            ở dữ liệu chung, sau đó chọn lại khi thêm Hotel, Văn phòng hoặc Bất
            động sản.
          </p>
        </AdminCard>
      </div>
    </div>
  );
} 
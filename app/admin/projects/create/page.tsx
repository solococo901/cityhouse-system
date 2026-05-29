"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  BedDouble,
  Building2,
  Car,
  Check,
  ChevronDown,
  Dumbbell,
  ImagePlus,
  MapPin,
  Minus,
  Plus,
  Save,
  Search,
  ShieldCheck,
  Snowflake,
  Trash2,
  UploadCloud,
  UserRoundCheck,
  Wifi,
} from "lucide-react";

/**
 * Trang thêm Hotel mới trong Admin.
 *
 * Quy tắc code hiện tại:
 * - Dùng Next.js App Router.
 * - Dùng Tailwind CSS.
 * - Font chính: Inter.
 * - Chỉ dùng font-bold.
 * - Chưa kết nối API NestJS.
 * - Chưa lưu database PostgreSQL.
 * - Chưa upload ảnh thật.
 *
 * Mục tiêu bước này:
 * - Dựng layout form giống trang quản trị Hotel.
 * - Nhập được nội dung Tiếng Việt / Tiếng Anh trong cùng một form.
 * - Có dữ liệu đủ để render ra trang Hotel Detail.
 * - Tiện nghi Hotel chọn từ danh sách Admin / Tiện nghi bằng iconKey.
 */

type LanguageKey = "vi" | "en";

type RoomStatus = "Đang hiển thị" | "Tạm ẩn";

type RoomForm = {
  id: number;
  nameVi: string;
  nameEn: string;
  area: string;
  guest: string;
  view: string;
  price: string;
  priceUnit: string;
  descriptionVi: string;
  descriptionEn: string;
  amenitiesVi: string;
  amenitiesEn: string;
  imageUrl: string;
  sortOrder: string;
  status: RoomStatus;
};

type NearbyPlaceStatus = "Đang hiển thị" | "Tạm ẩn";

type NearbyPlaceForm = {
  id: number;
  nameVi: string;
  nameEn: string;
  distance: string;
  imageUrl: string;
  sortOrder: string;
  status: NearbyPlaceStatus;
};

type AmenityIconKey =
  | "reception"
  | "parking"
  | "air"
  | "wifi"
  | "gym"
  | "security";

type AmenityItem = {
  id: number;
  nameVi: string;
  nameEn: string;
  iconKey: AmenityIconKey;
};

type RelatedProjectItem = {
  id: number;
  title: string;
  brand: string;
  district: string;
  status: string;
};

const languages = [
  {
    key: "vi" as LanguageKey,
    label: "Tiếng Việt",
  },
  {
    key: "en" as LanguageKey,
    label: "Tiếng Anh",
  },
];

const amenityIconMap: Record<AmenityIconKey, LucideIcon> = {
  reception: UserRoundCheck,
  parking: Car,
  air: Snowflake,
  wifi: Wifi,
  gym: Dumbbell,
  security: ShieldCheck,
};

const adminAmenities: AmenityItem[] = [
  {
    id: 1,
    nameVi: "Lễ tân",
    nameEn: "Reception",
    iconKey: "reception",
  },
  {
    id: 2,
    nameVi: "Bãi xe",
    nameEn: "Parking",
    iconKey: "parking",
  },
  {
    id: 3,
    nameVi: "Máy lạnh",
    nameEn: "Air conditioner",
    iconKey: "air",
  },
  {
    id: 4,
    nameVi: "Wifi miễn phí",
    nameEn: "Free wifi",
    iconKey: "wifi",
  },
  {
    id: 5,
    nameVi: "Phòng gym",
    nameEn: "Gym",
    iconKey: "gym",
  },
  {
    id: 6,
    nameVi: "Camera an ninh",
    nameEn: "Security camera",
    iconKey: "security",
  },
];

const relatedProjectOptions: RelatedProjectItem[] = [
  {
    id: 1,
    title: "CityHouse - Kim Nguyên",
    brand: "MARK",
    district: "Phú Nhuận",
    status: "Đang hoạt động",
  },
  {
    id: 2,
    title: "CityHouse - CityOasis",
    brand: "SOUL",
    district: "Quận 1",
    status: "Đang hoạt động",
  },
  {
    id: 3,
    title: "CityHouse - Atelier",
    brand: "TERA",
    district: "Quận 3",
    status: "Đang hoạt động",
  },
  {
    id: 4,
    title: "CityHouse - Elpino",
    brand: "VIBE",
    district: "Quận 7",
    status: "Sắp ra mắt",
  },
];

function getAmenityIcon(iconKey: AmenityIconKey) {
  return amenityIconMap[iconKey] || Wifi;
}

/**
 * Component khung card dùng lại cho từng nhóm thông tin.
 * Mỗi nhóm trong form admin sẽ nằm trong một card.
 */
function AdminCard({
  title,
  children,
  defaultOpen = true,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <section className="overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between border-b border-slate-100 px-5 py-4 text-left transition-all hover:bg-slate-50"
      >
        <div>
          <h2 className="text-sm font-bold text-[#0F1A41]">{title}</h2>

          <p className="mt-1 text-xs font-bold text-slate-400">
            {isOpen ? "Bấm để thu gọn section này" : "Bấm để mở section này"}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {isOpen ? (
            <Minus className="h-4 w-4 text-slate-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-slate-400" />
          )}
        </div>
      </button>

      {isOpen && <div className="p-5">{children}</div>}
    </section>
  );
}

/**
 * Component tab ngôn ngữ.
 * Dùng cho các phần nhập nội dung song ngữ.
 */
function LanguageTabs({
  activeLang,
  onChange,
}: {
  activeLang: LanguageKey;
  onChange: (value: LanguageKey) => void;
}) {
  return (
    <div className="mb-5 flex items-center gap-2 border-b border-slate-100">
      {languages.map((lang) => {
        const isActive = activeLang === lang.key;

        return (
          <button
            key={lang.key}
            type="button"
            onClick={() => onChange(lang.key)}
            className={[
              "border-b-2 px-4 py-3 text-sm font-bold transition-all",
              isActive
                ? "border-[#0F1A41] text-[#0F1A41]"
                : "border-transparent text-slate-400 hover:text-[#0F1A41]",
            ].join(" ")}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Input text dùng lại.
 */
function TextInput({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold text-slate-700">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700 outline-none transition-all placeholder:text-slate-300 focus:border-[#0F1A41] focus:ring-2 focus:ring-[#0F1A41]/10"
      />
    </div>
  );
}

/**
 * Textarea dùng lại.
 */
function TextArea({
  label,
  placeholder,
  rows = 4,
  value,
  onChange,
}: {
  label: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold text-slate-700">
        {label}
      </label>

      <textarea
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full resize-none rounded-md border border-slate-200 bg-white px-3 py-3 text-sm font-bold leading-6 text-slate-700 outline-none transition-all placeholder:text-slate-300 focus:border-[#0F1A41] focus:ring-2 focus:ring-[#0F1A41]/10"
      />
    </div>
  );
}

/**
 * Select dùng lại.
 */
function SelectInput({
  label,
  children,
  value,
  onChange,
}: {
  label: string;
  children: ReactNode;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold text-slate-700">
        {label}
      </label>

      <select
        value={value}
        onChange={onChange}
        className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-700 outline-none transition-all focus:border-[#0F1A41] focus:ring-2 focus:ring-[#0F1A41]/10"
      >
        {children}
      </select>
    </div>
  );
}

/**
 * Ô upload ảnh giả.
 * Hiện tại chỉ dựng giao diện.
 * Sau này sẽ thay bằng upload thật lên AWS S3.
 */
function UploadBox({
  title,
  description,
  height = "h-44",
}: {
  title: string;
  description: string;
  height?: string;
}) {
  return (
    <div
      className={`flex ${height} flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 text-center transition-all hover:border-[#0F1A41] hover:bg-[#0F1A41]/5`}
    >
      <UploadCloud className="h-8 w-8 text-slate-400" />

      <p className="mt-3 text-sm font-bold text-[#0F1A41]">{title}</p>

      <p className="mt-1 text-xs font-bold text-slate-400">{description}</p>

      <button
        type="button"
        className="mt-4 rounded-md bg-[#0F1A41] px-4 py-2 text-xs font-bold text-white transition-all hover:bg-[#C9A45C] hover:text-[#0F1A41]"
      >
        Chọn hình
      </button>
    </div>
  );
}

const nearbyPlaceCategories = [
  "Chợ / Market",
  "Trung tâm thương mại",
  "Nhà hát / Văn hóa",
  "Bảo tàng",
  "Nhà hàng / Cafe",
  "Bệnh viện",
  "Trường học",
  "Sân bay",
  "Công viên",
  "Địa điểm du lịch",
  "Khác",
];

export default function CreateProjectPage() {
  const [activeLang, setActiveLang] = useState<LanguageKey>("vi");

  const currentLangLabel = activeLang === "vi" ? "Tiếng Việt" : "Tiếng Anh";

  const [rooms, setRooms] = useState<RoomForm[]>([
    {
      id: 1,
      nameVi: "",
      nameEn: "",
      area: "",
      guest: "",
      view: "",
      price: "",
      priceUnit: "/đêm",
      descriptionVi: "",
      descriptionEn: "",
      amenitiesVi: "",
      amenitiesEn: "",
      imageUrl: "",
      sortOrder: "1",
      status: "Đang hiển thị",
    },
  ]);

  const [nearbyPlaces, setNearbyPlaces] = useState<NearbyPlaceForm[]>([
    {
      id: 1,
      nameVi: "",
      nameEn: "",
      distance: "",
      imageUrl: "",
      sortOrder: "1",
      status: "Đang hiển thị",
    },
  ]);

  const [selectedAmenities, setSelectedAmenities] = useState<number[]>([
    1, 2, 3,
  ]);

  const [amenitySearchValue, setAmenitySearchValue] = useState("");

  const [selectedRelatedProjects, setSelectedRelatedProjects] = useState<
    number[]
  >([1, 2]);


  const handleSubmitHotel = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      rooms,
      nearbyPlaces,
      amenityIds: selectedAmenities,
      relatedProjectIds: selectedRelatedProjects,
    };

    console.log("Hotel payload:", payload);
  };

  const filteredAmenities = adminAmenities.filter((amenity) => {
    const keyword = amenitySearchValue.trim().toLowerCase();

    if (!keyword) return true;

    return (
      amenity.nameVi.toLowerCase().includes(keyword) ||
      amenity.nameEn.toLowerCase().includes(keyword) ||
      amenity.iconKey.toLowerCase().includes(keyword)
    );
  });

  const handleToggleAmenity = (amenityId: number) => {
    setSelectedAmenities((prevAmenities) => {
      if (prevAmenities.includes(amenityId)) {
        return prevAmenities.filter((id) => id !== amenityId);
      }

      return [...prevAmenities, amenityId];
    });
  };

  const handleSelectAllAmenities = () => {
    setSelectedAmenities(adminAmenities.map((amenity) => amenity.id));
  };

  const handleClearAllAmenities = () => {
    setSelectedAmenities([]);
  };

  const handleToggleRelatedProject = (projectId: number) => {
    setSelectedRelatedProjects((prevProjects) => {
      if (prevProjects.includes(projectId)) {
        return prevProjects.filter((id) => id !== projectId);
      }

      return [...prevProjects, projectId];
    });
  };

  const handleAddRoom = () => {
    const nextId =
      rooms.length > 0 ? Math.max(...rooms.map((room) => room.id)) + 1 : 1;

    setRooms((prevRooms) => [
      ...prevRooms,
      {
        id: nextId,
        nameVi: "",
        nameEn: "",
        area: "",
        guest: "",
        view: "",
        price: "",
        priceUnit: "/đêm",
        descriptionVi: "",
        descriptionEn: "",
        amenitiesVi: "",
        amenitiesEn: "",
        imageUrl: "",
        sortOrder: String(prevRooms.length + 1),
        status: "Đang hiển thị",
      },
    ]);
  };

  const handleRemoveRoom = (roomId: number) => {
    setRooms((prevRooms) => {
      if (prevRooms.length === 1) {
        return prevRooms;
      }

      return prevRooms.filter((room) => room.id !== roomId);
    });
  };

  const handleChangeRoom = (
    roomId: number,
    field: keyof RoomForm,
    value: string
  ) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId
          ? {
            ...room,
            [field]: value,
          }
          : room
      )
    );
  };

  const handleAddNearbyPlace = () => {
    const nextId =
      nearbyPlaces.length > 0
        ? Math.max(...nearbyPlaces.map((place) => place.id)) + 1
        : 1;

    setNearbyPlaces((prev) => [
      ...prev,
      {
        id: nextId,
        nameVi: "",
        nameEn: "",
        distance: "",
        imageUrl: "",
        sortOrder: String(prev.length + 1),
        status: "Đang hiển thị",
      },
    ]);
  };


  const handleChangeNearbyPlace = (
    placeId: number,
    field: keyof NearbyPlaceForm,
    value: string
  ) => {
    setNearbyPlaces((prev) =>
      prev.map((place) =>
        place.id === placeId
          ? {
            ...place,
            [field]: value,
          }
          : place
      )
    );
  };

  const handleRemoveNearbyPlace = (placeId: number) => {
    setNearbyPlaces((prevPlaces) => {
      if (prevPlaces.length === 1) {
        return prevPlaces;
      }

      return prevPlaces.filter((place) => place.id !== placeId);
    });
  };

  return (
    <div className="min-h-screen font-[Inter]">
      {/* Header trang */}
      <div className="mb-6 flex flex-col justify-between gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center">
        <div>
          <Link
            href="/admin/projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-all hover:text-[#0F1A41]"
          >
            <ArrowLeft className="h-4 w-4" />
            Quay lại danh sách Hotel
          </Link>

          <p className="mt-4 text-sm font-bold text-[#C9A45C]">
            Admin / Hotel / Thêm mới
          </p>

          <h1 className="mt-2 text-2xl font-bold text-[#0F1A41]">
            Thêm Hotel mới
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-4 text-sm font-bold text-slate-600 transition-all hover:border-[#0F1A41] hover:text-[#0F1A41]">
            Thao tác
          </button>

          <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#0F1A41] px-5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#C9A45C] hover:text-[#0F1A41]">
            <Save className="h-4 w-4" />
            Lưu
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmitHotel} className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_360px]">
        {/* CỘT TRÁI */}
        <div className="space-y-5">
          <AdminCard title="Đường Dẫn">
            <div className="space-y-4">
              <div className="rounded-md bg-slate-50 px-4 py-3 text-xs font-bold text-slate-500">
                Đường dẫn này sẽ dùng cho trang chi tiết Hotel ngoài website.
              </div>

              <TextInput
                label="Slug"
                placeholder="Ví dụ: cityhouse-el-pino-realm"
              />
            </div>
          </AdminCard>

          <AdminCard title="Thông Tin Tổng Quan Hotel">
            <LanguageTabs activeLang={activeLang} onChange={setActiveLang} />

            <div className="space-y-4">
              <div className="rounded-md bg-[#0F1A41]/5 px-4 py-3 text-xs font-bold text-[#0F1A41]">
                Bạn đang nhập nội dung cho: {currentLangLabel}
              </div>

              <TextInput
                label={`Tên Hotel (${currentLangLabel})`}
                placeholder={
                  activeLang === "vi"
                    ? "Ví dụ: City House - El Pino Realm"
                    : "Example: City House - El Pino Realm"
                }
              />

              <TextInput
                label={`Sapo ngắn (${currentLangLabel})`}
                placeholder={
                  activeLang === "vi"
                    ? "Nhập mô tả ngắn hiển thị dưới tên Hotel"
                    : "Enter short description under hotel name"
                }
              />

              <TextArea
                label={`Mô tả chi tiết (${currentLangLabel})`}
                placeholder={
                  activeLang === "vi"
                    ? "Nhập nội dung mô tả chi tiết giống phần giới thiệu trong trang Hotel Detail..."
                    : "Enter detailed hotel description..."
                }
                rows={10}
              />

              
            </div>
          </AdminCard>

          <AdminCard title="Gallery Đầu Trang">
            <div className="space-y-5">
              <div className="rounded-md bg-slate-50 px-4 py-3 text-xs font-bold text-slate-500">
                Gallery này sẽ hiển thị ở đầu trang chi tiết Hotel. Ảnh chính
                nên dùng tỷ lệ ngang, rõ không gian phòng hoặc mặt tiền.
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <label className="mb-2 block text-xs font-bold text-slate-700">
                    Ảnh chính lớn
                  </label>

                  <UploadBox
                    title="Tải ảnh chính"
                    description="Khuyến nghị 1200x800px"
                    height="h-72"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-2 block text-xs font-bold text-slate-700">
                      Ảnh phụ 1
                    </label>
                    <UploadBox
                      title="Ảnh phụ"
                      description="JPG / PNG / WEBP"
                      height="h-32"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold text-slate-700">
                      Ảnh phụ 2
                    </label>
                    <UploadBox
                      title="Ảnh phụ"
                      description="JPG / PNG / WEBP"
                      height="h-32"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold text-slate-700">
                      Ảnh phụ 3
                    </label>
                    <UploadBox
                      title="Ảnh phụ"
                      description="JPG / PNG / WEBP"
                      height="h-32"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold text-slate-700">
                      Ảnh phụ 4
                    </label>
                    <UploadBox
                      title="Ảnh phụ"
                      description="JPG / PNG / WEBP"
                      height="h-32"
                    />
                  </div>
                </div>
              </div>

              <UploadBox
                title="Tải thêm album hình"
                description="Dùng cho nút Xem thêm ở trang Hotel Detail"
                height="h-36"
              />
            </div>
          </AdminCard>

          <AdminCard title="Thông Tin Địa Chỉ & Bản Đồ">
            <LanguageTabs activeLang={activeLang} onChange={setActiveLang} />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <TextInput
                  label={`Địa chỉ (${currentLangLabel})`}
                  placeholder={
                    activeLang === "vi"
                      ? "Ví dụ: 72-74 Phó Đức Chính, P. Nguyễn Thái Bình, Q.1"
                      : "Example: 72-74 Pho Duc Chinh Street, District 1"
                  }
                />
              </div>

              <TextInput label="Google Maps URL" placeholder="https://..." />

              <div className="md:col-span-2">
                <TextArea
                  label="Google Maps iframe"
                  placeholder="<iframe src='...'></iframe>"
                  rows={4}
                />
              </div>
            </div>
          </AdminCard>

          <AdminCard title="Thông Tin Chi Tiết Hotel">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <SelectInput label="Loại dự án">
                <option>Đang hoạt động</option>
                <option>Sắp ra mắt</option>
              </SelectInput>

              <SelectInput label="Brand">
                <option>MARK</option>
                <option>SOUL</option>
                <option>VIBE</option>
                <option>TERA</option>
                <option>NEST</option>
              </SelectInput>

              <SelectInput label="Trạng thái hiển thị">
                <option>Đã xuất bản</option>
                <option>Bản nháp</option>
                <option>Ẩn</option>
              </SelectInput>

              <TextInput label="Số thứ tự" placeholder="0" />

              <TextInput label="Giá phòng từ" placeholder="1.800.000 VND" />

              <TextInput label="Số lượng phòng" placeholder="0" />
            </div>
          </AdminCard>

          <AdminCard title="Lựa Chọn Phòng">
            <div className="space-y-5">
              <div className="rounded-md bg-[#0F1A41]/5 px-4 py-3 text-xs font-bold text-[#0F1A41]">
                Danh sách phòng sẽ hiển thị ở section “Lựa chọn phòng” ngoài
                trang chi tiết Hotel.
              </div>

              {rooms.map((room, index) => {
                const roomNumber = String(index + 1).padStart(2, "0");

                return (
                  <div
                    key={room.id}
                    className="rounded-[16px] border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0F1A41] text-white">
                          <BedDouble className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="text-sm font-bold text-[#0F1A41]">
                            Phòng {roomNumber}
                          </h3>
                          <p className="text-xs font-bold text-slate-400">
                            Nhập thông tin phòng song ngữ
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveRoom(room.id)}
                        className={[
                          "flex h-9 w-9 items-center justify-center rounded-md border transition-all",
                          rooms.length === 1
                            ? "cursor-not-allowed border-slate-100 bg-slate-100 text-slate-300"
                            : "border-red-100 bg-white text-red-500 hover:bg-red-50",
                        ].join(" ")}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <LanguageTabs
                      activeLang={activeLang}
                      onChange={setActiveLang}
                    />

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <TextInput
                        label={`Tên phòng (${currentLangLabel})`}
                        placeholder={
                          activeLang === "vi"
                            ? "Ví dụ: Standard Studio - City View"
                            : "Example: Standard Studio - City View"
                        }
                      />

                      <TextInput label="Diện tích" placeholder="22m²" />

                      <TextInput label="Số người" placeholder="2 người" />

                      <TextInput
                        label="View / Hướng phòng"
                        placeholder="City View"
                      />

                      <TextInput label="Giá phòng" placeholder="1.800.000 VND" />

                      <TextInput label="Đơn vị giá" placeholder="/đêm" />

                      <div className="md:col-span-2">
                        <TextArea
                          label={`Mô tả phòng (${currentLangLabel})`}
                          placeholder={
                            activeLang === "vi"
                              ? "Nhập mô tả ngắn về phòng..."
                              : "Enter room description..."
                          }
                          rows={4}
                        />
                      </div>

                      <div className="md:col-span-2">
                        <TextInput
                          label={`Tiện nghi phòng (${currentLangLabel})`}
                          placeholder={
                            activeLang === "vi"
                              ? "Ví dụ: Phòng tắm riêng, Tủ lạnh, Máy lạnh, Nước suối miễn phí"
                              : "Example: Private bathroom, Fridge, Air conditioner, Free water"
                          }
                        />

                        <p className="mt-2 text-xs font-bold text-slate-400">
                          Nhập nhiều tiện nghi, cách nhau bằng dấu phẩy.
                        </p>
                      </div>

                      <div className="md:col-span-2">
                        <label className="mb-2 block text-xs font-bold text-slate-700">
                          Ảnh phòng
                        </label>

                        <UploadBox
                          title="Tải ảnh phòng"
                          description="Ảnh này hiển thị bên trái card phòng"
                          height="h-48"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="rounded-[16px] border border-dashed border-slate-300 bg-white p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#0F1A41]">
                      Thêm phòng khác
                    </h3>
                    <p className="mt-1 text-xs font-bold text-slate-400">
                      Dùng để thêm Standard Studio, Superior Studio, Deluxe
                      Studio, Suite...
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddRoom}
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#0F1A41] px-4 text-sm font-bold text-white transition-all hover:bg-[#C9A45C] hover:text-[#0F1A41]"
                  >
                    <Plus className="h-4 w-4" />
                    Thêm phòng
                  </button>
                </div>
              </div>
            </div>
          </AdminCard>

          <AdminCard title="Tiện Nghi Hotel">
            <div className="space-y-4">
              <div className="rounded-md bg-[#0F1A41]/5 px-4 py-3 text-xs font-bold text-[#0F1A41]">
                Chọn tiện nghi từ danh sách tiện nghi đã được cấu hình trong
                Admin. Mỗi tiện nghi chỉ lưu iconKey để sau này dễ nối database.
              </div>

              <div className="flex flex-col gap-3 rounded-md border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#0F1A41]">
                    Danh sách tiện nghi
                  </h3>

                  <p className="mt-1 text-xs font-bold text-slate-400">
                    Đã chọn {selectedAmenities.length} / {adminAmenities.length} tiện nghi
                    cho Hotel này.
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={handleSelectAllAmenities}
                      className="rounded-md bg-[#0F1A41] px-3 py-2 text-xs font-bold text-white transition-all hover:bg-[#C9A45C] hover:text-[#0F1A41]"
                    >
                      Chọn tất cả
                    </button>

                    <button
                      type="button"
                      onClick={handleClearAllAmenities}
                      className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-500 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                    >
                      Bỏ chọn tất cả
                    </button>
                  </div>
                </div>

                <div className="flex h-10 w-full items-center gap-3 rounded-md border border-slate-200 bg-white px-3 md:w-[280px]">
                  <Search className="h-4 w-4 text-slate-400" />

                  <input
                    value={amenitySearchValue}
                    onChange={(event) => setAmenitySearchValue(event.target.value)}
                    placeholder="Tìm tiện nghi..."
                    className="w-full bg-transparent text-sm font-bold text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
                {filteredAmenities.map((amenity) => {
                  const Icon = getAmenityIcon(amenity.iconKey);
                  const isSelected = selectedAmenities.includes(amenity.id);
                  const label = activeLang === "vi" ? amenity.nameVi : amenity.nameEn;

                  return (
                    <button
                      key={amenity.id}
                      type="button"
                      onClick={() => handleToggleAmenity(amenity.id)}
                      className={[
                        "flex min-h-[58px] items-center justify-between rounded-md border px-3 py-2 text-left transition-all",
                        isSelected
                          ? "border-[#0F1A41] bg-[#0F1A41] text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-[#0F1A41] hover:bg-[#0F1A41]/5",
                      ].join(" ")}
                    >
                      <span className="flex min-w-0 items-center gap-2">
                        <span
                          className={[
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
                            isSelected
                              ? "bg-white/10 text-[#C9A45C]"
                              : "bg-slate-100 text-[#0F1A41]",
                          ].join(" ")}
                        >
                          <Icon className="h-4 w-4" />
                        </span>

                        <span className="line-clamp-2 text-xs font-bold leading-4">
                          {label}
                        </span>
                      </span>

                      {isSelected && (
                        <Check className="h-3.5 w-3.5 shrink-0 text-[#C9A45C]" />
                      )}
                    </button>
                  );
                })}
              </div>

              {filteredAmenities.length === 0 && (
                <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center">
                  <p className="text-sm font-bold text-slate-400">
                    Không tìm thấy tiện nghi phù hợp.
                  </p>
                </div>
              )}

              <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-4">
                <p className="text-xs font-bold text-slate-500">
                  Khi submit form, chỉ cần gửi danh sách ID tiện nghi:{" "}
                  {JSON.stringify(selectedAmenities)}
                </p>
              </div>
            </div>
          </AdminCard>

          <AdminCard title="Khám Phá Khu Vực" defaultOpen={false}>
            <div className="space-y-5">
              <div className="rounded-md bg-[#0F1A41]/5 px-4 py-3 text-xs font-bold text-[#0F1A41]">
                Nhập các địa điểm nổi bật gần Hotel. Phần này chỉ lưu tên địa điểm,
                khoảng cách, hình ảnh, thứ tự hiển thị và trạng thái.
              </div>

              <div className="space-y-4">
                {nearbyPlaces.map((place, index) => (
                  <div
                    key={place.id}
                    className="rounded-md border border-slate-200 bg-white p-4"
                  >
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-bold text-[#0F1A41]">
                          Địa điểm #{index + 1}
                        </h3>

                        <p className="mt-1 text-xs font-bold text-slate-400">
                          Nhập thông tin song ngữ cho địa điểm xung quanh Hotel.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => handleRemoveNearbyPlace(place.id)}
                        disabled={nearbyPlaces.length === 1}
                        className="rounded-md border border-red-100 px-3 py-2 text-xs font-bold text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        Xóa
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <TextInput
                        label="Tên địa điểm - Tiếng Việt"
                        placeholder="Ví dụ: Chợ Bến Thành"
                        value={place.nameVi}
                        onChange={(event) =>
                          handleChangeNearbyPlace(place.id, "nameVi", event.target.value)
                        }
                      />

                      <TextInput
                        label="Tên địa điểm - English"
                        placeholder="Example: Ben Thanh Market"
                        value={place.nameEn}
                        onChange={(event) =>
                          handleChangeNearbyPlace(place.id, "nameEn", event.target.value)
                        }
                      />

                      <TextInput
                        label="Khoảng cách"
                        placeholder="Ví dụ: 500m hoặc 5 phút di chuyển"
                        value={place.distance}
                        onChange={(event) =>
                          handleChangeNearbyPlace(
                            place.id,
                            "distance",
                            event.target.value
                          )
                        }
                      />

                      <TextInput
                        label="Ảnh địa điểm"
                        placeholder="/images/nearby/ben-thanh.jpg"
                        value={place.imageUrl}
                        onChange={(event) =>
                          handleChangeNearbyPlace(
                            place.id,
                            "imageUrl",
                            event.target.value
                          )
                        }
                      />

                      <TextInput
                        label="Số thứ tự hiển thị"
                        placeholder="1"
                        value={place.sortOrder}
                        onChange={(event) =>
                          handleChangeNearbyPlace(
                            place.id,
                            "sortOrder",
                            event.target.value
                          )
                        }
                      />

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-[#0F1A41]">
                          Trạng thái
                        </label>

                        <select
                          value={place.status}
                          onChange={(event) =>
                            handleChangeNearbyPlace(
                              place.id,
                              "status",
                              event.target.value as NearbyPlaceStatus
                            )
                          }
                          className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-[#0F1A41] outline-none transition focus:border-[#C9A45C]"
                        >
                          <option value="Đang hiển thị">Đang hiển thị</option>
                          <option value="Tạm ẩn">Tạm ẩn</option>
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={handleAddNearbyPlace}
                className="w-full rounded-md border border-dashed border-[#C9A45C] bg-[#C9A45C]/5 px-4 py-3 text-sm font-bold text-[#0F1A41] transition hover:bg-[#C9A45C]/10"
              >
                + Thêm địa điểm xung quanh
              </button>
            </div>
          </AdminCard>

          <AdminCard title="Dự Án Liên Quan" defaultOpen={false}>
            <div className="space-y-5">
              <div className="rounded-md bg-[#0F1A41]/5 px-4 py-3 text-xs font-bold text-[#0F1A41]">
                Chọn các Hotel / dự án liên quan để gợi ý cho khách ở cuối
                trang chi tiết.
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {relatedProjectOptions.map((project) => {
                  const isSelected = selectedRelatedProjects.includes(
                    project.id,
                  );

                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => handleToggleRelatedProject(project.id)}
                      className={[
                        "flex items-start justify-between rounded-md border p-4 text-left transition-all",
                        isSelected
                          ? "border-[#0F1A41] bg-[#0F1A41] text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-[#0F1A41] hover:bg-[#0F1A41]/5",
                      ].join(" ")}
                    >
                      <span className="flex gap-3">
                        <span
                          className={[
                            "flex h-11 w-11 shrink-0 items-center justify-center rounded-md",
                            isSelected
                              ? "bg-white/10 text-[#C9A45C]"
                              : "bg-slate-100 text-[#0F1A41]",
                          ].join(" ")}
                        >
                          <Building2 className="h-5 w-5" />
                        </span>

                        <span>
                          <span className="block text-sm font-bold">
                            {project.title}
                          </span>

                          <span
                            className={[
                              "mt-2 inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold",
                              isSelected
                                ? "bg-white/10 text-white"
                                : "bg-slate-100 text-slate-500",
                            ].join(" ")}
                          >
                            {project.brand}
                          </span>

                          <span
                            className={[
                              "ml-2 inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold",
                              isSelected
                                ? "bg-white/10 text-white"
                                : "bg-slate-100 text-slate-500",
                            ].join(" ")}
                          >
                            {project.district}
                          </span>

                          <span
                            className={[
                              "mt-2 block text-xs font-bold",
                              isSelected ? "text-white/60" : "text-slate-400",
                            ].join(" ")}
                          >
                            {project.status}
                          </span>
                        </span>
                      </span>

                      {isSelected && (
                        <Check className="h-4 w-4 text-[#C9A45C]" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-4">
                <p className="text-xs font-bold text-slate-500">
                  Danh sách này hiện đang là dữ liệu mẫu. Sau này sẽ lấy từ API
                  danh sách Hotel / dự án đã xuất bản.
                </p>
              </div>
            </div>
          </AdminCard>



        </div>

        {/* CỘT PHẢI */}
        <aside className="space-y-5">
          <AdminCard title="Hình Đại Diện">
            <div className="rounded-md bg-slate-50 p-4">
              <div className="flex h-40 items-center justify-center rounded-md border border-slate-200 bg-white">
                <ImagePlus className="h-12 w-12 text-slate-300" />
              </div>

              <div className="mt-4">
                <UploadBox
                  title="Tải hình đại diện"
                  description="Width 715px - Height 400px"
                  height="h-36"
                />
              </div>
            </div>
          </AdminCard>

          <AdminCard title="Danh Mục">
            <div className="space-y-4">
              <SelectInput label="Danh mục cấp 1">
                <option>Đang hoạt động</option>
                <option>Sắp ra mắt</option>
              </SelectInput>

              <SelectInput label="Quận / Khu vực">
                <option>Chọn quận / khu vực</option>
                <option>Quận 1</option>
                <option>Quận 2</option>
                <option>Quận 3</option>
                <option>Quận 4</option>
                <option>Quận 5</option>
                <option>Quận 7</option>
                <option>Quận 10</option>
                <option>Phú Nhuận</option>
                <option>Bình Thạnh</option>
                <option>Tân Bình</option>
                <option>Thủ Đức</option>
                <option>Nhà Bè</option>
              </SelectInput>
            </div>
          </AdminCard>

          <AdminCard title="SEO Song Ngữ">
            <LanguageTabs activeLang={activeLang} onChange={setActiveLang} />

            <div className="space-y-4">
              <TextInput
                label={`SEO Title (${currentLangLabel})`}
                placeholder="Tối đa khoảng 70 ký tự"
              />

              <TextInput
                label={`SEO Keywords (${currentLangLabel})`}
                placeholder="Từ khóa chính, từ khóa phụ"
              />

              <TextArea
                label={`SEO Description (${currentLangLabel})`}
                placeholder="Tối đa khoảng 160 ký tự"
                rows={4}
              />

              <button
                type="button"
                className="w-full rounded-md bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-700"
              >
                Tạo SEO tự động
              </button>
            </div>
          </AdminCard>


          <div className="rounded-md border border-slate-200 bg-white p-4">
          <button
            type="submit"
            className="w-full rounded-md bg-[#0F1A41] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#15245A]"
          >
            Lưu Hotel
          </button>

          <p className="mt-3 text-center text-xs font-bold text-slate-400">
            Hiện tại dữ liệu sẽ được log ra console để kiểm tra payload trước khi nối
            backend.
          </p>
        </div>
        </aside>

        
      </form>
    </div>
  );
}
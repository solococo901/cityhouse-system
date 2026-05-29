"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BarChart3,
  BedDouble,
  BriefcaseBusiness,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Database,
  Home,
  LogOut,
  MessageSquareText,
  Newspaper,
  Settings,
} from "lucide-react";

type MenuChild = {
  label: string;
  href: string;
};

type MenuGroup = {
  title: string;
  icon: React.ElementType;
  items: MenuChild[];
};

const menuGroups: MenuGroup[] = [
  {
    title: "Tổng quan",
    icon: BarChart3,
    items: [
      {
        label: "Dashboard",
        href: "/admin",
      },
    ],
  },
  {
    title: "Quản lý Hotel",
    icon: BedDouble,
    items: [
      {
        label: "Danh sách Hotel",
        href: "/admin/hotels",
      },
      {
        label: "Thêm Hotel mới",
        href: "/admin/hotels/create",
      },
    ],
  },
  {
    title: "Quản lý Văn Phòng",
    icon: BriefcaseBusiness,
    items: [
      {
        label: "Danh sách Văn phòng",
        href: "/admin/offices",
      },
      {
        label: "Thêm Văn phòng mới",
        href: "/admin/offices/create",
      },
    ],
  },
  {
    title: "Quản lý Bất Động Sản",
    icon: Building2,
    items: [
      {
        label: "Danh sách Bất động sản",
        href: "/admin/real-estates",
      },
      {
        label: "Thêm Bất động sản mới",
        href: "/admin/real-estates/create",
      },
    ],
  },
  {
    title: "Dữ liệu chung",
    icon: Database,
    items: [
      {
        label: "Tiện nghi",
        href: "/admin/amenities",
      },
      {
        label: "Nhóm Property",
        href: "/admin/property-types",
      },
      {
        label: "Brand / Collection",
        href: "/admin/brands",
      },
      {
        label: "Khu vực",
        href: "/admin/areas",
      },
      {
        label: "Địa điểm xung quanh",
        href: "/admin/nearby-places",
      },
    ],
  },
  {
    title: "Nội dung Website",
    icon: Newspaper,
    items: [
      {
        label: "Tin tức",
        href: "/admin/news",
      },
      {
        label: "Sự kiện",
        href: "/admin/events",
      },
      {
        label: "FAQ",
        href: "/admin/faqs",
      },
      {
        label: "Đối tác",
        href: "/admin/partners",
      },
      {
        label: "Thư viện hình ảnh",
        href: "/admin/media",
      },
    ],
  },
  {
    title: "Lead / Liên hệ",
    icon: MessageSquareText,
    items: [
      {
        label: "Form liên hệ",
        href: "/admin/leads/contact",
      },
      {
        label: "Lead chủ đầu tư",
        href: "/admin/leads/investors",
      },
      {
        label: "Lead khách quan tâm",
        href: "/admin/leads/customers",
      },
    ],
  },
  {
    title: "Cấu hình Website",
    icon: Settings,
    items: [
      {
        label: "SEO",
        href: "/admin/settings/seo",
      },
      {
        label: "Header / Footer",
        href: "/admin/settings/header-footer",
      },
      {
        label: "Trang tĩnh",
        href: "/admin/settings/pages",
      },
      {
        label: "Cấu hình hệ thống",
        href: "/admin/settings/system",
      },
    ],
  },
];

function isMenuActive(pathname: string, href: string) {
  return pathname === href;
}

function isGroupActive(pathname: string, group: MenuGroup) {
  return group.items.some((item) => item.href === pathname);
}

export default function AdminSidebar() {
  const pathname = usePathname();

  const activeGroup = menuGroups.find((group) =>
    isGroupActive(pathname, group),
  );

  const [openGroupTitle, setOpenGroupTitle] = useState<string>(
    activeGroup?.title ?? "Tổng quan",
  );

  useEffect(() => {
    if (activeGroup) {
      setOpenGroupTitle(activeGroup.title);
    }
  }, [activeGroup]);

  const handleToggleGroup = (title: string) => {
    setOpenGroupTitle((currentTitle) =>
      currentTitle === title ? "" : title,
    );
  };

  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-[292px] border-r border-white/10 bg-[#0F1A41] text-white">
      <div className="flex h-full flex-col">
        <div className="flex h-20 items-center border-b border-white/10 px-6">
          <Link href="/admin" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#C9A45C]/40 bg-white/10">
              <Home className="h-5 w-5 text-[#C9A45C]" />
            </div>

            <div>
              <div className="font-inter text-lg font-bold tracking-[0.22em] text-white">
                CITYHOUSE
              </div>

              <div className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.34em] text-[#C9A45C]">
                Admin System
              </div>
            </div>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-5">
          <div className="space-y-2">
            {menuGroups.map((group) => {
              const GroupIcon = group.icon;
              const isOpen = openGroupTitle === group.title;
              const hasActiveItem = isGroupActive(pathname, group);

              return (
                <div key={group.title}>
                  <button
                    type="button"
                    onClick={() => handleToggleGroup(group.title)}
                    className={[
                      "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition-all",
                      hasActiveItem
                        ? "bg-white/10 text-white"
                        : "text-white/65 hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    <span className="flex items-center gap-3">
                      <GroupIcon
                        className={[
                          "h-4 w-4",
                          hasActiveItem ? "text-[#C9A45C]" : "text-white/35",
                        ].join(" ")}
                      />

                      <span className="text-sm font-bold">{group.title}</span>
                    </span>

                    <ChevronDown
                      className={[
                        "h-4 w-4 transition-all",
                        isOpen ? "rotate-180 text-[#C9A45C]" : "text-white/35",
                      ].join(" ")}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-2 space-y-1 pl-3">
                      {group.items.map((item) => {
                        const isActive = isMenuActive(pathname, item.href);

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={[
                              "group flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold transition-all",
                              isActive
                                ? "bg-[#C9A45C] text-[#0F1A41] shadow-lg shadow-black/20"
                                : "text-white/55 hover:bg-white/10 hover:text-white",
                            ].join(" ")}
                          >
                            <span className="flex items-center gap-3">
                              <CircleDot
                                className={[
                                  "h-3 w-3 transition-all",
                                  isActive
                                    ? "text-[#0F1A41]"
                                    : "text-white/25 group-hover:text-[#C9A45C]",
                                ].join(" ")}
                              />

                              {item.label}
                            </span>

                            <ChevronRight
                              className={[
                                "h-4 w-4 transition-all",
                                isActive
                                  ? "translate-x-1 text-[#0F1A41]"
                                  : "text-white/25 group-hover:translate-x-1 group-hover:text-white/60",
                              ].join(" ")}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-white/10 p-4">
          <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-inter font-bold text-white/60 transition-all hover:bg-red-500/10 hover:text-red-300">
            <LogOut className="h-4 w-4" />
            Đăng xuất
          </button>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
              Version
            </p>

            <p className="mt-1 text-sm font-bold text-white">CityHouse 1.0</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
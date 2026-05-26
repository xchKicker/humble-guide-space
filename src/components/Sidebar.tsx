import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";

const menuItems = [
  { label: "Обо мне", to: "/" as const, hash: "about" },
  { label: "Я терапевт", to: "/" as const, hash: "therapist" },
  { label: "Мой подкаст", to: "/" as const, hash: "podcast" },
  { label: "Тесты", to: "/tests" as const },
  { label: "Воркбук", to: "/courses/workbook" as const },
  { label: "Лекции", to: "/courses/lectures" as const },
  { label: "Экспресс-курсы", to: "/courses/express" as const },
  { label: "Сертификат", to: "/courses/certificate" as const },
  { label: "Терапевтическая группа", to: "/courses/group" as const },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"UA" | "RU">("RU");
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const content = (
    <div className="flex h-full flex-col px-6 py-7">
      <Link to="/" className="mb-8 block text-[15px] font-semibold tracking-tight">
        Анна Иванова
        <div className="mt-0.5 text-xs font-normal text-[#666]">психотерапевт</div>
      </Link>

      <nav className="flex flex-col gap-0.5">
        {menuItems.map((item) => {
          const active = pathname === item.to && !item.hash;
          return (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`rounded-[10px] px-3 py-2 text-[14px] transition-colors ${
                active
                  ? "bg-[#f5f5f5] text-[#111] font-medium"
                  : "text-[#111] hover:bg-[#f5f5f5]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button className="mt-6 rounded-[12px] bg-[#111] px-4 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#000]">
        Записаться на терапию
      </button>

      <div className="mt-5 flex flex-col gap-0.5">
        <Link
          to="/cart"
          onClick={() => setOpen(false)}
          className={`flex items-center gap-2 rounded-[10px] px-3 py-2 text-[14px] ${
            pathname === "/cart" ? "bg-[#f5f5f5] font-medium" : "hover:bg-[#f5f5f5]"
          }`}
        >
          <ShoppingCart className="h-4 w-4" /> Корзина
        </Link>
        <Link
          to="/profile"
          onClick={() => setOpen(false)}
          className={`flex items-center gap-2 rounded-[10px] px-3 py-2 text-[14px] ${
            pathname === "/profile" ? "bg-[#f5f5f5] font-medium" : "hover:bg-[#f5f5f5]"
          }`}
        >
          <User className="h-4 w-4" /> Личный кабинет
        </Link>
      </div>

      <div className="mt-auto pt-6">
        <div className="inline-flex rounded-[10px] border border-[#e5e5e5] p-0.5">
          {(["UA", "RU"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`rounded-[8px] px-3 py-1 text-xs ${
                lang === l ? "bg-[#111] text-white" : "text-[#666]"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-[#e5e5e5] bg-white px-4 py-3 md:hidden">
        <span className="text-sm font-semibold">Анна Иванова</span>
        <button onClick={() => setOpen(true)} aria-label="Открыть меню">
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-[280px] border-r border-[#e5e5e5] bg-white md:block">
        {content}
      </aside>

      {/* Mobile offcanvas */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[280px] bg-white shadow-lg">
            <button
              className="absolute right-3 top-3 z-10"
              onClick={() => setOpen(false)}
              aria-label="Закрыть"
            >
              <X className="h-5 w-5" />
            </button>
            {content}
          </div>
        </div>
      )}
    </>
  );
}

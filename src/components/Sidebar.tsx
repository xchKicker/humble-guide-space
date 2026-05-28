import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ShoppingCart, User, Home, UserCircle2, MessageSquare, GraduationCap, Wallet, BookOpen, ClipboardList } from "lucide-react";
import { BookButton } from "@/components/ContactDialog";
import { useI18n } from "@/lib/i18n";

const menuItems = [
  { labelRu: "Главная", labelUa: "Головна", to: "/" as const, icon: Home },
  { labelRu: "Обо мне", labelUa: "Про мене", to: "/about" as const, icon: UserCircle2 },
  { labelRu: "Запросы", labelUa: "Запити", to: "/requests" as const, icon: MessageSquare },
  { labelRu: "Образование", labelUa: "Освіта", to: "/education" as const, icon: GraduationCap },
  { labelRu: "Стоимость", labelUa: "Вартість", to: "/pricing" as const, icon: Wallet },
  { labelRu: "Курсы", labelUa: "Курси", to: "/courses/workbook" as const, icon: BookOpen },
  { labelRu: "Тесты", labelUa: "Тести", to: "/tests" as const, icon: ClipboardList },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) => {
    if (to === "/") return pathname === "/";
    if (to.startsWith("/courses")) return pathname.startsWith("/courses");
    return pathname === to;
  };

  const content = (
    <div className="flex h-full flex-col px-5 py-7">
      <Link to="/" className="mb-8 block px-2">
        <div className="text-[15px] font-semibold tracking-tight text-foreground">
          Дмитрий Мирошников
        </div>
        <div className="mt-0.5 text-xs text-muted-foreground">психолог</div>
      </Link>

      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => {
          const active = isActive(item.to);
          const Icon = item.icon;
          const label = lang === "UA" ? item.labelUa : item.labelRu;
          return (
            <Link
              key={item.to}
              to={item.to as any}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-[14px] transition-colors ${
                active
                  ? "bg-[var(--hover-surface)] text-[color:var(--accent-violet)] font-medium"
                  : "text-foreground/80 hover:bg-[var(--hover-surface)] hover:text-foreground"
              }`}
            >
              <Icon className={`h-4 w-4 ${active ? "text-[color:var(--accent-violet)]" : "text-muted-foreground"}`} />
              {label}
            </Link>
          );
        })}
      </nav>

      <BookButton className="mt-6 block w-full rounded-[14px] bg-[color:var(--accent-violet)] px-4 py-3 text-center text-[14px] font-medium text-[#0b1020] transition-opacity hover:opacity-90">
        {t("nav.book")}
      </BookButton>

      <a
        href="https://www.instagram.com/d_miroshnikov_o/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 block rounded-[14px] bg-[color:var(--accent-violet)] px-4 py-3 text-center text-[14px] font-medium text-[#0b1020] transition-opacity hover:opacity-90"
      >
        Записаться на консультацию
      </a>

      <div className="mt-5 flex flex-col gap-1">
        <Link
          to="/cart"
          onClick={() => setOpen(false)}
          className={`flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-[14px] transition-colors ${
            pathname === "/cart"
              ? "bg-[var(--hover-surface)] text-[color:var(--accent-violet)] font-medium"
              : "text-foreground/80 hover:bg-[var(--hover-surface)]"
          }`}
        >
          <ShoppingCart className="h-4 w-4" /> Корзина
        </Link>
        <Link
          to="/profile"
          onClick={() => setOpen(false)}
          className={`flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-[14px] transition-colors ${
            pathname === "/profile"
              ? "bg-[var(--hover-surface)] text-[color:var(--accent-violet)] font-medium"
              : "text-foreground/80 hover:bg-[var(--hover-surface)]"
          }`}
        >
          <User className="h-4 w-4" /> Личный кабинет
        </Link>
      </div>

      <div className="mt-auto pt-6">
        <div className="inline-flex rounded-[10px] border border-[color:var(--border-strong)] p-0.5">
          {(["UA", "RU"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`rounded-[8px] px-3 py-1 text-xs transition-colors ${
                lang === l
                  ? "bg-[color:var(--accent-violet)] text-[#0b1020]"
                  : "text-muted-foreground hover:text-foreground"
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
      <div className="sticky top-0 z-30 flex items-center justify-between border-b bg-background px-4 py-3 md:hidden">
        <span className="text-sm font-semibold">Дмитрий Мирошников</span>
        <button onClick={() => setOpen(true)} aria-label="Открыть меню">
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-[280px] border-r bg-card md:block">
        {content}
      </aside>

      {/* Mobile offcanvas */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[280px] bg-card shadow-2xl">
            <button
              className="absolute right-3 top-3 z-10 text-muted-foreground"
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

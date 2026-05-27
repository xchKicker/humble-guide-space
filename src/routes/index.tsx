import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Дмитрий Мирошников — Психолог-консультант" },
      { name: "description", content: "Интегральный подход с опорой на КПТ. Индивидуальные консультации." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="rounded-[24px] border bg-card p-6 md:p-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto]">
          {/* Left: text */}
          <div className="max-w-2xl">
            <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Психолог-консультант
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-[34px]">
              Дмитрий Мирошников
            </h1>

            <div className="mt-8 space-y-5 text-[16px] leading-[1.7] text-foreground/90">
              <p className="text-[18px] font-medium text-foreground">
                Привет, привет, я Дмитрий)
              </p>
              <p>
                Работаю в интегральном подходе с опорой на КПТ.
                Тысячи часов терапии, много прожито, много сказано.
              </p>
              <p>
                Если ты здесь — это уже не просто так.
                Скорее всего, ты это чувствуешь.
              </p>
              <p className="text-foreground">
                Разберёмся. Справимся (даже если тебе сейчас так не кажется).
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://www.instagram.com/d_miroshnikov_o/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[14px] bg-[color:var(--accent-violet)] px-6 py-3.5 text-[14px] font-medium text-[#0b1020] transition-opacity hover:opacity-90"
              >
                Записаться на консультацию
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-[14px] border border-[var(--border-strong)] px-6 py-3.5 text-[14px] font-medium text-foreground/80 transition-colors hover:bg-[var(--hover-surface)] hover:text-foreground"
              >
                Обо мне
              </Link>
            </div>
          </div>

          {/* Right: decorative circle */}
          <div className="flex justify-center md:justify-end">
            <div
              className="rounded-full p-[3px]"
              style={{
                background:
                  "linear-gradient(135deg, #818cf8 0%, #60a5fa 50%, #312e81 100%)",
              }}
            >
              <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full bg-card md:h-[260px] md:w-[260px]">
                <span className="text-5xl font-semibold text-[color:var(--accent-violet)] md:text-6xl">
                  ДМ
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview cards — minimal, just navigation to key sections */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Link
          to="/courses/course-1"
          className="group rounded-[24px] border bg-card p-6 transition-colors hover:border-[var(--border-strong)]"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--hover-surface)] text-[color:var(--accent-violet)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </div>
          <h3 className="text-[15px] font-semibold text-foreground">Курсы</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            Практические материалы для самостоятельной работы
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-[color:var(--accent-violet)] transition-colors group-hover:text-[color:var(--accent-blue)]">
            Смотреть <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>

        <Link
          to="/tests"
          className="group rounded-[24px] border bg-card p-6 transition-colors hover:border-[var(--border-strong)]"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--hover-surface)] text-[color:var(--accent-violet)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          </div>
          <h3 className="text-[15px] font-semibold text-foreground">Тесты</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            Проверьте свое состояние и получите рекомендации
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-[color:var(--accent-violet)] transition-colors group-hover:text-[color:var(--accent-blue)]">
            Пройти <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>

        <Link
          to="/requests"
          className="group rounded-[24px] border bg-card p-6 transition-colors hover:border-[var(--border-strong)]"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--hover-surface)] text-[color:var(--accent-violet)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <h3 className="text-[15px] font-semibold text-foreground">Запросы</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            С чем я работаю и как может помочь терапия
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-[color:var(--accent-violet)] transition-colors group-hover:text-[color:var(--accent-blue)]">
            Подробнее <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </section>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, CalendarCheck, CreditCard, HeartHandshake, BookOpen, ClipboardCheck, Users } from "lucide-react";
import dmitryPhoto from "@/assets/dmitry.jpg";
import { BookButton } from "@/components/ContactDialog";
import { useI18n } from "@/lib/i18n";

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
  const { t } = useI18n();

  const steps = [
    { icon: MessageCircle, title: t("process.s1.title"), text: t("process.s1.text") },
    { icon: CalendarCheck, title: t("process.s2.title"), text: t("process.s2.text") },
    { icon: CreditCard, title: t("process.s3.title"), text: t("process.s3.text") },
    { icon: HeartHandshake, title: t("process.s4.title"), text: t("process.s4.text") },
  ];

  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="rounded-[24px] border bg-card p-6 md:p-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {t("hero.role")}
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-[34px]">
              Дмитрий Мирошников
            </h1>

            <div className="mt-8 space-y-5 text-[16px] leading-[1.7] text-foreground/90">
              <p className="text-[18px] font-medium text-foreground">{t("hero.greet")}</p>
              <p>{t("hero.p1")}</p>
              <p>{t("hero.p2")}</p>
              <p className="text-foreground">{t("hero.p3")}</p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <BookButton className="inline-flex items-center gap-2 rounded-[14px] bg-[color:var(--accent-violet)] px-6 py-3.5 text-[14px] font-medium text-[#0b1020] transition-opacity hover:opacity-90">
                {t("nav.book")}
                <ArrowRight className="h-4 w-4" />
              </BookButton>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-[14px] border border-[var(--border-strong)] px-6 py-3.5 text-[14px] font-medium text-foreground/80 transition-colors hover:bg-[var(--hover-surface)] hover:text-foreground"
              >
                {t("nav.about")}
              </Link>
            </div>
          </div>

          {/* Right: portrait */}
          <div className="flex justify-center md:justify-end">
            <div
              className="rounded-full p-[3px]"
              style={{
                background: "linear-gradient(135deg, #818cf8 0%, #60a5fa 50%, #312e81 100%)",
              }}
            >
              <div className="rounded-full bg-card p-[4px]">
                <img
                  src={dmitryPhoto}
                  alt="Дмитрий Мирошников"
                  className="h-[220px] w-[220px] rounded-full object-cover md:h-[300px] md:w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="rounded-[24px] border bg-card p-6 md:p-10">
        <h2 className="text-[22px] font-semibold tracking-tight text-foreground md:text-[26px]">
          {t("process.title")}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="relative flex flex-col rounded-[20px] border bg-[var(--hover-surface)] p-5 transition-colors hover:border-[color:var(--border-strong)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-card text-[color:var(--accent-violet)]">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="text-[15.5px] font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick links */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Link
          to="/courses/$slug"
          params={{ slug: "workbook" }}
          className="group rounded-[24px] border bg-card p-6 transition-colors hover:border-[color:var(--border-strong)]"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--hover-surface)] text-[color:var(--accent-violet)]">
            <BookOpen className="h-4.5 w-4.5" />
          </div>
          <h3 className="text-[15px] font-semibold text-foreground">{t("cards.courses.title")}</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            {t("cards.courses.text")}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-[color:var(--accent-violet)] transition-colors group-hover:text-[color:var(--accent-blue)]">
            {t("cards.more")} <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>

        <Link
          to="/tests"
          className="group rounded-[24px] border bg-card p-6 transition-colors hover:border-[color:var(--border-strong)]"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--hover-surface)] text-[color:var(--accent-violet)]">
            <ClipboardCheck className="h-4.5 w-4.5" />
          </div>
          <h3 className="text-[15px] font-semibold text-foreground">{t("cards.tests.title")}</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            {t("cards.tests.text")}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-[color:var(--accent-violet)] transition-colors group-hover:text-[color:var(--accent-blue)]">
            {t("cards.more")} <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>

        <Link
          to="/requests"
          className="group rounded-[24px] border bg-card p-6 transition-colors hover:border-[color:var(--border-strong)]"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--hover-surface)] text-[color:var(--accent-violet)]">
            <Users className="h-4.5 w-4.5" />
          </div>
          <h3 className="text-[15px] font-semibold text-foreground">{t("cards.requests.title")}</h3>
          <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
            {t("cards.requests.text")}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-[color:var(--accent-violet)] transition-colors group-hover:text-[color:var(--accent-blue)]">
            {t("cards.more")} <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </Link>
      </section>
    </div>
  );
}

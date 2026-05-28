import { createFileRoute } from "@tanstack/react-router";
import { Clock, Users, User } from "lucide-react";
import { BookButton } from "@/components/ContactDialog";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Стоимость — Дмитрий Мирошников" },
      { name: "description", content: "Стоимость индивидуальной и парной консультации." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const { lang } = useI18n();
  const ru = lang === "RU";

  const items = [
    {
      icon: User,
      title: ru ? "Индивидуальная консультация" : "Індивідуальна консультація",
      price: "50$",
      duration: ru ? "50 минут" : "50 хвилин",
      desc: ru
        ? "Интегральный подход + КПТ. Полная конфиденциальность и профессиональный подход."
        : "Інтегральний підхід + КПТ. Повна конфіденційність і професійний підхід.",
    },
    {
      icon: Users,
      title: ru ? "Парная консультация" : "Парна консультація",
      price: "60$",
      duration: ru ? "50 минут" : "50 хвилин",
      desc: ru
        ? "Для пар и семей. Полная конфиденциальность и профессиональный подход."
        : "Для пар та родин. Повна конфіденційність і професійний підхід.",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <section className="rounded-[24px] border bg-card p-6 md:p-10">
        <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {ru ? "Стоимость" : "Вартість"}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-[34px]">
          {ru ? "Стоимость консультаций" : "Вартість консультацій"}
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          {ru
            ? "Прозрачные цены и единая длительность. Оплата производится за 2 дня до встречи."
            : "Прозорі ціни та єдина тривалість. Оплата здійснюється за 2 дні до зустрічі."}
        </p>
      </section>

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <div
              key={it.title}
              className="flex flex-col rounded-[24px] border bg-card p-6 md:p-8 transition-colors hover:border-[color:var(--border-strong)]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--hover-surface)] text-[color:var(--accent-violet)]">
                <Icon className="h-5 w-5" />
              </div>

              <h2 className="text-[20px] font-semibold text-foreground">{it.title}</h2>

              <div className="mt-5 flex items-end gap-3">
                <span className="text-[40px] font-semibold leading-none text-[color:var(--accent-violet)]">
                  {it.price}
                </span>
                <span className="mb-1 inline-flex items-center gap-1.5 text-[13px] text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {it.duration}
                </span>
              </div>

              <p className="mt-6 text-[14.5px] leading-relaxed text-foreground/85">
                {it.desc}
              </p>

              <BookButton className="mt-8 inline-flex items-center justify-center rounded-[14px] bg-[color:var(--accent-violet)] px-5 py-3 text-[14px] font-medium text-[#0b1020] transition-opacity hover:opacity-90">
                {ru ? "Записаться на консультацию" : "Записатися на консультацію"}
              </BookButton>
            </div>
          );
        })}
      </section>
    </div>
  );
}

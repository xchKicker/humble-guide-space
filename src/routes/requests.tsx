import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/requests")({
  head: () => ({
    meta: [
      { title: "Запросы — с чем я работаю" },
      { name: "description", content: "Темы и запросы, с которыми я работаю как психолог-консультант." },
    ],
  }),
  component: RequestsPage,
});

const requests = [
  "панические атаки и страх повторения симптомов",
  "навязчивые мысли и ОКР",
  "фобии и иррациональные страхи",
  "нестабильная или заниженная самооценка",
  "эмоциональная зависимость",
  "сложности в отношениях (конфликты, отдаление, цикличные сценарии)",
  "созависимые отношения",
  "переживание расставаний и утрат",
  "эмоциональное выгорание",
  "ощущение внутренней пустоты / потери смысла",
  "психосоматические проявления тревоги",
  "хроническое напряжение и невозможность расслабиться",
  "последствия травматического опыта (ПТСР и постстрессовые состояния)",
  "трудности с границами и выражением эмоций",
  "повторяющиеся жизненные сценарии, которые «не получается изменить»",
];

function RequestsPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="rounded-[24px] border bg-card p-6 md:p-10">
        <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Запросы
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-[34px]">
          С чем я работаю
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Список тем, с которыми чаще всего обращаются. Если вашего запроса
          здесь нет — это не значит, что мы не сможем с ним работать. Напишите,
          обсудим.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {requests.map((r) => (
            <div
              key={r}
              className="group flex items-start gap-3 rounded-[18px] border bg-card p-4 transition-colors hover:border-[color:var(--border-strong)]"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--hover-surface)] text-[color:var(--accent-violet)]">
                <Check className="h-3.5 w-3.5" />
              </div>
              <p className="text-[14.5px] leading-relaxed text-foreground/90">
                {r}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border bg-card p-6 md:p-8">
        <h2 className="text-[18px] font-semibold text-foreground">
          Не нашли свой запрос?
        </h2>
        <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
          Напишите мне в свободной форме — отвечу лично и подскажу, подойдёт ли
          вам работа со мной.
        </p>
        <a
          href="https://www.instagram.com/d_miroshnikov_o/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-block rounded-[14px] bg-[color:var(--accent-violet)] px-5 py-3 text-[14px] font-medium text-[#0b1020] transition-opacity hover:opacity-90"
        >
          Записаться на консультацию
        </a>
      </section>
    </div>
  );
}

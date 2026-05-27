import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Образование — Дмитрий Мирошников" },
      { name: "description", content: "Образование и профессиональная подготовка психолога-консультанта." },
    ],
  }),
  component: EducationPage,
});

const items = [
  {
    place: "Zaporizhzhia National University (ZNU)",
    dept: "Psychology Department",
    degree: "Bachelor’s degree",
    years: "2017–2021",
  },
  {
    place: "Zaporizhzhia National University (ZNU)",
    dept: "Psychology Department",
    degree: "Master’s degree",
    years: "2023–2024",
  },
];

function EducationPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="rounded-[24px] border bg-card p-6 md:p-10">
        <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Образование
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-[34px]">
          Профессиональная подготовка
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Базовое психологическое образование и продолжающаяся практика
          в интегральном подходе с опорой на КПТ.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((it, i) => (
          <div
            key={i}
            className="rounded-[24px] border bg-card p-6 transition-colors hover:border-[color:var(--border-strong)]"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--hover-surface)] text-[color:var(--accent-violet)]">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="text-[16px] font-semibold text-foreground">
              {it.place}
            </h3>
            <p className="mt-1 text-[14px] text-foreground/80">{it.dept}</p>
            <div className="mt-4 flex items-center justify-between border-t border-[color:var(--border)] pt-4">
              <span className="text-[13.5px] text-foreground/90">{it.degree}</span>
              <span className="text-[13px] text-muted-foreground">{it.years}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

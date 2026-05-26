import { createFileRoute, notFound } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { courses } from "@/lib/courses";

export const Route = createFileRoute("/courses/$slug")({
  component: CoursePage,
  notFoundComponent: () => <div className="p-6 text-muted-foreground">Курс не найден</div>,
  loader: ({ params }) => {
    const course = courses.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return { course };
  },
});

function CoursePage() {
  const { course } = Route.useLoaderData();

  const bullets = [
    "Понятная теоретическая база без перегруза",
    "Практические упражнения после каждой темы",
    "Поддерживающее сообщество участников",
    "Доступ к материалам остаётся навсегда",
  ];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
      <div className="flex flex-col gap-8">
        {/* Media */}
        <div
          className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[24px] border"
          style={{ background: course.color }}
        >
          <button
            aria-label="Воспроизвести"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--accent-violet)] text-[#0b1020] shadow-lg transition-transform hover:scale-105"
          >
            <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
          </button>
        </div>

        <section>
          <h2 className="text-[20px] font-semibold text-foreground">Что вас ждёт</h2>
          <ul className="mt-4 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-[15px] text-foreground/90">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--accent-violet)]" />
                {b}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-relaxed text-foreground/90">
          <h2 className="text-[20px] font-semibold text-foreground">О курсе</h2>
          <p>
            «{course.title}» — это спокойный, последовательный курс, собранный
            из моего практического опыта работы с клиентами. Здесь нет
            «волшебных техник», но есть рабочие инструменты, которые помогают
            постепенно менять отношение к себе и происходящему.
          </p>
          <p>
            Материалы устроены так, чтобы их можно было проходить в своём
            темпе. После каждой темы — короткое упражнение и место для
            рефлексии.
          </p>
          <p className="text-muted-foreground">
            Курс подойдёт тем, кто уже бывал в терапии и хочет углубить
            самоисследование, а также тем, кто только начинает интересоваться
            психологией.
          </p>
        </section>
      </div>

      {/* Purchase card */}
      <aside className="lg:sticky lg:top-8 lg:self-start">
        <div className="rounded-[24px] border bg-card p-5">
          <h3 className="text-[16px] font-semibold text-foreground">{course.title}</h3>
          <p className="mt-1 text-[13px] text-muted-foreground">{course.materials}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
              Онлайн
            </span>
            <span className="rounded-full border px-3 py-1 text-xs text-[color:var(--accent-violet)]">
              Навсегда
            </span>
            <span className="rounded-full border px-3 py-1 text-xs text-[color:var(--accent-blue)]">
              С обратной связью
            </span>
          </div>

          <div className="mt-5 text-[24px] font-semibold text-foreground">2 400 ₴</div>

          <button className="mt-4 w-full rounded-[14px] bg-[color:var(--accent-violet)] px-4 py-3 text-[14px] font-medium text-[#0b1020] transition-opacity hover:opacity-90">
            В корзину
          </button>
          <button className="mt-2 w-full rounded-[14px] border bg-transparent px-4 py-3 text-[14px] text-foreground transition-colors hover:border-[color:var(--border-strong)] hover:bg-[var(--hover-surface)]">
            Подробнее
          </button>
        </div>
      </aside>
    </div>
  );
}

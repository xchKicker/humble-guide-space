import { createFileRoute, notFound } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { courses } from "@/lib/courses";

export const Route = createFileRoute("/courses/$slug")({
  component: CoursePage,
  notFoundComponent: () => <div className="p-6">Курс не найден</div>,
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
          className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[18px] border border-[#e5e5e5]"
          style={{ background: course.color }}
        >
          <button
            aria-label="Воспроизвести"
            className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#111] shadow-sm hover:bg-white"
          >
            <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
          </button>
        </div>

        {/* What awaits */}
        <section>
          <h2 className="text-[20px] font-semibold">Что вас ждёт</h2>
          <ul className="mt-4 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3 text-[15px] text-[#111]">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8b5cf6]" />
                {b}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3 text-[15px] leading-relaxed text-[#111]">
          <h2 className="text-[20px] font-semibold">О курсе</h2>
          <p>
            «{course.title}» — это спокойный, последовательный курс, собранный
            из моего практического опыта работы с клиентами. Здесь нет
            «волшебных техник», но есть рабочие инструменты, которые помогают
            постепенно менять отношение к себе и происходящему.
          </p>
          <p>
            Материалы устроены так, чтобы их можно было проходить в своём
            темпе. После каждой темы — короткое упражнение и место для
            рефлексии. Вы можете возвращаться к разделам столько раз, сколько
            нужно.
          </p>
          <p className="text-[#666]">
            Курс подойдёт тем, кто уже бывал в терапии и хочет углубить
            самоисследование, а также тем, кто только начинает интересоваться
            психологией.
          </p>
        </section>
      </div>

      {/* Purchase card */}
      <aside className="lg:sticky lg:top-8 lg:self-start">
        <div className="rounded-[18px] border border-[#e5e5e5] bg-white p-5">
          <h3 className="text-[16px] font-semibold">{course.title}</h3>
          <p className="mt-1 text-[13px] text-[#666]">{course.materials}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#f5f5f5] px-3 py-1 text-xs text-[#111]">
              Онлайн
            </span>
            <span className="rounded-full bg-[#ede9fe] px-3 py-1 text-xs text-[#6d28d9]">
              Навсегда
            </span>
            <span className="rounded-full bg-[#dbeafe] px-3 py-1 text-xs text-[#1d4ed8]">
              С обратной связью
            </span>
          </div>

          <div className="mt-5 text-[24px] font-semibold">2 400 ₴</div>

          <button className="mt-4 w-full rounded-[12px] bg-[#111] px-4 py-3 text-[14px] font-medium text-white hover:bg-[#000]">
            В корзину
          </button>
          <button className="mt-2 w-full rounded-[12px] border border-[#e5e5e5] bg-white px-4 py-3 text-[14px] text-[#111] hover:border-[#111]">
            Подробнее
          </button>
        </div>
      </aside>
    </div>
  );
}

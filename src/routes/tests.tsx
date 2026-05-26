import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { tests } from "@/lib/courses";

export const Route = createFileRoute("/tests")({
  component: TestsPage,
});

function TestsPage() {
  const [active, setActive] = useState<string | null>(null);
  const activeTest = tests.find((t) => t.slug === active);

  return (
    <div>
      <h1 className="mb-2 text-2xl font-semibold text-foreground">Тесты</h1>
      <p className="mb-6 text-[14px] text-muted-foreground">
        Короткие опросники для самонаблюдения. Это не диагноз, а повод
        прислушаться к себе.
      </p>

      <div className="flex flex-col gap-4">
        {tests.map((t) => (
          <div
            key={t.slug}
            className="flex flex-col gap-4 rounded-[24px] border bg-card p-5 md:flex-row md:items-center md:justify-between md:p-6"
          >
            <div className="md:max-w-2xl">
              <h2 className="text-[17px] font-semibold text-foreground">{t.title}</h2>
              <div className="mt-1 text-[13px] text-muted-foreground">
                {t.questions} вопросов · {t.time}
              </div>
              <p className="mt-2 text-[14px] text-foreground/90">{t.description}</p>
            </div>
            <button
              onClick={() => setActive(t.slug)}
              className="shrink-0 rounded-[14px] bg-[color:var(--accent-violet)] px-5 py-3 text-[14px] font-medium text-[#0b1020] transition-opacity hover:opacity-90"
            >
              Пройти тест
            </button>
          </div>
        ))}
      </div>

      {activeTest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setActive(null)}
          />
          <div className="relative w-full max-w-md rounded-[24px] border bg-card p-6">
            <div
              className="mx-auto mb-4 h-16 w-16 rounded-full"
              style={{ background: "linear-gradient(135deg, #312e81, #818cf8)" }}
            />
            <h3 className="text-center text-[18px] font-semibold text-foreground">
              {activeTest.title}
            </h3>
            <p className="mt-2 text-center text-[14px] text-muted-foreground">
              Постарайтесь отвечать честно и не думать долго над каждым вопросом.
              Ваши ответы остаются с вами.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <button
                onClick={() => setActive(null)}
                className="w-full rounded-[14px] bg-[color:var(--accent-violet)] px-4 py-3 text-[14px] font-medium text-[#0b1020]"
              >
                Начать
              </button>
              <button
                onClick={() => setActive(null)}
                className="w-full rounded-[14px] border bg-transparent px-4 py-3 text-[14px] text-foreground hover:bg-[var(--hover-surface)]"
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

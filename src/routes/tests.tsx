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
      <h1 className="mb-2 text-2xl font-semibold">Тесты</h1>
      <p className="mb-6 text-[14px] text-[#666]">
        Короткие опросники для самонаблюдения. Это не диагноз, а повод
        прислушаться к себе.
      </p>

      <div className="flex flex-col gap-4">
        {tests.map((t) => (
          <div
            key={t.slug}
            className="flex flex-col gap-4 rounded-[18px] border border-[#e5e5e5] bg-white p-5 md:flex-row md:items-center md:justify-between md:p-6"
          >
            <div className="md:max-w-2xl">
              <h2 className="text-[17px] font-semibold">{t.title}</h2>
              <div className="mt-1 text-[13px] text-[#666]">
                {t.questions} вопросов · {t.time}
              </div>
              <p className="mt-2 text-[14px] text-[#111]">{t.description}</p>
            </div>
            <button
              onClick={() => setActive(t.slug)}
              className="shrink-0 rounded-[12px] bg-[#111] px-5 py-3 text-[14px] font-medium text-white hover:bg-[#000]"
            >
              Пройти тест
            </button>
          </div>
        ))}
      </div>

      {activeTest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setActive(null)}
          />
          <div className="relative w-full max-w-md rounded-[18px] border border-[#e5e5e5] bg-white p-6">
            <div
              className="mx-auto mb-4 h-16 w-16 rounded-full"
              style={{ background: "linear-gradient(135deg, #ede9fe, #c4b5fd)" }}
            />
            <h3 className="text-center text-[18px] font-semibold">
              {activeTest.title}
            </h3>
            <p className="mt-2 text-center text-[14px] text-[#666]">
              Постарайтесь отвечать честно и не думать долго над каждым вопросом.
              Ваши ответы остаются с вами.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <button
                onClick={() => setActive(null)}
                className="w-full rounded-[12px] bg-[#111] px-4 py-3 text-[14px] font-medium text-white"
              >
                Начать
              </button>
              <button
                onClick={() => setActive(null)}
                className="w-full rounded-[12px] border border-[#e5e5e5] bg-white px-4 py-3 text-[14px]"
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

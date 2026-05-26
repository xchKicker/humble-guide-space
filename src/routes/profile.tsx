import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  component: () => (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Личный кабинет</h1>

      <div className="rounded-[18px] border border-[#e5e5e5] bg-white p-6">
        <div className="flex items-center gap-4">
          <div
            className="h-16 w-16 rounded-full"
            style={{ background: "linear-gradient(135deg, #dbeafe, #93c5fd)" }}
          />
          <div>
            <div className="text-[16px] font-semibold">Гость</div>
            <div className="text-[13px] text-[#666]">войдите, чтобы увидеть материалы</div>
          </div>
        </div>
        <button className="mt-5 rounded-[12px] bg-[#111] px-4 py-3 text-[14px] font-medium text-white">
          Войти
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {["Мои курсы", "Мои тесты", "Записи на сессии"].map((t) => (
          <div key={t} className="rounded-[18px] border border-[#e5e5e5] bg-white p-5">
            <div className="text-[15px] font-medium">{t}</div>
            <p className="mt-1 text-[13px] text-[#666]">Пока пусто.</p>
          </div>
        ))}
      </div>
    </div>
  ),
});

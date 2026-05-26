import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile")({
  component: () => (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-foreground">Личный кабинет</h1>

      <div className="rounded-[24px] border bg-card p-6">
        <div className="flex items-center gap-4">
          <div
            className="h-16 w-16 rounded-full"
            style={{ background: "linear-gradient(135deg, #1e3a8a, #60a5fa)" }}
          />
          <div>
            <div className="text-[16px] font-semibold text-foreground">Гость</div>
            <div className="text-[13px] text-muted-foreground">войдите, чтобы увидеть материалы</div>
          </div>
        </div>
        <button className="mt-5 rounded-[14px] bg-[color:var(--accent-violet)] px-4 py-3 text-[14px] font-medium text-[#0b1020] hover:opacity-90">
          Войти
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {["Мои курсы", "Мои тесты", "Записи на сессии"].map((t) => (
          <div key={t} className="rounded-[24px] border bg-card p-5">
            <div className="text-[15px] font-medium text-foreground">{t}</div>
            <p className="mt-1 text-[13px] text-muted-foreground">Пока пусто.</p>
          </div>
        ))}
      </div>
    </div>
  ),
});

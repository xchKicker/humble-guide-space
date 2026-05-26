import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cart")({
  component: () => (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-foreground">Корзина</h1>

      <div className="rounded-[24px] border bg-card p-8 text-center">
        <p className="text-[15px] text-muted-foreground">В корзине пока ничего нет.</p>
        <Link
          to="/"
          className="mt-5 inline-block rounded-[14px] bg-[color:var(--accent-violet)] px-4 py-3 text-[14px] font-medium text-[#0b1020] hover:opacity-90"
        >
          К материалам
        </Link>
      </div>
    </div>
  ),
});

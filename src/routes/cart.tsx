import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cart")({
  component: () => (
    <div>
      <h1 className="mb-6 text-2xl font-semibold">Корзина</h1>

      <div className="rounded-[18px] border border-[#e5e5e5] bg-white p-8 text-center">
        <p className="text-[15px] text-[#666]">В корзине пока ничего нет.</p>
        <Link
          to="/"
          className="mt-5 inline-block rounded-[12px] bg-[#111] px-4 py-3 text-[14px] font-medium text-white"
        >
          К материалам
        </Link>
      </div>
    </div>
  ),
});

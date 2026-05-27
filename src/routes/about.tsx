import { createFileRoute } from "@tanstack/react-router";
import dmitryPhoto from "@/assets/dmitry.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Обо мне — Дмитрий Мирошников" },
      { name: "description", content: "Психолог-консультант. Интегральный подход с опорой на КПТ." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="rounded-[24px] border bg-card p-6 md:p-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto]">
          {/* Left: text */}
          <div className="max-w-xl">
            <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Обо мне
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-[34px]">
              Дмитрий Мирошников
            </h1>
            <p className="mt-2 text-[15px] text-[color:var(--accent-violet)]">
              психолог-консультант
            </p>

            <div className="mt-7 space-y-5 text-[15.5px] leading-relaxed text-foreground/90">
              <p>
                Работаю в интегральном подходе с опорой на
                когнитивно-поведенческую терапию (КПТ).
              </p>
              <p>
                В работе я фокусируюсь не только на симптомах,
                а на том, как формируется состояние и почему оно удерживается.
              </p>
              <p>
                Многие из этих сложностей мне знакомы не только в практике,
                но и лично.
              </p>
              <p className="text-foreground">
                Поэтому в работе мы не просто стараемся, чтобы «стало легче»,
                а разбираем, как устроена проблема, и шаг за шагом меняем то,
                что её поддерживает.
              </p>
            </div>

            <a
              href="https://www.instagram.com/d_miroshnikov_o/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-[14px] bg-[color:var(--accent-violet)] px-5 py-3 text-[14px] font-medium text-[#0b1020] transition-opacity hover:opacity-90"
            >
              Записаться на консультацию
            </a>
          </div>

          {/* Right: round portrait */}
          <div className="flex justify-center md:justify-end">
            <div
              className="rounded-full p-[3px]"
              style={{
                background:
                  "linear-gradient(135deg, #818cf8 0%, #60a5fa 50%, #312e81 100%)",
              }}
            >
              <div className="rounded-full bg-card p-[4px]">
                <img
                  src={dmitryPhoto}
                  alt="Дмитрий Мирошников"
                  className="h-[280px] w-[280px] rounded-full object-cover md:h-[340px] md:w-[340px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

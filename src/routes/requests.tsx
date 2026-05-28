import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { BookButton } from "@/components/ContactDialog";
import { useI18n, requestsList } from "@/lib/i18n";

export const Route = createFileRoute("/requests")({
  head: () => ({
    meta: [
      { title: "Запросы — с чем я работаю" },
      { name: "description", content: "Темы и запросы, с которыми я работаю как психолог-консультант." },
    ],
  }),
  component: RequestsPage,
});

function RequestsPage() {
  const { t, lang } = useI18n();
  const list = requestsList[lang];
  return (
    <div className="flex flex-col gap-10">
      <section className="rounded-[24px] border bg-card p-6 md:p-10">
        <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {t("requests.kicker")}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-[34px]">
          {t("requests.title")}
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          {t("requests.lead")}
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {list.map((r) => (
            <div
              key={r}
              className="group flex items-start gap-3 rounded-[18px] border bg-card p-4 transition-colors hover:border-[color:var(--border-strong)]"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--hover-surface)] text-[color:var(--accent-violet)]">
                <Check className="h-3.5 w-3.5" />
              </div>
              <p className="text-[14.5px] leading-relaxed text-foreground/90">{r}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[24px] border bg-card p-6 md:p-8">
        <h2 className="text-[18px] font-semibold text-foreground">{t("requests.notfound")}</h2>
        <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
          {t("requests.notfound.text")}
        </p>
        <BookButton className="mt-5 inline-block rounded-[14px] bg-[color:var(--accent-violet)] px-5 py-3 text-[14px] font-medium text-[#0b1020] transition-opacity hover:opacity-90">
          {t("nav.book")}
        </BookButton>
      </section>
    </div>
  );
}

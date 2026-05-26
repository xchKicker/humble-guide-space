import { createFileRoute } from "@tanstack/react-router";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/lib/courses";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col gap-10">
      {/* Profile card */}
      <section className="rounded-[24px] border bg-card p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div
            className="h-24 w-24 shrink-0 rounded-full md:h-28 md:w-28"
            style={{ background: "linear-gradient(135deg, #312e81, #818cf8)" }}
          />
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Привет, я Анна
            </h1>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Психотерапевт, автор курсов и подкастов. Помогаю разбираться
              с тревогой, отношениями и поиском опоры в себе.
              Здесь — мои материалы и пространство для совместной работы.
            </p>
          </div>
        </div>
      </section>

      {/* Courses grid */}
      <section>
        <h2 className="mb-5 text-[18px] font-semibold text-foreground">Я сделала, пользуйтесь</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="rounded-[24px] border bg-card p-6 md:p-8">
        <div
          className="mb-4 h-14 w-14 rounded-full"
          style={{ background: "linear-gradient(135deg, #1e3a8a, #60a5fa)" }}
        />
        <h2 className="text-[20px] font-semibold text-foreground">Подробнее обо мне</h2>
        <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-foreground/90">
          <p>
            Я работаю в гуманистическом подходе уже более десяти лет.
            Мне близка идея, что терапия — это не «починка», а пространство,
            где можно медленно и спокойно встретиться с собой.
          </p>
          <p>
            Веду индивидуальные сессии, терапевтические группы и обучаю
            начинающих специалистов. Пишу тексты, записываю подкаст и
            собираю практические воркбуки.
          </p>
          <p className="text-muted-foreground">
            Если хочется попробовать поработать вместе — напишите, я отвечу лично.
          </p>
        </div>
      </section>
    </div>
  );
}

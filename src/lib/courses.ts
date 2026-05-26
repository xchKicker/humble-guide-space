import type { CourseCardData } from "@/components/CourseCard";

export const courses: CourseCardData[] = [
  {
    slug: "workbook",
    title: "Воркбук по тревоге",
    description: "Практические упражнения для работы с тревожными состояниями.",
    materials: "32 материала",
    color: "linear-gradient(135deg, #ede9fe, #c4b5fd)",
  },
  {
    slug: "lectures",
    title: "Лекции по границам",
    description: "Серия лекций о личных границах в отношениях.",
    materials: "8 лекций",
    color: "linear-gradient(135deg, #dbeafe, #93c5fd)",
  },
  {
    slug: "express",
    title: "Экспресс-курс «Самооценка»",
    description: "Короткий курс из 5 шагов для устойчивой самооценки.",
    materials: "5 уроков",
    color: "linear-gradient(135deg, #fef3c7, #fde68a)",
  },
  {
    slug: "certificate",
    title: "Сертификационная программа",
    description: "Долгая программа для специалистов помогающих профессий.",
    materials: "24 модуля",
    color: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
  },
  {
    slug: "group",
    title: "Терапевтическая группа",
    description: "Закрытая онлайн-группа на 12 встреч.",
    materials: "12 встреч",
    color: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
  },
  {
    slug: "burnout",
    title: "Выгорание",
    description: "Как замечать ранние признаки и восстанавливаться.",
    materials: "10 материалов",
    color: "linear-gradient(135deg, #e0e7ff, #a5b4fc)",
  },
  {
    slug: "relations",
    title: "Отношения",
    description: "О привязанности, паре и одиночестве.",
    materials: "14 материалов",
    color: "linear-gradient(135deg, #ffe4e6, #fecdd3)",
  },
  {
    slug: "emotions",
    title: "Чувства и эмоции",
    description: "Учимся распознавать и проживать эмоции.",
    materials: "9 материалов",
    color: "linear-gradient(135deg, #ccfbf1, #99f6e4)",
  },
];

export const tests = [
  {
    slug: "anxiety",
    title: "Уровень тревожности",
    questions: 21,
    time: "10 минут",
    description:
      "Шкала самооценки тревоги. Поможет понять, насколько актуальна для вас работа с тревожными состояниями.",
  },
  {
    slug: "burnout",
    title: "Профессиональное выгорание",
    questions: 22,
    time: "12 минут",
    description:
      "Опросник на эмоциональное истощение, деперсонализацию и редукцию достижений.",
  },
  {
    slug: "attachment",
    title: "Стиль привязанности",
    questions: 18,
    time: "8 минут",
    description:
      "Определите свой ведущий стиль привязанности в близких отношениях.",
  },
  {
    slug: "selfesteem",
    title: "Самооценка",
    questions: 10,
    time: "5 минут",
    description: "Короткая шкала Розенберга для оценки общей самооценки.",
  },
];

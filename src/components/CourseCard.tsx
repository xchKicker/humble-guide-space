import { Link } from "@tanstack/react-router";

export interface CourseCardData {
  slug: string;
  title: string;
  description: string;
  materials: string;
  color: string;
}

export function CourseCard({ course }: { course: CourseCardData }) {
  return (
    <Link
      to="/courses/$slug"
      params={{ slug: course.slug }}
      className="group block overflow-hidden rounded-[24px] border bg-card transition-all hover:border-[color:var(--border-strong)] hover:-translate-y-0.5"
    >
      <div
        className="aspect-[4/3] w-full opacity-90"
        style={{ background: course.color }}
      />
      <div className="p-5">
        <h3 className="text-[15px] font-medium text-foreground">{course.title}</h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] text-muted-foreground">
          {course.description}
        </p>
        <p className="mt-3 text-[12px] text-muted-foreground/80">{course.materials}</p>
      </div>
    </Link>
  );
}

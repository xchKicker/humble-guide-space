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
      className="group block overflow-hidden rounded-[16px] border border-[#e5e5e5] bg-white transition-colors hover:border-[#111]"
    >
      <div
        className="aspect-[4/3] w-full"
        style={{ background: course.color }}
      />
      <div className="p-4">
        <h3 className="text-[15px] font-medium text-[#111]">{course.title}</h3>
        <p className="mt-1 line-clamp-2 text-[13px] text-[#666]">
          {course.description}
        </p>
        <p className="mt-3 text-[12px] text-[#666]">{course.materials}</p>
      </div>
    </Link>
  );
}

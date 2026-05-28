import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Sidebar } from "@/components/Sidebar";
import { I18nProvider } from "@/lib/i18n";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-semibold text-foreground">404</h1>
        <p className="mt-3 text-sm text-muted-foreground">Страница не найдена</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-[14px] bg-[color:var(--accent-violet)] px-4 py-2 text-sm text-[#0b1020]"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Что-то пошло не так</h1>
        <button
          onClick={reset}
          className="mt-4 rounded-[12px] bg-[#111] px-4 py-2 text-sm text-white"
        >
          Попробовать снова
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Анна Иванова — психотерапевт" },
      { name: "description", content: "Личное пространство психотерапевта: курсы, тесты, запись на терапию." },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Sidebar />
          <main className="md:ml-[280px]">
            <div className="mx-auto w-full max-w-[1100px] px-5 py-8 md:px-10 md:py-12">
              <Outlet />
            </div>
          </main>
        </div>
      </I18nProvider>
    </QueryClientProvider>
  );
}

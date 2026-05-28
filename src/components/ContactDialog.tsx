import { useState, type ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Send, Instagram } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type Props = {
  children: ReactNode;
  className?: string;
};

export function BookButton({ children, className }: Props) {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" className={className}>
          {children}
        </button>
      </DialogTrigger>
      <DialogContent className="border bg-card sm:max-w-[460px] sm:rounded-[24px]">
        <DialogHeader>
          <DialogTitle className="text-[18px] font-semibold text-foreground">
            {t("dialog.title")}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-3 flex flex-col gap-3">
          <a
            href="https://t.me/d_miroshnikov_o"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-[18px] border bg-[var(--hover-surface)] p-4 transition-colors hover:border-[color:var(--border-strong)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-violet)] text-[#0b1020]">
              <Send className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-medium text-foreground">{t("dialog.tg")}</span>
              <span className="text-[12.5px] text-muted-foreground">@d_miroshnikov_o</span>
            </div>
          </a>

          <a
            href="https://instagram.com/d_miroshnikov_o"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-[18px] border bg-[var(--hover-surface)] p-4 transition-colors hover:border-[color:var(--border-strong)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-violet)] text-[#0b1020]">
              <Instagram className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-medium text-foreground">{t("dialog.ig")}</span>
              <span className="text-[12.5px] text-muted-foreground">@d_miroshnikov_o</span>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children, hideFooter }: { children: React.ReactNode; hideFooter?: boolean }) {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1 pt-24 md:pt-28">{children}</main>
      {!hideFooter && <SiteFooter />}
    </div>
  );
}

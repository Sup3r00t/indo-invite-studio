import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const WA_LINK = "https://wa.me/6281234567890?text=Halo%20admin%2C%20saya%20mau%20dibuatkan%20undangan";

export function Btn({ children, variant = "primary", href, to }: { children: ReactNode; variant?: "primary" | "wa" | "outline"; href?: string; to?: "/" | "/template" | "/harga" }) {
  const cls = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-soft",
    wa: "bg-whatsapp text-whatsapp-foreground hover:opacity-90",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  }[variant];
  const c = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${cls}`;
  if (to) return <Link to={to} className={c}>{children}</Link>;
  return <a href={href} target="_blank" rel="noreferrer" className={c}>{children}</a>;
}

export function Header() {
  const l = "text-sm font-medium text-muted-foreground hover:text-foreground";
  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="font-display text-2xl font-semibold text-primary">Undang<span className="italic text-gold">Kita</span></Link>
        <nav className="hidden gap-8 md:flex">
          <Link to="/" className={l} activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>Beranda</Link>
          <Link to="/template" className={l} activeProps={{ className: "text-foreground" }}>Template</Link>
          <Link to="/harga" className={l} activeProps={{ className: "text-foreground" }}>Harga</Link>
        </nav>
        <Btn variant="wa" href={WA_LINK}>Hubungi Admin</Btn>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-10 text-sm text-muted-foreground md:flex-row">
        <span className="font-display text-lg text-primary">UndangKita</span>
        <span>© 2026 UndangKita · Undangan digital untuk semua acara</span>
      </div>
    </footer>
  );
}

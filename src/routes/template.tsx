import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Footer, Header } from "@/components/site";
import { templates } from "@/lib/data";

export const Route = createFileRoute("/template")({
  head: () => ({
    meta: [
      { title: "Template Undangan Digital — UndangKita" },
      { name: "description", content: "Pilih template undangan online untuk pernikahan, aqiqah, khitanan, ulang tahun dan lainnya." },
      { property: "og:title", content: "Template Undangan Digital — UndangKita" },
      { property: "og:description", content: "Koleksi desain undangan online untuk semua acara." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TemplatePage,
});

function TemplatePage() {
  const cats = ["Semua", ...Array.from(new Set(templates.map((t) => t.cat)))];
  const [cat, setCat] = useState("Semua");
  const list = cat === "Semua" ? templates : templates.filter((t) => t.cat === cat);
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="text-5xl font-semibold">Template Undangan</h1>
        <div className="mt-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-4 py-2 text-sm font-medium transition ${c === cat ? "bg-primary text-primary-foreground" : "bg-card hover:bg-accent"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">
          {list.map((t) => (
            <figure key={t.name} className="group overflow-hidden rounded-2xl bg-card shadow-soft">
              <img src={t.img} alt={t.name} loading="lazy" width={608} height={1088} className="aspect-[9/14] w-full object-cover transition group-hover:scale-105" />
              <figcaption className="flex items-center justify-between p-4">
                <div><div className="font-semibold">{t.name}</div><div className="text-xs text-muted-foreground">{t.cat}</div></div>
                <span className="text-sm font-semibold text-primary">Pakai →</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

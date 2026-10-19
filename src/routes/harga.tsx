import { createFileRoute } from "@tanstack/react-router";
import { Btn, Footer, Header, WA_LINK } from "@/components/site";
import { plans } from "@/lib/data";

export const Route = createFileRoute("/harga")({
  head: () => ({
    meta: [
      { title: "Harga Undangan Digital — UndangKita" },
      { name: "description", content: "Coba gratis, bayar setelah jadi. Paket undangan digital mulai Rp79.000." },
      { property: "og:title", content: "Harga Undangan Digital — UndangKita" },
      { property: "og:description", content: "Paket undangan digital terjangkau, bayar hanya kalau suka." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HargaPage,
});

function HargaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="text-center text-5xl font-semibold">Harga yang bikin tenang</h1>
        <p className="mt-4 text-center text-muted-foreground">Uji coba gratis. Bayar hanya kalau suka hasilnya.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`flex flex-col rounded-3xl border p-8 ${p.highlight ? "bg-primary text-primary-foreground shadow-soft md:-translate-y-3" : "bg-card"}`}>
              <h2 className="text-2xl font-semibold">{p.name}</h2>
              <p className="mt-1 text-sm opacity-80">{p.desc}</p>
              <div className="mt-6 font-display text-4xl font-semibold">{p.price}</div>
              <ul className="mt-6 flex-1 space-y-2 text-sm">
                {p.features.map((f) => <li key={f}>✓ {f}</li>)}
              </ul>
              <div className="mt-8">
                {p.highlight ? <Btn variant="wa" href={WA_LINK}>Pesan Sekarang</Btn> : <Btn variant="outline" href={WA_LINK}>Pilih Paket</Btn>}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { Btn, Footer, Header, WA_LINK } from "@/components/site";
import { events, templates } from "@/lib/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "UndangKita — Buat Undangan Digital Gratis dalam 5 Menit" },
      { name: "description", content: "Undangan digital untuk pernikahan, khitanan, aqiqah, ulang tahun, wisuda & semua acara. Coba gratis, bayar setelah jadi." },
      { property: "og:title", content: "UndangKita — Undangan Digital Gratis" },
      { property: "og:description", content: "Buat undangan online untuk semua acara dalam 5 menit." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  ["📩", "Nama tamu personal", "Kirim link dengan nama setiap tamu langsung lewat WhatsApp."],
  ["🎵", "Musik latar", "Pilih lagu favorit yang diputar saat undangan dibuka."],
  ["📸", "Galeri & video", "Tampilkan foto prewedding dan momen spesial kalian."],
  ["✅", "RSVP & ucapan", "Pantau kehadiran tamu dan kumpulkan doa restu."],
  ["🗺️", "Peta lokasi", "Tamu langsung diarahkan ke lokasi lewat Google Maps."],
  ["💝", "Amplop digital", "Terima hadiah via transfer bank atau e-wallet."],
];

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="bg-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">✨ Anti Rugi — bayar hanya kalau suka</span>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] md:text-6xl">
              Buat Undangan Digital <em className="text-primary">Gratis</em> untuk Semua Acara
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Pernikahan, khitanan, aqiqah, ulang tahun, wisuda hingga seminar — jadi dalam <b className="text-foreground">5 menit</b>, tanpa ribet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/template">Buat Undangan Gratis</Btn>
              <Btn variant="wa" href={WA_LINK}>Dibuatin Admin Aja</Btn>
            </div>
            <div className="mt-10 flex gap-8 text-sm">
              {[["50rb+", "Undangan dibuat"], ["4.9★", "Rating pengguna"], ["1×24j", "Proses admin"]].map(([a, b]) => (
                <div key={b}><div className="font-display text-2xl font-semibold text-primary">{a}</div><div className="text-muted-foreground">{b}</div></div>
              ))}
            </div>
          </div>
          <img src={hero} alt="Contoh undangan digital pernikahan di ponsel" width={1024} height={1152} className="w-full rounded-3xl shadow-soft" />
        </div>
      </section>

      <div className="overflow-hidden border-y bg-card py-5">
        <div className="flex w-max animate-marquee gap-4">
          {[...events, ...events].map((e, i) => (
            <span key={i} className="whitespace-nowrap rounded-full border bg-background px-5 py-2 text-sm font-medium">{e}</span>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-center text-4xl font-semibold">Semua yang tamu butuhkan, dalam satu link</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([i, t, d]) => (
            <div key={t} className="rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <div className="text-3xl">{i}</div>
              <h3 className="mt-4 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex items-end justify-between">
            <h2 className="text-4xl font-semibold">Template pilihan</h2>
            <Btn variant="outline" to="/template">Lihat semua</Btn>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">
            {templates.slice(0, 3).map((t) => (
              <figure key={t.name} className="overflow-hidden rounded-2xl bg-card shadow-soft">
                <img src={t.img} alt={t.name} loading="lazy" width={608} height={1088} className="aspect-[9/14] w-full object-cover" />
                <figcaption className="p-4"><div className="font-semibold">{t.name}</div><div className="text-xs text-muted-foreground">{t.cat}</div></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-center text-4xl font-semibold">Cara kerjanya</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[["Pilih template", "Ratusan desain untuk setiap jenis acara."], ["Isi detail acara", "Nama, tanggal, lokasi, foto dan musik."], ["Bagikan ke tamu", "Kirim link personal lewat WhatsApp."]].map(([t, d], i) => (
            <div key={t} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary font-display text-2xl text-primary-foreground">{i + 1}</div>
              <h3 className="mt-4 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-20 max-w-4xl rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground">
        <h2 className="text-4xl font-semibold">Gak mau ribet?</h2>
        <p className="mx-auto mt-3 max-w-md opacity-90">Minta dibuatkan admin. Uji coba gratis, bayar setelah jadi.</p>
        <div className="mt-8"><Btn variant="wa" href={WA_LINK}>Chat Admin via WhatsApp</Btn></div>
      </section>
      <Footer />
    </div>
  );
}

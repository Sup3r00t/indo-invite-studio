import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";

export const events = ["💍 Pernikahan", "👦 Khitanan", "👶 Aqiqah", "🎂 Ulang Tahun", "🎓 Wisuda", "🎄 Natal", "🌙 Halal Bihalal", "🤝 Seminar", "🏢 Peresmian", "🚀 Launching", "🙏 Tahlilan", "✨ Acara Custom"];

export const templates = [
  { name: "Sage Botanical", cat: "Pernikahan", img: t1 },
  { name: "Batik Keraton", cat: "Pernikahan", img: t2 },
  { name: "Little Star", cat: "Aqiqah", img: t3 },
  { name: "Batik Keraton Gold", cat: "Khitanan", img: t2 },
  { name: "Daun Muda", cat: "Ulang Tahun", img: t1 },
  { name: "Awan Senja", cat: "Ulang Tahun", img: t3 },
];

export const plans = [
  { name: "Uji Coba", price: "Gratis", desc: "Coba semua fitur sebelum bayar", features: ["Semua template", "Aktif 3 hari", "Link bisa dibagikan"], highlight: false },
  { name: "Premium", price: "Rp79.000", desc: "Paling populer untuk pernikahan", features: ["Aktif selamanya", "Nama tamu tanpa batas", "Musik & galeri foto", "RSVP & ucapan", "Amplop digital"], highlight: true },
  { name: "Dibuatin Admin", price: "Rp129.000", desc: "Terima beres, bayar setelah jadi", features: ["Semua fitur Premium", "Dikerjakan admin", "Revisi sepuasnya", "Proses kilat 1×24 jam"], highlight: false },
];

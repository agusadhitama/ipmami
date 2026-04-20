# IPMAMI
### Ikatan Pelajar & Mahasiswa Mimika

> **Bersatu · Bergerak · Berprestasi**

Website resmi organisasi **IPMAMI** - wadah pelajar dan mahasiswa asal Mimika, Papua Tengah. Dibangun dengan HTML, CSS, dan JavaScript murni tanpa framework, responsif di semua perangkat.

---

## ✨ Fitur

- **Loading screen** animasi dengan progress bar
- **Navbar responsif** transparan saat atas, frosted glass saat scroll, hamburger menu di mobile
- **Hero section** dengan diagonal split background, geometric ornament, animasi counter statistik
- **Ticker** marquee berjalan otomatis
- **Reveal animations** elemen muncul smooth saat masuk viewport
- **Gallery scrolling** dua arah otomatis
- **Form kontak** dengan feedback submit
- **Fully responsive** PC, tablet, dan mobile

---

## 🎨 Design

| Elemen | Nilai |
|--------|-------|
| Warna utama | Putih `#F7F5F2` |
| Aksen merah | `#C8102E` |
| Aksen biru | `#1e50a0` |
| Font display | Anton |
| Font body | DM Sans |
| Font mono | Courier Prime |

---

## 🗂️ Struktur

```
ipmami/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

---

## 🚀 Deploy ke GitHub Pages

```bash
# 1. Init & push
git init
git add .
git commit -m "🚀 initial commit"
git branch -M main
git remote add origin https://github.com/agusadhitama/ipmami.git
git push -u origin main

# 2. Aktifkan Pages
# GitHub repo → Settings → Pages → Branch: main → Save
# Live di: https://agusadhitama.github.io/ipmami
```

---

## ✏️ Cara Edit Konten

**Ganti nama pengurus** → cari section `STRUKTUR PENGURUS` di `index.html`

**Ganti kontak** → cari `ipmami.official@gmail.com` dan nomor WA

**Ganti statistik hero** → ubah `data-target="500"` dst

**Tambah program** → duplikat block `.prog-item` di section `PROGRAM UNGGULAN`

---

## 📱 Kompatibilitas

Diuji di Chrome, Firefox, Safari · Desktop, Tablet, Mobile

---

*© 2025 IPMAMI - Made with ❤️ for Papua*

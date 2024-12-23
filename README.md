# Pendaftaran Turnamen Free Fire

Ini adalah project sederhana untuk membuat form pendaftaran turnamen Free Fire yang mengirimkan data pendaftaran langsung ke WhatsApp. 

## Fitur Utama

- **Formulir Pendaftaran**: Input untuk nama kapten, nama tim, jadwal sesi, dan tipe booking (Booking/Tidak Booking).
- **Kirim ke WhatsApp**: Data pendaftaran dikirim dalam format pesan yang rapi ke WhatsApp.
- **Responsif**: Desain responsif yang terlihat baik di desktop maupun perangkat mobile.

## Teknologi yang Digunakan

- **HTML**: Struktur utama halaman.
- **CSS (TailwindCSS)**: Untuk styling responsif dan modern.
- **JavaScript**: Untuk pengolahan data form dan pengiriman ke WhatsApp.

## Cara Penggunaan

1. **Clone atau Unduh Project**
   ```bash
   git clone https://github.com/username/turnamen-registration.git
   cd turnamen-registration
   ```

2. **Buka File HTML**
   Gunakan browser untuk membuka file `index.html` secara langsung.

3. **Isi Formulir**
   - Masukkan Nama Kapten.
   - Masukkan Nama Tim.
   - Pilih Jadwal Sesi.
   - Pilih tipe booking (Booking/Tidak Booking).

4. **Kirim ke WhatsApp**
   Klik tombol "Daftar" untuk mengirim data ke WhatsApp. Pastikan WhatsApp Web atau aplikasi WhatsApp tersedia.

## Contoh Format Pesan WhatsApp

```plaintext
Pendaftaran Turnamen Free Fire 

🚀 Nama Kapten/Perwakilan: John Doe
🎮 Nama Tim: FreeFire Legends
🕒 Jadwal Sesi: Sesi 1 - 13.00
✅ Tipe Booking: Booking
```

## File Penting

- `index.html`: Struktur utama halaman.
- `style.css` (opsional): Jika tidak menggunakan Tailwind langsung.
- `script.js`: Berisi logika pengolahan form dan pengiriman WhatsApp.

## Catatan

- Untuk memastikan fitur kirim ke WhatsApp berjalan, ganti nomor telepon di bagian JavaScript dengan nomor admin turnamen:
  ```javascript
  const adminNumber = "6281234567890"; // Ganti dengan nomor Anda
  ```

## Lisensi

Proyek ini bebas digunakan untuk keperluan pribadi atau komunitas. Tidak untuk diperjualbelikan.

---

Jika Anda memiliki saran atau ingin berkontribusi, silakan hubungi kami!

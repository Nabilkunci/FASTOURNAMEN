function handleFormSubmit(event) {
  event.preventDefault();

  // Ambil nilai dari form
  const captainName = document.getElementById('captain-name').value;
  const teamName = document.getElementById('team-name').value;
  const sessionTime = document.getElementById('session-time').value;
  const bookingType = document.querySelector('input[name="booking-type"]:checked').value;

  // Format pesan WhatsApp
  const message = `
  🌟 *Pendaftaran Turnamen Free Fire* 🌟

 📌 *Detail Pendaftaran:*
 - 👤 *Nama Kapten/Perwakilan:* ${captainName}
 - 🛡️ *Nama Tim:* ${teamName}
 - ⏰ *Jadwal Sesi:* ${sessionTime}
 - 📝 *Tipe Booking:* ${bookingType}

  📞 Jika ada pertanyaan, silakan hubungi panitia. Terima kasih!
  `;

  // Kirim ke WhatsApp
  const phoneNumber = '6285717281107'; // Ganti dengan nomor tujuan
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Redirect ke WhatsApp
  window.open(whatsappUrl, '_blank');
}
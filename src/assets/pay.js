function updatePaymentInfo() {
  const payment = document.getElementById('payment').value;
  const paymentInfo = document.getElementById('payment-info');
  const paymentDetails = document.getElementById('payment-details');

  // Reset area informasi
  paymentInfo.classList.add('hidden');
  paymentDetails.textContent = '';

  // Tampilkan detail berdasarkan metode pembayaran
  if (payment === 'qris') {
    paymentDetails.innerHTML = `
      <strong>QRIS:</strong> 
      <img src="public/qris-code.jpg" alt="Kode QRIS" class="mt-2">
      <p class="text-sm text-gray-600 mt-2">Silakan scan QRIS menggunakan aplikasi pembayaran Anda.</p>
    `;
  } else if (['gopay', 'dana', 'ovo'].includes(payment)) {
    const phoneNumbers = {
      gopay: '0858-2179-3752',
      dana: '0858-2179-3752',
      ovo: '0813-8093-5092',
    };
    paymentDetails.innerHTML = `
      <strong>Nomor Pembayaran:</strong> ${phoneNumbers[payment]}
      <p class="text-sm text-gray-600 mt-2">Gunakan nomor ini untuk melakukan pembayaran melalui aplikasi terkait,Kirimkan Bukti transfer melalui Nomor admin.</p>
    `;
  }

  // Tampilkan informasi
  paymentInfo.classList.remove('hidden');
}

self.addEventListener('push', function(event) {

  const options = {
    body: 'JANGAN LUPA INPUT BARANG YANG KOSONG KE DATA HARIAN TOKO SESUAI KATEGORINYA MASING-MASING.',
    icon: '/icon.png',
    badge: '/icon.png'
  };

  event.waitUntil(
    self.registration.showNotification(
      '🔔 PENGINGAT TOKO',
      options
    )
  );

});

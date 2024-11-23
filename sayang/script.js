// Interaksi dengan ikon hati
const heart = document.getElementById('heart');
heart.addEventListener('click', function () {
  heart.style.color = '#ff69b4';
  alert('BB sayang cinter! ❤️');
});

// Interaksi dengan butang
const forgiveBtn = document.getElementById('forgiveBtn');
forgiveBtn.addEventListener('click', function () {
  forgiveBtn.textContent = 'Terima Kasih, Sayang!';
  forgiveBtn.style.backgroundColor = '#88d498';
  alert('BB sangat hargai syg bgi bb peluang lagi. BB janji akan buat lebih baik! ❤️');
});

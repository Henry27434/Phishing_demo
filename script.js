// Claim form with textboxes for user inputs
const claimForm = document.getElementById('claimForm');
if (claimForm) {
  claimForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'totallyRealCongrats.html';
  });
}

// DVD bounce
document.querySelectorAll('.ad-track').forEach((track) => {
  const ball = track.querySelector('.dvd-bounce');
  if (!ball) return;

  let x = Math.random() * 40;
  let y = Math.random() * 40;
  let dx = 0.3;
  let dy = 0.4;

  function step() {
    const maxX = track.clientWidth - ball.offsetWidth;
    const maxY = track.clientHeight - ball.offsetHeight;

    x += dx;
    y += dy;

    if (x <= 0) { x = 0; dx = Math.abs(dx); }
    if (x >= maxX) { x = maxX; dx = -Math.abs(dx); }
    if (y <= 0) { y = 0; dy = Math.abs(dy); }
    if (y >= maxY) { y = maxY; dy = -Math.abs(dy); }

    ball.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
});

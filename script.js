// submitting only moves to the next page
const claimForm = document.getElementById('claimForm');
if (claimForm) {
  claimForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'congrats.html';
  });
}

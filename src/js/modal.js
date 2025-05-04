const openModal = document.getElementById('openModal');
const modal = document.getElementById('myModal');
const close = document.querySelector('.close');
const modalLinks = document.querySelectorAll('.modalLink');


openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
modalLinks.forEach(link => {
  link.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});
import imgStar from '../img/reviwes/star.png';

const container = document.getElementById('falling-stars');

function createStarImage() {
  const img = document.createElement('img');
  img.src = imgStar;
  img.setAttribute('data-role', 'star-image');
  img.style.left = `${Math.random() * 100}vw`;
  img.style.top = `-30px`;
  img.style.animationDuration = `${Math.random() * 2 + 10}s`;
  container.appendChild(img);
  img.addEventListener('animationend', () => {
    img.remove();
  });
}

let intervalTime = 600;
const screenWidth = window.innerWidth;

if (screenWidth <= 320) {
  intervalTime = 1200;
} else if (screenWidth >= 1200) {
  intervalTime = 800;
}

const starInterval = setInterval(createStarImage, intervalTime);

function stopFallingStars() {
  clearInterval(starInterval);
  document.removeEventListener('click', stopFallingStars);

  document
    .querySelectorAll('[data-role="star-image"]')
    .forEach(star => star.remove());
}
document.addEventListener('click', stopFallingStars);

const reviwesItems = document.querySelectorAll('[data-review="item"]');
const section = document.querySelector('#reviwes');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        reviwesItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('visible');
          }, index * 200);
        });
        observer.disconnect();
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(section);

import imgStar from '../img/reviwes/star.png';

const container = document.querySelector('.falling-stars');

function createStarImage() {
  const img = document.createElement('img');
  img.src = imgStar;
  console.log(img.src);
  img.classList.add('star-image');
  img.style.left = `${Math.random() * 100}vw`;
  img.style.top = `-30px`;
  img.style.animationDuration = `${Math.random() * 2 + 10}s`;
  container.appendChild(img);
  img.addEventListener('animationend', () => {
    img.remove();
  });
}

const starInterval = setInterval(createStarImage, 600);

function stopFallingStars() {
  clearInterval(starInterval);
  document.removeEventListener('click', stopFallingStars);

  document.querySelectorAll('.star-image').forEach(star => star.remove());
}
document.addEventListener('click', stopFallingStars);

const reviwesItems = document.querySelectorAll('.rewivse-item');
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

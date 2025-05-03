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

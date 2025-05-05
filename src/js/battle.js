const imageGirl = document.querySelector('#battle-girl');
const section = document.querySelector('#battle');
const imageBoy = document.querySelector('#battle-boy');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        imageGirl.setAttribute('data-show', 'true');
        setTimeout(() => {
          imageBoy.setAttribute('data-show', 'true');
        }, 1200);
        observer.disconnect();
      }
    });
  },
  {
    threshold: 0.3,
  }
);

observer.observe(section);

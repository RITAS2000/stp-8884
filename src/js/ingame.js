import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

Swiper.use([Navigation, Keyboard]);

const swiper = new Swiper('[data-swiper="ingame"]', {
  slidesPerView: 1,
  spaceBetween: 24,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '[data-arrow="next"]',
    prevEl: '[data-arrow="prev"]',
  },
  a11y: true,
  breakpoints: {
    1200: {
      slidesPerView: 2.5,
    },
  },
});

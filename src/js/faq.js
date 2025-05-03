import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const faq = new Accordion('#faq-accordion-container', {
  duration: 500,
  elementClass: 'faq-item',
  triggerClass: 'faq-button',
  panelClass: 'faq-text-container',
});
faq.open(0);

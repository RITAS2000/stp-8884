document.addEventListener('DOMContentLoaded', () => {
const modal = document.getElementById('cookieModal');
  const accept = document.getElementById('acceptCookies');
  const decline = document.getElementById('declineCookies');
  const close = document.getElementById('svgClose');

    const consent = localStorage.getItem('cookieConsent');
    
    if (!consent) {
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden';
    }
    function hideModal(choice) {
        localStorage.setItem('cookieConsent', choice)
        modal.style.display = 'none'
         document.body.style.overflow = ''
    }
 accept.addEventListener('click', () => hideModal('accepted'));
  decline.addEventListener('click', () => hideModal('declined'));
  close.addEventListener('click', () => hideModal('closed'));
})

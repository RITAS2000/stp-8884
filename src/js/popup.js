// document.addEventListener('DOMContentLoaded', () => {
//   const modal = document.getElementById('cookieModal');
//   const accept = document.getElementById('acceptCookies');
//   const decline = document.getElementById('declineCookies');

//   const consent = localStorage.getItem('cookieConsent');

//   if (consent !== 'accepted' && consent !== 'declined') {
//     modal.style.display = 'block';
//     document.body.style.overflow = 'hidden';
//   }
//   function hideModal(choice) {
//     localStorage.setItem('cookieConsent', choice);
//     modal.style.display = 'none';
//     document.body.style.overflow = '';
//   }
//   accept.addEventListener('click', () => hideModal('accepted'));
//   decline.addEventListener('click', () => hideModal('declined'));
// });
const modal = document.getElementById('cookieModal');
const acceptBtn = document.getElementById('acceptCookies');
const declineBtn = document.getElementById('declineCookies');
window.addEventListener('DOMContentLoaded', () => {
  const consent = localStorage.getItem('buttonClicked');

  if (!consent) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  const handleButtonClick = buttonId => {
    localStorage.setItem('buttonClicked', buttonId);
    modal.style.display = 'none';
    document.body.style.overflow = '';
  };

  acceptBtn.addEventListener('click', () => handleButtonClick('acceptCookies'));
  declineBtn.addEventListener('click', () =>
    handleButtonClick('declineCookies')
  );
});

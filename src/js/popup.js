
window.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('cookieModal');
  const acceptBtn = document.getElementById('acceptCookies');
  const declineBtn = document.getElementById('declineCookies');
  const consent = localStorage.getItem('buttonClicked');

  if (!consent) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
  } else {
    document.body.style.overflow = '';
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

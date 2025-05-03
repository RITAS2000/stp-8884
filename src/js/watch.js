const previewWrapper = document.getElementById('videoPreviewWrapper');
const modal = document.getElementById('videoModal');
const iframe = document.getElementById('videoIframe');
const backdrop = document.getElementById('videoBackdrop');

const videoUrl = 'https://www.youtube.com/embed/Wwge92GWJds?autoplay=1';

previewWrapper.addEventListener('click', () => {
  iframe.src = videoUrl;
  modal.style.display = 'block';
});

backdrop.addEventListener('click', (e) => {
  if (!iframe.contains(e.target)) {
    modal.style.display = 'none';
    iframe.src = ''; // Останавливаем видео
  }
});

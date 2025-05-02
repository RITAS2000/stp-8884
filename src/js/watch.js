const preview = document.getElementById('videoPreviewWrapper');
const wrapper = document.getElementById('videoWrapper');
  
const previewHTML = wrapper.innerHTML

preview.addEventListener('click', () => {
    wrapper.innerHTML = `
    <iframe
    width="100%" 
    src="https://www.youtube.com/embed/Wwge92GWJds?autoplay=1"
    frameborder="0"
     allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    `
})


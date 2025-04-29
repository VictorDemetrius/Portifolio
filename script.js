const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    
    const showImage = () => {
      images.forEach((image, index) => {
        image.style.display = (index === currentIndex) ? 'block' : 'none';
      });
    };

    const nextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    };

    const prevImage = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    };

    carousel.querySelector('.carousel-next').addEventListener('click', nextImage);
    carousel.querySelector('.carousel-prev').addEventListener('click', prevImage);

    // Exibe a primeira imagem inicialmente
    showImage();
  });
});

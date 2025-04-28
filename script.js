// Animação para revelar elementos ao rolar a página
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

// Carrossel para as imagens dos projetos
document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach(carousel => {
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex = 0;
    
    // Função para mostrar a imagem ativa
    const showImage = () => {
      images.forEach((image, index) => {
        image.style.display = (index === currentIndex) ? 'block' : 'none';
      });
    };

    // Avançar para a próxima imagem
    const nextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    };

    // Voltar para a imagem anterior
    const prevImage = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    };

    // Configuração do carrossel
    carousel.querySelector('.carousel-next').addEventListener('click', nextImage);
    carousel.querySelector('.carousel-prev').addEventListener('click', prevImage);

    // Exibe a primeira imagem inicialmente
    showImage();
  });
});

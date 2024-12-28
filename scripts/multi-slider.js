const carousel = document.querySelector('.carousel');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentIndex = 0; // Índice do item atual
const totalItems = carousel.children.length; // Total de itens no carrossel
const visibleItems = 4; // Quantidade de itens visíveis

// Obter largura do item e gap do CSS
const itemStyle = getComputedStyle(carousel.children[0]);
const itemWidth = carousel.children[0].offsetWidth + parseInt(itemStyle.marginRight); // Largura + margem direita

// Função para atualizar o carrossel
function updateCarousel() {
    const offset = -(currentIndex * itemWidth);
    carousel.style.transform = `translateX(${offset}px)`;
}

// Botão "Próximo"
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > totalItems - visibleItems) {
        currentIndex = 0; // Volta ao início
    }
    updateCarousel();
});

// Botão "Anterior"
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalItems - visibleItems; // Vai para o final
    }
    updateCarousel();
});

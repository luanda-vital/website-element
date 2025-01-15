const carousel = document.querySelector('.carousel');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

let currentIndex = 0;
let visibleItems = 4;
let itemWidth = 0;

const updateItemWidth = () => {
  const containerWidth = carousel.parentElement.offsetWidth;
  itemWidth = containerWidth / visibleItems;
  const items = carousel.querySelectorAll('.carousel-item');
  
  items.forEach(item => {
    item.style.width = `${itemWidth}px`;
  });
};

const updateCarousel = () => {
  const offset = -(currentIndex * itemWidth);
  carousel.style.transition = 'transform 0.5s ease';
  carousel.style.transform = `translateX(${offset}px)`;
};

const updateVisibleItems = () => {
  const width = window.innerWidth;

  if (width <= 600) {
    visibleItems = 1;
  } else if (width <= 800) {
    visibleItems = 2;
  } else if (width <= 1000) {
    visibleItems = 3;
  } else {
    visibleItems = 4;
  }
};

const adjustIndex = () => {
  const totalItems = carousel.children.length;
  
  if (currentIndex < 0) {
    currentIndex = totalItems - visibleItems;
  } else if (currentIndex >= totalItems - visibleItems + 1) {
    currentIndex = 0;
  }
};

nextBtn.addEventListener('click', () => {
  currentIndex++;
  adjustIndex();
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  adjustIndex();
  updateCarousel();
});

window.addEventListener('resize', () => {
  updateVisibleItems();
  updateItemWidth();
  updateCarousel();
});

updateVisibleItems();
updateItemWidth();
updateCarousel();

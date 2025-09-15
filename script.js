const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const items = carousel.querySelectorAll('.product-item');
  const btnLeft = carousel.querySelector('.carousel-btn.left');
  const btnRight = carousel.querySelector('.carousel-btn.right');
  const dots = carousel.querySelectorAll('.dot');

  const totalItems = items.length;
  let index = 0;
  const itemWidth = items[0].offsetWidth + 20; // width + gap

  // Function to update dots
  const updateDots = () => {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  };

  // Function to move to a specific index
  const moveToIndex = (i) => {
    track.style.transform = `translateX(-${i * itemWidth}px)`;
    index = i;
    updateDots();
  };

  // Arrow buttons
  btnLeft.addEventListener('click', () => {
    index = (index - 1 + totalItems) % totalItems;
    moveToIndex(index);
    resetAutoSlide();
  });

  btnRight.addEventListener('click', () => {
    index = (index + 1) % totalItems;
    moveToIndex(index);
    resetAutoSlide();
  });

  // Dots clickable
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      moveToIndex(i);
      resetAutoSlide();
    });
  });

  // Auto-slide
  let autoSlide = setInterval(() => {
    index = (index + 1) % totalItems;
    moveToIndex(index);
  }, 3000);

  const resetAutoSlide = () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
      index = (index + 1) % totalItems;
      moveToIndex(index);
    }, 3000);
  };
});

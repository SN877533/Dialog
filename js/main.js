 // ===== Слайдер Выбора персонажа =====
const characterSlider = document.querySelector('.character-slider');
if (characterSlider) {
  new Swiper(characterSlider, {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: false,
    centeredSlides: false,   
  });
}

 // ===== Слайдер Выбора одежды и фона =====
 const clothesSlider = document.querySelector('.clothes-slider');
 if (clothesSlider) {
   new Swiper(clothesSlider, {
    slidesPerView: 3,    
    spaceBetween: 24,
    loop: true,            
    centeredSlides: true,  
  
    //  Navigation arrows
    navigation: {
      nextEl: '.swiper-arrow--next',
      prevEl: '.swiper-arrow--prev',
        },
    });
}

// ===== Слайдер Выбора сценария =====
const selectionSlider = document.querySelector('.selection-slider');
 if (selectionSlider) {
   new Swiper(selectionSlider, {
    slidesPerView: 3,    
    spaceBetween: 39,
    loop: true,            
    centeredSlides: true,  
  
    //  Navigation arrows
    navigation: {
      nextEl: '.swiper-arrow--next',
      prevEl: '.swiper-arrow--prev',
        },
    });
}

// вариант в data атрибутами.  не работает
// document.querySelectorAll('.swiper').forEach(slider => {
//     const images = JSON.parse(slider.dataset.images);
//     const autoplay = slider.dataset.autoplay === 'false' ? false : parseInt(slider.dataset.autoplay);
//     const slidesPerView = parseInt(slider.dataset.slidesPerView) || 1; // по умолчанию 1

//     const wrapper = slider.querySelector('.swiper-wrapper');
//     images.forEach(src => {
//       wrapper.innerHTML += `<div class="swiper-slide"><img src="${src}" alt="slide"></div>`;
//     });
    
//     // Если используете библиотеку Swiper
//     new Swiper(slider, {
//       autoplay: autoplay,
//       slidesPerView: slidesPerView, // берём из data-атрибута
//     });
//   });
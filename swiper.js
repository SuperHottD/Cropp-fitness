const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // Отображаем 1 слайд
    spaceBetween: 50, // Промежуток между слайдами
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Возможность кликать по пагинации
    },
    loop: true, // Зацикливание слайдов
});
document.addEventListener('DOMContentLoaded', () => {
    const bestSlider = new Swiper('.best__slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.best-nav-next',
            prevEl: '.best-nav-prev',
        }
    })

    const salesSlider = new Swiper('.sales__swiper', {
        slidesPerView: 2.2,
        spaceBetween: 20,
        navigation: {
            prevEl: '.sales-prev',
            nextEl: '.sales-next',
        }
    })

    const feedBack = new Swiper('.feedback__slider', {
        slidesPerView: 2.8,
        spaceBetween: 20,
        navigation: {
            prevEl: '.feedback-btn-prev',
            nextEl: '.feedback-btn-next',
        }
    })

    const scrollTriggers = document.querySelectorAll('[data-goto]');

    if (scrollTriggers.length != 0) {
        scrollTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();

                const selector = trigger.getAttribute('data-goto');
                const targetElement = document.querySelector(selector);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    console.warn(`Элемент с селектором "${selector}" не найден`);
                }
            });
        });
    }



    function openPopup(popup) {
        if (popup) {
            popup.classList.add('active');
            document.body.style.overflow = 'hidden'; // блокируем скролл страницы
        }
    }

    function closePopup(popup) {
        if (popup) {
            popup.classList.remove('active');
            document.body.style.overflow = ''; // возвращаем скролл
        }
    }

    // Инициализация попапов
    const callPopupButtons = document.querySelectorAll('.call-popup');
    const popups = document.querySelectorAll('.popup');

    // Открытие попапа по клику на триггер
    if (callPopupButtons.length != 0) {
        callPopupButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const popup = document.querySelector('.popup');
                openPopup(popup);
            });
        });

        // Закрытие по клику на кнопку закрытия
        popups.forEach(popup => {
            const closeBtn = popup.querySelector('.popup-close-btn');

            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    closePopup(popup);
                });
            }

            // Закрытие по клику вне попапа
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    closePopup(popup);
                }
            });
        });

        // Закрытие по нажатию Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                popups.forEach(popup => {
                    if (popup.classList.contains('active')) {
                        closePopup(popup);
                    }
                });
            }
        });
    }
})
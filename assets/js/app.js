document.addEventListener('DOMContentLoaded', () => {

    const burgerBtn = document.querySelector('.burger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (burgerBtn && mobileMenu) {

        burgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();

            if (burgerBtn.classList.contains('active')) {
                CloseMenu();
            } else {
                OpenMenu();
            }
        });

        document.addEventListener('click', (e) => {
            if (
                mobileMenu.classList.contains('active') &&
                !mobileMenu.contains(e.target) &&
                !burgerBtn.contains(e.target)
            ) {
                CloseMenu();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                CloseMenu();
            }
        });
    }

    function OpenMenu() {
        burgerBtn.classList.add('active');
        mobileMenu.classList.add('active');
    }

    function CloseMenu() {
        burgerBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
    }


    const bestSlider = new Swiper('.best__slider', {
        spaceBetween: 20,
        navigation: {
            nextEl: '.best-nav-next',
            prevEl: '.best-nav-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            620: {
                slidesPerView: 2.2,
            },
            920: {
                slidesPerView: 3.2,
            },
            1200: {
                slidesPerView: 4,
            }

        }
    })

    const salesSlider = new Swiper('.sales__swiper', {
        slidesPerView: 2.2,
        spaceBetween: 20,
        navigation: {
            prevEl: '.sales-prev',
            nextEl: '.sales-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
            },
            920: {
                slidesPerView: 1.5,
            },
            1200: {
                slidesPerView: 2.2,
            },
        }
    })

    const feedBack = new Swiper('.feedback__slider', {
        slidesPerView: 2.8,
        spaceBetween: 20,
        navigation: {
            prevEl: '.feedback-btn-prev',
            nextEl: '.feedback-btn-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            920: {
                slidesPerView: 2.2,
            },
            1200: {
                slidesPerView: 2.8,
            }

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

const dynamicAdaptive = new DynamicAdaptive('max');
dynamicAdaptive.init();
/**
 * @file Implementation of the slider block
 */

/* global Swiper */

// ---------------------------- BEGIN PUBLIC METHODS --------------------------
/**
 * Initialize the slider module.
 * @return true;
 */
export const initModule = function() {
    $('.slider').each(function() {
        const $slider = $(this);
        const $container = $slider.find('.slider__container');
        const $nextArrow = $slider.find('.slider__arrow_next');
        const $prevArrow = $slider.find('.slider__arrow_prev');
        const $pagination = $slider.find('.slider__pagination');

        new Swiper($container.get(0), {
            autoplay: {
                delay: 5000,
            },
            effect: 'fade',
            loop: true,
            
            navigation: {
                nextEl: $nextArrow.get(0),
                prevEl: $prevArrow.get(0),
            },

            pagination: {
                el: $pagination.get(0),
                clickable: true,
                bulletClass: 'slider__bullet',
                bulletActiveClass: 'slider__bullet_active',
                modifierClass: 'slider__pagination_',
                clickableClass: 'slider__pagination_clickable',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' 
                        + '<span class="slider__bullet-inner"></span>'
                        + '</span>';
                },
            },
        });
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

/**
 * @file Implementation of the carousel block
 */

/* global Swiper */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the carousel module.
 * @return true;
 */
export const initModule = function() {
    $('.carousel').each(function() {
        const $carousel  = $(this);
        const $pagination = $carousel.find('.carousel__pagination');

        new Swiper($carousel.get(0), {
            pagination: {
                el: $pagination.get(0),
                clickable: true,
                bulletClass: 'carousel__bullet',
                bulletActiveClass: 'carousel__bullet_active',
                modifierClass: 'carousel__pagination_',
                clickableClass: 'carousel__pagination_clickable',
            },
            slidesPerColumn: $carousel.hasClass('carousel_2-rows')
                ? 2
                : 1,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,

            breakpointsInverse: true,
            breakpoints: $carousel.hasClass('carousel_4-cols') ? {
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 30
                },
                1170: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                }
            } : {
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                992: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 30
                }
            }
        });
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

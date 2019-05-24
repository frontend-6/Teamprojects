/**
 * @file Implementation of the product carousel block
 * @author Andrey Glotov
 */

/* global Swiper */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the product carousel module.
 * @return true;
 */
export const initModule = function() {
    $('.product-carousel').each(function() {
        const $gallery = $(this);
        const $pagination = $gallery.find('.product-carousel__pagination');

        new Swiper($gallery.get(0), {
            spaceBetween: 20,
            centeredSlides: true,
            slidesPerView: 1,
            watchSlidesVisibility: true,

            pagination: {
                el: $pagination.get(0),
                clickable: true,
                bulletClass: 'product-carousel__bullet',
                bulletActiveClass: 'product-carousel__bullet_active',
                modifierClass: 'product-carousel__pagination_',
                clickableClass: 'product-carousel__pagination_clickable',
            },

            breakpointsInverse: true,
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },
            }
        });
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

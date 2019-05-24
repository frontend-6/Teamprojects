/**
 * @file Implementation of the testimonials block
 */

/* global Swiper */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the testimonials module.
 * @return true;
 */
export const initModule = function() {
    $('.testimonials').each(function() {
        const $testimonials = $(this);
        const $container = $testimonials.find('.testimonials__container');
        const $pagination = $testimonials.find('.testimonials__pagination');

        new Swiper($container.get(0), {
            loop: true,
            pagination: {
                el: $pagination.get(0),
                clickable: true,
                bulletClass: 'testimonials__bullet',
                bulletActiveClass: 'testimonials__bullet_active',
                modifierClass: 'testimonials__pagination_',
                clickableClass: 'testimonials__pagination_clickable',
            }
        });
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

/**
 * @file Implementation of the post gallery block
 * @author Andrey Glotov
 */

/* global Swiper */

// -------------------------- BEGIN MODULE VARIABLES --------------------------
const galleries = [];
// --------------------------- END MODULE VARIABLES ---------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the post gallery module.
 * @return true;
 */
export const initModule = function() {
    $('.post-gallery').each(function() {
        const $gallery = $(this);
        const $container = $gallery.find('.swiper-container');
        const $nextArrow = $gallery.find('.post-gallery__arrow_next');
        const $prevArrow = $gallery.find('.post-gallery__arrow_prev');

        galleries.push(new Swiper($container.get(0), {
            loop: true,
            
            navigation: {
                nextEl: $nextArrow.get(0),
                prevEl: $prevArrow.get(0),
            },
        }));
    });

    return true;
};

export const handleResize = function() {
    galleries.forEach((gallery) => gallery.update());
};
// ---------------------------- END PUBLIC METHODS ----------------------------

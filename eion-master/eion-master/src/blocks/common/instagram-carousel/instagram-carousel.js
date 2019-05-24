/**
 * @file Implementation of the instagram feed carousel block
 * @author Andrey Glotov
 */

/* global Swiper */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize a single instagram feed carousel block.
 * @return true;
 */
export const initBlock = function($container) {
    new Swiper($container.get(0), {
        loop: true,
        slidesPerView: 2,
        breakpointsInverse: true,
        breakpoints: {
            '480': {slidesPerView: 4},
            '768': {slidesPerView: 5},
            '992': {slidesPerView: 6},
            '1200': {slidesPerView: 8},
        },
    });
};

/**
 * Initialize the instagram feed carousel module.
 * @return true
 */
export const initModule = function() {
    $('.instagram-carousel').each(function() {
        initBlock($(this));
    });
    
    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

/**
 * @file Implementation of the product block
 * @author Andrey Glotov
 */

// --------------------------- BEGIN EVENT HANDLERS ---------------------------
const onProductOverlayFocusin = function() {
    $(this).addClass('product__thumb-overlay_has-focus');
};

const onProductOverlayFocusout = function() {
    $(this).removeClass('product__thumb-overlay_has-focus');
};
// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize a single product block.
 */
export const initBlock = function($container) {
    const $overlay = $container.find('.product__thumb-overlay');

    // Simulate the :focus-within pseudo-class
    $overlay.on({
        focusin: onProductOverlayFocusin,
        focusout: onProductOverlayFocusout,
    });
};

/**
 * Initialize the product module.
 * @return true
 */
export const initModule = function() {
    $('.product').each(function() {
        initBlock($(this));
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

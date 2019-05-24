/**
 * @file Implementation of the header block
 * @author Andrey Glotov
 */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the header module.
 * @return true
 */
export const initModule = function() {
    const $page = $('.page');
    const $header = $('.header');
    const $navToggle = $header.find('.header__nav-toggle');
    const $searchToggle = $header.find('.header__search-toggle');

    // Use a global event to show the side menu.
    $navToggle.click(function() {
        $page.trigger('sidenav-show');
    });

    // Use a global event to show the search modal.
    $searchToggle.click(function() {
        $page.trigger('search-show');
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

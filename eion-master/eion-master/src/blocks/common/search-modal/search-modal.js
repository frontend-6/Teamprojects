/**
 * @file Implementation of the search modal block
 * @author Andrey Glotov
 */

/* global focusTrap */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the search modal module.
 * @return true if the module is present, false otherwise
 */
export const initModule = function() {
    const $page  = $('.page');
    const $modal = $('.search-modal');
    const $close = $modal.find('.search-modal__close');

    if ($modal.length == 0) {
        return false;
    }

    const trap = new focusTrap($modal.get(0), {
        clickOutsideDeactivates: true,
        escapeDeactivates: true,
        onDeactivate() {
            $modal
                .removeClass('search-modal_visible')
                .attr('aria-hidden', 'true');
        },
    });

    $close.click(function hideSearchModal() {
        trap.deactivate();
    });

    // Listen for a global event to show the modal
    $page.on('search-show', function showSearchModal() {
        $modal
            .addClass('search-modal_visible')
            .attr('aria-hidden', 'false')
            .scrollTop(0);

        setTimeout(() => {
            trap.activate();
        }, 100);
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

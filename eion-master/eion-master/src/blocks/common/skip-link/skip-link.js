/**
 * @file Implementation of the skip link block
 */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the skip link module.
 * @return true;
 */
export const initModule = function() {
    $('.skip-link').click(function onSkipLinkClick(event) {
        event.preventDefault();

        const targetId = $(this).attr('href');
        const $target  = $(targetId);
        if ($target.length === 0) {
            return;
        }

        $('html, body').animate({
            scrollTop: Math.max(0, $target.offset().top),
        }, 600, 'swing', function() {
            $target.focus();
        });
    });
    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

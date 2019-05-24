/**
 * @file Implementation of the back to top block
 */

// ---------------------------- BEGIN PUBLIC METHODS --------------------------
/**
 * Initialize the back to top module.
 * @return true;
 */
export const initModule = function() {
    $('.back-to-top').click(function onBackToTopClick(event) {
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

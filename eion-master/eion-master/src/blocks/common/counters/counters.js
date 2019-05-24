/**
 * @file Implementation of the counters block
 * @author Andrey Glotov
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------
const $window = $(window);

let unseenCounters = [];
// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------
const formatValue = function formatValue(val) {
    // Use a comma to separate groups of thousands
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const checkInViewport = function checkInViewport($counters) {
    const elementTop    = $counters.offset().top;
    const elementBottom = elementTop + $counters.outerHeight();

    const windowTop    = $window.scrollTop();
    const windowBottom = windowTop + $(window).innerHeight();

    return (windowBottom > elementTop) && (windowTop < elementBottom); 
};
// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------
const startCounters = function startCounters($counters) {
    $counters.each(function() {
        const $counter = $(this);
        const $value   = $counter.find('.counters__value');

        $counter.prop('Counter', 0).animate({
            Counter: $counter.data('value')
        }, {
            duration : 2500,
            easing   : 'swing',

            step(now) { 
                $value.text(formatValue(Math.ceil(now)));
            }
        });
    });
};
// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the counters module.
 * @return true;
 */
export const initModule = function() {
    $('.counters__counter').each(function() {
        unseenCounters.push($(this));
    });
    return true;
};

/**
 * Handle window scroll event.
 */
export const handleScroll = function() {
    unseenCounters = unseenCounters.filter(function($counters) {
        // Start counters when they scroll into view
        if (checkInViewport($counters)) {
            startCounters($counters);
            return false;
        }
        return true;
    });
};
// ---------------------------- END PUBLIC METHODS ----------------------------

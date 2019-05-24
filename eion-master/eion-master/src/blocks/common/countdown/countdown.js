/**
 * @file Implementation of the countdown block
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------
// TODO: add code here
// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------
// TODO: add code here
// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------
// TODO: add code here
// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------
// TODO: add code here
// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the countdown module.
 * @return true;
 */
export const initModule = function() {
    $('.countdown').each(function() {
        const $countdown = $(this);
        const $days      = $countdown.find('.countdown__num_days');
        const $hours     = $countdown.find('.countdown__num_hours');
        const $mins      = $countdown.find('.countdown__num_mins');
        const $secs      = $countdown.find('.countdown__num_secs');

        const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

        $countdown.countdown(nextWeek, function(event) {
            const formattedDate = event.strftime('%D %H %M %S');
            const [days, hours, mins, secs] = formattedDate.split(' ');

            $days.text(days);
            $hours.text(hours);
            $mins.text(mins);
            $secs.text(secs);
        });
    });
    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

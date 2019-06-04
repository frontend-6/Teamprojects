/**
 * @file Implementation of the advantage block
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
 * Initialize the advantage block.
 * @return true if the block is present on the page, false otherwise
 */
function initBlock() {
    // TODO: add code here
    $('.advantage__slider').slick({
        arrows: false,
        dots: true
    });
    return true;
}
// ---------------------------- END PUBLIC METHODS ----------------------------

export default {
    initBlock,
};

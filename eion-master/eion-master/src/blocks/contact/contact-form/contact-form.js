/**
 * @file Implementation of the contact form block
 * @author Andrey Glotov
 */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the contact form module.
 * @return true
 */
export const initModule = function() {
    const $form    = $('.contact-form');

    $form.validate({
        errorClass  : 'error form-fields__error',
        highlight   : Function.prototype,
        unhighlight : Function.prototype,
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
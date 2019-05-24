/**
 * @file Implementation of the quantity block
 */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the quantity module.
 * @return true
 */
export const initModule = function() {
    $('.qty').each(function() {
        const $qty      = $(this);
        const $input    = $qty.find('.qty__input');
        const $plusBtn  = $qty.find('.qty__btn_plus');
        const $minusBtn = $qty.find('.qty__btn_minus');

        $plusBtn.click(function onQtyPlusClick() {
            $input.val(+$input.val() + 1);
        });
        $minusBtn.click(function onQtyMinusClick() {
            $input.val(Math.max($input.val() - 1, 0));
        });
    });
    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

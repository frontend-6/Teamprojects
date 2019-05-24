/**
 * @file Implementation of the language menu block
 * @author Andrey Glotov
 */

import {makeDropdown} from '../../../js/utils';

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the language menu module.
 * @return true
 */
export const initModule = function() {
    const $langMenu = $('.lang-menu');
    const $toggle = $('.lang-menu__toggle');

    makeDropdown($langMenu, $toggle, {
        hoverToggles: true,
        onToggle: function onShareToggle(open) {
            $toggle.attr('aria-expanded', String(open));
            $langMenu.toggleClass('lang-menu_visible', open);
        },
    });
};
// ---------------------------- END PUBLIC METHODS ----------------------------
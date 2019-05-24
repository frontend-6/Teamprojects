/**
 * @file Implementation of the share block
 * @author Andrey Glotov
 */

import {makeDropdown} from '../../../js/utils';

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize a share block.
 */
export const initBlock = function($container) {
    const $toggle = $container.find('.share__toggle');
    const $menu = $container.find('.share__menu');

    makeDropdown($container, $toggle, {
        hoverToggles: true,
        onToggle: function onShareToggle(open) {
            $toggle.attr('aria-expanded', String(open));
            $menu.toggleClass('share__menu_visible', open);
        },
    });
};

/**
 * Initialize the share module.
 * @return true
 */
export const initModule = function() {
    $('.share').each(function() {
        initBlock($(this));
    });
    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

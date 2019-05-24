/**
 * @file Implementation of the accordion block
 * @author Andrey Glotov
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------
const KEY_END   = 35;
const KEY_HOME  = 36;
const KEY_UP    = 38;
const KEY_DOWN  = 40;

const accordionProto = {
    _togglePanel(nextIndex) {
        if (nextIndex == this._activeIndex) {
            return;
        }

        const $prevHeader = this._$headers.eq(this._activeIndex);
        const $prevPanel = this._$panels.eq(this._activeIndex);
        const $nextHeader = this._$headers.eq(nextIndex);
        const $nextPanel = this._$panels.eq(nextIndex);

        $prevPanel.slideUp();
        $prevHeader
            .removeClass('accordion__header_active')
            .attr('aria-expanded', 'false');

        $nextPanel.slideDown();
        $nextHeader
            .addClass('accordion__header_active')
            .attr('aria-expanded', 'true');

        this._activeIndex = nextIndex;
    },

    firstTab() {
        this.focusTab(0);
    },

    lastTab() {
        this.focusTab(this._$headers.length - 1);
    },

    prevTab(event) {
        let nextIndex = $(event.target).parent().index('.accordion__header') - 1;
        if (nextIndex < 0) {
            nextIndex = this._$headers.length - 1;
        }

        this.focusTab(nextIndex);
    },

    nextTab(event) {
        let nextIndex = $(event.target).parent().index('.accordion__header') + 1;
        if (nextIndex >= this._$headers.length) {
            nextIndex = 0;
        }

        this.focusTab(nextIndex);
    },

    focusTab(nextIndex) {
        this._$headers.eq(nextIndex).find('.accordion__toggle').focus();
    },

    _onKeydown(event) {
        if (event.which in keyActions) {
            event.preventDefault();
            keyActions[event.which].call(this, event);
        }
    }
};

const keyActions = {
    [KEY_END]   : accordionProto.lastTab,
    [KEY_HOME]  : accordionProto.firstTab,
    [KEY_UP]    : accordionProto.prevTab,
    [KEY_DOWN]  : accordionProto.nextTab,
};
// --------------------------- END MODULE VARIABLES ---------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
export const initBlock = function($container) {
    const accordion = Object.create(accordionProto);

    accordion._$headers = $container.find('.accordion__header');
    accordion._$panels = $container.find('.accordion__content');
    accordion._activeIndex = 0;

    accordion._$panels.eq(0).show();

    accordion._onKeydown = accordion._onKeydown.bind(accordion);

    $container.find('.accordion__toggle').each(function(i) {
        $(this).click(accordion._togglePanel.bind(accordion, i));
        $(this).keydown(accordion._onKeydown);
    });

    return accordion;
};

/**
 * Initialize the accordion module.
 * @return true;
 */
export const initModule = function() {
    $('.accordion').each(function() {
        initBlock($(this));
    });
    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

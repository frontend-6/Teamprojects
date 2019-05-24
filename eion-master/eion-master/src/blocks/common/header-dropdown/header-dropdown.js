/**
 * @file Implementation of the header dropdown block
 */

/* global focusTrap */

// -------------------------- BEGIN MODULE VARIABLES --------------------------
const TABLET_BREAKPOINT = 768; // Minimum tablet screen width

const KEY_ESC = 27;
const KEY_SPACE = 32;

let isMobile = true;
const dropdowns = [];
// --------------------------- END MODULE VARIABLES ---------------------------

// --------------------------- BEGIN BLOCK PROTOTYPE --------------------------
const dropdownProto = {
    _onOutsideClick(event) {
        const target = event.target;
        if (!(
            target === document
            || this._$container.is($(target))
            || $.contains(this._$container.get(0), target)
        )) {
            this.toggle(false);
        }
    },

    _onToggleClick() {
        this.toggle(!this._isExpanded);
    },

    _onToggleKeydown(event) {
        if (event.which === KEY_SPACE) {
            event.preventDefault();
            this.toggle(!this._isExpanded);
        }
    },

    _onToggleKeyup(event) {
        if (event.which === KEY_SPACE) {
            event.preventDefault();
        }
    },

    _onKeydown(event) {
        if (event.which === KEY_ESC) {
            this.toggle(false);
            this._$toggle.focus();
        }
    },

    _onMouseenter() {
        this.toggle(true);
    },
    
    _onMouseleave() {
        this.toggle(false);
    },

    _onCloseClick() {
        this.toggle(false);
    },

    toggle(open) {
        this._isExpanded = open;

        if (open) {
            setTimeout(() => {
                if (!isMobile) {
                    $(document).on({
                        'click': this._onOutsideClick,
                        'focusin': this._onOutsideClick
                    });
                    this._$container.on('keydown', this._onKeydown);
                } else {
                    this._focusTrap.activate();
                }
            }, 0);
        } else {
            setTimeout(() => {
                if (!isMobile) {
                    $(document).off({
                        'click': this._onOutsideClick,
                        'focusin': this._onOutsideClick
                    });
                    this._$container.off('keydown', this._onKeydown);
                } else {
                    this._focusTrap.deactivate();
                }
            }, 0);
        }

        this._$container.toggleClass('header-dropdown_visible', open);
        this._$toggle.attr('aria-expanded', String(open));
    },

    _onTrapDeactivate() {
        this.toggle(false);
    },

    mobileMode() {
        this._$container.off({
            mouseenter: this._onMouseenter,
            mouseleave: this._onMouseleave,
        });
    },

    desktopMode() {
        this._$container.on({
            mouseenter: this._onMouseenter,
            mouseleave: this._onMouseleave,
        });
    },
};
// ---------------------------- END BLOCK PROTOTYPE ---------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize a single header dropdown block.
 * @return An instance of the dropdown block
 */
export const initBlock = function($container) {
    const $toggle = $container.find('.header-dropdown__toggle');
    const $popover = $container.find('.header-dropdown__popover');
    const $close = $container.find('.header-dropdown__close');

    const drop = Object.create(dropdownProto);

    drop._$container = $container;
    drop._$toggle = $toggle;
    drop._$popover = $popover;
    drop._$close = $close;

    // Bind the event handlers
    drop._onOutsideClick = drop._onOutsideClick.bind(drop);
    drop._onToggleClick = drop._onToggleClick.bind(drop);
    drop._onToggleKeydown = drop._onToggleKeydown.bind(drop);
    drop._onToggleKeyup = drop._onToggleKeyup.bind(drop);
    drop._onKeydown = drop._onKeydown.bind(drop);
    drop._onMouseenter = drop._onMouseenter.bind(drop);
    drop._onMouseleave = drop._onMouseleave.bind(drop);
    drop._onTrapDeactivate = drop._onTrapDeactivate.bind(drop);
    drop._onCloseClick = drop._onCloseClick.bind(drop);

    $toggle.on({
        'click': drop._onToggleClick,
        'keydown': drop._onToggleKeydown,
        'keyup': drop._onToggleKeyup,
    });

    $close.click(drop._onCloseClick);

    drop._focusTrap = new focusTrap($popover.get(0), {
        clickOutsideDeactivates: true,
        escapeDeactivates: true,
        onDeactivate: drop._onTrapDeactivate,
    });

    // Mobile-first, activate the mobile mode by default
    drop.mobileMode();

    dropdowns.push(drop);

    return drop;
};

/**
 * Initialize the header dropdown module.
 * @return true
 */
export const initModule = function() {
    $('.header-dropdown').each(function() {
        initBlock($(this));
    });

    return true;
};

/**
 * Respond to window resize event.
 */
export const handleResize = function() {
    if (!isMobile && ($(window).outerWidth() < TABLET_BREAKPOINT)) {
        // On mobile screens, disable the dropdown behavior of submenus and
        // enable the modal behavior
        dropdowns.forEach(function(drop) {
            drop.toggle(false);
            drop.mobileMode();
        });

        isMobile = true;
    } else if (isMobile && ($(window).outerWidth() >= TABLET_BREAKPOINT)) {
        // On desktop screens, disable the modal behavior of submenus and enable
        // the dropdown behavior
        dropdowns.forEach(function(drop) {
            drop.toggle(false);
            drop.desktopMode();
        });

        isMobile = false;
    }
};
// ---------------------------- END PUBLIC METHODS ----------------------------

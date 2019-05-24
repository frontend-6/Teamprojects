/**
 * @file Implementation of the vertical menu block
 * @author Andrey Glotov
 */

/* global focusTrap */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the vertical menu module.
 * @return true
 */
export const initModule = function() {
    const $page = $('.page');
    const $nav = $('.side-nav');
    const $drawer = $nav.find('.side-nav__drawer');
    const $close = $drawer.find('.side-nav__close');
    const $submenus = $drawer.find('.side-nav__menu_submenu');
    const $searchForm = $drawer.find('.side-nav__search');
    const $searchInput = $searchForm.find('.side-nav__search-input');

    const closeSidenavSubmenu = function($submenu) {
        $submenu
            .slideUp()
            .prev('.side-nav__menu-link')
            .attr('aria-expanded', 'false');
    };

    const trap = focusTrap($drawer.get(0), {
        clickOutsideDeactivates: true,
        escapeDeactivates: true,
        onDeactivate: function() {
            closeSidenavSubmenu($submenus);

            $nav
                .attr('aria-hidden', 'true')
                .removeClass('side-nav_visible');
        },
    });

    $close.click(function closeSidenav() {
        trap.deactivate();
    });

    // Listen for a global event to show the menu
    $page.on('sidenav-show', function showSidenav() {
        $nav
            .attr('aria-hidden', 'false')
            .addClass('side-nav_visible');

        trap.activate();
    });

    $submenus.prev('.side-nav__menu-link').click(function toggleSubmenu() {
        const $link = $(this);
        const $parentItem = $link.closest('.side-nav__menu-item');

        // If the submenu is expanded, collapse it. Otherwise, expand the
        // submenu but collapse all its siblings.
        if ($link.attr('aria-expanded') === 'true') {
            closeSidenavSubmenu($parentItem.find('.side-nav__menu_submenu'));
        } else {
            closeSidenavSubmenu($parentItem
                .siblings('.side-nav__menu-item')
                .find('.side-nav__menu_submenu'));

            $link.attr('aria-expanded', 'true');
            $link.next('.side-nav__menu_submenu').slideDown();
        }
    });

    $searchInput.focus(function onSidenavSearchFocus() {
        $searchForm.addClass('side-nav__search_focused');
        
        $searchInput.blur(function onSidenavSearchBlur() {
            $searchForm.removeClass('side-nav__search_focused');
        });
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

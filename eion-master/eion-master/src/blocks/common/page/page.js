/**
 * @file Implementation of the page block
 * @author Andrey Glotov
 */

import * as BackToTop from '../back-to-top/back-to-top';
import * as Countdown from '../countdown/countdown';
import * as Header from '../header/header';
import * as HeaderDropdown from '../header-dropdown/header-dropdown';
import * as InstagramCarousel from '../instagram-carousel/instagram-carousel';
import * as LangMenu from '../lang-menu/lang-menu';
import * as PostGallery from '../post-gallery/post-gallery';
import * as Carousel from '../carousel/carousel';
import * as ProductCarousel from '../product-carousel/product-carousel';
import * as SearchModal from '../search-modal/search-modal';
import * as Share from '../share/share';
import * as SkipLink from '../skip-link/skip-link';
import * as SideNav from '../side-nav/side-nav';
import * as Tabs from '../tabs/tabs';
import * as Qty from '../qty/qty';
import * as Counters from '../counters/counters';
import * as Product from '../product/product';
import * as Slider from '../../index/slider/slider';

import * as BlogComments from '../../blog/blog-comments/blog-comments';

import * as Checkout from '../../shop/checkout/checkout';
import * as Payment from '../../shop/payment/payment';
import * as ReviewForm from '../../shop/review-form/review-form';
import * as ProductScroll from '../../shop/product-scroll/product-scroll';
import * as ProductGallery from '../../shop/product-gallery/product-gallery';

import * as Testimonials from '../../about/testimonials/testimonials';

import * as Map from '../../contact/map/map';
import * as ContactForm from '../../contact/contact-form/contact-form';

import * as Accordion from '../../faq/accordion/accordion';

// -------------------------- BEGIN MODULE VARIABLES --------------------------
const STICKY_HEADER_OFFSET  = 300; // Scroll offset to make the header "sticky"
const VISIBLE_HEADER_OFFSET = 600; // Scroll offset to show the "sticky" header
const RESIZE_INTERVAL       = 200; // Resize debouncing interval
const SCROLL_INTERVAL       = 200; // Scroll throttling interval

const HeaderStates = {NORMAL: 0, STICKY: 1, VISIBLE: 2};
let headerState    = HeaderStates.NORMAL;

const $header    = $('.header');
const $backToTop = $('.back-to-top');

let resizeTimer = null;
let scrollTimer = null;
let wasScrolled = false;
// --------------------------- END MODULE VARIABLES ---------------------------

// ---------------------------- BEGIN DOM METHODS -----------------------------
/**
 * Add or remove header classes basd on the current scroll offset to create an
 * animated sticky header effect.
 */
const updateHeaderStyles = function() {
    const offset = $(window).scrollTop();
    const newState = offset < STICKY_HEADER_OFFSET
        ? HeaderStates.NORMAL
        : (offset < VISIBLE_HEADER_OFFSET
            ? HeaderStates.STICKY
            : HeaderStates.VISIBLE);

    if (newState !== headerState) {
        if (newState === HeaderStates.NORMAL) {
            $header
                .removeClass('page__header_scroll')
                .removeClass('page__header_hidden');
            $backToTop.removeClass('page__back-to-top_visible');
        } else if (newState === HeaderStates.STICKY) {
            $header
                .addClass('page__header_scroll')
                .addClass('page__header_hidden');
            $backToTop.removeClass('page__back-to-top_visible');
        } else {
            $header
                .addClass('page__header_scroll')
                .removeClass('page__header_hidden');
            $backToTop.addClass('page__back-to-top_visible');
        }

        headerState = newState;
    }
};
// ----------------------------- END DOM METHODS ------------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------
const onWindowScroll = function() {
    Counters.handleScroll();
    updateHeaderStyles();
};

const onWindowResize = function() {
    HeaderDropdown.handleResize();
    PostGallery.handleResize();
};
// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the page module.
 * @return true
 */
export const initModule = function() {
    $(window).on({
        // Debounce the window resize event.
        resize: function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(onWindowResize, RESIZE_INTERVAL);
        },

        // Throttle the window scroll event.
        scroll: function() {
            if (scrollTimer) {
                // ensure that we catch and execute that last invocation.
                wasScrolled = true;
                return;
            }

            onWindowScroll();

            scrollTimer = this.setTimeout(function() {
                scrollTimer = null;
                if (wasScrolled) {
                    onWindowScroll();
                    wasScrolled = false;
                }
            }, SCROLL_INTERVAL);
        },
    });

    // Initialize blocks.
    BackToTop.initModule();
    Header.initModule();
    HeaderDropdown.initModule();
    InstagramCarousel.initModule();
    LangMenu.initModule();
    PostGallery.initModule();
    Carousel.initModule();
    ProductCarousel.initModule();
    SearchModal.initModule();
    Share.initModule();
    SideNav.initModule();
    SkipLink.initModule();
    Tabs.initModule();
    Qty.initModule();
    Counters.initModule();
    Product.initModule();

    Slider.initModule();
    Countdown.initModule();

    BlogComments.initModule();

    Checkout.initModule();
    Payment.initModule();
    ReviewForm.initModule();
    ProductScroll.initModule();
    ProductGallery.initModule();

    Testimonials.initModule();

    Map.initModule();
    ContactForm.initModule();

    Accordion.initModule();

    // Process the initial window size and scroll position.
    onWindowResize();
    onWindowScroll();

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

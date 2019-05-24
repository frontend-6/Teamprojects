/**
 * @file Implementation of the product gallery block
 */

/* global Swiper */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the shop gallery module.
 * @return true if the block is present, false otherwise
 */
export const initModule = function() {
    const $gallery = $('.product-gallery');
    if ($gallery.length == 0) {
        return false;
    }

    const $content = $gallery.find('.product-gallery__content');
    const $thumbsContainer = $gallery.find('.product-gallery__thumbs');
    const $prevArrow = $gallery.find('.product-gallery__arrow_prev');
    const $nextArrow = $gallery.find('.product-gallery__arrow_next');

    const thumbs = new Swiper($thumbsContainer.get(0), {
        slidesPerView: 3,
        loop: true,

        navigation: {
            nextEl: $nextArrow.get(0),
            prevEl: $prevArrow.get(0),
        },

        breakpointsInverse: true,
        breakpoints: {
            480: {
                slidesPerView: 4,
            },
        },
    });

    const top = new Swiper($content.get(0), {
        effect: 'fade',
        loop: true,
        thumbs: {
            swiper: thumbs,
        }
    });

    $content.magnificPopup({
        type                : 'image',
        delegate            : ':not(.swiper-slide-duplicate) > .product-gallery__content-item .product-gallery__link',
        closeOnContentClick : false,
        mainClass           : 'mfp-zoom-in mfp-img-mobile',

        image               : {
            verticalFit : true,
        },

        gallery             : {
            enabled            : true,
            navigateByImgClick : true,
            preload            : [0, 1],
        },

        removalDelay: 300,

        callbacks: {
            open: function() {
                $.magnificPopup.instance.next = function() {
                    this.wrap.removeClass('mfp-image-loaded');
                    setTimeout(() => {
                        $.magnificPopup.proto.next.call(this);
                    }, 120);
                };

                $.magnificPopup.instance.prev = function() {
                    this.wrap.removeClass('mfp-image-loaded');
                    setTimeout(() => {
                        $.magnificPopup.proto.prev.call(this);
                    }, 120);
                };

                $content.magnificPopup('goTo', top.activeIndex - 1);
            },

            imageLoadComplete: function() {
                setTimeout(() => {
                    this.wrap.addClass('mfp-image-loaded');
                }, 16);
            },

            beforeClose: function() {
                top.slideTo(this.index + 1);
            },
        },
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

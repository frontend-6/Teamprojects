/**
 * @file Implementation of the blog comments block
 * @author Andrey Glotov
 */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the blog comments module.
 * @return true if the block is present, false otherwise
 */
export const initModule = function() {
    const $block = $('.blog-comments');
    if ($block.length === 0) {
        return false;
    }

    const $form = $block.find('.blog-comments__form');
    const $replyTo = $block.find('.blog-comments__reply-to');
    const $formTitle = $block.find('.blog-comments__title').eq(1);
    const $social = $block.find('.blog-comments__social');

    $form.validate({
        errorClass  : 'error form-fields__error',
        highlight   : Function.prototype,
        unhighlight : Function.prototype,
    });

    $block.on('click','.comment__reply-link', function onReplyClick() {
        const id = $(this).closest('.comment').data('id');

        $form
            .prependTo($(this)
                .closest('.comment')
                .find('.comment__replies')
                .first());

        $replyTo.val(id);

        $formTitle.remove();
        $social.remove();

        $('html, body').animate({
            scrollTop: $form.offset().top - 100
        }, 400, function() {
            $('.form-group__input:first', $form).focus();
        });
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------

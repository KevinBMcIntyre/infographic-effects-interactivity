var $body = $('body');

$(function() {
    $('li a').click(function(e) {
        var $this = $(this);
        $this.closest('ul').find('.color').removeClass('color');
        $this.parent().addClass('color');
    });
});

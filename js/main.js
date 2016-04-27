var $body = $('body');
var $way = $('.way');

$(function () {
  $('li a').click(function (e) {
    var $this = $(this);

    $this.closest('ul').find('.color').removeClass('color');
    $this.parent().addClass('color');
  });
});

$way.waypoint(function (direction) {
	if (direction == 'down') {
		$way.addClass('way-animate');
	} else {
		$way.removeClass('way-animate');
	}
}, { offset: '80%' });

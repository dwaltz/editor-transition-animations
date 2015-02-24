$(function(){
	var $switch     = $('.switch-buttons .btn-group > .btn');
	var $secHeader  = $('.secondary-header');
	var $newPanel   = $('.new-panel');
	var $newFooter  = $('.new-footer');
	var $catContent = $('.cat-content');

	$switch.on('mousedown', function(ev){
		var $currentTarget = $(ev.currentTarget);

		$switch.removeClass('active');
		$catContent.removeClass('fade-out');
		$currentTarget.addClass('active');

		$secHeader.removeClass('open-1 open-2 open-3 open-4 open-1-pos open-2-pos');
		$newPanel.removeClass('open-1 open-2 open-3 open-4 open-1-pos open-2-pos');
		$newFooter.removeClass('open-1 open-2 open-3 open-4 open-1-pos open-2-pos');

		switch( $currentTarget.data('type') )
		{
			case 1:
				$secHeader.addClass('open-1-pos');
				$newPanel.addClass('open-1-pos');
				$newFooter.addClass('open-1-pos');
				setTimeout(function(){
					$secHeader.addClass('open-1');
					$newPanel.addClass('open-1');
					$newFooter.addClass('open-1');
					$catContent.addClass('fade-out');
				},0);
				break;
			case 2:
				$secHeader.addClass('open-2-pos');
				$newPanel.addClass('open-2-pos');
				$newFooter.addClass('open-2-pos');
				setTimeout(function(){
					$secHeader.addClass('open-2');
					$newPanel.addClass('open-2');
					$newFooter.addClass('open-2');
					$catContent.addClass('fade-out');
				},0);
				break;
			case 3:
				setTimeout(function(){
					$secHeader.addClass('open-3');
					$newPanel.addClass('open-3');
					$newFooter.addClass('open-3');
					$catContent.addClass('fade-out');
				},0);
				break;
			case 4:
				setTimeout(function(){
					$secHeader.addClass('open-4');
					$newPanel.addClass('open-4');
					$newFooter.addClass('open-4');
					$catContent.addClass('fade-out');
				},0);
				break;
		}
	});
});

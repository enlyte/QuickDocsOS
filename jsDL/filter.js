$(document).ready(function () {

	// $('.star').on('click', function () {
  //     $(this).toggleClass('star-checked');
  //   });
  //
  //   $('.ckbox label').on('click', function () {
  //     $(this).parents('tr').toggleClass('selected');
  //   });




	$('.category-filter').on('click', function () {
		var $target = $(this).data('target');
		if ($target != 'all') {
			$('.table tr').css('display', 'none');
			$('.table tr[data-status="' + 'head' + '"]').show();
			$('.table tr[data-status="' + $target + '"]').fadeIn('slow');
		} else {
			$('.table tr').css('display', 'none').fadeIn('slow');
		}
	});


    $('.btn-filter').on('click', function () {
      var $target = $(this).data('target');
      if ($target != 'all') {
        $('.table tr').css('display', 'none');
        $('.table tr[data-status="' + 'head' + '"]').show();
        $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
      } else {
        $('.table tr').css('display', 'none').fadeIn('slow');
      }
    });

 });

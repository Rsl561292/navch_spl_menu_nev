// JavaScript Document
$(document).ready(function () {
$('.show-search').on('click', function(){
            if (false == $('.search-form').is(':visible')) {
                $('.search-form').show(250);
				$('.search-form input').focus();
				$('.search-side').css('border','1px solid #c9c9c9');
            }
            else {
                $('.search-form').hide(250);
				$('.search-side').css('border','0px solid #c9c9c9');
            }
});
});
(function($) {
	$(document).ready(function() {
		$('.faq-accordion').accordion({
          header: '.faq-title',
          heightStyle: 'content'
        });

        $('.tooltip').on('click', function(e) {
        	e.preventDefault();

        	var tooltip = $(this).data('definition');
        	$('.tooltip-content.' + tooltip).addClass('active');
        });

        $('.tooltip-content').on('click', function() {
        	$(this).removeClass('active');
        });

        $('.login a').on('click', function(e) {
            e.preventDefault();
            var scrolltop = $('#login').offset().top - $('.site-header').outerHeight();
            $("html, body").animate({ scrollTop: scrolltop }, 600);
            return false;
        });

        $('select').each(function() {
            var placeholder = $(this).attr('placeholder');
            $(this).select2({ 
                placeholder: placeholder,
                minimumResultsForSearch: 5,
            });
        });

        $('.btn-trigger').on('click', function() {
            $('body').toggleClass('scroll-lock');
        });
	});
})(jQuery);
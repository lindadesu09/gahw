jQuery(document).ready(function($){

	'use strict';

	var ESC_KEY = 27;
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the enter key
	$(document).keyup(function(event){
    	if(event.which==ESC_KEY) {	
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});
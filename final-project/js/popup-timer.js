jQuery(document).ready(function($){

	'use strict';

	var $ESC_KEY = 27;
	
	//close popup
	$('.cd-popup-timer').on('click', function(event){
		if( $(event.target).is('.cd-close') || $(event.target).is('.cd-popup-timer') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the enter key
	$(document).keyup(function(event){
    	if(event.which==$ESC_KEY) {	
    		$('.cd-popup-timer').removeClass('is-visible');
	    }
    });
});
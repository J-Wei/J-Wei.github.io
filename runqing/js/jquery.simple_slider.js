/*
 * Simple Image Slider
 * Read more at: http://stuff.nekhbet.ro/2009/06/23/simple-image-gallery-navigation-slider-plugin-in-jquery.html
 * Version: 1.0.1
 * Copyright (c) 2009 Trimbitas Sorin-Iulian
 * Free of use (personal and commercial) as long as you keep this header in the file
 * Requires: jQuery v1.3+
*/
;(function($) {
	jQuery(document).ready(function(){
		jQuery('#holder').show();
		jQuery('#imgbox').simple_slider({
			'leftID': 'leftnav',
			'rightID': 'rightnav',
			'display': 4
		})
	});
	var totalCount = 0,selector,options,firstPos = 0,isRunning = false;

	$.fn.simple_slider = function(settings) {
		settings = $.extend({}, $.fn.simple_slider.defaults, settings);
		selector = this.selector;
		options = settings;
		//get the number of images
		totalCount = $(selector + " img").size();
		//init
		_init();

		function _init(){
			//hide them all (with the exception of the first X images)
			$(selector + " img").each(function(i){
				if (i >= options.display){
					this.style.display = "none";
				}
			});
			//put actions (onclick) on the buttons for navigation
			//left
			$("#" + options.leftID).click(function (){
				if (isRunning == false){
					_goLeft();
				}
			});
			$("#" + options.leftID).hover(function (){
				$(this).addClass("simple_slider_hover");
				}, function (){
				$(this).removeClass("simple_slider_hover");
			});
			//right
			$("#" + options.rightID).click(function (){ 
				if (isRunning == false){
					_goRight();
				}
			});
			$("#" + options.rightID).hover(function (){
				$(this).addClass("simple_slider_hover");
				}, function (){
				$(this).removeClass("simple_slider_hover");
			});
			$("#" + options.leftID).addClass("simple_slider_disabled");
			_checkNavigation();
		}
		
		function _goLeft(){
			isRunning = true;
			if (firstPos > 0){
				//remove the last one
				$(selector + " img:eq("+ (firstPos + options.display - 1) + ")").fadeOut("slow", function (){
					firstPos--;
					//add one from the beginning
					$(selector + " img:eq("+ (firstPos) +")").fadeIn("slow",function(){
						isRunning = false;
						_checkNavigation();
					});
				});				
			} else {
				isRunning = false;
			}
		}
		
		function _goRight(){
			isRunning = true;
			if (firstPos + options.display < totalCount){
				//remove the first one
				$(selector + " img:eq("+ firstPos +")").fadeOut("slow", function (){
					firstPos++;
					//add one from the end
					$(selector + " img:eq("+ (firstPos + options.display - 1) +")").fadeIn("slow",function(){
						isRunning = false;
						_checkNavigation();
					});
				});				
			} else {
				isRunning = false;
			}
		}
		
		function _checkNavigation(){
			//left
			if (firstPos == 0){
				$("#" + options.leftID).addClass("simple_slider_disabled");
			} else {
				$("#" + options.leftID).removeClass("simple_slider_disabled");
			}
			//right
			if ( (firstPos + options.display) >= totalCount){
				$("#" + options.rightID).addClass("simple_slider_disabled");
			} else {
				$("#" + options.rightID).removeClass("simple_slider_disabled");
			}
		}
		
	}

	$.fn.simple_slider.defaults = {
		display				:	2,
		leftID				:	null,
		rightID				:	null
	};

})(jQuery);
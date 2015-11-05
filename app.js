var main = function () {
	"use strict";

	var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
              "tags=dog&format=json&jsoncallback=?";

         
            
    $.getJSON(url, function(flickrResponse){
	flickrResponse.items.forEach(function (photo){
	//create a new jquery element to hold the image
	var $img = $("<img>").hide();
	//set the attribute to the url from response
	$img.attr("src", photo.media.m);

	//attach img tag to the main
	$("main .photos").append($img);  
     $img.fadeIn();
	console.log(flickrResponse);

    });
    
    });
};
$(document).ready(main);

// var setup = function(){
// 	 var h1 = $(<h1>);
//            h1.css("background-color","yellow");
// }
// $(document).ready(setup);
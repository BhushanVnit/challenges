
$("#icon").on("mouseover",function(){
	// $(".social").slideToggle(300);
	$("#icon-share").slideDown(300);
	setTimeout(function(){
		$("#icon-share").slideUp(300);
	},5000);
	
});
var isClick = false;
var width = window.screen.availWidth;
var leftWidth = width * 0.8 - 14;
var moveLeft = width * 0.8;

$(document).ready(function(){
	init();
});

var init = function(){
	
	console.log("init");
}

var showlist = function(){
	if(isClick){
		//展开
		$(".btn-showlist > p").html("&gt;&gt;&gt;");
		$(".left-box").css("margin-left","0px");
	} else {
		//收起
		$(".btn-showlist > p").html("&lt;&lt;&lt;");
		$(".left-box").css("margin-left",moveLeft*-1);
		// $(".left-box").animate({width: 'toggle'},500);
	}
	isClick = !isClick;
}

var showRoomList = function(){
	$(".roomList").toggle();
}

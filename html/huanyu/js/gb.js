function gb(jgsh) {
	var nowimg = 0; 	
 	var timer;
 	timer = setInterval(rightbutyw,jgsh);	
 	$("#content .contentlist .product").mouseenter(
 		function(){
 			clearInterval(timer);
 		}
 	);
 	$("#content .contentlist .product").mouseleave(
 		function(){
 			clearInterval(timer);	
 			timer = setInterval(rightbutyw,jgsh);
 		}
 	);
	$("#gb .anniu .rightbut").click(rightbutyw);	
	function rightbutyw(){
		if(nowimg < $("#content .contentlist .product .hd .tuul li").length - 1){
			nowimg = nowimg + 1;
		}else{
			nowimg = 0;
		}
		huan();
	}
	$("#gb .anniu .leftbut").click(
		function(){
			if(nowimg > 0){
				nowimg = nowimg - 1;
			}else{
				nowimg = $("#content .contentlist .product .hd .tuul li").length - 1;
			}
			huan();
		}
	);
	$("#content .contentlist .product .bd .dianul li").mouseenter(
		function(){
			nowimg = $(this).index();
			huan();
		}
	);
	function huan(){
		$("#content .contentlist .product .hd .tuul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		$("#content .contentlist .product .bd .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		var biaoti = $("#gb .tuul li img").eq(nowimg).attr("alt");
		$("#gb .xinxi h3").html(biaoti);
	}
}
function hx(hxsj,jgsj) {
	var nowimg = 0;
	var timer = setInterval(rightbutyw,jgsj);
	$("#banner").mouseenter(
		function() {
			clearInterval(timer);	
		}
	);
	$("#banner").mouseleave(
		function() {
			clearInterval(timer);	
			timer = setInterval(rightbutyw,jgsj);
		}
	);
	$("#hx .anniu .rightbut").click(rightbutyw);
	function rightbutyw(){
		if(!$("#banner .hd ul.chart li").is(":animated")){
			$("#banner .hd ul.chart li").eq(nowimg).fadeOut(hxsj);
			if(nowimg < $("#banner .hd ul.chart li").length - 1){
				nowimg = nowimg + 1;
			}else{
				nowimg = 0;
			}
			$("#banner .hd ul.chart li").eq(nowimg).fadeIn(hxsj);
			$("#banner .bd ul.dot li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		}
	}
	$("#hx .anniu .leftbut").click(
		function(){
			if(!$("#banner .hd ul.chart li").is(":animated")){
				$("#banner .hd ul.chart li").eq(nowimg).fadeOut(hxsj);
				if(nowimg > 0){
					nowimg = nowimg - 1;
				}else{
					nowimg = $("#banner .hd ul.chart li").length - 1;
				}
				$("#banner .hd ul.chart li").eq(nowimg).fadeIn(hxsj);

				$("#banner .bd ul.dot li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
			}
		}
	);

	$("#banner .bd ul.dot li").click(
		function(){
			$("#banner .hd ul.chart li").eq(nowimg).fadeOut(hxsj);
			nowimg = $(this).index();	
			$("#banner .hd ul.chart li").eq(nowimg).fadeIn(hxsj);
			$("#banner .bd ul.dot li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		}
	);
}
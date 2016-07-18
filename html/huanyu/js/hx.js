function hx(bsj,jgsj) {
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
	$("#banner .anniu .rightbut").click(rightbutyw);
	function rightbutyw(){
		if(!$("#banner .tuul li").is(":animated")){
			$("#banner .tuul li").eq(nowimg).fadeOut(bsj);
			if(nowimg < $("#banner .tuul li").length - 1){
				nowimg = nowimg + 1;
			}else{
				nowimg = 0;
			}
			$("#banner .tuul li").eq(nowimg).fadeIn(bsj);
			$("#banner .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		}
	}
	$("#banner .anniu .leftbut").click(
		function(){
			if(!$("#banner .tuul li").is(":animated")){
				$("#banner .tuul li").eq(nowimg).fadeOut(bsj);
				if(nowimg > 0){
					nowimg = nowimg - 1;
				}else{
					nowimg = $("#banner .tuul li").length - 1;
				}
				$("#banner .tuul li").eq(nowimg).fadeIn(bsj);

				$("#banner .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
			}
		}
	);

	$("#banner .dianul li").click(
		function(){
			$("#banner .tuul li").eq(nowimg).fadeOut(bsj);
			nowimg = $(this).index();	
			$("#banner .tuul li").eq(nowimg).fadeIn(bsj);
			$("#banner .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		}
	);
}
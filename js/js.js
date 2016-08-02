/**
 * Created by 瞬灰 on 2016/8/2.
 */
window.onresize = changeClient;
function changeClient() {
    document.documentElement.style.fontSize = 32 / 320 * document.documentElement.clientWidth + 'px';
}
window.onload= function () {

    changeClient();
    var  oBanner=document.querySelector('.banner');
    var oConent=document.querySelector('.conent');
    var oBox=document.querySelector('.box');
    var oMenu=document.querySelector('.menu');
    var oBannerN=document.querySelector('.banner_nav');
    var oGif=document.getElementById('gif');
    var oJb=document.querySelector('.jb');
    var oZy=document.querySelector('.zy');
    var oZy1=document.querySelector('.zy_1');
    var oJb1=document.querySelector('.jb_1');

    var oFixed=document.getElementById('fixed');
    var timer=null;
    var bl=false;
    oFixed.onclick=function(){
        move1(0,1000);
    };
    function move1(iTarget,time){
        var start=document.documentElement.scrollTop||document.body.scrollTop;
        var dis=iTarget-start;
        var count=Math.round(time/30);
        var n=0;
        clearInterval(timer);
        timer=setInterval(function(){
            n++;
            var a=1-n/count;
            var cur=start+dis*(1-a*a*a);

            document.documentElement.scrollTop=cur;
            document.body.scrollTop=cur;
            bl=false;

            if(n==count){
                clearInterval(timer);
            }
        },30);
    }
    window.onscroll= function () {
        var scrTop=document.documentElement.scrollTop||document.body.scrollTop;
        if(scrTop>1){
            oBanner.style.height='40px';
            oBox.style.height='40px';
            move(oBannerN,{opacity:1},{time:600,type:'linear'});
            move(oGif,{height:40,opacity:1},{time:600,type:'linear'});
        }else {
            oBanner.style.height='360px';
            oBox.style.height='360px';
            move(oBannerN,{opacity:0},{time:600,type:'linear'});
            move(oGif,{height:360,opacity:1},{time:600,type:'linear'});
        }
        if(bl){
            clearInterval(timer);
        }
        bl=true;
    };

    var oLo=document.querySelector('.conent .logo');
    oLo.onclick= function () {
        move(oLo,{opacity:0},{time:600,type:'linear'});
        //oMenu.style.display='block';
        move(oMenu,{opacity:1},{time:1200,type:'linear'});
        move(oJb,{opacity:1},{time:1100,type:'ease-out'});
        move(oZy,{opacity:1},{time:1100,type:'ease-out'});
        move(oZy1,{opacity:1},{time:2200,type:'linear'});
        move(oJb1,{opacity:1},{time:2200,type:'linear'});
        oMenu.style.zIndex='2';
        oJb.style.display='block';
        oZy.style.display='block';
        oZy1.style.display='block';
        oJb1.style.display='block';
    };

    var oH3=document.querySelector('.menu_logo ');
    var aDiv = oH3.children;
    var r=5;
    var c=5;
    var now=0;
    var  ready=true;
    for(var i=0;i<c;i++){
        for(var j=0;j<r;j++){
            var oDiv=document.createElement('div');
            oH3.appendChild(oDiv);
            oDiv.style.width=oH3.offsetWidth/r+'px';
            oDiv.style.height=oH3.offsetHeight/c+'px';
            oDiv.style.backgroundPosition=-oDiv.offsetLeft+'px '+ -oDiv.offsetTop+'px';
            oDiv.c=i;
            oDiv.r=j;
        }
    }
    oH3.onmouseout= function () {
        if(!ready) return;
        ready=false;
        for(var i=0;i<aDiv.length;i++){
            (function(index){
                setTimeout(function(){
                    move(aDiv[index],{opacity:0},{time:1200,fn:function(){
                        now++;
                        //now%=3;
                        if(index==aDiv.length-1){
                            for(var i=0;i<aDiv.length;i++){
                                aDiv[i].style.backgroundImage = 'url("../img/'+(now%2)+'.png")';
                                aDiv[i].style.opacity=1;
                                oH3.style.backgroundImage = 'url("../img/'+(now-1)%2+'.png")';
                            }
                            ready=true;
                        }
                    }})	;
                },(aDiv[i].r+aDiv[i].c)*100)
            })(i);
        }
    };
    /*function tranend(){
     aS[aS.length-1].removeEventListener('transitionend',tranend,false);
     for(var i=0;i<aS.length;i++) {
     aS[i].style.WebkitTransition='none';
     var oFront=aS[i].children[0];
     var oBack=aS[i].children[1];
     oFront.style.backgroundImage='url("../img/'+(n%2)+'.png")';
     oBack.style.backgroundImage='url("../img/'+(n-1)%2+'.png")';

     aS[i].style.WebkitTransform=' perspective(800px) rotateY(0deg)';
     }
     bl=false;
     }
     aS[aS.length-1].addEventListener('transitionend',tranend,false);
     };*/


    function hoverDir(obj,ev){
        var w=obj.offsetWidth;
        var h=obj.offsetHeight;

        var x=w/2+obj.offsetLeft-ev.clientX;
        var y=h/2+obj.offsetTop-ev.clientY;

        return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
    }
    (function(){
        var aPus_aLi=document.querySelectorAll('.nav .nav_con .opus');
        var aPus_aSpan=document.querySelectorAll('.nav .nav_con .opus span');
        for(var i=0; i<aPus_aLi.length; i++){
            aPus_aLi[i].index=i;
            aPus_aLi[i].onmouseover=function(ev){
                var oEvent=ev || event;
                var n=hoverDir(this,oEvent);
                var from=oEvent.fromElement || oEvent.relatedTarget;
                if(this.contains(from))return;
                var oSpan=aPus_aSpan[this.index];
                switch(n){
                    case 0:
                        oSpan.style.left=250+'px';
                        oSpan.style.top=0;
                        break;
                    case 1:
                        oSpan.style.top=250+'px';
                        oSpan.style.left=0;
                        break;
                    case 2:
                        oSpan.style.left=-250+'px';
                        oSpan.style.top=0;
                        break;
                    case 3:
                        oSpan.style.top=-250+'px';
                        oSpan.style.left=0;
                        break;
                }
                move(oSpan,{left:0,top:0});
            };
            aPus_aLi[i].onmouseout=function(ev){
                var oEvent=ev || event;
                var n=hoverDir(this,oEvent);
                var to=oEvent.toElement || oEvent.relatedTarget;
                if(this.contains(to))return;
                var oSpan=aPus_aSpan[this.index];
                switch(n){
                    case 0:
                        move(oSpan,{left:250,top:-30});
                        break;
                    case 1:
                        move(oSpan,{left:0,top:330});
                        break;
                    case 2:
                        move(oSpan,{left:-250,top:-30});
                        break;
                    case 3:
                        move(oSpan,{left:0,top:-330});
                        break;
                }
            };
        }
    })();

};
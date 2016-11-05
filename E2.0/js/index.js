//轮播
    $(function () {

        var index = 0, page = 6;
        var imgLs = $(".imgL").children(); //img列表
        var timer;
        var imgW = $(".imgW").children();//img
        var spn = $(".main-title").eq(0).children().eq(1);//分类标签
        var dot = $(".dot");    //小点点
        var colorA = ["rgb(135, 1, 220)", "rgb(254, 81, 65)", "rgb(143, 14, 228)", "rgb(134, 1, 221)","rgb(134, 1, 221)","rgb(134, 1, 221)", " rgb(134, 1, 221)"];

        function go() {
            if (index == (imgLs.length - 1)) {
                index = 0;
            }
            else {
                index++;
            }
            dot.children().eq(index).addClass("hov").siblings().removeClass("hov");
            spn.css("opacity", "0.3");
            spn.animate({opacity: 1}, 200).css("background", colorA[index]);
            imgLs.finish();
            imgLs.eq(index).fadeIn(200, function () {
                $(this).addClass("hov").css("background", colorA[index]);
            }).siblings().fadeOut(200, function () {
                $(this).removeClass("hov");
            });
        }

        go();
        timer = setInterval(go, 4000);
        //鼠标划入大的盒子停止计时器
        $(".indexBox").eq(0).on("mouseenter", ".imgL>div", function (e) {
            //console.log($(this).index());  csww
            clearInterval(timer);
        });
        $(".indexBox").eq(0).on("mouseleave", function (e) {
            //console.log($(this).index());  csww
            timer = setInterval(go, 4000);
        });
        dot.on("mouseenter", "a", function (e) {
            // console.log($(this).index()); cs ww
            clearInterval(timer);
            if ($(this).index() == 0) {
                index = (imgLs.length - 1);
            } else {
                index = $(this).index() - 1;
            }
            //console.log(index);
            go();
        })
    })
//E宠手机
$(function(){
   var min_r = $('.fr_main>a').children();
   //console.log(min_r)
   min_r.mouseenter(function(){
       $(this).animate({'right':'20px'},100)
       //console.log( min_r.eq(index))
   })
  /* min_r.mouseleave(function(){

       min_r.eq(index).animate({'width':'200px'})
       //console.log( min_r.eq(index))
   })*/
}) 
//口碑评价轮播
$(function(){
    var adsl = $('.adsl').eq(0);
    var index = 0;
    var timer;
    function move(){
      adsl.children().eq(index).animate({'height':0},100,function(){
             if(index == (adsl.children().length - 1)){
             index = 0;
              }else{
                  index++;
              }
          adsl.children().eq(index).animate({'height':200},100);
           
    })
       
    }
     timer = setInterval(move,3000)
})
 //售后评价
  $(function(){
    var adsl = $('.adsr').eq(0);
    var index = 0;
    var timer;
    function move(){
      adsl.children().eq(index).animate({'height':0},100,function(){
             if(index == (adsl.children().length - 1)){
             index = 0;
              }else{
                  index++;
              }
          adsl.children().eq(index).animate({'height':200},100);
           
    })

       
    } 
    move();
     timer = setInterval(move,2000)
})
$(function(){
 // 小小轮播图
  var dayS = $('#day-surimg');
  var dot = $('#daysurimg-id>ul').children();
  var timer=null;
  var index= 0;
  function move(){
       if(index==(dayS.children('a').length-1)){
         	index=0;
       }else{
       	    index++;
       }
       //console.log(index); //cs ww
       dayS.children("a").eq(index).stop(true).fadeIn().siblings("a").stop(true).fadeOut();
       dot.eq(index).css("opacity","1").stop(true).siblings().css("opacity","0.6")
  }
  timer= setInterval(move,2000);
  dayS.mouseenter(function(){
  	clearInterval(timer);
  })
  dayS.mouseleave(function(){
  	timer=null;
  	timer= setInterval(move,2000);
  })

 //ajax获取天天惊喜
    $(function () {
        $.get("json/surprise.json", function (res) {
           // console.log(res);  
            var arrT = ["9", "11", "13", "15", "19", "21", "24"];
            var uls = '';
            for (var i = 0; i < 7; i++) {
                //  console.log(res[arrT[i]]);  cs ww
                var lis = '';
                for (var j = 0; j < 4; j++) {
                    lis += '<li><div class="sur-hear p25"><a href="list.html" class="imgBox ftc"><img src="' + res[arrT[i]][j].img + '" class="zom"></a><h1 class="overflow "><a href="list.html" class="ft12 c333">' + res[arrT[i]][j].write + '</a></h1></div><div class="sur-price clearfix"><div class="fl sur-numbox overflow"><div class="sur-num bold"><em class="ft14">￥</em>' + res[arrT[i]][j].price + '</div><p class="c999"><del>'+res[arrT[i]][j].original+'</del><span class="ml"> 仅剩' + res[arrT[i]][j].ping + '瓶</span></p></div><div class="fr"><a href="list.html" class="atonce-buy bold ft14 ftc">立即抢购</a></div></div></li>'
                }
                //console.log(lis);
                uls += '<ul class="clearfix" id="ul1">' + lis + '</ul>';

            }
            //console.log(uls); 
             $(".surprice-list").eq(0).html(uls);
            
        }, "json")
    })
    $('.surprice-list').children().eq(0).css('display','block');
    console.log($('.surprice-list').children().eq(0))
}) 
$(function(){

        var time = $(".time-px").eq(0);
         //console.log(time)
        var surprises = $(".surprice-list").eq(0);
        $(".surprice-list").children().eq(0).css('display',"block");
        //console.log($(".surprice-list").children())
        time.on("mouseenter", "p", function () {
            // console.log($(this).index());  csww

            $(this).addClass("current").siblings().removeClass("current");
            surprises.children().eq($(this).index()).css("display", "block").siblings().css("display", "none");
    }) 
})
//狗狗主粮
$(function(){
	 $.get("json/recommend.json", function (res) {
			//console.log(res) cs ww
			var html = "";
			for (var i = 0; i < res.length; i++) {
				var rel = "";
				for (var j = 0; j < res[i].span.length; j++) {
					rel += '<a href="list.html"><img class="catepic" src="' + res[i].span[j].jpg + '" width="40">' + res[i].span[j].write + '</a>'
				}
				//console.log(res[i].span)
				var rl = "";
				for (var k = 0; k < res[i].ul.length; k++) {
					rl += '<li><a href="list.html" class="imgBox"><img class="zom" src="' + res[i].ul[k].png1 +
						 '"></a><h3>' + res[i].ul[k].h3 +
						  '</h3><p class="cf40 ft14 ftc">' + res[i].ul[k].price +
						 '</p></li>'
				}			
			html += '<div class="pet-pro"><h2><img src="' + res[i].img +
				'" class="pet-proimg"><em class="pro-tt ft20">' + res[i].tit + '</em><span class="fr pet-column">' + rel + '</span></h2><div class="petpro-l"><a href="list.html" class="imgBox"><img src="' + res[i].img2 + '"></a></div><div class="petpro-r"><ul class="clearfix">' + rl + '</ul></div></div>';
      }		
    $('#recommend').after(html);
	})
})
 


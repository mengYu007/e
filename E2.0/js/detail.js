//引入头尾
$(function(){
     $('#head').load('head.html',function(){
         $('.dogType').css('display','none')
         $('.mchov').hover(function(){
            $('.dogType').css('display','block');
         },function(){
             $('.dogType').css('display','none');
         })

     });
     $('#footer').load('footer.html',function(){

     });
 })    
//放大镜
$(function(){
	var oBox =$('.jqzoom')
	var oMark_box = $('.mark_box');	
	var position_box = $('.position_box');
	var oB_box =$('.b_box');
	var b_box_all = $('.b_box_all');
	oBox.mouseenter(function(){
		//console.log(1)
		position_box.css('display',"block");
		oB_box.css('display',"block");
	})
	oBox.mouseleave(function(){
		//console.log(1)
		position_box.css('display',"none");
		oB_box.css('display',"none");
	})
    oMark_box.mousemove(function(event){
       var event = event||window.event;
       //console.log(1)
       var left,top;
       left = event.offsetX-position_box.outerWidth()/2;
       top = event.offsetY-position_box.outerHeight()/2;
       left = left<0? 0:left;
       left = left>oBox.outerWidth() -position_box.outerWidth()? oBox.outerWidth() -position_box.outerWidth():left; 
       top = top <0?0:top;
       top = top>oBox.outerHeight() - position_box.outerHeight()?oBox.outerHeight() - position_box.outerHeight():top;       
       position_boxleft = left/(oBox.outerWidth() -position_box.outerWidth());
       position_boxtop = top/(oBox.outerHeight() - position_box.outerHeight());
       b_box_all.css('left',-(b_box_all.outerWidth()-oB_box.outerWidth())*position_boxleft);
       b_box_all.css('top',-(b_box_all.outerHeight()-oB_box.outerHeight())*position_boxtop);
       position_box.css('left',left);
       position_box.css('top',top);
    })  

})
/*物品加减*/
$(function(){
	var num = $('#cart_buynum').val();
	var addnum = $('#cart_buynum');

	$('.add_buynum').click(function(){
		if(num<999){
            num++;
            addnum.val(num);
	    }
	})	
	$('.chgnum').click(function(){
		if(num>1){
            num--;
            addnum.val(num);
	    }
	})
	 $(".addbuy_btn").click(function () {
            if(!chicklogin()){
                alert("请先登录陆");
                return;
            }
            var id = $.cookie("detail-id");
            $.get("json/list.json", function (res) {
                cart(res, id, addnum.val());
            });
        });
})
/*购物*/
$(function(){
	var id = $.cookie('detail-id');
	$.get('json/list.json',function(res){
      for(var i in res){
     			if(res[i].id == id){
     			    var lis = "";
     			    for(var j = 0;j<res[i].img.length;j++){
     			    	lis+='<li class="onclickImg"><img src="'+res[i].img[j]+'"></li>'
     			    }            
     			    $('.items').find('ul').html(lis);
     			    $('.jqzoom>img').attr('src',res[i].img[0]);
     			    $('.b_box>.b_box_all>img').attr('src',res[i].img[0]);
     			    $('.bold').text(res[i].price[0]);
     			    $('#price0').text(res[i].price[1]);
     			}
          
       	}
       
	})
  console.log($.cookie('detail-id'))
});
/*弹出框*/
$(function () {
        $("#dia-conti").on("click", function () {
            $("#dialog").css("display", "none");
            $(".dia-con").css("display", "none");
        });
        $("#dia-submi").on("click", function () {
            $("#dialog").css("display", "none");
            $(".dia-con").css("display", "none");
        })
})

//nav
$(function(){

	 $('.onav_cont').eq(0).hover(function(){
	 	//console.log(index)
          $('.onav_cont>ul').eq(0).show()
	 },function(){
	 	 $('.onav_cont>ul').eq(0).hide()
	 })
	 $('.onav_cont').eq(1).hover(function(){
	 	//console.log(index)
          $('.onav_cont>ul').eq(1).show()
	 },function(){
	 	 $('.onav_cont>ul').eq(1).hide()
	 })
	 $('.onav_cont').eq(2).hover(function(){
	 	//console.log(index)
          $('.onav_cont>ul').eq(2).show()
	 },function(){
	 	 $('.onav_cont>ul').eq(2).hide()
	 })
})
//赞助商
$(function(){
	   var index = $(this).index();
     	var li = $('.ta_hh').children();
         li.hover(function(){
         	$('.layer-000').eq($(this).index()).show()
         	$('.ftx').eq($(this).index()).show()
         	/*console.log(1)*/
         },function(){
         	$('.layer-000').eq($(this).index()).hide()
         	$('.ftx').eq($(this).index()).hide()
         })

})
//列表
$(function(){
	$('.fil_li').hover(function(){
		$('.fil_li').eq($(this).index()).addClass('ahov')
	},function(){
		$('.fil_li').eq($(this).index()).removeClass('ahov')
	})
})
/*分类*/
$(function(){
	var ol = $('.lis_pll').children();
	 ol.hover(function(){
	 	ol.eq($(this).index()).addClass('arrow')
	 },function(){
	 	ol.eq($(this).index()).removeClass('arrow')
	 })
})
/*添加cookie跳转*/
$(function(){
   $('.glist_1').on('click','.list_box_li>.list_box_con a',function(){
      goodID = $(this).parents('.list_box_li').data('id')
       //console.log(goodID)
      $.cookie('detail-id',goodID);
      location.href="detail.html";       
   })

})
//商品加载
$(function(){
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
	function get(num){
        $.ajax({
        	url:"json/list.json",
        	type:"get",
        	success:function(res){
               //console.log(res);
               var shownum=num;                   
               var reset = res.length;                
               var pagenum = Math.ceil(reset/shownum);

               $('#Pagination').pagination(pagenum,{
               	    num_edge_entries:1,
               	    items_per_page:1,
               	    num_display_entries:4,
                    prev_text:"上一页",
                    next_text:"下一页",
                    callback:function(index){
                     	var html ="";						
                     	for(var i =shownum*index;i<shownum*index+shownum;i++){
                     		if(i<60){
                              var lis = "";
                              for(var j = 0;j<res[i].img.length;j++ ){
                                     if(j == 0){
                                           lis ='<li class="hov"><img class="zom" src="'+res[i].img[j]+'" style="width:30px;height:30px"></li>'
                                      }else{
                                      	   lis +='<li class=""><img class="zom" src="'+res[i].img[j]+' "style="width:30px;height:30px"></li>'
                                      }
                                
                              }  
                              //console.log(lis)
                              html +='<div class="list_box_li" data-id="'+res[i].id+'"><div class="list_box_con"><div class="country_photo"><img src="img/list/a15.jpg"></div><div class="gimg"><div class="hovtitle "> 300g</div><a href="detail.html"><img class="zom" src="'+res[i].img[0]+'"></a></div><div class="fmgoods_main"><div class="giming_srl"><ul class="giming_srl_li">'+lis+'</ul></div></div><a href="detail.html" class="gtitle"><span class="title-typename" style="display: inline;">直邮</span><span class="title-subject">'+res[i].tip+'</span></a><p class="gprice"><span class="market-price">￥'+res[i].price[0]+'</span><span class="price">￥'+res[i].price[1]+'</span><span class="dprice">'+res[i].price[2]+'元/斤</span></p><p class="deal-cnt"><em>已售'+res[i].scal+'包</em><em class="lis_icon">'+res[i].com+'人互动</em></p><p class="send-ps">西部大仓发货</p></div><div class="buy clearfix"><a href="#" class="fl dib buyl"><span>收藏</span></a><a href="javascript:;" class="fr dib buyr"><span>加入购物车</span></a></div></div>' 

                     	} 
                      }

                       	$('.glist_1').html(html);
                        
                        $(".list_box_li").on("click", ".buyr",function () {
                            /*if(!chicklogin()){
                                alert("请先登录陆");
                                return;
                            }*/
                            var id = $(this).parents(".list_box_li").data("id");
                            console.log(id)
                            cart(res, id, 1);

                       });
                        $('list_box_li .fmgoods_main').on('mouseenter','li',function(){
                              $(this).addClass('hov').siblings.removeClass('hov');
                              $(this).parents(".list_box_li").find(".gimg img").attr("src", $(this).find("img").attr("src"));
                        })
                        //console.log($('list_box_li gimg'));

                    }
               }) 
        	}
        })
	}
	get(20);
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

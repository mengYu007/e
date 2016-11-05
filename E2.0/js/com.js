//网页头部
$(function(){
  $('.topsc').mouseenter(function(){
    //console.log(1)
    $('.probox').show()
  })
  $('.drop').mouseleave(function(){
    $('.probox').hide()
  })
  $('.dropmn').mouseenter(function(){
    $('.boxsha').show()
  })
  $('.dropmn').mouseleave(function(){
    $('.boxsha').hide()
  })
  $('.dogType').find('p').mouseenter(function(){
      $('.action_silder').show()
  })
  $('.dogType').find('p').mouseleave(function(){
      $('.action_silder').hide()
  })
  $('.action_silder').mouseenter(function(){
      $('.action_silder').show()
  })
  $('.action_silder').mouseleave(function(){
      $('.action_silder').hide()
  })
});  
  //二级菜单获取
$(function () {
        
        var cateLi = $(".main_list_r>.cate_1").eq(0);
        //console.log(cateLi)
        $.get("json/goods.json", function (res) {

            var tis = "";  //创建大的title  c
            for (var i = 0; i < res.length; i++) {
                //console.log(res[i].title);cs ww
                var hes = ""; //创建小的列表
                for (var j = 0; j < res[i].title.head.length; j++) {
                    //console.log(res[i].title.head[j]); cs ww
                    var lis = "";      //创建a标签
                    for (var k = 0; k < res[i].title.head[j].list.length; k++) {
                        //console.log(res[i].title.head[j].list[k]); cs ww
                        lis += '<a href="list.html">' + res[i].title.head[j].list[k] + '</a>';
                    }
                    hes += '<div class="mid_head"><a href="list.html">' + res[i].title.head[j].headName + '</a><img src="' + res[i].title.head[j].img + '" alt=""></div><div class="mid_list">' + lis + '</div><div class="clear dotline"></div>';
                }
                // console.log(hes);  cs ww

                tis += '<div class="mincate"><div class="ctitle"><img class="catepic" src="' + res[i].title.img + '"><a href="list.html">' + res[i].title.content + '</a><i></i><a href="goodslist.html"><img src="' + res[i].title.gif + '" width="220" height="35"></a></div><div class="clear dotline"></div>' + hes + '</div>';
            }
            // console.log(tis);    cs ww
            cateLi.html(tis);
        }, "json");
    })
  //商品列表显示
$(function(){
   var detU = $('.dogType>ul').eq(0);
   var lr =$('.main_list_r').eq(0);
   var l =$('.cate_1').eq(0);
  detU.on('mouseenter','li',function(e){
      var index = $(this).index();
      lr.css('display',"block");
      l.css('display',"block");
      for (var i = 0; i < l.children().length; i++) {
          if (i == (2 * index) || i == (2 * index + 1)) {
              l.children().eq(i).css("display", "block");
          } else {
              l.children().eq(i).css("display", "none");
         }
     }
  })
  //移出
  detU.on("mouseleave", function (e) {
      //console.log($(this).index());
      if ($(e.relatedTarget).parents(".main-list-r").length != 0) {
          return;
      }
      //console.log(e.relatedTarget);
      $(this).children().removeClass("hov");

      lr.css("display", "none");
  });
  //左边的列表移出
        lr.on("mouseenter", function () {
            $(this).css("display", "block");
        });
        lr.on("mouseleave", function () {
            detU.children().removeClass("hov");
            $(this).css("display", "none");
        })

})
/*登录*/

      function chicklogin() {
        if ($.cookie("username")) {
            //console.log($.cookie("username"));
            $("#h-login").text($.cookie("username")).attr("href", "javascript:;");
            $("#register1").css("display", "block");
            $("#register").css("display", "none");
            return true;
        } else {
            $("#h-login").text("[登录]").attr("href", "login.html");
            $("#register1").css("display", "none");
            $("#register").css("display", "block");
            return false;
        }
    }
    chicklogin();
    $("#register").click(function () {

        if (quit()) {
            $("#register").text("退出").attr("href", "javascript:;");
        } else {
            $("#register").text("[注册]");
        }
    });
    function quit() {
        $.cookie("username", null, {expires: -1});
        return chicklogin();
        }

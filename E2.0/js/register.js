$(function(){
	$('#pncd').mouseover(function(){
		 $('#pncd').css("background","#33cb98")
		 $('#pncd').css("color","#fff")
	})
	$('#pncd').mouseout(function(){
		 $('#pncd').css("background","#fff")
		  $('#pncd').css("color","#999")
	})
    //用户名验证
    if($('#phone').value <6){
    	console.log($('#phone'))
    	$('#phone_div').css('display','block');
    }else{
    	$('#phone_img').css('display','block');
    }


	
})

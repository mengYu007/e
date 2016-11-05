$(function(){
	    $("#login-form").on("click", "span", function () {
            $(this).addClass("Logindefalut").siblings().removeClass("Logindefalut");
            if ($(this).index() == 0) {
                $("#login_0").css("display", "block").siblings().css("display", "none");
            } else {
                $("#login_1").css("display", "block").siblings().css("display", "none");
            }
        });

       $("#loginbtn").click(function () {
            //alert(1);
            $("#backinfo").text("");
            $.post("http://datainfo.duapp.com/shopdata/userinfo.php", {
                status: "login",
                userID: $("#user0").val(),
                password: $("#password0").val()
            }, function (res) {
                switch (res) {
                    case "0":
                        $("#backinfo").text("用户名不存在！");
                        break;
                    case "1":
                        $("#backinfo").text("用户名与密码不符！");
                        break;
                    default:
                        $.cookie("username", $("#user0").val());
                        window.location.href = "index.html";
                }
            })
        })
})
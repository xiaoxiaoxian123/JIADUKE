define(["jquery"],function(){
	function init(){
		login();
		loginbtn();
	}
	function login(){
		$(".name").blur(function(){
			if(/^[a-z0-9_-]{3,16}$/.test($(this).val())){
				$(this).next().css("display","none")
			}else{
				$(this).next().css("display","block")
			}
		})
		$(".mima").blur(function(){
			if(/^.{6,16}$/.test($(this).val())){
				$(this).next().css("display","none")
			}else{
				$(this).next().css("display","block")
			}
		})
	}
	function loginbtn(){
		$(".log").click(function(){
			$.ajax({
					url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
					type: 'get',
					datatype:'json',
					data: {"status":"login","userID":$(".name").val(),"password":$(".mima").val()},
					success: function (data) {
						if(data==0)
						{
							alert("用户名不存在")
						}else if(data==2) {
							alert("密码错误")
						}else if (typeof(data)==="object"&&$('.name').val()!=''){
							alert("登陆成功")
						}else{
							alert("请正确输入")
						}
					}
				});
		})
	}
	return {
		init:init
	}
})
define(["jquery"],function(){
	function init(){
		register();
		registerbtn();
	}
	function register(){
		$(".name1").blur(function(){
			if(/^[a-z0-9_-]{3,16}$/.test($(this).val())){
				$(this).next().css("display","none")
			}else{
				$(this).next().css("display","block")
			}
		})
		$(".mima1").blur(function(){
			if(/^.{6,16}$/.test($(this).val())){
				$(this).next().css("display","none")
			}else{
				$(this).next().css("display","block")
			}
		})
		$(".email1").blur(function(){
			if(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test($(this).val())){
				$(this).next().css("display","none")
			}else{
				$(this).next().css("display","block")
			}
		})
		$(".sure1").blur(function(){
			if($(".sure").val()==$(".mima").val()){
				$(this).next().css("display","none")
			}else{
				$(this).next().css("display","block")
			}
		})
		$(".phone1").blur(function(){
			if( /^1\d{10}$/.test($(this).val())){
				$(this).next().css("display","none")
			}else{
				$(this).next().css("display","block")
			}
		})
	}
	function registerbtn(){
		$(".log1").click(function(){
			$.ajax({
					url: 'http://datainfo.duapp.com/shopdata/userinfo.php',
					type: 'get',
					datatype:'json',
					data: {"status":"login","userID":$(".name1").val(),"password":$(".mima1").val()},
					success: function (data) {
						if(data==0)
						{
							alert("用户名重复,请重新输入")
						}else if(data==1){
							alert("注册成功！")
						}else{
							alert("请正确输入！")
						}
					}
				});
		})
	}
	return {
		init:init
	}
})
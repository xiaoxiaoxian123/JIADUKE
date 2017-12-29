define(["jquery"],function(){
	function init(){
		$("#head").load("head.html",function(){
			//头部显示商品数量
			if($.cookie('name')){
				var obj=JSON.parse($.cookie('name'))
				var count=0;
				for(var i in obj){
					count++
				}
				$(".count>span").html(count)
			}
			//点击以后下边框变
			
			$(".txt").mouseover(function(){
				$(this).addClass('txt1').siblings().removeClass('txt1')
			})
		})
		$("#foot").load("foot.html")
	}
	return {
		init:init
	}
})
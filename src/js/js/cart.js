define(["jquery","cookie"],function(){
	function init(){
		getajax()
	}
	function getajax(){
		$.ajax({
			url:"../json/goods.json",
			type:"get",
			data:{
				//需要提交的数据
			},
			dataType:"json",
			success:function(data){
				insert(data);
				delAll()
			}
		})
	}
	function insert(data){
		if($.cookie('name')){
			var obj=JSON.parse($.cookie('name'));
			if(obj==""){
					str=`<div class="del_before">您还没有选中商品呦！</div>`;
					$("#good").html(str);
				}
			var str="";
			for(var i in data){
				for(var j in obj){
					if(j==Number(data[i].id)){						
						str+=`<div class="goods_content" data-id=${data[i].id}>
								<div class="cart_img"><img src=${data[i].img}></div>
								<div class="title">${data[i].title}</div>
								<div class="cart_price">￥<span>${obj[j]}</span>元</div>
								<div class="cart_operate"><div class="Add"><i class="sub"></i><input type="text" value="1" class="amount"><i class="add"></i></div></div>
								<div class="sum">￥<span>${obj[j]}</span>元</div>
								<div class="del">删除</div>
							</div>`
					}
				}
				$("#good").html(str)
			}
			//商品加减(加)
			$(".Add").on("click",".add",function(){
				var num=$(this).prev().val()
				var p=$(this).parent().parent().prev().children().eq(0).html()
				num++;
				$(this).prev().val(num);
				$(this).parent().parent().next().children().eq(0).html(p*num);
				var sum=0;
				$(".sum>span").each(function(i){
					 sum+=Number($(this).html());
				})	
				$(".cart_sum>span>i").html(sum);
			})
			//商品加减（减）
			$(".Add").on("click",".sub",function(){
				var num=$(this).next().val()
				var p=$(this).parent().parent().prev().children().eq(0).html()
				num--;
				if(num<=0){
					num=0;
				}else{
					$(this).next().val(num);
					$(this).parent().parent().next().children().eq(0).html(p*num);
					var sum=0;
					$(".sum>span").each(function(i){
						 sum+=Number($(this).html());
					})	
					$(".cart_sum>span>i").html(sum);
				}
				
			})
			//计算总价
			var sum=0;
			$(".sum>span").each(function(i){
				 sum+=Number($(this).html());
			})	
			$(".cart_sum>span>i").html(sum);
			//删除商品
			$(".goods_content").on("click",".del",function(){
					$(this).parent().remove();
					var id=$(this).parent().attr("data-id")
					delete obj[id]
					$.cookie('name',JSON.stringify(obj),{expires:7});
					var sum=0;
					$(".sum>span").each(function(i){
						 sum+=Number($(this).html());
					})	
					$(".cart_sum>span>i").html(sum);
				})
					
			}
		}
	
	//清空购物车
	function delAll(){
		$(".delAll").click(function(){
			$.cookie('name',{expires:-1})
			var str="";
			str=`<div class="del_before">您还没有选中商品呦！</div>`;
			$("#good").html(str);
			$(".cart_sum>span>i").html(0);
		})
	}
	//继续购物
	$(".continue").click(function(event) {
		location.href="index.html#middle"
	});
	return{
		init:init
	}
})
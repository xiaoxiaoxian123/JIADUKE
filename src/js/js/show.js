define(["jquery"],function(){
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
			}
		})
	}
	function insert(data){
		var id=location.href;
		var arr=id.split("?");
		var num=arr[1];
		var str="";
		var str1="";
		if(!num){
			num=0;
		}else {
			for(var i in data[num-1].weight){
			str1+=`<i>${data[num-1].weight[i]}</i>`;
		}
		str=`<div class="content_head" data-id=${data[num-1].id}>
			<ul class="small">
				<li><img src=${data[num-1].img}></li>
				<li><img src=${data[num-1].img1}></li>
				<li><img src=${data[num-1].img2}></li>
				<li><img src=${data[num-1].img3}></li>
			</ul>
			<div class="large"><img src=${data[num-1].img}></div>
			<div class="kind">
				<h3>${data[num-1].title}</h3>
				<div id="price">￥<i>${data[num-1].price["1"]}</i></div>
				<span id="cake_size">${str1}</span>
				<p id="spec">规格：<b>${data[num-1].spec["1"]}</b></p>
				<ul class="Add">
					<li class="purchase">立即购买</li>
					<li class="addcar">加入购物车</li>
				</ul>
				<span class="warning"><i>温馨提示：</i>蛋糕收到后2-3小时内食用最佳，<br>一次食用不完可以放入冰箱中密封冷藏保存,<br>0~4℃</span>
			</div>
		</div>
		<div class="content_img">
			<div class="head_img">
				<div class="line">&nbsp;</div>
				<img src=${data[num-1].l_img}>
			</div>
			<ul>
				<li><img src=${data[num-1].l_img1}></li>
				<li><img src=${data[num-1].l_img2}></li>
				<li><img src=${data[num-1].l_img3}></li>
			</ul>
		</div>`
		$("#content").html(str);
		//点击尺寸，单价和规格改变
		$("#cake_size").on("click","i",function(){
			$(this).css({"background":"#B19067","color":"#fff"}).siblings().css({"background":"#F2F6F7","color":"#727677"});
			var num1=$(this).index();
			$("#price>i").html(data[num-1].price[num1+1])
			$("#spec>b").html(data[num-1].spec[num1+1])
		})
		//点击小图  大图路径改变
		$(".small").on("mouseover","li",function(){
			$(".large>img").attr("src",$(this).children().attr("src"))
		})
		//点击加入购物车 
		for(var i=0;i<data.length;i++){
			if($.cookie('name')){
				var obj=JSON.parse($.cookie('name'))
			}else{
				var obj={}
			}
			var id=$(".content_head").attr("data-id")
			
			$(".addcar").click(function() {
				obj[id]=$("#price>i").html();
			    location.href="cart.html";
				$.cookie('name',JSON.stringify(obj),{expires:7});
			});
		}	
		//热销商品
		var str2="";
		for(var i=9;i<12;i++){
			str2+=`<div class="hot_box">
			<h3>${data[i].title}</h3>
			<div class="hot_img"><img src=${data[i].img}></div>
			<div class="hot_size"><span>${data[i].weight["1"]}</span><span>${data[i].weight["2"]}</span><span>${data[i].weight["3"]}</span></div>
			<p class="hot_price">￥<i class="p">168.00</i></p>
			<div class="buy">立即购买</div>
		</div>`;
		}
		$(".hot_goods").html(str2);
		//点击热销产品的尺寸，单价改变
		for(var j=0;j<$(".hot_size").length;j++){
			$(".hot_size").eq(j).on("click","span",function(){
				$(this).css("background-image","url(../imgs/xuanzhong.jpg)").siblings().css("background-image","url(../imgs/weixuanzhong.jpg)");
				var num1=$(this).index()
				$(this).parent().next().children().html(data[9].price[num1+1])
			})
		}
		}	
	}
	return {
		init:init
	}
})
define(["jquery"],function(){
	function init(){
		getajax();
	}
	//获取数据
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
				changecolor();	
			}
		})
	}
	function insert(data){
		var str="";
		for(var i=0;i<data.length-4;i++){
			str+=`<dl data-id=${data[i].id}>
					<dt><img src=${data[i].img}></dt>
					<dd>${data[i].english}</dd>
					<dd>${data[i].title}</dd>
				</dl>`
		}
		$('#goods').html(str)
		//跳转到详情页
		$(function(){
			$("#goods").on("click","dl",function(){
				location.href="show.html?"+$(this).attr("data-id");
				
			})
		})
	}
	//获取巧克力蛋糕类的数据
	$("#Chocolate").click(function(event) {
		getajax1()
		$(this).css("color","rgb(193, 136, 177)").siblings().css("color","#7f7f7f")

	});
	function getajax1(){
		$.ajax({
			url:"../json/Chocolate.json",
			type:"get",
			data:{
				//需要提交的数据
			},
			dataType:"json",
			success:function(data){
				insert1(data);
				changecolor();
				
			}
		})
	}
	function insert1(data){
		var str="";
		for($i=0;$i<data.length;$i++){
			str+=`<dl data-id=${data[$i].id}>
					<dt><img src=${data[$i].img}></dt>
					<dd>${data[$i].english}</dd>
					<dd>${data[$i].title}</dd>
				</dl>`
		}
		$('#goods').html(str)
		//跳转到详情页
		$(function(){
			$("#goods").on("click","dl",function(){
				location.href="show.html?"+$(this).attr("data-id");
				
			})
		})
	}
	//获取奶油类蛋糕的数据
	$("#Cream").click(function(event) {
		getajax2()
		$(this).css("color","rgb(193, 136, 177)").siblings().css("color","#7f7f7f")

	});
	function getajax2(){
		$.ajax({
			url:"../json/Cream.json",
			type:"get",
			data:{
				//需要提交的数据
			},
			dataType:"json",
			success:function(data){
				insert2(data);
				changecolor();
			}
		})
	}
	function insert2(data){
		var str="";
		for($i=0;$i<data.length;$i++){
			str+=`<dl data-id=${data[$i].id}>
					<dt><img src=${data[$i].img}></dt>
					<dd>${data[$i].english}</dd>
					<dd>${data[$i].title}</dd>
				</dl>`
		}
		$('#goods').html(str)
		//跳转到详情页
		$(function(){
			$("#goods").on("click","dl",function(){
				location.href="show.html?"+$(this).attr("data-id");
				
			})
		})
	}
	//获取芝士类蛋糕的数据
	$("#Cheese").click(function(event) {
		getajax3()
		$(this).css("color","rgb(193, 136, 177)").siblings().css("color","#7f7f7f")

	});
	function getajax3(){
		$.ajax({
			url:"../json/Cheese.json",
			type:"get",
			data:{
				//需要提交的数据
			},
			dataType:"json",
			success:function(data){
				insert3(data);
				changecolor();
				
			}
		})
	}
	function insert3(data){
		var str="";
		for($i=0;$i<data.length;$i++){
			str+=`<dl data-id=${data[$i].id}>
					<dt><img src=${data[$i].img}></dt>
					<dd>${data[$i].english}</dd>
					<dd>${data[$i].title}</dd>
				</dl>`
		}
		$('#goods').html(str)
		//跳转到详情页
		$(function(){
			$("#goods").on("click","dl",function(){
				location.href="show.html?"+$(this).attr("data-id");
				
			})
		})
	}
	//获取慕斯类蛋糕的数据
	$("#Musi").click(function(event) {
		getajax4()
		$(this).css("color","rgb(193, 136, 177)").siblings().css("color","#7f7f7f")

	});
	function getajax4(){
		$.ajax({
			url:"../json/Musi.json",
			type:"get",
			data:{
				//需要提交的数据
			},
			dataType:"json",
			success:function(data){
				insert4(data);
				changecolor();
				
			}
		})
	}
	function insert4(data){
		var str="";
		for($i=0;$i<data.length;$i++){
			str+=`<dl data-id=${data[$i].id}>
					<dt><img src=${data[$i].img}></dt>
					<dd>${data[$i].english}</dd>
					<dd>${data[$i].title}</dd>
				</dl>`
		}
		$('#goods').html(str)
		//跳转到详情页
		$(function(){
			$("#goods").on("click","dl",function(){
				location.href="show.html?"+$(this).attr("data-id");
				
			})
		})
	}
	//获取拿破仑类蛋糕的数据
	$("#Napoleon").click(function(event) {
		getajax5()
		$(this).css("color","rgb(193, 136, 177)").siblings().css("color","#7f7f7f")

	});
	function getajax5(){
		$.ajax({
			url:"../json/Napoleon.json",
			type:"get",
			data:{
				//需要提交的数据
			},
			dataType:"json",
			success:function(data){
				insert5(data);
				changecolor();
				
			}
		})
	}
	function insert5(data){
		var str="";
		for($i=0;$i<data.length;$i++){
			str+=`<dl data-id=${data[$i].id}>
					<dt><img src=${data[$i].img}></dt>
					<dd>${data[$i].english}</dd>
					<dd>${data[$i].title}</dd>
				</dl>`
		}
		$('#goods').html(str)
		//跳转到详情页
		$(function(){
			$("#goods").on("click","dl",function(){
				location.href="show.html?"+$(this).attr("data-id");
				
			})
		})

	}
	//鼠标移动颜色改变
	function changecolor(){
		$("dd").mouseover(function(event) {
			$(this).css("color","#987869")
		});
		$("dd").mouseout(function(event) {
			$(this).css("color","#666")
		});
	}
	
	return {
		init:init
	}
})

define(["jquery","swiper"],function(swiper){
	function init(){
		new Swiper(".swiper-container",{
			autoplay:3000,
			loop:true,
			 // 如果需要分页器
		    pagination:".swiper-pagination",
		    
		    // 如果需要前进后退按钮
		    nextButton:".swiper-button-next",
		    prevButton:".swiper-button-prev",
		})
		$(function(){
			$(".swiper-container").mouseover(function(){
				$(".swiper-button-prev").css("display","block")
				$(".swiper-button-next").css("display","block")
			})
			$(".swiper-container").mouseout(function(){
				$(".swiper-button-prev").css("display","none")
				$(".swiper-button-next").css("display","none")
			})
		})	
	}	
	return {
		init:init
	}
})
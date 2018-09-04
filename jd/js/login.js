$(function(){
	// 扫码登录
	$(".login-mode>a:first").click(function(){
		// 处理登录模式的激活状态
		$(this).addClass("active");
		$(this).next().removeClass("active");
		// 处理数据区域的显示
		$(".data>div").removeClass("hide");
		$(".data>form").addClass("hide");
		autoMoveQrcode();
	});
	// 账户登录
	$(".login-mode>a:last").click(function(){
		// 处理登录模式的激活状态
		$(this).addClass("active");
		$(this).prev().removeClass("active");
		// 处理数据区域的显示
		$(".data>form").removeClass("hide");
		$(".data>div").addClass("hide");
	});
	// 二维码动画
	var status = 0; // 0-over; 1-out;
	$(".qrcode-img").hover(
		function(){
			status = 0;
			$(this).animate({"left":0},300,function(){
				// 当鼠标处理离开状态时，就不要增加图片了。
				if(status == 1) {
					return false;
				}
				var $img = $("<img src='img/phone-orange.png'/>");
				$img.css("position","absolute");
				$img.css("left","180px");
				$(this).after($img);
			});
		},
		function(){
			status = 1;
			$(this).next().remove();
			$(this).animate({"left":"64px"},300);
		}
	);
	
	// 自动模拟悬停事件
	autoMoveQrcode();
});

var autoMoveQrcodeId = null;
function autoMoveQrcode() {
	// 若定时器ID非空，表示动画正在执行中，此时不要再次执行同样的动画。
	if(autoMoveQrcodeId) {
		return false;
	}
	$(".qrcode-img").trigger("mouseover");
	autoMoveQrcodeId = setTimeout(function(){
		$(".qrcode-img").trigger("mouseout");
		autoMoveQrcodeId = null;
	},5000);
}











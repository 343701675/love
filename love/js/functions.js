
var $window = $(window), gardenCtx, gardenCanvas, $garden, garden;
var clientWidth = $(window).width();    //浏览器宽度
var clientHeight = $(window).height();  //浏览器高度

$(function () {
    // setup garden
	$loveHeart = $("#loveHeart");      //获取id为loveHeart的对象  和宽度的一半  高度的一半减去55
	var offsetX = $loveHeart.width() / 2;     
	var offsetY = $loveHeart.height() / 2 - 55;     
    $garden = $("#garden");            //获取id为garden的对象  标签定义图形  标签只是图形容器，您必须使用脚本来绘制图形。
    gardenCanvas = $garden[0];         //获取id为garden这个对象的首元素
	gardenCanvas.width = $("#loveHeart").width();      //将gardenCanvas的宽设置为loveHeart的宽
    gardenCanvas.height = $("#loveHeart").height()     //将gardenCanvas的高设置为loveHeart的高
    gardenCtx = gardenCanvas.getContext("2d");         //参数 contextID 指定了您想要在画布上绘制的类型。当前唯一的合法值是 "2d"，它指定了二维绘图，并且导致这个方法返回一个环境对象，该对象导出一个二维绘图 API。
    gardenCtx.globalCompositeOperation = "lighter";    //在图形重叠的地方，颜色由两种颜色值的加值来决定。
    garden = new Garden(gardenCtx, gardenCanvas);      //new一下Garden  gardenCanvas为源图像
	//content为整个网页的所在位置  margin-top为两者相差/2与10的比较的最大值
	$("#content").css("width", $loveHeart.width() + $("#code").width());   //loveheart的宽度加code的宽度
	$("#content").css("height", Math.max($loveHeart.height(), $("#code").height()));   //高度为loveheart和code的高度的最大值
	$("#content").css("margin-top", 100);  
	//$("#content").css("margin-top", Math.max(($window.height() - $("#content").height()) / 2, 10));  
	$("#content").css("margin-left", Math.max(($window.width() - $("#content").width()) / 2, 10));
	

    // renderLoop  setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
    setInterval(function () {
        garden.render();                  //要调用的函数为render（）
    }, Garden.options.growSpeed);         //周期性的时间间隔，以毫秒记1000/60 心形周期时间
});

$(window).resize(function() {             //当调整浏览器窗口的大小时，发生 resize 事件
    var newWidth = $(window).width();
    var newHeight = $(window).height();
    if (newWidth != clientWidth && newHeight != clientHeight) {    
        location.replace(location);
    }
});

function getHeartPoint(angle) {              //获取angle值,将angle的值除以pai
	var t = angle / Math.PI;                 
	var x = 19.5 * (16 * Math.pow(Math.sin(t), 3));    
	var y = - 20 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
	return new Array(offsetX + x, offsetY + y);
}
//数学原理，心形动画
function startHeartAnimation() {
	var interval = 50;
	var angle = 10;
	var heart = new Array();
	var animationTimer = setInterval(function () {
		var bloom = getHeartPoint(angle);
		var draw = true;
		for (var i = 0; i < heart.length; i++) {
			var p = heart[i];
			var distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));
			if (distance < Garden.options.bloomRadius.max * 1.3) {
				draw = false;
				break;
			}
		}
		if (draw) {
			heart.push(bloom);
			garden.createRandomBloom(bloom[0], bloom[1]);
		}
		if (angle >= 30) {
			clearInterval(animationTimer);
			showMessages();
		} else {
			angle += 0.2;
		}
	}, interval);
}

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);
//日期设置
function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "<span class=\"digit\">" + days + "</span> days <span class=\"digit\">" + hours + "</span> hours <span class=\"digit\">" + minutes + "</span> minutes <span class=\"digit\">" + seconds + "</span> seconds"; 
	$("#elapseClock").html(result);
}

function showMessages() {
	adjustWordsPosition();
	$('#messages').fadeIn(5000, function() {
		showLoveU();
	});
}

function adjustWordsPosition() {
	$('#words').css("position", "absolute");
	$('#words').css("top", $("#garden").position().top + 195);
	$('#words').css("left", $("#garden").position().left + 70);
}

function adjustCodePosition() {
	$('#code').css("margin-top", ($("#garden").height() - $("#code").height()) / 2);
}

function showLoveU() {
	$('#loveu').fadeIn(3000);
}
//banner部分
function createBanner(option){
	var data = option.data,
		dataLen = data.length,
		element = document.getElementById(option.element),
		fragment = document.createDocumentFragment(),
		a = 0,
		images = data.map(function(item){
			return fragment.appendChild(createImage(item)); 
		});
	function createImage(option){
		var a = document.createElement("a");
		var oDiv = document.createElement('div');
			oDiv.className="bannerfixed";
			oDiv.style.backgroundImage="url(" + option.image + ")";
			oDiv.innerHTML=["<h1>",
							option.h1,
							"</h1><p>",
							option.p,
							"</p>",
							option.div].join("")
		a.appendChild(oDiv);
		a.href = option.href;
		a.title = option.title;
		a.style.backgroundImage = "url(" + option.url + ")";
		return a;
	}
	function time(){
		var _a = a;
		a = a >= dataLen - 1 ? 0 : a + 1;
		images[_a].className = "";
		images[a].className = "current";
	};
	var timer = setInterval(time,2000);
	element.onmouseover = function(){
		clearInterval(timer);
	}
	element.onmouseout = function(){
		timer = setInterval(time,2000);
	}
	function createButton(className){
		var i = document.createElement("i");
		i.className = "icon " + className;
		i.onclick = function(){
			var _a = a;
			if(className === "previous"){
				a = a > 0 ? a - 1 : dataLen - 1;
			}else{
				a = a >= dataLen - 1 ? 0 : a + 1;
			}
			images[_a].className = null;
			images[a].className = "current";
		};
		return i;
	}
	images[a].className = "current";
	fragment.appendChild(createButton("previous"));
	fragment.appendChild(createButton("next"));
	element.appendChild(fragment);
}
var bannerData = [
	{
		title : "广告",
		href : "#",
		url : "./images/banner1.jpg",
		image : "",
		h1 : "",
		p : "",
		div : ""
	},
	{
		title : "大飘移",
		href : "#",
		url : "./images/banner2.jpg",
		image : "./images/adv03.png",
		h1 : "大飘移",
		p : "助您盈利能力提升50%",
		div : "<div>了解更多</div>"
	},
	{
		title : "车神",
		href : "#",
		url : "./images/banner3.jpg",
		image : "./images/adv02.png",
		h1 : "车神",
		p : "车商经营的好伙伴",
		div : "<div>了解更多</div>"
	}
];
createBanner({
	element : "banner",
	data : bannerData
});
//车展览部分
function createBox(option){
	var a = document.createElement("a");
	a.style.backgroundImage = "url(" + option.bigUrl + ")";
	a.href = option.href;
	a.innerHTML = "<h2>" + option.title + "</h2>"
				+ "<p>" + option.label + "</p>"
				+ "<img src=\"" + option.smallUrl + "\" />";
	return a;
}
var exhibitionData = [
	{
		href : "#",
		bigUrl : "./images/exhibition01.jpg",
		smallUrl : "./images/logo01.png",
		title : "阿斯顿·马丁",
		label : "豪车？不止漂亮！"
	},
	{
		href : "#",
		bigUrl : "./images/exhibition02.jpg",
		smallUrl : "./images/logo02.png",
		title : "凯迪拉克CTS",
		label : "逆山行车，不退只进"
	},
	{
		href : "#",
		bigUrl : "./images/exhibition03.jpg",
		smallUrl : "./images/logo03.png",
		title : "雷文顿",
		label : "一骑绝尘说的就是我，你只能看到飞尘"
	},
	{
		href : "#",
		bigUrl : "./images/exhibition04.jpg",
		smallUrl : "./images/logo04.png",
		title : "奥迪",
		label : "让我们漫步在童话般的路上"
	},
	{
		href : "#",
		bigUrl : "./images/exhibition05.jpg",
		smallUrl : "./images/logo05.png",
		title : "法拉利旗舰级超级跑车",
		label : "天涯任我去"
	},
	{
		href : "#",
		bigUrl : "./images/exhibition06.jpg",
		smallUrl : "./images/logo06.png",
		title : "Porsche保时捷卡宴",
		label : "家居旅行，必备车"
	}
];
var fragment = document.createDocumentFragment();
exhibitionData.forEach(function(item){
	fragment.appendChild(createBox(item));
});
document.getElementById("exhibition").appendChild(fragment);
//一键置顶及鼠标滚条
var top11 = document.getElementById("top");
top11.onclick = function(){
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	var timer = setInterval(function(){
		var now = scroll;
		var speed = (0-now)/10;
		speed = Math.floor(speed);
		scroll =now + speed;
		if(scroll==0){
			clearInterval(timer);
		}
		scrollTo(0,scroll);
	},24);
}
var topNav = document.getElementById("topNav"),
	banner = document.getElementById("banner");
onscroll = function(){
	var scroll = document.documentElement.scrollTop || document.body.scrollTop;
	if(scroll > 80){
		topNav.className = "topNav";
		topNav.className += " topNavfixed";
		banner.style.marginTop = "81px";
	}else{
		topNav.className = "topNav";
		banner.style.marginTop = "0px";
	}
	top11.style.display = scroll > 0 ? "block" : "none";
};
//底部部分
var intDate = ["车险信息网","中山二手车","车易拍","海南二手车","汽车点评网",
"杭州二手车","2014汽车报价","北京汽车网","中国二手车网","汽车配件","二手车评估","湖北专用车",
"中国汽车网","大浙汽车","搜狐二手车","车300估价","58二手车","二手车评估"];
function creatInt(option){
	var a = document.createElement('a');
	a.innerText = option;
	a.href = "#";
	return a;
}
var intfragment = document.createDocumentFragment();
intDate.forEach(function(item){
	intfragment.appendChild(creatInt(item));
})
var int = document.getElementById('wrap_int');
int.appendChild(intfragment);
//中间车资料部分
// var left_none = document.getElementById('left_none');
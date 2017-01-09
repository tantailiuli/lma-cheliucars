//城市筛选部分
var cityareaDate = [
	{
		area : "华北",
		city : ["北京","天津","河北","山西","内蒙古"]
	},
	{
		area : "东北",
		city : ["辽宁","吉林","黑龙江"]
	},
	{
		area : "华东",
		city : ["上海","江苏","浙江","安徽","福建","江西","山东"]
	},
	{
		area : "华中",
		city : ["河南","湖北","湖南"]
	},
	{
		area : "华南",
		city : ["广东","广西"]
	},
	{
		area : "西南",
		city : ["重庆","四川","云南","贵州"]
	},
	{
		area : "西北",
		city : ["陕西","宁夏","新疆"]
	}
];
function createCityarea(option){
	var city = document.createElement('div'),
		city_city = document.createElement('div'),
		city_area = document.createElement('div');
	city_area.innerText = option.area;
	city.appendChild(city_area);
	city_city.className="city_city";
	city_area.className="city_area";
	city.className="city";
	option.city.forEach(function(item){
		city_city.appendChild(citya(item));
	})
	city.appendChild(city_city)
	return city;
}
function citya(_option){
	var a = document.createElement('a');
	a.innerText = _option;
	return a;
}
var fragment_5 = document.createDocumentFragment(),
	city_box = document.getElementById('city_box');
cityareaDate.forEach(function(item){
	fragment_5.appendChild(createCityarea(item));
})
city_box.appendChild(fragment_5);

//搜索框部分
var search = document.getElementById('searchinput');
search.onfocus = function(){
	this.value = "";
}
search.onblur = function(){
	this.value = "绝尘帮你寻它千百度";
}

//登录注册部分
function dc(option){
	return document.createElement(option);
}
function dg(option_){
	return document.getElementById(option_);
}
var signbox = dc('div'),
	signfix = dc('div'),
	h3 = dc('h3'),
	close = dc('div'),
	form = dc('form'),
	body = document.body;
var uporin = h3.innerText;
signbox.className = "signbox";
signfix.className = "signfix";
close.className = "close";
form.innerHTML =["<p id=\"show\"></p>",
				"<div class=\"box\">",
				"<div class=\"line\">",
					"<label>手机号：</label>",
				"</div>",
				"<div class=\"line\">",
					"<input id=\"tel\" name=\"tel\" placeholder=\"请输入手机号\" />",
				"</div>",
				"<div class=\"line\">",
					"<label>验证码：</label>",
				"</div>",
				"<div class=\"line\">",
					"<input id=\"code\" name=\"code\" placeholder=\"请查收短信\" />",
					"<input id=\"btnCode\" type=\"button\" value=\"获取验证码\" />",
				"</div>",
				"<div class=\"line\">",
					"<input id=\"btnSubmit\" type=\"submit\" value=\"",
					uporin,
					"\" />",
				"</div>",
				"</div>"].join("");

signbox.appendChild(h3);
signbox.appendChild(close);
signbox.appendChild(form);
body.appendChild(signfix);
body.appendChild(signbox);
function signdisplay(item){
	signfix.style.display = item ? "block" : "none";
	signbox.style.display = item ? "block" : "none";
}
signdisplay(0);
signfix.onclick = function(){
	signdisplay(0);
}
close.onclick = function(){
	signdisplay(0);
}
var signIn = dg('signIn'),
	signUp = dg('signUp');
signUp.onclick = function(){
	signdisplay(1);
	h3.innerText = "注册";
}
signIn.onclick = function(){
	signdisplay(1);
	h3.innerText = "登录";
}


var iptTel = dg("tel"),
	iptCode = dg("code"),
	showp = dg("show"),
	form = document.forms[0],
	isGotCode = 0;
dg("btnCode").onclick = function(){
	var iptTelVal = iptTel.value;
	if(/^1[3578]\d{9}$/.test(iptTelVal)){
		showp.innerText="";
		var xhr = new XMLHttpRequest;
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300){
				isGotCode = 1;
				console.log(xhr.responseText);
			}
		};
		xhr.open("get", ["/code?tel=", iptTelVal].join(""), 1);
		xhr.send(null);
	}else{
		showp.innerText="请仔细输入正确的手机号";
	}
};

dg("btnSubmit").onclick = function(e){
	e.preventDefault();
	if(/^1[3578]\d{9}$/.test(iptTel.value) && /^\d{6}$/.test(iptCode.value) && isGotCode){
		showp.innerText="";
		form.submit();
	}else{
		showp.innerText="请正确输入收到的验证码";
	}
};
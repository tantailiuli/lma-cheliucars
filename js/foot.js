/*底部导航部分*/
var wrapDate = [
	{
		title : "导购大全",
		search : [{name:"城市大全",href:"area.html"},{name:"品牌大全",href:"brand.html"},{name:"车系大全",href:"audi.html"}]
	},
	{
		title : "购车指南",
		search : [{name:"如何挑选二手车",href:"howchoose.html"},{name:"如何判断事故火烧水浸车",href:"judge.html"},{name:"二手车指标说明",href:"problem.html"}]
	},
	{
		title : "关于我们",
		search : [{name:"大搜车理念",href:"ideal.html"},{name:"车牛",href:"#"},{name:"大风车",href:"#"},{name:"大搜车手机版",href:"#"}]
	},
	{
		title : "联系我们",
		search : [{name:"联系电话",href:"callus.html"}]
	}
]
function wrapcreat1(option){
	var c = document.createElement('div');
	var d = document.createElement('h4');
	c.appendChild(d);
	option.search.forEach(function(search){
		c.appendChild(wrapcreat2(search))
	})
	d.innerHTML = option.title;
	c.className = "wrap";
	return c;
}
function wrapcreat2(option){
	var e = document.createElement('a');
	e.innerHTML = option.name;
	e.href = option.href;
	return e;
}
var fragment_2 = document.createDocumentFragment();
wrapDate.forEach(function(item){
	fragment_2.appendChild(wrapcreat1(item))
})
var wrapBox = document.getElementById('wrap_box');
wrapBox.appendChild(fragment_2);

var cityDate = ["厦门","北京","南宁","杭州","郑州","漳州","长沙","合肥","西安","上海",
"宁波","温州" ,"太原","青岛","南京","武汉","沈阳","成都","石家庄","重庆",
"台州","大连","福州","佛山","临沂","济南" ,"苏州","贵阳","泉州","南昌",
"天津","东莞","深圳","昆明","广州","包头","鞍山","淮南","长春","金华",
"乌鲁木齐","无锡","柳州","潍坊","荆州","保定","枣庄","洛阳","常州","沧州","热门城市"]
function City(option){
	var a = document.createElement('a');
	a.innerHTML = option;
	return a;
}
var fragment_3 = document.createDocumentFragment();
cityDate.forEach(function(item){
	fragment_3.appendChild(City(item))
})
var wrapCity = document.getElementById('wrap_city');
wrapCity.appendChild(fragment_3);
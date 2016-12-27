var citiesData = [
	{
		province:"热门城市",
		city:["北京","宁波","深圳","厦门","成都"]
	},
	{
		province:"北京",
		city:[]
	},
	{
		province:"新疆",
		city:["乌鲁木齐"]
	},
	{
		province:"辽宁",
		city:["沈阳","大连","抚顺","盘锦","鞍山"]
	},
	{
		province:"湖南",
		city:["长沙","湘潭"]
	},
	{
		province:"河北",
		city:["石家庄","唐山","保定","沧州","秦皇岛","廊坊","邯郸"]
	},
	{
		province:"内蒙古",
		city:["呼和浩特","包头"]
	},
	{
		province:"天津",
		city:[]
	},
	{
		province:"福建",
		city:["福州","厦门","泉州","漳州","宁德","龙岩"]
	},
	{
		province:"陕西",
		city:["西安","咸阳"]
	},
	{
		province:"浙江",
		city:["杭州","宁波","台州","温州","绍兴","金华"]
	},
	{
		province:"四川",
		city:["成都","绵阳"]
	},
	{
		province:"贵州",
		city:["贵阳","遵义"]
	},
	{
		province:"云南",
		city:["昆明"]
	},
	{
		province:"上海",
		city:[]
	},
	{
		province:"山西",
		city:["太原","晋城","大同","临汾"]
	},
	{
		province:"江西",
		city:["南昌","九江","抚州","赣州"]
	},
	{
		province:"广西",
		city:["南宁","柳州","桂林"]
	},
	{
		province:"黑龙江",
		city:["哈尔滨","大庆"]
	},
	{
		province:"宁夏",
		city:["银川"]
	},
	{
		province:"江苏",
		city:["南京","盐城","徐州","宿迁","泰州","连云港","无锡","常州","扬州","苏州","镇江","淮安","南通"]
	},
	{
		province:"安徽",
		city:["合肥","蚌埠","淮南","芜湖","六安"]
	},
	{
		province:"吉林",
		city:["长春","吉林"]
	},
	{
		province:"湖北",
		city:["武汉","荆州","随州","宜昌","黄冈"]
	},
	{
		province:"重庆",
		city:[]
	},
	{
		province:"山东",
		city:["济南","威海","烟台","济宁","枣庄","临沂","潍坊","日照","青岛","淄博"]
	},
	{
		province:"河南",
		city:["郑州","安阳","新乡","洛阳","焦作","开封","商丘","许昌"]
	},
	{
		province:"广东",
		city:["广州","东莞","深圳","佛山"]
	}
];
function createProvince(option){
	var div = document.createElement('div'),
		h3a = document.createElement('a'),
		h3 = document.createElement('h3'),
		div_ = document.createElement('div');
		div.className = "procity";
	h3a.innerText = option.province;
	h3a.title = option.province + "-车流网";
	option.city.forEach(function(item){
		div_.appendChild(Pcity(item));
	});
	h3.appendChild(h3a);
	div.appendChild(h3);
	div.appendChild(div_);
	return div;
}
function Pcity(_option){
	var a = document.createElement('a');
	a.innerText = _option;
	a.title = _option;
	a.href = "#";
	return a;
}
var fragment_province = document.createDocumentFragment(),
	cities = document.getElementById('cities');
citiesData.forEach(function(item){
	fragment_province.appendChild(createProvince(item));
})
cities.appendChild(fragment_province);
var clearDIV = document.createElement('div');
clearDIV.className = "clear";
cities.appendChild(clearDIV);
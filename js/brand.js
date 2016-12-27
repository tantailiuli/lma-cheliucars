var brandData = [
	{
		letter:"A",
		carname:["阿尔法罗密欧","阿斯顿・马丁","奥迪","安凯客车"]
	},
	{
		letter:"B",
		carname:["宝骏","宝马","保时捷","北京汽车","北汽制造","奔驰","奔腾","本田","比亚迪","标致","别克","宾利","布加迪","巴博斯","宾仕盾","宝沃","北汽新能源","北汽威旺","北汽幻速"]
	},
	{
		letter:"C",
		carname:["昌河","长安","长城","成功汽车","长安商用"]
	},
	{
		letter:"D",
		carname:["大众","道奇","东风","东南","大宇","东风风光","大迪","大发","东风风度","东风风神","东风小康","DS","东风风行"]
	},
	{
		letter:"F",
		carname:["法拉利","菲亚特","丰田","福迪","福特","福田","富奇","菲斯克","福汽启腾"]
	},
	{
		letter:"G",
		carname:["GMC","广汽传祺","广汽吉奥","观致","光冈"]
	},
	{
		letter:"H",
		carname:["哈飞","海马","悍马","红旗","华普","华泰","黄海","华颂","海格","华凯","汉江","哈弗","恒天"]
	},
	{
		letter:"J",
		carname:["吉利汽车","Jeep","江淮","江铃","捷豹","金杯","金程","金龙","江铃集团轻汽","金旅","九龙"]
	},
	{
		letter:"K",
		carname:["开瑞","凯迪拉克","克莱斯勒","康迪","卡尔森","科尼赛克","凯翼","KTM","卡威"]
	},
	{
		letter:"L",
		carname:["兰博基尼","劳斯莱斯","雷克萨斯","雷诺","力帆","莲花汽车","林肯","铃木","陆风","路虎","猎豹汽车","罗孚","老爷车","理念","路特斯"]
	},
	{
		letter:"M",
		carname:["马自达","玛莎拉蒂","迈巴赫","MINI","MG","美亚","迈凯伦","摩根"]
	},
	{
		letter:"N",
		carname:["纳智捷","尼奥普兰","南京金龙"]
	},
	{
		letter:"O",
		carname:["讴歌","欧宝","欧朗"]
	},
	{
		letter:"P",
		carname:["帕卡德"]
	},
	{
		letter:"Q",
		carname:["奇瑞","起亚","乔治·巴顿","启辰"]
	},
	{
		letter:"R",
		carname:["日产","荣威","瑞麒","如虎"]
	},
	{
		letter:"S",
		carname:["萨博","三菱","双环","双龙","斯巴鲁","斯柯达","smart","上汽大通","陕汽通家","赛麟","思派朗","绅宝","世爵","思铭"]
	},
	{
		letter:"T",
		carname:["泰卡特","特斯拉","腾势"]
	},
	{
		letter:"W",
		carname:["威麟","威兹曼","沃尔沃","五菱汽车","五十铃"]
	},
	{
		letter:"X",
		carname:["西雅特","现代","雪佛兰","雪铁龙","新凯"]
	},
	{
		letter:"Y",
		carname:["一汽","依维柯","英菲尼迪","永源","野马汽车","云雀","英致"]
	},
	{
		letter:"Z",
		carname:["中华","中兴","众泰","中顺","中欧汽车","知豆"]
	},
];
function createBrand(option){
	var div = document.createElement('div'),
		letter = document.createElement('div'),
		brands = document.createElement('div');
	letter.innerText = option.letter;
	div.className = "brand_box";
	letter.className = "letter";
	brands.className = "brands";
	option.carname.forEach(function(_item){
		brands.appendChild(function(){
		var a = document.createElement('a');
		a.innerText = option.letter+ " " + _item;
		a.title = option.letter+ " " + _item;
		return a;
		}(_item));
	});
	div.appendChild(letter);
	div.appendChild(brands);
	var clearDIV = document.createElement('div');
	clearDIV.className = "clear";
	div.appendChild(clearDIV);
	return div;
}

var fragment_brand = document.createDocumentFragment(),
	brand = document.getElementById('brand');
brandData.forEach(function(item){
	fragment_brand.appendChild(createBrand(item));
});
brand.appendChild(fragment_brand);
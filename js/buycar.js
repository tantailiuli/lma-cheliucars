/*主体买车部分*/
var carsaleDate = eval('([{"image":"http://img.souche.com/files/default/4357a48da0f2391d705c039ba5214726.png@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","href":"#","title":"2011款 宝马5系 535Li 领先型","price":"21.2","time":"2011/07","kilometer":"7.50","address":"浙江","isPersonal":1},{"image":"http://f.souche.com/f75ef6a37218d25cef7e16ce79094598.png?imageView2/1/w/240/h/160","href":"#","title":"2014款 奥迪A7 35 FSI quattro 技术型","price":"46.8","time":"2014/10","kilometer":"5.00","address":"浙江","isPersonal":1},{"image":"http://f.souche.com/9c1f3563d950dd370d60854454463b6e.png?imageView2/1/w/240/h/160","href":"#","title":"2011款 奔驰C级(进口) C 200 时尚旅行版","price":"23.8","time":"2013/12","kilometer":"2.50","address":"浙江","isPersonal":1},{"image":"http://img.souche.com/20161210/JPG/c4beca52f96bee76df9b3ad93897ccdb.JPG","href":"#","title":"2012款 MG5 1.5L 自动精英版","price":"7.18","time":"2016/12","kilometer":"0.14","address":"浙江","isPersonal":1},{"image":"http://f.souche.com/c060a769766c1662c5c6b98cc4de8dfd.jpg?imageView2/1/w/240/h/160","href":"#","title":"别克 2004款 君威 2.5L 豪华型","price":"1.3","time":"2003/04","kilometer":"12.00","address":"浙江","isPersonal":1},{"image":"http://f.souche.com/34d5fe841ad8b2a71f0621dad7643a91.jpg?imageView2/1/w/240/h/160","href":"#","title":"2008款 宝马3系 320i 进取型","price":"9.2","time":"2008/04","kilometer":"12.00","address":"浙江","isPersonal":1},{"image":"http://f.souche.com/fdcfe13760a0fd283615312bd2984632.jpg?imageView2/1/w/240/h/160","href":"#","title":"大众 2008款 POLO 劲取 1.6L 手动雅致版高配","price":"3.3","time":"2009/01","kilometer":"7.00","address":"浙江","isPersonal":1},{"image":"http://f.souche.com/b9ab313e2a0716a187d5ef7ddf77fab7.jpg?imageView2/1/w/240/h/160","href":"#","title":"2012款 马自达2 两厢炫动 1.5L 自动豪华版","price":"5.3","time":"2013/03","kilometer":"3.00","address":"浙江","isPersonal":1},{"image":"http://f.souche.com/cf47343cee5259dba130c9367fba9af2.jpg?imageView2/1/w/240/h/160","href":"#","title":"福特 2009款 福克斯 两厢 2.0L 手动运动型","price":"3.6","time":"2009/10","kilometer":"10.00","address":"浙江","isPersonal":1},{"image":"http://f.souche.com/12230b84022a8153f90ecedd32dd71c9.png?imageView2/1/w/240/h/160","href":"#","title":"2010款 别克GL8 陆尊","price":"10.8","time":"2010/02","kilometer":"9.00","address":"浙江","isPersonal":1},{"image":"http://f.souche.com/867b60a21a28a70092b49b6aad451190.png?imageView2/1/w/240/h/160","href":"#","title":"大众 2011款 POLO 1.4L 自动致尚版","price":"6","time":"2011/09","kilometer":"4.40","address":"浙江","isPersonal":1},{"image":"http://f.souche.com/47f0cd6ee1303e8f415916824b0edde5.png?imageView2/1/w/240/h/160","href":"#","title":"长安 2010款 奔奔MINI 1.0L 手动舒适型","price":"1.1","time":"2010/10","kilometer":"6.00","address":"浙江","isPersonal":1},{"image":"http://img.souche.com/20161223/JPG/ef5084ff7bc63227681982615b4a4840.JPG@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","href":"#","title":"别克 2008款 凯越 1.8LE-AT","price":"4.3","time":"2009/01","kilometer":"8.70","address":"浙江","isPersonal":1},{"image":"http://img.souche.com/20161215/JPG/cb431cf48f915a58e2795abad0b1af1b.JPG@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","href":"#","title":"2013款 捷豹F-TYPE 3.0T S 敞篷版","price":"67.8","time":"2014/04","kilometer":"3.60","address":"浙江","isPersonal":1},{"image":"http://img.souche.com/files/default/42cbab9e4ab69238f065b64248b4d427.png","href":"#","title":"2014款 宝马5系 525Li 豪华设计套装","price":"40.2","time":"2016/01","kilometer":"1.00","address":"浙江","isPersonal":1},{"image":"http://img.souche.com/20161226/JPG/1b552abb3dce29e0679795c49fd8b6b8.JPG@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","href":"#","title":"别克 2010款 君越 3.0L旗舰版","price":"12.5","time":"2010/01","kilometer":"7.70","address":"浙江","isPersonal":1},{"image":"http://img.souche.com/20161226/JPG/df414931375ed9c80fae43e9846926bc.JPG","href":"#","title":"2013款 奥迪Q5 40 TFSI 技术型","price":"31.8","time":"2013/12","kilometer":"3.60","address":"浙江","isPersonal":1},{"image":"http://f.souche.com/cbf71d3515141a6a6b8d6e72f51aed23.png?imageView2/1/w/240/h/160","href":"#","title":"2008款 马自达6 2.0L 自动时尚型","price":"7.2","time":"2010/06","kilometer":"7.13","address":"浙江","isPersonal":1},{"image":"http://img.souche.com/20161226/JPG/d374d0961fa6b0ca073cbb8796ee29fd.JPG@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","href":"#","title":"丰田 2013款 凯美瑞 2.0G 舒适版","price":"13.5","time":"2013/12","kilometer":"6.58","address":"浙江","isPersonal":1},{"image":"http://img.souche.com/20161226/JPG/6fe1b2bde1d20f6ac812dcb592538ad4.JPG@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","href":"#","title":"2011款 奥迪A4L 2.0 TFSI 标准型","price":"14.8","time":"2011/11","kilometer":"5.35","address":"浙江","isPersonal":1},{"image":"http://img.souche.com/files/default/476429beb9521280c6d72f777d5fa9ec.png","href":"#","title":"2013款 宝马3系(进口) 320i时尚型","price":"23.5","time":"2013/01","kilometer":"2.30","address":"浙江","isPersonal":1},{"image":"http://img.souche.com/20161221/JPG/11be47d7f51fa70b39ed260ad1a96ed3.JPG","href":"#","title":"2012款 奔驰S级 S 300 L 豪华型 Grand Edition","price":"51.8","time":"2012/08","kilometer":"7.00","address":"浙江","isPersonal":1},{"image":"http://img.souche.com/20161226/JPG/5c9dacd14d6c56b1ffb5e5c798f34ea3.JPG","href":"#","title":"2012款 奔驰S级 S 400 L HYBRID Grand Edition","price":"55.8","time":"2012/03","kilometer":"7.00","address":"浙江","isPersonal":1},{"image":"http://img.souche.com/20161226/JPG/3b5cde5e6b9b2e4aadf378137ceb5900.JPG@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","href":"#","title":"大众 2014款 甲壳虫 1.2TSI 舒适型","price":"15.88","time":"2014/10","kilometer":"1.40","address":"浙江","isPersonal":1}])');
function carcreat(option){
	var a = document.createElement("a"),
		b = document.createElement("div"),
		carbox = document.createElement("div"),
		img = document.createElement('img');
	a.className = "carbox_a";
	b.className = "carbox_div";
	carbox.className = "carbox";
	img.src = option.image;
	a.href = option.href;
	a.appendChild(img);
	b.innerHTML = ["<div class=\"salehref\"><a href=\"",
				 option.href,
				 "\">",
				option.title,
				"</a></div><p>¥ ",
				option.price,
				"万</p><span>",
				option.time,
				"上牌 | </span><span>",
				option.kilometer,
				"万公里</span><span> | ",
				option.address,
				"</span><div class=\"carsame\"><div>",
				function(){
					return option.isPersonal ? "实名" : "商家"
				}(),
				"认证</div></div>"].join("");
	carbox.appendChild(a);
	carbox.appendChild(b);
	return carbox;
}
var CarCreat = function(){
	var oCarsale = document.getElementById('carsale');
	return function(date){
			oCarsale.innerText = "";
			var fragment_1 = document.createDocumentFragment();
			date.forEach(function(item){
				fragment_1.appendChild(carcreat(item));
			})
			oCarsale.appendChild(fragment_1);
		}	
}()
CarCreat(carsaleDate)
/*一键至顶部分*/
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
top11.style.display = "none";

/*鼠标滚动部分*/
var mainRightUp = document.getElementById('main_right_up');
onscroll = function(){
	var scrolltop = document.documentElement.scrollTop || document.body.scrollTop,
		oCarsale = document.getElementById('carsale');
	if (scrolltop > 100) {
		mainRightUp.className = " main_right_up_fixed";
		oCarsale.style.marginTop = "82px";

	}else{
		mainRightUp.className = "main_right_up";
		oCarsale.style.marginTop = "0px";
	};
		top11.style.display = scrolltop > 0 ? "block" : "none";
}

/*左侧筛选部分*/
var selectDate = [
	{
		title : "里程",
		select : [
			{
				name : "1万公里以内",
				value : 1
			},
			{
				name : "3万公里以内",
				value : 3
			},
			{
				name : "5万公里以内",
				value : 5
			},
			{
				name : "8万公里以内",
				value : 8
			},
			{
				name : "不限",
				value : Infinity
			}
		]
	},
	{
		title : "价格",
		select : [
			{
				name : "5万元以内",
				value : "0-5"
			},
			{
				name : "5万元到10万元",
				value : "5-10"
			},
			{
				name : "10万元到50万元",
				value : "10-50"
			},
			{
				name : "50万元以上",
				value : "50-Infinity"
			},
			{
				name : "不限",
				value : "0-Infinity"
			}
		]
	},
	{
		title : "变速箱",
		select : [
			{
				name : "MT-手动",
				value : 1
			},
			{
				name : "AT-自动",
				value : 2
			},
			{
				name : "不限",
				value : 0
			}
		]
	},
	{
		title : "排量",
		select : [
			{
				name : "1.0L以下",
				value : "0-1.0"
			},
			{
				name : "1.1L-1.6L",
				value : "1.1-1.6"
			},
			{
				name : "1.6L-2.0L",
				value : "1.6-2.0"
			},
			{
				name : "2.0L-2.5L",
				value : "2.0-2.5"
			},
			{
				name : "2.5L-3.0L",
				value : "2.5-3.0"
			},
			{
				name : "3.0L-4.0L",
				value : "3.0-4.0"
			},
			{
				name : "4.0L以上",
				value : "4.0-Infinity"
			},
			{
				name : "不限",
				value : "0-Infinity"
			}
		]
	},
	{
		title : "排放标准",
		select : [
			{
				name : "国二及以上",
				value : 2
			},
			{
				name : "国三及以上",
				value : 3
			},
			{
				name : "国四及以上",
				value : 4
			},
			{
				name : "不限",
				value : 0
			}
		]
	},
	{
		title : "国别",
		select : [
			{
				name : "德国",
				value : 356
			},
			{
				name : "日本",
				value : 628
			},
			{
				name : "美国",
				value : 306
			},
			{
				name : "韩国",
				value : 217
			},
			{
				name : "法国",
				value : 981
			},
			{
				name : "英国",
				value : 509
			},
			{
				name : "意大利",
				value : 162
			},
			{
				name : "瑞典",
				value : 480
			},
			{
				name : "中国",
				value : 095
			},
			{
				name : "奥地利",
				value : 294
			},
			{
				name : "不限",
				value : 0
			}
		]
	}
]
function createSelect(option,index){
	var select_box = document.createElement('div'),
		select = document.createElement('div'),
		h3 = document.createElement('h3'),
		ul= document.createElement('ul'),
		frequency =0;
	select_box.className = "select_box";
	select.className = "select";
	h3.innerText = option.title;
	select.innerHTML = "请选择" + option.title;
	function createli(_option){
		var li = document.createElement('li');
		li.innerText = _option.name;
		li.onclick = function(){
			select.innerText = _option.name;
			select.appendChild(ul);
			CarCreat(carsaleDate.filter(function(item_){
				return option.ulforselect(item_,_option.value);
			}));
		}
		return li;
	}
	option.select.forEach(function(_item){
		ul.appendChild(createli(_item));
	})
	
	select.onclick = function(){
		frequency ^= 1;
		ul.style.display = frequency ? "block" : "none";
		stopBubble();
		onclick = function(){
			frequency ^= 1;
			ul.style.display = "none";
			onclick=null;　
		}
	}
	function stopBubble(){  
	    if(select && select.stopPropagation){
	    	select.stopPropagation();
	    }else{
	    	window.event.cancelBubble=true;
	    }
	}

	select.appendChild(ul);
	select_box.appendChild(h3);
	select_box.appendChild(select);
	return select_box;
}
var fragment_4 = document.createDocumentFragment(),
	select_box_box = document.getElementById('select_box_box'),
	ulforselect = [
		function ul1(item_,value){
			return item_.kilometer < value;
		},
		function ul2(item_,value){
			var v = value.split("-");
			return +item_.price > v[0] && +item_.price < v[1];
		}
	];
selectDate.forEach(function(item,index){
	item.ulforselect = ulforselect[index];
	fragment_4.appendChild(createSelect(item));
})
select_box_box.appendChild(fragment_4);


//先创建一个大的DIV
window.onload = function(){
	//创建一个数组存储需要添加的字母
	var info = ["0.",7,8,9,"/",4,5,6,"*",1,2,3,"-",0,".","=","+","c"];
	var val = "";//定义一个空字符串直接连接按下的值
	var main = document.createElement("DIV");
	//给创建的main DIV添加独有的属性
	main.setAttribute("id","main")//添加属性名为main 还有id 方便后面直接获取id
	//接下来创建18个小的div
	for (var i = 0; i < 18; i++) {
	  var div = document.createElement("class","DIV");
	  //给每个小的div添加属性为class 名字为div
	  //这里由于18个div的属性一样，所以定义为class属性
	  div.setAttribute("class","div");
	  //下面需要将数字添加进去就需要添加一个文本节点
	  var txt = document.createTextNode(info[i]);
	  //info[i]表示添加的字母为数组的值
	  //再把文本节点放入div的格子中
	  //注意这里创建的是文本格子，一定要添加到div格子中
	  div.appendChild(txt);
	  //下面设置鼠标的点击事件 点击div 就在第一个div里面显示  
	  //相当于就是字符串的连接
	 //利用if语句先判断是否是第一个div 如果不是 再判断是否是清除或者等号
	
	//每个div自身都有onclick函数的属性
	   if(i!=0){//这里只给除了显示框的定义点击事件 排除第一个div
	   	div.onclick = function(){
	   		if(this.innerHTML==="c"){//这里用this 而不是div  这里需要全等号  需要值和类型都相同
	 		window.location.reload();//通过window的对象刷新来清除
	 	}else if(this.innerHTML==="="){
	 		val = eval(val);//利用eval函数计算字符串
	 	}else{//排出了两个特殊的情况剩下的就是普通的字符串的拼接
	 		val+=this.innerHTML;	 		
	 	}
	 	//获取到第一个DIV
	 	var firstDIV =  document.getElementById("first");
	 	//再将val值传递给第一个div显示出来
	 	firstDIV.innerHTML = val;
	   }	
	 }
	  //创建好之后添加到大的DIV中
	  main.appendChild(div);
}
	//下面分别给最后一个和第一个div重新定义一个属性为other
	main.firstChild.setAttribute("class","other");
	main.firstChild.setAttribute("id","first");//这里设置属性为id 方便后面显示的时候获取这里的值 属性名为first
	main.lastChild.setAttribute("class","other");	
	//创建好之后添加到body里面去显示出来
	document.body.appendChild(main);
}

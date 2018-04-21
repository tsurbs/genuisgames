//use this.  it gets the values from the css and the in-tag css, not just the in-tag css.
//    style = window.getComputedStyle(a),
//    top = style.getPropertyValue('top');
function parseToNum(b){
	if(parseInt(b)==parseFloat(b.replace("px","0"))/10){
	return parseFloat(b.replace("px","0"))/10
}else{
	return parseFloat(b.replace("px","0"))
}
}
function rtnToStd(c){return String(c)+"px"};
function bottomFun(a) {  
	var style = window.getComputedStyle(a);
    var top = style.getPropertyValue('top');
    var height = style.getPropertyValue('height');
    return rtnToStd(parseToNum(top)+parseToNum(height))
};
function rightFun(a) {
	var style = window.getComputedStyle(a);
    var left = style.getPropertyValue('left');
    var width = style.getPropertyValue('width');
    return rtnToStd(parseToNum(left)+parseToNum(width))
};
function leftFun(a) {
	var style = window.getComputedStyle(a);
    var left = style.getPropertyValue('left');
    return left
}
function topFun(a) {
	var style = window.getComputedStyle(a);
    var top = style.getPropertyValue('top');
    return top
};
function bottomFunNum(a) {  
	return parseToNum(bottomFun(a));
};
function rightFunNum(a) {
	return parseToNum(rightFun(a))
};
function leftFunNum(a) {
	return parseToNum(leftFun(a))
};
function topFunNum(a) {
	return parseToNum(topFun(a))
};
function combo(a,b,c) {
	if(b==="top"){
		var d = topFun(a)
	}else if (b==="left") {
		var d = leftFun(a)
	}else if(b==="right"){
		var d = rightFun(a)
	}else if(b==="bottom"){
		var d = bottomFun(a)
	}if(c==="top"){
		var e = topFun(a)
	}else if (c==="left") {
		var e = leftFun(a)
	}else if(c==="right"){
		var e = rightFun(a)
	}else if(c==="bottom"){
		var e = bottomFun(a)
	}
	return d+","+e
}function rectCollide(a,b,c) {
	var a = a;
	var b = b;
	var c = c;
	var atop;
	var aleft;
	var aright;
	var abot;
	var btop;
	var bleft;
	var bright;
	var bbot;
	function get(){
		/*atop = topFunNum(a);
		aleft = leftFunNum(a);
		aright = rightFunNum(a);
		abot = bottomFunNum(a);
		btop = topFunNum(b);
		bleft = leftFunNum(b);
		bright = rightFunNum(b);
		bbot = bottomFunNum(b);*/
		console.log("hi3")
		requestAnimationFrame(get)
	}requestAnimationFrame(get)
	function check(){
		if (aright>=bleft&&aright<=bright&&atop<=btop&&atop>=bbot) {
			c();
		}
	requestAnimationFrame(check)
	}requestAnimationFrame(check)
}

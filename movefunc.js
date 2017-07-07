/*must import posfunc js using this code in <head>:
<script type="text/javascript" src='posfunc.js'></script>
*/
function moveSetX(id, far) {
	var xo = leftFunNum(id);
	id.style.left = rtnToStd(xo+=far)
}
function moveSetY(id, far) {
	var yo = topFunNum(id);
	id.style.top = rtnToStd(yo+=far)
}
function moveSetXTime(id, far, time) {
	var id = id
	var far = far
	var time = time
	var i=0
	var hgh;
	var use;
	hgh = (far)/time;
	use = 20*hgh;
	var xo;
		function go(){
			i++
			xo = leftFunNum(id);
	id.style.left = rtnToStd(xo+use)
			if(i==(time/20)){
				window.clearInterval(ok)
			}
		}
	var ok = window.setInterval(go, 20)
}
function moveSetYTime(id, far, time) {
	var id = id
	var far = far
	var time = time
	var i=0
	var hgh;
	var use;
	hgh = (far)/time;
	use = 20*hgh;
	var xo;
		function go(){
			i++
			yo = topFunNum(id);
	id.style.top = rtnToStd(yo+use)
			if(i==(time/20)){
				window.clearInterval(ok)
			}
		}
	var ok = window.setInterval(go, 20)
}
function moveDiag(thing, angle, speed, end){
	var thing = thing;
	var angle = angle;
	var speed = speed;
	var end = end;
	function go(){
	moveSetX(thing, (speed * Math.cos(angle * Math.PI / 180)));
	moveSetY(thing, (speed * Math.sin(angle * Math.PI / 180)));
	end
} jj = setInterval(go, 20)
}
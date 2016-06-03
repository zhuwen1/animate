//最终封装的'完美移动框架'
function startMove(obj,json,fn){
clearInterval(obj.timer);
var flag;//标志所有运动是否到达目标值
obj.timer=setInterval(function(){
flag=true; //进入定时器时,现将flag设置为所有的属性都已达到目标值
for(var attr in json){
//取属性值
var curr=0;
//判断是否为透明度
if(attr=='opacity'){
curr=Math.round(parseFloat(getStyle(obj,attr))*100);
}else{
curr=parseInt(getStyle(obj,attr));
}
//移动速度处理
var speed=0;
speed=(json[attr]-curr)/10;
speed=speed>0?Math.ceil(speed):Math.floor(speed);
if(curr!=json[attr]){
flag=false; //假设有三个json的key/value值,这三个值中只要有一个没有达到目标值,flag就等于false.
}
if (attr=='opacity') {
obj.style.filter='alpha(opacity:'+(curr+speed)+")";
obj.style.opacity=(curr+speed)/100;
}else{
obj.style[attr]=curr+speed+'px';
}
}
if(flag){
clearInterval(obj.timer);
if(fn){
fn();
}
}
},30);
}
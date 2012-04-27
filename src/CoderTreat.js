function start(){
 setInterval(main, 15);
}
function main(){
 clear();
 draw();
}
function clear(){
 var ctx = document.getElementById('screen').getContext('2d');
 ctx.fillStyle = "rgb(0, 0, 0)";
 ctx.fillRect(0, 0, 512, 512);

}

function draw(){
 var ctx = document.getElementById('screen').getContext('2d');
 ctx.fillStyle = 'rgb(255,255,255)';
 ctx.strokeStyle = 'rgb(255,255,255)';
 ctx.lineWidth=0.1;
 
 ctx.beginPath(); 
 for(var i=16;i<512;i+=16){
  ctx.moveTo(i,   0);
  ctx.lineTo(i, 512);
  ctx.closePath();

  ctx.moveTo(  0, i);
  ctx.lineTo(512, i);
  ctx.closePath();
 }
 ctx.stroke();

}

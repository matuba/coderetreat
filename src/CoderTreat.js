var cell = new Cells([
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
                        ]);

var runFlag=0;
var cellImgs=new Array(8);
var langFlag=1;

function start(){
 setInterval(main, 150);
 canvas = document.getElementById("screen");
 canvas.onmousedown = mouseDownListner;

 cellImgs[1]=new Image();
 cellImgs[1].src="../img/perllang.png";
 cellImgs[2]=new Image();
 cellImgs[2].src="../img/phplang.png";
 cellImgs[3]=new Image();
 cellImgs[3].src="../img/rubylang.png";
}
function switchRun(){
 runFlag= 1-runFlag;
}
function setLangFlag(flag){
 langFlag=flag;
}
function mouseDownListner(e) {
 var rect = e.target.getBoundingClientRect();
 var cellX=parseInt((e.clientX-rect.left+32)/32);
 var cellY=parseInt((e.clientY-rect.top+32)/32);
 if(cell.getCell(cellX,cellY)!=0)
  cell.setCell( 0, cellX, cellY);
 else
  cell.setCell( langFlag, cellX, cellY);
 
}
function main(){
 clear();
 draw();
}
function clear(){
 var ctx = document.getElementById('screen').getContext('2d');
 ctx.fillStyle = "rgb(0, 0, 0)";
 ctx.beginPath(); 
 ctx.fillRect(0, 0, 512, 512);
 ctx.closePath();
 ctx.stroke();
}

function draw(){
 var ctx = document.getElementById('screen').getContext('2d');
 ctx.fillStyle = 'rgb(255,255,255)';
 ctx.strokeStyle = 'rgb(255,255,255)';
 ctx.lineWidth=0.1;
 
 ctx.beginPath(); 
 for(var i=32;i<512;i+=32){
  ctx.moveTo(i,   0);
  ctx.lineTo(i, 512);
  ctx.closePath();

  ctx.moveTo(  0, i);
  ctx.lineTo(512, i);
  ctx.closePath();
 }
 ctx.stroke();

 for(var x=1;x<cell.cells[0].length-1;x++){
  for(var y=1;y<cell.cells[0].length-1;y++){
   if(cell.getCell(x,y)>=1){
//    ctx.fillStyle = "rgb(255,255,255)";
//    ctx.beginPath(); 
//    ctx.fillRect(16*(x-1), 16*(y-1), 16, 16);
//    ctx.closePath();
//    ctx.stroke();
    ctx.drawImage(cellImgs[cell.getCell(x,y)],32*(x-1), 32*(y-1), 32, 32);
   }
  }   
 }
 if(runFlag==1)
  cell.next();
}

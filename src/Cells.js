var Cells=function(obj){
 this.flip=0;
 this.cells= new Array(2);
 this.cells[0]=obj;

 this.cells[1]=new Array(this.cells[0].length);
 for(var y=0;y<this.cells[0].length;y++){
  this.cells[1][y]=new Array(this.cells[0].length);
  for(var x=0;x<this.cells[0].length;x++){
    this.cells[1][y][x]=this.cells[0][y][x];
   }
 }
}; 
Cells.prototype.countAlive=function(_x,_y){
 var result=0;
 for(var i=-1;i<2;i++){
  for(var j=-1;j<2;j++){
   if(this.cells[this.flip][_y+j][_x+i]==0)
    continue;
   if(i ==0 && j==0)
    continue;

   result++;
  }
 }
 return result;
}
Cells.prototype.isAlive=function(_x,_y){
 return this.cells[this.flip][_y][_x];
}
Cells.prototype.nextGeneration=function(_x,_y){
 var alive=this.isAlive(_x,_y);
 var count=this.countAlive(_x,_y);
 //誕生
 if(alive==0 && count==3){
  return 0;
 }
 //生存
 if(alive==1 && (count==2 || count==3)){
  return 1;
 }
  //過疎
 if(alive==1 && count<=1){
  return 2;
 }
 //過密
  if(alive==1 && count>=4){
  return 3;
 }
 
 return -1;
}

Cells.prototype.next=function(){
 var next=1-this.flip;
 for(var x=1;x<this.cells[this.flip].length-1;x++){
   for(var y=1;y<this.cells[this.flip].length-1;y++){
    var nextStatus = this.nextGeneration(x,y);
    if(nextStatus == 0 || nextStatus == 1)
     this.cells[next][y][x]=1;
    else 
     this.cells[next][y][x]=0;
  }
 }
 this.flip=1-this.flip;
} 

Cells.prototype.getCell=function(_x,_y){
 return this.cells[this.flip][_y][_x];
}
Cells.prototype.setCell=function(val,_x,_y){
 this.cells[this.flip][_y][_x] = val;
}


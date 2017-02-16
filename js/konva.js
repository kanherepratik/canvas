var components = [];
var col = ['blue','green','red','black','grey','pink','cyan','Chocolate','Chartreuse'];

 var stage = new Konva.Stage({
      container: 'container',
      width: 410,
      height: 600,
      draggable:true
    });
var layer = new Konva.Layer();

function ComponentRow(x,y,width,height,color,row,col){
 
  for (var  j = 0;j < row; j++) {
    for (var i = 0; i < col; i++) {
       var num = Math.floor((Math.random() * 5) + 1);
       
       var block = new Konva.Group(); 
       var simpleText = new Konva.Text({
        x: (x+15) ,
        y: (y+5),
        text: num,
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'yellow'
        });
       var rect = new Konva.Rect({
        x: x,
        y: y,
        width: width,
        height: height,
        fill: color,
        text:num,
        stroke: color,
        strokeWidth: 2,
        cornerRadius:10
      });
       block.x = x;
       block.y = y;
       block.width= width;
       block.height= height; 
       block.draggable = true;
      //  block.childern[0]
       block.visible=true;
       block.dragBoundFunc =  function(pos) {
          //  var newY = pos.y < y ? y : pos.y;
            return {
                x: x,
                y: y
          }
        };
        
      x += 59;
       block.add(rect).add(simpleText);
        layer.add(block);
        // layer.add(simpleText); 
       
        // components.push(rect); 
    }
    x = 2;
		y = y - 59;   
  }
   stage.add(layer);  
    
}
ComponentRow(2,550,50,50,'black',3,7);

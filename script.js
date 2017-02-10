
var GamePiece,components=[];
function startGame() {
    myGameArea.start();
    componentRow(2,550,2,7);
    setInterval(redraw(),50000);
	// updateComponent();
	;
};

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 410;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        // this.interval = setInterval(updateGameArea, 20);

    },
    clear: function(){
    	this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    }
}

var _count = 0;
var _box = 59;

/*function componentRow(x,y){
	var col = ['blue','green','red','black','grey','pink','cyan','Chocolate','Chartreuse'];
   // var x1=1;
    
	 for (var row = 0; row < 2; row++) {
		
		for (var i = 0; i < 7; i++) {
			
		  	   var text = Math.floor((Math.random() * 9) + 1);
		 	   GamePiece = new component(50, 50, col[text]||col[0], x, y - ((_box*2) * _count), text);
		 	   components.push(GamePiece);
		 	   // console.log(components);
			   x += 59;  
		}
		x = 2;
		y = y - 59; 
	}
	_count++;

}*/
function componentRow(x,y,Row,Col){
	var col = ['blue','green','red','black','grey','pink','cyan','Chocolate','Chartreuse'];
    
	 for (var row = 0; row < Row; row++) {
		for (var i = 0; i < Col; i++) {
		  	   var text = Math.floor((Math.random() * 9) + 1);
		 	   GamePiece = new component(50, 50, col[text]||col[0], x, y, text);
		 	   components.push(GamePiece);
		 	   // console.log(components);
			   x += 59;  
		}
		x = 2;
		y = y - 59; 
	}
	_count++;

}

function redraw(){
	myGameArea.clear();
	console.log(components);
	for(var i=0;i<components.length;i++){
		var temp = components[i];
		var newGamePiece = new component(temp.width,temp.height,temp.color,temp.x,(temp.y-59),temp.text);
	}
	componentRow(2,550,1,7);
}

function component(width,height,color,x,y,text){
	this.width = width;
	this.height = height;
	this.color = color;
	this.x = x;
	this.y = y;
	this.text = text;
	var cornerRadius = 10;
	window.ctx = myGameArea.context;

	ctx.lineJoin = "round";
	ctx.lineWidth = cornerRadius;
	ctx.fillStyle = this.color;
	ctx.strokeStyle = this.color;
	ctx.strokeRect(this.x+(cornerRadius/2), this.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
	ctx.fillRect(this.x+(cornerRadius/2), this.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
	ctx.font = "20px Georgia";
	ctx.fillStyle = "white";
	ctx.fillText(this.text,this.x+23,y+27);

	// this.update = function(){	
	// 	for(var i = 0;i<components.length;i++){
	// 		ctx1 = components[i].getContext;
	// 		ctx1.fillRect(this.x+(cornerRadius/2), this.y+(cornerRadius/2), this.width-cornerRadius, this.height-cornerRadius);
	// 	}
	};
	 // this.newPos = function() {
  //       // this.x += x;
  //       this.y -= 50;
  //   }

	

// function updateComponent(){
// 	// myGameArea.clear();
// 	// GamePiece.newPos();
// 	// GamePiece.update();
// 	// componentRow(2,550-);

// }

startGame();


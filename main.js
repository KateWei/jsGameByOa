var FPS = 60;

// 創造 img HTML 元素，並放入變數中
var bgImg = document.createElement("img");

// 設定這個元素的要顯示的圖片
bgImg.src = "images/map.png";

var hero = {
    x: 0,
    y: 0
};

var slimeImg = document.createElement("img");
slimeImg.src = "images/slime.gif";

var heroImg = document.createElement("img");
heroImg.src = "images/rukia.gif";

var ctImg = document.createElement("img");
ctImg.src = "images/tower-btn.png";

var towerImg = document.createElement("img");
towerImg.src = "images/tower.png";

// 找出網頁中的 canvas 元素
var canvas = document.getElementById("game");

// 取得 2D繪圖用的物件
var ctx = canvas.getContext("2d");

var cursor = {x:0, y:0};
$("#game").mousemove(function(event){
	cursor.x = event.offsetX;
	cursor.y = event.offsetY;
});

var tower = {
	x:0,
	y:0
};

var isBuilding = false;
$("#game").click(function(event){
	if (event.offsetX > 540 && event.offsetY > 380){
		isBuilding = true;
	}
	else{
		if(isBuilding == true){
			tower.x = cursor.x - cursor.x % 32;
			tower.y = cursor.y - cursor.y % 32;
		}
		isBuilding = false;
	}
});

var enemy = {
	x: 96,
	y: 480-32,
	speed: 64,
	pathDes: 0,
	direction: {x: 0, y: -1},
	move: function(){
		if(isCollided(enemyPath[this.pathDes].x, enemyPath[this.pathDes].y, this.x,this.y, this.speed/FPS,this.speed/FPS,)){
			enemyPath[this.pathDes].x; 
			enemyPath[this.pathDes].y;
			this.pathDes += 1;
			if(enemyPath[this.pathDes].x < this.x){
				this.direction = {x: 1, y: 0};
			}else if{
			if(enemyPath[this.pathDes].x > this.x){
				this.direction = {x: 1, y: 0};
			}
			}else if{
			if(enemyPath[this.pathDes]yx > this.y){
				this.direction = {x: 0, y: -1};
			}
			}else if{
			if(enemyPath[this.pathDes].y < this.y){
				this.direction = {x: 0, y: -1};
			}
			}
		
		}
		else{
		
		this.x = this.x + this.direction.x*this.speed/FPS;
		this.y = this.y + this.direction.y*this.speed/FPS;
		}
	}
};

function draw(){
	// 將背景圖片畫在 canvas 上的 (0,0) 位置
	
	enemy.pathDes = 0;
	
	ctx.drawImage(bgImg,0,0);
	ctx.drawImage(heroImg,hero.x,hero.y);
	ctx.drawImage(ctImg,540,380,100,100);
	ctx.drawImage(slimeImg, enemy.x, enemy.y);
	
	if(isBuilding == true){
		ctx.drawImage(towerImg,cursor.x,cursor.y);
	}
	else{
		ctx.drawImage(towerImg,tower.x,tower.y);
	}
	enemy.move();
}

var enemyPath = [
   {x: 96, y: 64},
   {x: 384, y: 64},
   { x: 384, y: 192 },
   { x: 224, y: 192 },
   { x: 224, y: 320 },
   { x: 544, y: 320 }
	];
	
function isCollided(pointX, pointY, targetX, targetY, targetWidth, targetHeight){
	if( pointX >= targetX
	&& pointX <= targetX + targetWidth
	&& pointY >= targetY
	&& pointY <= trgetY + targetWidth
        ){
	    return true;
	}else{
		return false;
	}
}

// 等待一秒再執行 draw
setInterval(draw,1000/FPS);

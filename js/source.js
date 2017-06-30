var image = new Image();
image.addEventListener("click", bitWolf, false);

function createPicture(){
	var timer = window.setInterval("tick()", 450);
}

function bitWolf(event){
	getGoal();
	tick();
}

// window.clearTimeout
function tick(){
	image.src = "img/К3.png";
	var imageX= getNumber(4);
	var imageY= getNumber(3);
	var idPic ="pic".concat(imageX,imageY);
	document.getElementById(idPic).appendChild(image);
}

function getNumber(max_number){
	return Math.floor(Math.random()*max_number);
}

function getGoal(){
	var element = document.getElementById("number").innerHTML;
	var num = Number(element) + 1;
	document.getElementById("number").innerHTML= num;
}
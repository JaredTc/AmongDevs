var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(201, 171, 36)";

var butFill = document.getElementById("butFill");
butFill.addEventListener("click", moverRectangulo);

var imagenFondo = new Image();
imagenFondo.src = "https://i.postimg.cc/PJyp95XL/VKDLCPv.png";
ctx.drawImage(imagenFondo, 0,0, 400, 600);


var rect = {

   x:  30,
    y: 480,
    ancho: 300,
    alto: 10,

}
pintarImagenDeFondo();

var interval =null;
function moverRectangulo(){
     if (interval === null){
        interval = setInterval(function(){
            if(estaEnElLimite()){
                alert("Tarea Completada");
                clearInterval(interval);
                interval = null; 
            }
            rect.y -= 0.5;
            rect.alto += 0.5;
            limpiiarTablero();
            pintarRectangulo(rect);
            pintarImagenDeFondo();
            
        }, 1);
     } 
     else{
         clearInterval(interval);
         interval = null;
     }
     
 
}
function estaEnElLimite(){
    return rect.y <=70;
}


function limpiiarTablero(){
    ctx.clearRect(0,0,400,600);
}

function pintarRectangulo({x, y, ancho, alto}){
    ctx.fillRect(x, y, ancho, alto);
}
 
function pintarImagenDeFondo(){
  
    ctx.drawImage(imagenFondo, 0,0, 400, 600);
}

var width=screen.width;
var newwidt=screen.width-100
var newheight=screen.height-400

var last_position_of_x, last_position_of_y;
canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
colour = "blue";

width_of_line = 1;
if(width<992){
document.getElementById("myCanvas").width=newwidt;
document.getElementById("myCanvas").height=newheight;
document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", mytouchstart);

function mytouchstart(e) {
    colour = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
   last_position_of_x=e.touches[0].clientX-canvas.offsetLeft
   last_position_of_y=e.touches[0].clientY-canvas.offsetTop

}

canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e) {
    current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;

    current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
   
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}


function cleararea(){
    ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height) 

}


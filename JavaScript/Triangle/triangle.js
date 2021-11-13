
function setup() {
    createCanvas(720, 720);
    background(0, 0, 0);
    fill(255, 0, 0, 0);
    stroke(255, 0, 0);
    strokeWeight(2);
  }
  
  var drawTriangle = function(x, y, x2, y2, x3, y3, level){
      if(level < 1){
          return;//Illegal Argument Acception does not work
      }else if(level === 1){
          triangle(x, y, x2, y2, x3, y3);
      }else{
          drawTriangle(x, y, (x + x2) / 2, (y + y2) / 2, (x + x3) / 2, (y + y3) / 2, level - 1);
          drawTriangle((x + x2) / 2, (y + y2) / 2, x2, y2, (x2 + x3) / 2, (y2 + y3) / 2, level - 1);
          drawTriangle((x + x3) / 2, (y + y3) / 2, (x2 + x3) / 2, (y2 + y3) / 2, x3, y3, level - 1);
      }
  };
  
  function draw() {
  
    var height = 400;
    var width = 720;
    drawTriangle(0, height, width / 2, 0, width, height, 3);
  }
  
  
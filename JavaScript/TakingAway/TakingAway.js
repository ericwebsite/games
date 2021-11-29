var scene = 1;
var grid = {};
var gridLine = {};

var scene = 1;
var normalLevel = 1;
var xAni = 0;

function setup(){
    createCanvas(601, 601);
    for(var i = 0; i < 20; i++){
       gridLine[i] = color(0, 0, 0);
    }
    for(var i = 0; i < 20; i++){
      grid[i] = gridLine;
    }
    scene = 1;
    normalLevel = 1;
}

function draw(){
    if(scene == 1){
        fill(0, 146, 14);
        rect(-10, -10, 1000, 1000);
        fill(128, 64, 0);
        rect(10, 300, 285, 90);
        fill(255, 255, 255);
        textSize(20);
        text("Play! ", 130, 350);
        if(mouseX > 10 && mouseX < 295 && mouseY > 300 && mouseY < 390 && mouseIsPressed){
            scene = 2;
            setitup = true;
        }
    }else if(scene == 2){
        if(normalLevel == 1){
            grid[9][9] = color(255, 0, 0);
            grid[10][9] = color(255, 0, 0);
            grid[11][9] = color(255, 0, 0);
        }
        for(var i = 0; i < 20; i++){
            for(var j = 0; j < 20; j++){
                fill(grid[i][j]);
                noStroke();
                rect(i * 30, j * 30, 30, 30);
            }
        }
        scene = 3;
    }else if(scene = 3){
        for(var i = 0; i < 20; i++){
            for(var j = 0; j < 20; j++){
                fill(grid[i][j]);
                noStroke();
                rect(i * 30, j * 30, 30, 30);
            }
        }
    };
}
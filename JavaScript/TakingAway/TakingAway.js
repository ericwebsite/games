var scene = 1;
var grid = {};
var gridLine = {};

var scene = 1;
var normalLevel = 1;
var xAni = 0;

var selectedColorFrom = null;
var selectedColorTo = color(255, 255, 0);

var xGrid;
var yGrid;

function setup(){
    createCanvas(601, 601);
    background(64, 255, 128);
    text("Loading", 10, 310);
    for(var i = 0; i < 20; i++){
       gridLine[i] = color(0, 0, 0);
       grid[i] = {};
    }
    for(var i = 0; i < 20; i++){
        for (var j = 0; j < 20; j++) {
          grid[i][j] = color(0, 0, 0);
        }
    }
    scene = 1;
    normalLevel = 1;
}

function draw(){
    if(scene == 1){//Home, may have present mode and special mode later on. 
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
    }else if(scene == 2){ //setup yummy normals. 
        if(normalLevel == 1){
            grid[9][9] = color(255, 0, 0);
            grid[9][10] = color(255, 0, 0);
            grid[9][11] = color(255, 0, 0);
            grid[10][9] = color(0, 255, 0);
            grid[10][10] = color(0, 255, 0);
            grid[10][11] = color(0, 255, 0);
            grid[11][9] = color(0, 255, 0);
            grid[11][10] = color(0, 255, 0);
            grid[11][11] = color(0, 255, 0);
        }
        for(var i = 0; i < 20; i++){//render
            for(var j = 0; j < 20; j++){
                fill(grid[i][j]);
                noStroke();
                rect(i * 30, j * 30, 30, 30);
            }
        }
        scene = 3;
    }else if(scene = 3){ //rerender
        xGrid = mouseX % 30;
        yGrid = mouseY % 30;
        if(!(grid[xGrid][yGrid] == color(0, 0, 0))){
            selectedColorFrom = grid[xGrid][yGrid];
            for(var i = 0; i < 20; i++){
                for(var j = 0; j < 20; j++){
                    if(grid[i][j] == selectedColorFrom){
                        fill(selectedColorTo);
                    }else{
                        fill(grid[i][j]);
                    }
                    noStroke();
                    rect(i * 30, j * 30, 30, 30);
                }
            }
        }else{
            selectedColorFrom = null;
            for(var i = 0; i < 20; i++){
                for(var j = 0; j < 20; j++){
                    fill(grid[i][j]);
                    noStroke();
                    rect(i * 30, j * 30, 30, 30);
                }
            }
        }
    };
}
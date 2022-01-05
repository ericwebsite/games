var scene = 1;
var grid = {};
var gridLine = {};

var scene = 1;
var normalLevel = 1;
var xAni = 0;

var selectedColorR;
var selectedColorG;
var selectedColorB;
var selectedColorTo = color(255, 255, 0);

var xGrid;
var yGrid;

function setup(){
    createCanvas(601, 601);
    background(64, 255, 128);
    text("Loading", 10, 310);
    /*for(var i = 0; i < 20; i++){
       gridLine[i] = color(0, 0, 0);
       grid[i] = {};
    }*/
    for(var i = 0; i < 20; i++){
        for (var j = 0; j < 20; j++) {
          grid[i][j] = [0, 0, 0];
        }
    }
    scene = 1;
    normalLevel = 1;
}

function draw(){
    if(scene == 1){//Home, may have present mode and special mode later on. 
        selectedColorTo = color(255, 255, 0);
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
    }else if(scene == 2){ //setup normals. 
        if(normalLevel == 1){
            grid[9][9] = [255, 0, 0];
            grid[9][10] = [255, 0, 0];
            grid[9][11] = [255, 0, 0];
            grid[10][9] = [0, 255, 0];
            grid[10][10] = [0, 255, 0];
            grid[10][11] = [0, 255, 0];
            grid[11][9] = [0, 255, 0];
            grid[11][10] = [0, 255, 0];
            grid[11][11] = [0, 255, 0];
        }
        scene = 3;
    }else if(scene = 3){ //rerender
        xGrid = Math.floor(mouseX / 30);
        yGrid = Math.floor(mouseY / 30);
        if(xGrid <= 19 && xGrid >= 0 && yGrid <= 19 && yGrid >= 0 && (!(0 == grid[xGrid][yGrid][0] && grid[xGrid][yGrid][1] == grid[xGrid][yGrid][2] && grid[xGrid][yGrid][0] == grid[xGrid][yGrid][1]))){
            selectedColorR = grid[xGrid][yGrid][0];
            selectedColorG = grid[xGrid][yGrid][1];
            selectedColorB = grid[xGrid][yGrid][2];
            for(var i = 0; i < 20; i++){
                for(var j = 0; j < 20; j++){
                    if(grid[i][j][1] == selectedColorR){
                        fill(selectedColorTo);
                    }else{
                        fill(grid[i][j][0], grid[i][j][1], grid[i][j][2]);
                    }
                    noStroke();
                    rect(i * 30, j * 30, 30, 30);
                }
            }
        }else{
            selectedColorFrom = null;
            for(var i = 0; i < 20; i++){
                for(var j = 0; j < 20; j++){
                    fill(grid[i][j][0], grid[i][j][1], grid[i][j][2]);
                    noStroke();
                    rect(i * 30, j * 30, 30, 30);
                }
            }
        }
        fill(255, 255, 255);
        text(xGrid + ", " + yGrid, 100, 500);
    };
}
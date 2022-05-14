var canvas = new fabric.Canvas('MyCanvas');

player_x = 10;
player_y = 10;

block_width = 46;
block_height = 46;

var player_image = "";
var block_image = "";

function player_update() {
    fabric.Image.fromURL("player-skin-minecraft.jpg",function(Img){
        player_image = Img;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_image);
    });
}

function block_img(get_image) {
    fabric.Image.fromURL(get_image,function(Img){
        block_image = Img;
        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image);
    });
}

window.addEventListener("keydown",key_down);

function key_down(e) {
    key = e.keyCode;
    console.log(key);

    if(e.shiftKey == true && key == '80') {
        console.log("shift and p pressed togther");
        block_width = block_width+5;
        block_height = block_height+5;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if(e.shiftKey == true && key == '77') {
        console.log("shift and p pressed togther");
        block_width = block_width-5;
        block_height = block_height-5;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
        
        if(key == '38') {
            up();
            console.log("up");
        }
        
        if(key == '40') {
            down();
            console.log("down");
        }
        
        if(key == '37') {
            left();
            console.log("left");
        }
        
        if(key == '39') {
            right();
            console.log("right");
        }

        if(key == '66') {
            block_img('brick.jpg');
            console.log("b");
        }

        if(key == '78') {
            block_img('normal-grass.png');
            console.log("n");
        }

        if(key == '83') {
            block_img('stone.jpg');
            console.log("s");
        }

        if(key == '87') {
            block_img('swapm-grass.png');
            console.log("w");
        }

        if(key == '73') {
            block_img('grass-block-from-side.jpg');
            console.log("i");
        }

        if(key == '79') {
            block_img('old-nether-reck.jpg');
            console.log("o");
        }

        if(key == '65') {
            block_img('oak-log.jpg');
            console.log("a");
        }

        if(key == '71') {
            block_img('glow-stone.png');
            console.log("g");
        }
    }
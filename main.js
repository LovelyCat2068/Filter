function preload(){}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(100, 270);
    video = createCapture(VIDEO);
    video.hide();

    tinty = "";
}

function draw(){
    image(video, 0, 0 , 400, 400);
    tint(tinty);
}

function take_snapshot(){
    save("Your Colourful Memory");
}

function apply_colour(){
    tinty = document.getElementById("colour-name").value;
}
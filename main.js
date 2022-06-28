function preload(){

}

function setup(){
    canvas=createCanvas(600,500);
    canvas.position(220,310);
    video=createCapture(VIDEO);
    video.hide();
    filter_color="";
}

function draw(){
    image(video,120,100,350,300);
    tint(filter_color);

    stroke(168, 10, 10);
    fill(44, 89, 2);

    circle(40,40,50);
    circle(560,40,50);
    circle(40,460,50);
    circle(560,460,50);

    stroke(50, 168, 82);
    fill(178, 237, 123);

    rect(63, 27, 475, 25);
    rect(63, 450, 475, 25);
    rect(27, 63, 25, 375);
    rect(550, 63, 25, 375);
}

function filter_tint(){
    filter_color=document.getElementById("color").value;
}

function take_snapshot(){
    save("frame.png");
}
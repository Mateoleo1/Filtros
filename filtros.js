var X=0;
var Y=0;
function preload(){
Con=loadImage("Fi.png");
}
function setup(){
canvas=createCanvas(420,420);
canvas.center();
video=createCapture(VIDEO);
video.size(420,420);
video.center();
video.hide();
poseNet=ml5.poseNet(video,H);
poseNet.on("pose",H2);
}
function H(){
    console.log("poseNet")
    }
    function H2(H1){
X=H1[0].pose.nose.x -80;
Y=H1[0].pose.nose.y -135;
}

function draw(){
 image(video,0,0,420,420)
image(Con,X,Y,160,200);
}


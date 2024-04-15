function preload(){
 moustach = loadImage('https://i.postimg.cc/SN2ndqvC/184-1844463-free-moustache-transparent-curled-mustache-png.jpg')
}
noseX=0;
noseY=0;
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(moustach, noseX, noseY, 75, 20);
}

function save_img(){
    save('myFilterImage.png')
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y+10;
        console.log("nose x ="+noseX);
        console.log("nose y ="+ noseY);
    }
}
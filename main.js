leftWristX = 0;
rightWristX = 0;
difference = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(580, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#000000');
    textSize(23);
    fill("#32CD32");
    text('Divyansh 😀', 100, 200);
    document.getElementById("text_size").innerHTML = "Size of the text = " + difference + "px";
}

function modelLoaded() {
    console.log('PoseNet is Initialized!...')
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
    
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    
        console.log("leftWristX = " + leftWristX +"rightWristX = " + rightWristX + "difference = px" + difference);
    }
    }    

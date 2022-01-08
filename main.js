
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 500);
canvas.position(550, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Suyash Jha is great and he made the posenet initialized,baka bak bak bak bakabakak');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = "+ rightWristX + " difference = " + difference);
    }
}

function draw()
{
    background('#969A97');
    document.getElementById("square_side").innerHTML = "Font size of the text will be- = " + difference+"px"
    fill('#F90093');
    textSize(difference);
    text("Suyash",50,400);
}





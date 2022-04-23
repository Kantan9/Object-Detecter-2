img="";
objects=[];

status="";

function preload()
{
    img=loadImage("Fan.jpg");
}

function setup()
{
    canvas=createCanvas(620,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("results").innerHTML="status:detecting objects";
}

function modelLoaded()
{
    console.log("modelLoded");
    status=true;
    objectDetector.detect(img,gotresults);
}

function gotresults(error,results)
{
  if(error)
  {
      console.log(error);
  }
  console.log(results);
  objects=results;
}

function main()
{
    window.location="index.html"
}

function draw(){
    image(img,0,0,620,420);
    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("result").innerHTML = "Status: Objects Detected";
            document.getElementById("result2").innerHTML = "There is 4 objects model detected"+objects.length+"objects";

            fill("#fc0303");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x - 14, objects[i].y - 175);
            noFill();
            stroke("#fc0303");
            rect(objects[i].x - 14, objects[i].y - 175, objects[i].width - 2326, objects[i].height - 2850);
        }
    }
}
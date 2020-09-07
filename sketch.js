var bg;
var form;
var rules;
function preload(){
  bg = loadImage("images/droneBg.jpg");
  rulesBg = loadImage("images/RulesBg.jpg");
}

function setup(){
createCanvas(displayWidth-20,displayHeight-30)
form = new Form();
}

function draw (){
form.display();
}
var bg, bgImg;
var player;
var bar1,bar2,bar3,bar4,bar5,bar6,bar7,bar8,bar9,bar10,bar11;
var bar12,bar13,bar14,bar15,bar16,bar17,bar18,bar19,bar20,bar21,bar22,bar23,bar24,bar25,bar26;
var barYellow, barPink;
var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11;
var p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26;
var ball;
start()
{
  yellow = new Group();

 
}

function preload()
{
  barYellow = loadImage("yellow.png");
  barPink = loadImage("pink.png");

}
function setup() {
  createCanvas(950,600);
ball = createSprite(500,500,50,50);

 bar = createSprite(37,325,150,50);
 bar.addImage(barYellow);
 bar.scale = 0.15; 
 bar1 = createSprite(37,325,150,50);
 bar1.addImage(barYellow);
 bar1.scale = 0.15; 
 bar2 = createSprite(110,325,150,50);
 bar2.addImage(barYellow);
 bar2.scale = 0.15; 
 bar3 = createSprite(183,325,150,50);
 bar3.addImage(barYellow);
 bar3.scale = 0.15; 
 bar4 = createSprite(256,325,150,50);
 bar4.addImage(barYellow);
 bar4.scale = 0.15; 
 bar5 = createSprite(329,325,150,50);
 bar5.addImage(barYellow);
 bar5.scale = 0.15; 
 bar6 = createSprite(402,325,150,50);
 bar6.addImage(barYellow);
 bar6.scale = 0.15; 
 bar7 = createSprite(475,325,150,50);
 bar7.addImage(barYellow);
 bar7.scale = 0.15; 
 bar8 = createSprite(548,325,150,50);
 bar8.addImage(barYellow);
 bar8.scale = 0.15; 
 bar9 = createSprite(621,325,150,50);
 bar9.addImage(barYellow);
 bar9.scale = 0.15; 
 bar10 = createSprite(694,325,150,50);
 bar10.addImage(barYellow);
 bar10.scale = 0.15; 
 bar11 = createSprite(767,325,150,50);
 bar11.addImage(barYellow);
 bar11.scale = 0.15; 
 bar12 = createSprite(840,325,150,50);
 bar12.addImage(barYellow);
 bar12.scale = 0.15; 
 bar13 = createSprite(913,325,150,50);
 bar13.addImage(barYellow);
 bar13.scale = 0.15; 

 bar14 = createSprite(37,275,150,50);
 bar14.addImage(barYellow);
 bar14.scale = 0.15; 
 bar15 = createSprite(110,275,150,50);
 bar15.addImage(barYellow);
 bar15.scale = 0.15; 
 bar16 = createSprite(183,275,150,50);
 bar16.addImage(barYellow);
 bar16.scale = 0.15; 
 bar17 = createSprite(256,275,150,50);
 bar17.addImage(barYellow);
 bar17.scale = 0.15; 
 bar18 = createSprite(329,275,150,50);
 bar18.addImage(barYellow);
 bar18.scale = 0.15; 
 bar19 = createSprite(402,275,150,50);
 bar19.addImage(barYellow);
 bar19.scale = 0.15; 
 bar20 = createSprite(475,275,150,50);
 bar20.addImage(barYellow);
 bar20.scale = 0.15; 
 bar21 = createSprite(548,275,150,50);
 bar21.addImage(barYellow);
 bar21.scale = 0.15; 
 bar22 = createSprite(621,275,150,50);
 bar22.addImage(barYellow);
 bar22.scale = 0.15; 
 bar23 = createSprite(694,275,150,50);
 bar23.addImage(barYellow);
 bar23.scale = 0.15; 
 bar24 = createSprite(767,275,150,50);
 bar24.addImage(barYellow);
 bar24.scale = 0.15; 
 bar25 = createSprite(840,275,150,50);
 bar25.addImage(barYellow);
 bar25.scale = 0.15; 
 bar26 = createSprite(913,275,150,50);
 bar26.addImage(barYellow);
 bar26.scale = 0.15; 

//////////////////////////////////////////////////
/////////////////////////////////////////////////

p1 = createSprite(37,227,150,50);
p1.addImage(barPink);
p1.scale = 0.13; 
p2 = createSprite(110,227,150,50);
p2.addImage(barPink);
p2.scale = 0.13; 
p3 = createSprite(183,227,150,50);
p3.addImage(barPink);
p3.scale = 0.13; 
p4 = createSprite(256,227,150,50);
p4.addImage(barPink);
p4.scale = 0.13; 
p5 = createSprite(329,227,150,50);
p5.addImage(barPink);
p5.scale = 0.13; 
p6 = createSprite(402,227,150,50);
p6.addImage(barPink);
p6.scale = 0.13; 
p7 = createSprite(475,227,150,50);
p7.addImage(barPink);
p7.scale = 0.13; 
p8 = createSprite(548,227,150,50);
p8.addImage(barPink);
p8.scale = 0.13; 
p9 = createSprite(621,227,150,50);
p9.addImage(barPink);
p9.scale = 0.13; 
p10 = createSprite(694,227,150,50);
p10.addImage(barPink);
p10.scale = 0.13; 
p11 = createSprite(767,227,150,50);
p11.addImage(barPink);
p11.scale = 0.13; 
p12 = createSprite(840,227,150,50);
p12.addImage(barPink);
p12.scale = 0.13; 
p13 = createSprite(913,227,150,50);
p13.addImage(barPink);
p13.scale = 0.13; 

p14 = createSprite(37,182,150,50);
p14.addImage(barPink);
p14.scale = 0.13; 
p15 = createSprite(110,182,150,50);
p15.addImage(barPink);
p15.scale = 0.13; 
p16 = createSprite(183,182,150,50);
p16.addImage(barPink);
p16.scale = 0.13; 
p17 = createSprite(256,182,150,50);
p17.addImage(barPink);
p17.scale = 0.13; 
p18 = createSprite(329,182,150,50);
p18.addImage(barPink);
p18.scale = 0.13; 
p19 = createSprite(402,182,150,50);
p19.addImage(barPink);
p19.scale = 0.13; 
p20 = createSprite(475,182,150,50);
p20.addImage(barPink);
p20.scale = 0.13; 
p21 = createSprite(548,182,150,50);
p21.addImage(barPink);
p21.scale = 0.13; 
p22 = createSprite(621,182,150,50);
p22.addImage(barPink);
p22.scale = 0.13; 
p23 = createSprite(694,182,150,50);
p23.addImage(barPink);
p23.scale = 0.13; 
p24 = createSprite(767,182,150,50);
p24.addImage(barPink);
p24.scale = 0.13; 
p25 = createSprite(840,182,150,50);
p25.addImage(barPink);
p25.scale = 0.13; 
p26 = createSprite(913,182,150,50);
p26.addImage(barPink);
p26.scale = 0.13; 



}

function draw() {
  background("black");  
console.log(bar1);
console.log(bar2);
console.log(bar3);
console.log(bar4);
console.log(bar5);
console.log(bar6);
console.log(bar7);
console.log(bar8);
console.log(bar9);
console.log(bar10);
console.log(bar11);
console.log(bar12);
console.log(bar13);
console.log(bar14);
console.log(bar15);
console.log(bar16);
console.log(bar17);
console.log(bar18);
console.log(bar19);
console.log(bar20);
console.log(bar21);
console.log(bar22);
console.log(bar23);
console.log(bar24);
console.log(bar25);
console.log(bar26);

////////////////////

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
console.log(p5);
console.log(p6);
console.log(p7);
console.log(p8);
console.log(p9);
console.log(p10);
console.log(p11);
console.log(p12);
console.log(p13);
console.log(p14);
console.log(p15);
console.log(p16);
console.log(p17);
console.log(p18);
console.log(p19);
console.log(p20);
console.log(p21);
console.log(p22);
console.log(p23);
console.log(p24);
console.log(p25);
console.log(p26);


movement();

  drawSprites();

}


function movement()
{
  if(keyDown("LEFT_ARROW"))
  {
    ball.x -= 6;
  }
  if(keyDown("RIGHT_ARROW"))
  {
    ball.x += 6;
  }
  if(keyDown("UP_ARROW"))
  {
    ball.y -= 6;
  }
  if(keyDown("DOWN_ARROW"))
  {
    ball.y += 6;
  }
}
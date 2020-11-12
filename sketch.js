var backgrondimg;
var block1,block2;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24;
var police,policeimg,policeimg2;
var bulletDirection="right";
var bullet,leftBulletimg,rightBulletimg;
var policespeed=5;
var thief1bullet,thief2bullet,thief3bullet,thief4bullet,thief5bullet,thief6bullet,thief7bullet,thief8bullet,thief9bullet,thief10bullet;
var thief1,thief1img,thief2,thief2img,thief3,thief4,thief5,thief6,thief7,thief8,thief9,thief10;
var thief1life=200;
var thief2life=200;
var thief3life=200;
var thief4life=200;
var thief5life=200;
var thief6life=200;
var thief7life=200;
var thief8life=200;
var thief9life=200;
var thief10life=200;
var policelife=200;
var gunShot,damage;
var bulletPower=20;
var bulletGroup;
var thiefbar;
var thiefslife=10;
function preload(){
  policeimg2=loadImage("img/police.png");
backgrondimg=loadImage("img/backgroundimg.png");
policeimg=loadImage("img/police2.png");
thief1img=loadImage("img/thief1.png");
thief2img=loadImage("img/thief2.png");
leftBulletimg=loadImage("img/bullet left.png")
rightBulletimg=loadImage("img/bullet right.png")
gunShot=loadSound("sounds/shotgun.mp3");
damage=loadSound("sounds/damagemale.mp3");
}

function setup() {
  createCanvas(displayWidth,displayHeight-150);
 police= createSprite(300, 170, 30, 30);
 police.addImage(policeimg);
 police.scale=0.05;
 police.visible=true;
 //police.debug=true;
 police.setCollider("circle",0,0,300);

 thief1= createSprite(170, random(315,415), 30, 30);
 thief1.addImage(thief1img);
 thief1.scale=0.2;

 thief2= createSprite(170, 550, 30, 30);
 thief2.addImage(thief1img);
 thief2.scale=0.2;
 
thief3= createSprite(170, 800, 30, 30);
thief3.addImage(thief1img);
thief3.scale=0.2;

thief4= createSprite(370, 805, 20, 20);
thief4.addImage(thief1img);
thief4.scale=0.2;

thief5= createSprite(1210, 430, 30, 30);
thief5.addImage(thief1img);
thief5.scale=0.2;

thief6= createSprite(1210, 560, 30, 30);
thief6.addImage(thief1img);
thief6.scale=0.2;
//thief6.debug=true;

thief7= createSprite(1490, 805, 30, 30);
thief7.addImage(thief2img);
thief7.scale=0.25;

thief8= createSprite(1490, 705, 30, 30);
thief8.addImage(thief2img);
thief8.scale=0.25;

thief9= createSprite(1720, 125, 30, 30);
thief9.addImage(thief2img);
thief9.scale=0.25;

thief10= createSprite(1720, 250, 30, 30);
thief10.addImage(thief2img);
thief10.scale=0.25;

bulletGroup=new Group()
wall1= createSprite(105, 500, 20, 725);
wall1.visible=false;

wall2= createSprite(225, 160, 15, 195);
wall2.visible=false;

wall3= createSprite(450, 252, 455, 8);
wall3.visible=false;

wall4= createSprite(672, 230, 11, 50);
wall4.visible=false;

wall5= createSprite(672, 120, 11, 110);
wall5.visible=false;

wall6= createSprite(450, 70, 450, 12);
wall6.visible=false;

wall7= createSprite(390, 300, 565, 8);
wall7.visible=false;

wall8= createSprite(390, 605, 565, 8);
wall8.visible=false;

wall9= createSprite(390, 858, 565, 10);
wall9.visible=false;

wall10= createSprite(500, 665, 353, 8);
wall10.visible=false;

wall11= createSprite(332, 760, 10, 190);
wall11.visible=false;

wall12= createSprite(670, 810, 13, 100);
wall12.visible=false;

wall13= createSprite(670, 680, 12, 30);
wall13.visible=false;

wall14= createSprite(670, 570, 12, 70);
wall14.visible=false;

wall15= createSprite(670, 450, 12, 70);
wall15.visible=false;

wall16= createSprite(670, 325, 12, 60);
wall16.visible=false;

wall17= createSprite(1460, 70, 630, 12);
wall17.visible=false;

wall18= createSprite(1655, 305, 250, 8);
wall18.visible=false;

wall19= createSprite(1295, 305, 300, 8);
wall19.visible=false;

wall20= createSprite(1152, 290, 13, 30);
wall20.visible=false;

wall21= createSprite(1172, 490, 10, 240);
wall21.visible=false;

wall22= createSprite(1385, 610, 435, 8);
wall22.visible=false;

wall23= createSprite(1385, 375, 435, 8);
wall23.visible=false;

wall24= createSprite(1465, 655, 600, 8);
wall24.visible=false;

wall25= createSprite(1360, 858, 390, 8);
wall25.visible=false;

wall26= createSprite(1543, 780, 14, 150);
wall26.visible=false;

wall27= createSprite(1543, 685, 12, 60);
wall27.visible=false;

wall28= createSprite(1170, 820, 10, 80);
wall28.visible=false;

wall29= createSprite(1170, 685, 10, 60);
wall29.visible=false;

wall30= createSprite(1660, 775, 230, 10);
wall30.visible=false;

wall31= createSprite(1770, 420, 15, 710);
wall31.visible=false;

wall32= createSprite(1600, 590, 10, 40);
wall32.visible=false;

wall33= createSprite(1600, 470, 10, 90);
wall33.visible=false;

wall34= createSprite(1600, 385, 10, 30);
wall34.visible=false;

wall35= createSprite(1150, 130, 11, 130);
wall35.visible=false;

block1= createSprite(1540, 730, 35, 35);
block1.visible=false;

block2= createSprite(220, 200, 35, 35);
block2.visible=false;

thief1lifebar=createSprite(250,300,thief1life,10);
thief1lifebar.shapeColor="red";

thief2lifebar=createSprite(250,605,thief2life,10);
thief2lifebar.shapeColor="red";

thief3lifebar=createSprite(220,860,thief3life,10);
thief3lifebar.shapeColor="red";

thief4lifebar=createSprite(550,860,thief4life,10);
thief4lifebar.shapeColor="red";

thief5lifebar=createSprite(1400,thief5.y-60,thief5life,10);
thief5lifebar.shapeColor="red";

thief6lifebar=createSprite(1400,thief6.y+50,thief6life,10);
thief6lifebar.shapeColor="red";

thief7lifebar=createSprite(1400,thief7.y+55,thief7life,10);
thief7lifebar.shapeColor="red";

thief8lifebar=createSprite(1400,thief8.y-50,thief8life,10);
thief8lifebar.shapeColor="red";

thief9lifebar=createSprite(1650,thief9.y-57,thief9life,10);
thief9lifebar.shapeColor="red";

thief10lifebar=createSprite(1650,thief10.y+55,thief10life,10);
thief10lifebar.shapeColor="red";

policelifebar=createSprite(1650,38,policelife*2,20);
policelifebar.shapeColor="red";

thiefbar=createSprite(250,38,400,20);
thiefbar.shapeColor="red";

}

function draw() {
  background(backgrondimg); 
 //background(255); 
 police.bounceOff(wall1);
  police.bounceOff(wall2);
  police.bounceOff(wall3);
  police.bounceOff(wall4);
  police.bounceOff(wall5);
  police.bounceOff(wall6);
  police.bounceOff(wall7);
  police.bounceOff(wall8);
  police.bounceOff(wall9);
  police.bounceOff(wall10);
  police.bounceOff(wall11);
  police.bounceOff(wall12);
  police.bounceOff(wall13);
  police.bounceOff(wall14);
  police.bounceOff(wall15);
  police.bounceOff(wall16);
  police.bounceOff(wall17);
  police.bounceOff(wall18);
  police.bounceOff(wall19);
  police.bounceOff(wall20);
  police.bounceOff(wall21);
  police.bounceOff(wall22);
  police.bounceOff(wall23);
  police.bounceOff(wall24);
  police.bounceOff(wall25);
  police.bounceOff(wall26);
  police.bounceOff(wall27);
  police.bounceOff(wall28);
  police.bounceOff(wall29);
  police.bounceOff(wall30);
  police.bounceOff(wall31);
  police.bounceOff(wall32);
  police.bounceOff(wall33);
  police.bounceOff(wall34);
  police.bounceOff(wall35);

  if(keyDown("up")){
    police.y = police.y -policespeed;
  }
 
 if(keyDown("down")){
    police.y = police.y +policespeed;
  }
 
 if(keyDown("right")){
     police.x= police.x +policespeed;
     police.addImage(policeimg); 
     bulletDirection="right";
    }
 
 if(keyDown("left")){
     police.x = police.x -policespeed;
     police.addImage(policeimg2);
     bulletDirection="left";
 }
if(keyDown("space")){
shootBullet(bulletDirection);
gunShot.play();
} 
if(bulletGroup.isTouching(thief1)){
 bulletGroup.destroyEach();
  thief1life-=bulletPower
  thief1lifebar.width-=bulletPower;
  damage.play();
}
if(bulletGroup.isTouching(thief2)){
  bulletGroup.destroyEach();
   thief2life-=bulletPower
   thief2lifebar.width-=bulletPower;
   damage.play();
  }
 if(bulletGroup.isTouching(thief3)){
  bulletGroup.destroyEach();
   thief3life-=bulletPower
   thief3lifebar.width-=bulletPower;
   damage.play();
  }
 if(bulletGroup.isTouching(thief4)){
  bulletGroup.destroyEach();
   thief4life-=bulletPower
   thief4lifebar.width-=bulletPower;
   damage.play();
  }
 if(bulletGroup.isTouching(thief5)){
  bulletGroup.destroyEach();
   thief5life-=bulletPower
   thief5lifebar.width-=bulletPower;
   damage.play();
  }
 if(bulletGroup.isTouching(thief6)){
  bulletGroup.destroyEach();
   thief6life-=bulletPower
   thief6lifebar.width-=bulletPower;
   damage.play();
 }if(bulletGroup.isTouching(thief7)){
  bulletGroup.destroyEach();
   thief7life-=bulletPower
   thief7lifebar.width-=bulletPower;
   damage.play();
 }if(bulletGroup.isTouching(thief8)){
  bulletGroup.destroyEach();
   thief8life-=bulletPower
   thief8lifebar.width-=bulletPower;
   damage.play();
 }
 if(bulletGroup.isTouching(thief9)){
  bulletGroup.destroyEach();
   thief9life-=bulletPower
   thief9lifebar.width-=bulletPower;
   damage.play();
 }if(bulletGroup.isTouching(thief10)){
  bulletGroup.destroyEach();
   thief10life-=bulletPower
   thief10lifebar.width-=bulletPower;
   damage.play();
 }

if(bulletGroup.isTouching(wall1) || bulletGroup.isTouching(wall2) || bulletGroup.isTouching(wall3) || bulletGroup.isTouching(wall4) || bulletGroup.isTouching(wall5) || bulletGroup.isTouching(wall6) || bulletGroup.isTouching(wall7) || bulletGroup.isTouching(wall8) || bulletGroup.isTouching(wall9) || bulletGroup.isTouching(wall10) || bulletGroup.isTouching(wall11) || bulletGroup.isTouching(wall12) || bulletGroup.isTouching(wall13) || bulletGroup.isTouching(wall14) || bulletGroup.isTouching(wall15) || bulletGroup.isTouching(wall16) || bulletGroup.isTouching(wall17) || bulletGroup.isTouching(wall18) || bulletGroup.isTouching(wall19) || bulletGroup.isTouching(wall20) || bulletGroup.isTouching(wall21) || bulletGroup.isTouching(wall22) || bulletGroup.isTouching(wall23) || bulletGroup.isTouching(wall24) || bulletGroup.isTouching(wall25) || bulletGroup.isTouching(wall26) || bulletGroup.isTouching(wall27) || bulletGroup.isTouching(wall28) || bulletGroup.isTouching(wall29) || bulletGroup.isTouching(wall30) || bulletGroup.isTouching(wall31) || bulletGroup.isTouching(wall32) || bulletGroup.isTouching(wall33) || bulletGroup.isTouching(wall34) || bulletGroup.isTouching(wall35)){
  bulletGroup.destroyEach();
 }
if(thief1life>0){
if(police.x>250 && police.x<690 && police.y>315 && police.y<415){
thief1Bulls();
thief1.y=police.y;
}}

if(thief1life===0){
  thief1.visible=false;
thief1lifebar.visible=false;
}

if(thief2life>0){
  if(police.x>250 && police.x<690 && police.y>440 && police.y<599){
  thief2Bulls();
  thief2.y=police.y;
  }}
  if(thief2life===0){
    thief2.visible=false;
  thief2lifebar.visible=false;
  }

  if(thief3life>0){
    console.log(police.x);
    if(police.x>125 && police.x<325 && police.y>618 && police.y<835){
    thief3Bulls();
    thief3.y=police.y;
    }}
    if(thief3life===0){
      thief3.visible=false;
    thief3lifebar.visible=false;
    }
    if(thief4life>0){
      if(police.x>345 && police.x<670 && police.y>680 && police.y<845){
      thief4Bulls();
      thief4.y=police.y;
      }}
      if(thief4life===0){
        thief4.visible=false;
      thief4lifebar.visible=false;
      }
      
  if(thief5life>0){
    if(police.x>1170 && police.x<1525 && police.y>365 && police.y<494){
    thief5Bulls();
    thief5.y=police.y;
    }}
    if(thief5life===0){
      thief5.visible=false;
    thief5lifebar.visible=false;
    }
    
  if(thief6life>0){
    if(police.x>1187 && police.x<1525 && police.y>490 && police.y<596){
    thief6Bulls();
    thief6.y=police.y;
    }}
    if(thief6life===0){
      thief6.visible=false;
    thief6lifebar.visible=false;
    }
    if(thief7life>0){
      if(police.x>1187 && police.x<1600 && police.y>668 && police.y<855){
      thief7Bulls();
     // thief7.y=police.y;
      }}
      if(thief7life===0){
        thief7.visible=false;
      thief7lifebar.visible=false;
      }
      if(thief8life>0){
        if(police.x>1187 && police.x<1600 && police.y>668 && police.y<885){
        thief8Bulls();
       // thief8.y=police.y;
        }}
        if(thief8life===0){
          thief8.visible=false;
        thief8lifebar.visible=false;
        }
        if(thief9life>0){
          if(police.x>1160 && police.x<1605 && police.y>86 && police.y<186){
          thief9Bulls();
          thief9.y=police.y;
          }}
          if(thief9life===0){
            thief9.visible=false;
          thief9lifebar.visible=false;
          }
          
        if(thief10life>0){
          if(police.x>1160 && police.x<1605 && police.y>186 && police.y<291){
          thief10Bulls();
          thief10.y=police.y;
          }}
          if(thief10life===0){
            thief10.visible=false;
          thief10lifebar.visible=false;
          }
//console.log(thief1life);
//console.log(police.x);
//console.log(police.y);
 drawSprites();
 if(thief1life>0){
  fill(255);
textSize(15);
text("thief1 Life :"+thief1life+"/200",thief1lifebar.x-60,thief1lifebar.y+5);
}
if(thief2life>0){
  fill(255);
textSize(15);
text("thief2 Life :"+thief2life+"/200",thief2lifebar.x-60,thief2lifebar.y+5);
}
if(thief3life>0){
  fill(255);
textSize(15);
text("thief3 Life :"+thief3life+"/200",thief3lifebar.x-60,thief3lifebar.y+5);
}
if(thief4life>0){
  fill(255);
textSize(15);
text("thief4 Life :"+thief4life+"/200",thief4lifebar.x-60,thief4lifebar.y+5);
}
if(thief5life>0){
  fill(255);
textSize(15);
text("thief7 Life :"+thief5life+"/200",thief5lifebar.x-60,thief5lifebar.y+5);
}
if(thief6life>0){
  fill(255);
textSize(15);
text("thief8 Life :"+thief6life+"/200",thief6lifebar.x-60,thief6lifebar.y+5);
}

if(thief7life>0){
  fill(255);
textSize(15);
text("thief10 Life :"+thief7life+"/200",thief7lifebar.x-60,thief7lifebar.y+5);
}
if(thief8life>0){
  fill(255);
textSize(15);
text("thief9 Life :"+thief8life+"/200",thief8lifebar.x-60,thief8lifebar.y+5);
}
if(thief9life>0){
  fill(255);
textSize(15);
text("thief5 Life :"+thief9life+"/200",thief9lifebar.x-60,thief9lifebar.y+5);
}
if(thief10life>0){
  fill(255);
textSize(15);
text("thief6 Life :"+thief10life+"/200",thief10lifebar.x-60,thief10lifebar.y+5);
}
if(thiefslife>0){
  fill(255);
  textSize(20);
  text("Thiefs Life :"+thiefslife+"/10",thiefbar.x-80,thiefbar.y+5);
}
if(policelife>0){
  fill(255);
textSize(20);
text("police Life :"+policelife+"/200",policelifebar.x-75,45);
}
}
function shootBullet(direction){
if(direction==="left"){
  bullet=createSprite(police.x-15,police.y-13,10,10);
bullet.addImage(leftBulletimg);
bullet.scale=0.02;
bullet.velocityX=-7;
console.log("left");
  }else if("right"){

  bullet=createSprite(police.x+15,police.y-13,10,10);
bullet.addImage(rightBulletimg);
bullet.scale=0.02;
bullet.velocityX=7;
console.log("right");
}

bulletGroup.add(bullet);
}
function thief1Bulls(){
  if(frameCount%55===0){
  var thief1bullet=createSprite(thief1.x+15,thief1.y-5,10,10);
thief1bullet.addImage(rightBulletimg);
thief1bullet.scale=0.02;
thief1bullet.velocityX=6;
}
}

function thief2Bulls(){
  if(frameCount%55===0){
 var thief2bullet=createSprite(thief2.x+15,thief2.y-5,10,10);
thief2bullet.addImage(rightBulletimg);
thief2bullet.scale=0.02;
thief2bullet.velocityX=6;
}}

function thief3Bulls(){
  if(frameCount%55===0){
  var thief3bullet=createSprite(thief3.x+15,thief3.y-5,10,10);
thief3bullet.addImage(rightBulletimg);
thief3bullet.scale=0.02;
thief3bullet.velocityX=6;
console.log(thief3bullet);
}
}

function thief4Bulls(){
  if(frameCount%25===0){
 var thief4bullet=createSprite(thief4.x+15,thief4.y-5,10,10);
thief4bullet.addImage(rightBulletimg);
thief4bullet.scale=0.02;
thief4bullet.velocityX=6;
}}

function thief5Bulls(){
  if(frameCount%25===0){
 var thief5bullet=createSprite(thief5.x+15,thief5.y-5,10,10);
thief5bullet.addImage(rightBulletimg);
thief5bullet.scale=0.02;
thief5bullet.velocityX=6;
console.log(thief5bullet);
}}

function thief6Bulls(){
  if(frameCount%25===0){
 var thief6bullet=createSprite(thief6.x+15,thief6.y-5,10,10);
thief6bullet.addImage(rightBulletimg);
thief6bullet.scale=0.02;
thief6bullet.velocityX=6;
}}
function thief7Bulls(){
  if(frameCount%25===0){
 var thief7bullet=createSprite(thief7.x+15,thief7.y-5,10,10);
thief7bullet.addImage(leftBulletimg);
thief7bullet.scale=0.02;
thief7bullet.velocityX=-6;
}}

function thief8Bulls(){
  if(frameCount%25===0){
 var thief8bullet=createSprite(thief8.x-15,thief8.y-9,10,10);
thief8bullet.addImage(leftBulletimg);
thief8bullet.scale=0.02;
thief8bullet.velocityX=-6;
}}


function thief9Bulls(){
  if(frameCount%25===0){
 var thief9bullet=createSprite(thief9.x+15,thief9.y-5,10,10);
thief9bullet.addImage(leftBulletimg);
thief9bullet.scale=0.02;
thief9bullet.velocityX=-6;
}}

function thief10Bulls(){
  if(frameCount%25===0){
 var thief10bullet=createSprite(thief10.x-15,thief10.y-9,10,10);
thief10bullet.addImage(leftBulletimg);
thief10bullet.scale=0.02;
thief10bullet.velocityX=-6;
}}
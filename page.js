// Game
var character = document.getElementById('character');
var block = document.getElementById('block');
function jump(){
  if(character.classList != 'animate'){
  character.classList.add('animate');
   }
  setTimeout(function(){character.classList.remove('animate')},500);
}

var checkDead = setInterval(function(){
  var characterTop = parseInt(window.getComputedStyle(character).
      getPropertyValue('top'));
  var blockLeft = parseInt(window.getComputedStyle(block).
      getPropertyValue('left'));
  if(blockLeft<20 && blockLeft>0 && characterTop>130){
    block.style.animation = 'none';
    block.style.display = 'none';
    alert('you lose!')
  }
},10)


//get the Canvas
var justArtCanv = document.getElementById('justArt');

//create drawing object
var ctx1 = justArtCanv.getContext('2d')

//create red rectangle
ctx1.fillStyle = 'red';
ctx1.fillRect(10,10,50,50);
//draw line
ctx1.moveTo(60,60);
ctx1.lineTo(100,100);
ctx1.stroke();
//create circle
ctx1.beginPath();
ctx1.arc(100,100,30,0,2*Math.PI);
ctx1.stroke();
//create gradient shape
var grd = ctx1.createLinearGradient(130,0,200,0);
grd.addColorStop(0,'green');
grd.addColorStop(.6,'red');
grd.addColorStop(1,'blue');
//fill with gradient
ctx1.fillStyle = grd;
ctx1.fillRect(120,120,150,170);
//write text
ctx1.font = "30px Aerial";
ctx1.fillText('Hie there', 120,25);
ctx1.strokeText("I'm here",130,50);

ctx1.fillStyle = 'pink';
ctx1.font = '30px Century Gothic';
ctx1.textAlign = 'center';
ctx1.fillText('hello good person',justArtCanv.width/2, justArtCanv.height/2);

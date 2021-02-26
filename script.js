var number = 0;
while(1){
 
 //taking number of player from prompt
 number= prompt("Enter number of players");
if(number<=4 && !(number<0)){
  break;
}
else{
  alert("Number of player can be only b/w 1-4 \nplz enter a valid number")
}
}

//Canvas to make Board
const canvas=document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width=500;
canvas.height=500;
var x=0,y=0,i=0,j=1,count=0,one=1,two=1,three=1,four=1,win=0;


//Ploting Board
 for(y=450;y>=0 ; y-=50){
  if(i%2==0){
    for(x=0; x<=450;x+=50){
    count++
    ctx.beginPath();
    //color tiles
    if(j){
    ctx.fillStyle = "#967bb6";
    j=0;
    }
    else{
    ctx.fillStyle = "#ffcc00";
    j=1;
    }
    ctx.rect(x, y, 50, 50);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = "20px Arial";
    ctx.fillText(count,x+10,y+30);
    }
  }
  else {
    for(x=450; x>=0 ; x-=50){
    count++;
    ctx.beginPath();
    
    if(j){
    ctx.fillStyle = "#967bb6";
      j=0;
    }
    else{
      ctx.fillStyle = "#ffcc00";
      j=1;
     }
    ctx.rect(x, y, 50, 50);
    ctx.fill();
    ctx.fillStyle = 'white';
    ctx.font = "20px Arial";
    ctx.fillText(count,x+10,y+30);
   }
}
i++; 
}

//disabling all player except first
document.getElementById("roll-1").disabled = false;
document.getElementById("roll-2").disabled = true;
document.getElementById("roll-3").disabled = true;
document.getElementById("roll-4").disabled = true;



if(number==4){
  document.getElementById("canvas").classList.remove("none");
  document.getElementById("player1").classList.remove("none");
  document.getElementById("player2").classList.remove("none");
  document.getElementById("player3").classList.remove("none");
  document.getElementById("player4").classList.remove("none");
  document.getElementById("box-1").classList.remove("none");
  document.getElementById("box-2").classList.remove("none");
  document.getElementById("box-3").classList.remove("none");
  document.getElementById("box-4").classList.remove("none");
  document.getElementById("roll-1").classList.remove("none");
  document.getElementById("roll-2").classList.remove("none");
  document.getElementById("roll-3").classList.remove("none");
  document.getElementById("roll-4").classList.remove("none");
  document.getElementById("snake1").classList.remove("none");
  document.getElementById("snake2").classList.remove("none");
  document.getElementById("snake3").classList.remove("none");
  document.getElementById("snake5").classList.remove("none");
  document.getElementById("ladder").classList.remove("none");
  document.getElementById("ladder1").classList.remove("none");
  document.getElementById("ladder4").classList.remove("none");
  document.getElementById("td1").classList.remove("none");
  document.getElementById("td2").classList.remove("none");
  document.getElementById("td3").classList.remove("none");
  document.getElementById("td4").classList.remove("none");
  document.getElementById("leaderDiv").classList.remove("none");


  
// code

//Player 1
var positiony1 =document.getElementById("player1").offsetTop;
var positionx1 =document.getElementById("player1").offsetLeft;
var line1,score1=0;




function roll1(){
 
  document.getElementById("player1").style.transition = "all .5s";
  document.getElementById("dice-1").style.transition = "all .5s";
  var randomNum1;
  randomNum1 = Math.floor((Math.random() * 6) + 1);
  var dice = document.getElementById("dice-1");
  dice.src="dice" + randomNum1 + ".png";
  if(positiony1==525){
    positiony1=460;
    positionx1=-20;
  } 
  if(score1+randomNum1>100){
    alert("Player 1 only need " + 100-score1);
    if(two == 1){
      document.getElementById("roll-2").disabled = false;
      document.getElementById("roll-1").disabled = true;
  
    }
    else if(three==1){
      document.getElementById("roll-3").disabled = false;
      document.getElementById("roll-1").disabled = true;
    }
  
  }
  else{
   
    score1+=randomNum1;
    console.log("score-1 = " +score1);
    line1=(positiony1-10)/50;
   

   if(line1%2==0)
   {
    
      positionx1 -= (randomNum1*50);
      var player1 = document.getElementById("player1");
      player1.style.position = "absolute"
      player1.style.left = positionx1 + 'px';
      player1.style.top = positiony1 + 'px'; 
      if(two == 1){
        document.getElementById("roll-2").disabled = false;
        document.getElementById("roll-1").disabled = true;
       
      }
      else if(three==1){
        document.getElementById("roll-3").disabled = false;
        document.getElementById("roll-1").disabled = true;
      }
   
       if(positionx1<=30){
        if(score1==100){
          alert("Player 1 wins!!!!!!!!!!!");
          player1.style.left = '10px';
          player1.style.top = '10px'; 
          one = -1;
          document.getElementById("roll-1").disabled = true;
          win++;
          leaderboard(win, "player-1");
        }
        else{
        positiony1-=50;
        if(positionx1<0){
        var p = Math.abs((positionx1-30)/50);
          positionx1=(p*50)-20;
          player1.style.left = positionx1 + 'px'; 
          player1.style.top = positiony1 + 'px'; 
        }
        else{
          positionx1= -20;
        }
      }
          
    }
  
   
   
    
    
  }


  else if(line1%2==1){

      positionx1 +=(randomNum1*50);
      var player1 = document.getElementById("player1");
      player1.style.position = "absolute"
      player1.style.left = positionx1 + 'px'; 
      player1.style.top = positiony1 + 'px'; 
      if(two = 1){
        document.getElementById("roll-2").disabled = false;
        document.getElementById("roll-1").disabled = true;
        
      }
      else if(three==1){
        document.getElementById("roll-3").disabled = false;
        document.getElementById("roll-1").disabled = true;
      }
     
    
      if(positionx1>=480){
        positiony1-=50;
        
        if(positionx1>480){
          var p = Math.abs((480-positionx1)/50);
          positionx1=530-(p*50);
          player1.style.left = positionx1 + 'px'; 
          player1.style.top = positiony1 + 'px'; 
        }
        else{
          positionx1= 530;
      
        }
      }
    }
  }

  //ladders==>
  if( positiony1==410 && positionx1==330 && score1==14) {
    positiony1=260;
    positionx1=280;
    score1=46;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==410 && positionx1==80 && score1==19) {
    positiony1=310;
    positionx1=130;
    score1=38;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==310 && positionx1==80 && score1==39) {
    positiony1=160;
    positionx1=30;
    score1=61;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==210 && positionx1==330 && score1==54) {
    positiony1=110;
    positionx1=380;
    score1=73;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }

  // snakes ==>
  if( positiony1==210 && positionx1==430 && score1==52) {
    positiony1=360;
    positionx1=380;
    score1=28;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==50 && positionx1==330 && score1==87) {
    positiony1=310;
    positionx1=230;
    score1=36;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==10 && positionx1==380 && score1==93) {
    positiony1=60;
    positionx1=380;
    score1=88;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==10 && positionx1==80 && score1==99) {
    positiony1=360;
    positionx1=280;
    score1=26;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }

}












//Player 2

var positiony2 =document.getElementById("player2").offsetTop;
var positionx2 =document.getElementById("player2").offsetLeft;
var line2,score2=0;

function roll2(){

  var player2= document.getElementById("player2");
  var dice2=document.getElementById("dice-2");

  player2.style.transition = "all .5s";
  dice2.style.transition = "all .5s";
  var randomNum2;
  randomNum2= Math.floor((Math.random() * 6) + 1);
  
  dice2.src="dice" + randomNum2 + ".png";

if(positiony2==525){
  positiony2=460;
  positionx2=-20;
  
}
if(score2+randomNum2 >100){
  if(three == 1){
    document.getElementById("roll-3").disabled = false;
    document.getElementById("roll-2").disabled = true;
    
  }

  else if(one == 1){
    document.getElementById("roll-1").disabled = false;
    document.getElementById("roll-2").disabled = true;
 
  }
  alert("Player 2 only need " + 100-score2);
}
else{
  score2+=randomNum2;
  console.log("score-2 = " +score2);

  line2=((positiony2-10)/50)

  if(line2%2==1)
  {
    positionx2+=(randomNum2*50)
    player2.style.position="absolute";
    player2.style.left=positionx2+ "px";
    player2.style.top=positiony2+'px';
    if(three == 1){
      document.getElementById("roll-3").disabled = false;
      document.getElementById("roll-2").disabled = true;
      
    }

    else if(one == 1){
      document.getElementById("roll-1").disabled = false;
      document.getElementById("roll-2").disabled = true;
   
    }
    
  if(positionx2>=480){
    positiony2-=50;
      if(positionx2>480){
        var e = Math.abs((480-positionx2)/50);
        positionx2=530-(e*50);
        player2.style.position="absolute";
        player2.style.left=positionx2+ "px";
        player2.style.top=positiony2+'px';

      }
      else{
        positionx2= 530;
      }
    }
  }

  if(line2%2==0){
    positionx2 -= (randomNum2*50);
    player2.style.position="absolute";
    player2.style.left=positionx2+ "px";
    player2.style.top=positiony2+'px';
    if(three == 1){
      document.getElementById("roll-3").disabled = false;
      document.getElementById("roll-2").disabled = true;
      
    }
   
    else if(one == 1){
      document.getElementById("roll-1").disabled = false;
      document.getElementById("roll-2").disabled = true;
   
    }
    if(positionx2<=30){
      if(score2==100){
        document.getElementById("roll-2").disabled = true;

        alert("Player-2 wins!!!!!!!!!!!");
        player2.style.left = '10px';
        player2.style.top = '10px'; 
        two = -1;
        document.getElementById("roll-2").disabled = true;
        win++;
        leaderboard(win, "player-2");
      }
      else{
        positiony2-=50;
        if(positionx2<30){
          var e = Math.abs((positionx2-30)/50);
            positionx2=(e*50)-20;
            player2.style.position="absolute";
            player2.style.left=positionx2+ "px";
            player2.style.top=positiony2+'px';
          }
          else{
            positionx2= -20;
          }
        }
    }
    
      if(positionx2== 330 && positiony2==418){
          positiony2=268;
          positionx2=280;
          score=26;
          player2.style.left = positionx2 + 'px'; 
          player2.style.top = positiony2 + 'px'; 
          document.getElementById("player2").style.transition = "all .5s";
      }
      

    }
  }

   //ladders==>
 if( positiony2==410 && positionx2==330 && score2==14) {
  positiony2=260;
  positionx2=280;
  score2=46;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==410 && positionx2==80 && score2==19) {
  positiony2=310;
  positionx2=130;
  score2=38;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==310 && positionx2==80 && score2==39) {
  positiony2=160;
  positionx2=30;
  score2=61;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==210 && positionx2==330 && score2==54) {
  positiony2=110;
  positionx2=380;
  score2=73;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}

// snakes ==>
if( positiony2==210 && positionx2==430 && score2==52) {
  positiony2=360;
  positionx2=380;
  score2=28;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==50 && positionx2==330 && score2==87) {
  positiony2=310;
  positionx2=230;
  score2=36;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==10 && positionx2==380 && score2==93) {
  positiony2=60;
  positionx2=380;
  score2=88;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==10 && positionx2==80 && score2==99) {
  positiony2=360;
  positionx2=280;
  score2=26;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
}












//player 3
var positionx3=document.getElementById("player3").offsetLeft;
var positiony3=document.getElementById("player3").offsetTop;

var line3, score3=0;
function roll3(){
  var player3= document.getElementById("player3");
  var dice3=document.getElementById("dice-3");
  player3.style.transition = "all .5s";
  dice3.style.transition = "all .5s";
  var randomNum3;
  randomNum3= Math.floor((Math.random() * 6) + 1);
  dice3.src="dice" + randomNum3 + ".png";
  if(positiony3==525){
  positiony3=460;
  positionx3=-20;
  }
  if(score3+randomNum3 >100){
   if(one == 1){
      document.getElementById("roll-1").disabled = false;
      document.getElementById("roll-3").disabled = true;
   
    }
    else if(two == 1){
      document.getElementById("roll-2").disabled = false;
      document.getElementById("roll-3").disabled = true;
   
    }
  
  alert("Player 3 only need " + 100-score3);
  }
  else{
  score3+=randomNum3;
  console.log("score-3 = " +score3);

  line3=((positiony3-10)/50)

 
  if(line3%2==1)
  {
    
    positionx3+=(randomNum3*50)
    player3.style.position="absolute";
    player3.style.left=positionx3+ "px";
    player3.style.top=positiony3+'px';
   if(one == 1){
      document.getElementById("roll-1").disabled = false;
      document.getElementById("roll-3").disabled = true;
   
    }
    else if(two == 1){
      document.getElementById("roll-2").disabled = false;
      document.getElementById("roll-3").disabled = true;
   
    }
  
    
  if(positionx3>=480){
    positiony3-=50;
      if(positionx3>480){
        var p3 = Math.abs((480-positionx3)/50);
        positionx3=530-(p3*50);
        player3.style.position="absolute";
        player3.style.left=positionx3+ "px";
        player3.style.top=positiony3+'px';

      }
      else{
        positionx3= 530;
      }
    }
  }

  if(line3%2==0){
 

    positionx3 -= (randomNum3*50);
    player3.style.position="absolute";
    player3.style.left=positionx3+ "px";
    player3.style.top=positiony3+'px';
    if(one == 1){
      document.getElementById("roll-1").disabled = false;
      document.getElementById("roll-3").disabled = true;
   
    }
    else if(two == 1){
      document.getElementById("roll-2").disabled = false;
      document.getElementById("roll-3").disabled = true;
   
    }
    
    if(positionx3<=30){
      if(score3==100){
        alert("Player-3 wins!!!!!!!!!!!");
        player3.style.left = '10px';
        player3.style.top = '10px'; 
        three = -1;
        document.getElementById("roll-3").disabled = true;
        win++;
        leaderboard(win, "player-3");
        
     
      }
      else{
        positiony3-=50;
        if(positionx3<30){
          var p3 = Math.abs((positionx3-30)/50);
            positionx3=(p3*50)-20;
            player3.style.position="absolute";
            player3.style.left=positionx3+ "px";
            player3.style.top=positiony3+'px';
          }
          else{
            positionx3= -20;
          }
        }
    }
      
     
    }

    }
     //ladders==>
 if( positiony3==410 && positionx3==330 && score3==14) {
  positiony3=260;
  positionx3=280;
  score3=46;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}
if( positiony3==410 && positionx3==80 && score3==19) {
  positiony3=310;
  positionx3=130;
  score3=38;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}
if( positiony3==310 && positionx3==80 && score3==39) {
  positiony3=160;
  positionx3=30;
  score3=61;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}
if( positiony3==210 && positionx3==330 && score3==54) {
  positiony3=110;
  positionx3=380;
  score3=73;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}

// snakes ==>
if( positiony3==210 && positionx3==430 && score3==52) {
  positiony3=360;
  positionx3=280;
  score3=28;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}
if( positiony3==50 && positionx3==330 && score3==87) {
  positiony3=310;
  positionx3=230;
  score3=36;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}
if( positiony3==10 && positionx3==380 && score3==93) {
  positiony3=60;
  positionx3=380;
  score3=88;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}
if( positiony3==10 && positionx3==80 && score3==99) {
  positiony3=360;
  positionx3=280;
  score3=26;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}
//player 4
  var positionx4=document.getElementById("player4").offsetLeft;
  var positiony4=document.getElementById("player4").offsetTop;

  var line4, score4=0;
  function roll4(){
    var player4= document.getElementById("player4");
    var dice4=document.getElementById("dice-4");
    player4.style.transition = "all .5s";
    dice4.style.transition = "all .5s";
    var randomNum4;
    randomNum4= Math.floor((Math.random() * 6) + 1);
    dice4.src="dice" + randomNum4 + ".png";
    if(positiony4==525){
    positiony4=460;
    positionx4=-20;
    }
    if(score4+randomNum4 >100){
    
    alert("Player 4 only need " + 100-score4);
    if(one == 1){
      document.getElementById("roll-1").disabled = false;
      document.getElementById("roll-4").disabled = true;
      
    }
    else if(two == 1){
      document.getElementById("roll-2").disabled = false;
      document.getElementById("roll-4").disabled = true;
   
    }
    else if(three == 1){
      document.getElementById("roll-3").disabled = false;
      document.getElementById("roll-4").disabled = true;
   
    }
    }
    else{
    score4+=randomNum4;
    console.log("score-4 =" +score4);

    line4=((positiony4-10)/50)

    if(line4%2==1)
    {
      
      positionx4+=(randomNum4*50)
      player4.style.position="absolute";
      player4.style.left=positionx4+ "px";
      player4.style.top=positiony4+'px';
      if(one == 1){
        document.getElementById("roll-1").disabled = false;
        document.getElementById("roll-4").disabled = true;
        
      }
      else if(two == 1){
        document.getElementById("roll-2").disabled = false;
        document.getElementById("roll-4").disabled = true;
     
      }
      else if(three == 1){
        document.getElementById("roll-3").disabled = false;
        document.getElementById("roll-4").disabled = true;
     
      }
    
      
    if(positionx4>=480){
      positiony4-=50;
        if(positionx4>480){
          var p4 = Math.abs((480-positionx4)/50);
          positionx4=530-(p4*50);
          player4.style.position="absolute";
          player4.style.left=positionx4+ "px";
          player4.style.top=positiony4+'px';
  
        }
        else{
          positionx4= 530;
        }
      }
    }
  
    if(line4%2==0){
   
  
      positionx4 -= (randomNum4*50);
      player4.style.position="absolute";
      player4.style.left=positionx4+ "px";
      player4.style.top=positiony4+'px';
      if(one == 1){
        document.getElementById("roll-1").disabled = false;
        document.getElementById("roll-4").disabled = true;
        
      }
      else if(two == 1){
        document.getElementById("roll-2").disabled = false;
        document.getElementById("roll-4").disabled = true;
     
      }
      else if(three == 1){
        document.getElementById("roll-3").disabled = false;
        document.getElementById("roll-4").disabled = true;
     
      }
      
      if(positionx4<=30){
        if(score4==100){
          alert("Player -4 wins!!!!!!!!!!!");
          player4.style.left = '10px';
          player4.style.top = '10px'; 
          four = -1;
          document.getElementById("roll-4").disabled = true;
          win++;
          leaderboard(win, "player-4");
     
       
        }
        else{
          positiony4-=50;
          if(positionx4<30){
            var p4 = Math.abs((positionx4-30)/50);
              positionx4=(p4*50)-20;
              player4.style.position="absolute";
              player4.style.left=positionx4+ "px";
              player4.style.top=positiony4+'px';
            }
            else{
              positionx4= -20;
            }
          }
      }
        
       
      }
  
      }
       //ladders==>
 if( positiony4==410 && positionx4==330 && score4==14) {
  positiony4=260;
  positionx4=280;
  score4=46;
  player4.style.position="absolute";
  player4.style.left=positionx4+ "px";
  player4.style.top=positiony4+'px';
}
if( positiony4==410 && positionx4==80 && score4==19) {
  positiony4=310;
  positionx4=130;
  score4=38;
  player4.style.position="absolute";
  player4.style.left=positionx4+ "px";
  player4.style.top=positiony4+'px';
}
if( positiony4==310 && positionx4==80 && score4==39) {
  positiony4=160;
  positionx4=30;
  score4=61;
  player4.style.position="absolute";
  player4.style.left=positionx4+ "px";
  player4.style.top=positiony4+'px';
}
if( positiony4==210 && positionx4==330 && score4==54) {
  positiony4=110;
  positionx4=380;
  score4=73;
  player4.style.position="absolute";
  player4.style.left=positionx4+ "px";
  player4.style.top=positiony4+'px';
}

// snakes ==>
if( positiony4==210 && positionx4==430 && score4==52) {
  positiony4=360;
  positionx4=380;
  score4=28;
  player4.style.position="absolute";
  player4.style.left=positionx4+ "px";
  player4.style.top=positiony4+'px';
}
if( positiony4==50 && positionx4==330 && score4==87) {
  positiony4=310;
  positionx4=230;
  score4=36;
  player4.style.position="absolute";
  player4.style.left=positionx4+ "px";
  player4.style.top=positiony4+'px';
}
if( positiony4==10 && positionx4==380 && score4==93) {
  positiony4=60;
  positionx4=380;
  score4=88;
  player4.style.position="absolute";
  player4.style.left=positionx4+ "px";
  player4.style.top=positiony4+'px';
}
if( positiony4==10 && positionx4==80 && score4==99) {
  positiony4=460;
  positionx4=280;
  score4=26;
  player4.style.position="absolute";
  player4.style.left=positionx4+ "px";
  player4.style.top=positiony4+'px';
}
    }


}
}

else if(number==3){
  document.getElementById("canvas").classList.remove("none");
  document.getElementById("player1").classList.remove("none");
  document.getElementById("player2").classList.remove("none");
  document.getElementById("player3").classList.remove("none");
  document.getElementById("box-1").classList.remove("none");
  document.getElementById("box-2").classList.remove("none");
  document.getElementById("box-3").classList.remove("none");
  document.getElementById("roll-1").classList.remove("none");
  document.getElementById("roll-2").classList.remove("none");
  document.getElementById("roll-3").classList.remove("none");
  document.getElementById("snake1").classList.remove("none");
  document.getElementById("snake2").classList.remove("none");
  document.getElementById("snake3").classList.remove("none");
  document.getElementById("snake5").classList.remove("none");
  document.getElementById("ladder").classList.remove("none");
  document.getElementById("ladder1").classList.remove("none");
  document.getElementById("ladder4").classList.remove("none");
  document.getElementById("td1").classList.remove("none");
  document.getElementById("td2").classList.remove("none");
  document.getElementById("td3").classList.remove("none");
  document.getElementById("leaderDiv").classList.remove("none");

  
  //code
  
//Player 1
var positiony1 =document.getElementById("player1").offsetTop;
var positionx1 =document.getElementById("player1").offsetLeft;
var line1,score1=0;




function roll1(){
 
  document.getElementById("player1").style.transition = "all .5s";
  document.getElementById("dice-1").style.transition = "all .5s";
  var randomNum1;
  randomNum1 = Math.floor((Math.random() * 6) + 1);
  var dice = document.getElementById("dice-1");
  dice.src="dice" + randomNum1 + ".png";
  if(positiony1==525){
    positiony1=460;
    positionx1=-20;
  } 
  if(score1+randomNum1>100){
    alert("Player 1 only need " + 100-score1);
    if(two == 1){
      document.getElementById("roll-2").disabled = false;
      document.getElementById("roll-1").disabled = true;
  
    }
    else if(three==1){
      document.getElementById("roll-3").disabled = false;
      document.getElementById("roll-1").disabled = true;
    }
  
  }
  else{
   
    score1+=randomNum1;
    console.log("score-1 = " +score1);
    line1=(positiony1-10)/50;
   

   if(line1%2==0)
   {
    
      positionx1 -= (randomNum1*50);
      var player1 = document.getElementById("player1");
      player1.style.position = "absolute"
      player1.style.left = positionx1 + 'px';
      player1.style.top = positiony1 + 'px'; 
      if(two == 1){
        document.getElementById("roll-2").disabled = false;
        document.getElementById("roll-1").disabled = true;
       
      }
      else if(three==1){
        document.getElementById("roll-3").disabled = false;
        document.getElementById("roll-1").disabled = true;
      }
   
       if(positionx1<=30){
        if(score1==100){
          alert("player-1 wins!!!!!!!!!!!");
          player1.style.left = '10px';
          player1.style.top = '10px'; 
          one = -1;
          document.getElementById("roll-1").disabled = true;
          win++;
          leaderboard(win, "player-1");
        }
        else{
        positiony1-=50;
        if(positionx1<0){
        var p = Math.abs((positionx1-30)/50);
          positionx1=(p*50)-20;
          player1.style.left = positionx1 + 'px'; 
          player1.style.top = positiony1 + 'px'; 
        }
        else{
          positionx1= -20;
        }
      }
          
    }
  
   
   
    
    
  }


  else if(line1%2==1){

      positionx1 +=(randomNum1*50);
      var player1 = document.getElementById("player1");
      player1.style.position = "absolute"
      player1.style.left = positionx1 + 'px'; 
      player1.style.top = positiony1 + 'px'; 
      if(two == 1){
        document.getElementById("roll-2").disabled = false;
        document.getElementById("roll-1").disabled = true;
        
      }
      else if(three==1){
        document.getElementById("roll-3").disabled = false;
        document.getElementById("roll-1").disabled = true;
      }
     
    
      if(positionx1>=480){
        positiony1-=50;
        
        if(positionx1>480){
          var p = Math.abs((480-positionx1)/50);
          positionx1=530-(p*50);
          player1.style.left = positionx1 + 'px'; 
          player1.style.top = positiony1 + 'px'; 
        }
        else{
          positionx1= 530;
      
        }
      }
    }
  }

  //ladders==>
  if( positiony1==410 && positionx1==330 && score1==14) {
    positiony1=260;
    positionx1=280;
    score1=46;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==410 && positionx1==80 && score1==19) {
    positiony1=310;
    positionx1=130;
    score1=38;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==310 && positionx1==80 && score1==39) {
    positiony1=160;
    positionx1=30;
    score1=61;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==210 && positionx1==330 && score1==54) {
    positiony1=110;
    positionx1=380;
    score1=73;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }

  // snakes ==>
  if( positiony1==210 && positionx1==430 && score1==52) {
    positiony1=360;
    positionx1=380;
    score1=28;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==50 && positionx1==330 && score1==87) {
    positiony1=310;
    positionx1=230;
    score1=36;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==10 && positionx1==380 && score1==93) {
    positiony1=60;
    positionx1=380;
    score1=88;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==10 && positionx1==80 && score1==99) {
    positiony1=360;
    positionx1=280;
    score1=26;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }

}












//Player 2

var positiony2 =document.getElementById("player2").offsetTop;
var positionx2 =document.getElementById("player2").offsetLeft;
var line2,score2=0;

function roll2(){

  var player2= document.getElementById("player2");
  var dice2=document.getElementById("dice-2");

  player2.style.transition = "all .5s";
  dice2.style.transition = "all .5s";
  var randomNum2;
  randomNum2= Math.floor((Math.random() * 6) + 1);
  
  dice2.src="dice" + randomNum2 + ".png";

if(positiony2==525){
  positiony2=460;
  positionx2=-20;
  
}
if(score2+randomNum2 >100){
  if(three == 1){
    document.getElementById("roll-3").disabled = false;
    document.getElementById("roll-2").disabled = true;
    
  }

  else if(one == 1){
    document.getElementById("roll-1").disabled = false;
    document.getElementById("roll-2").disabled = true;
 
  }
  alert("Player 2 only need " + 100-score2);
}
else{
  score2+=randomNum2;
  console.log("score-2 = " +score2);

  line2=((positiony2-10)/50)

  if(line2%2==1)
  {
    positionx2+=(randomNum2*50)
    player2.style.position="absolute";
    player2.style.left=positionx2+ "px";
    player2.style.top=positiony2+'px';
    if(three == 1){
      document.getElementById("roll-3").disabled = false;
      document.getElementById("roll-2").disabled = true;
      
    }

    else if(one == 1){
      document.getElementById("roll-1").disabled = false;
      document.getElementById("roll-2").disabled = true;
   
    }
    
  if(positionx2>=480){
    positiony2-=50;
      if(positionx2>480){
        var e = Math.abs((480-positionx2)/50);
        positionx2=530-(e*50);
        player2.style.position="absolute";
        player2.style.left=positionx2+ "px";
        player2.style.top=positiony2+'px';

      }
      else{
        positionx2= 530;
      }
    }
  }

  if(line2%2==0){
    positionx2 -= (randomNum2*50);
    player2.style.position="absolute";
    player2.style.left=positionx2+ "px";
    player2.style.top=positiony2+'px';
    if(three == 1){
      document.getElementById("roll-3").disabled = false;
      document.getElementById("roll-2").disabled = true;
      
    }
   
    else if(one == 1){
      document.getElementById("roll-1").disabled = false;
      document.getElementById("roll-2").disabled = true;
   
    }
    if(positionx2<=30){
      if(score2==100){
        document.getElementById("roll-2").disabled = true;

        alert("Player-2 wins!!!!!!!!!!!");
        player2.style.left = '10px';
        player2.style.top = '10px'; 
        two = -1;
        document.getElementById("roll-2").disabled = true;
        win++;
        leaderboard(win, "player-2");
      }
      else{
        positiony2-=50;
        if(positionx2<30){
          var e = Math.abs((positionx2-30)/50);
            positionx2=(e*50)-20;
            player2.style.position="absolute";
            player2.style.left=positionx2+ "px";
            player2.style.top=positiony2+'px';
          }
          else{
            positionx2= -20;
          }
        }
    }
    
      if(positionx2== 330 && positiony2==418){
          positiony2=268;
          positionx2=280;
          score=26;
          player2.style.left = positionx2 + 'px'; 
          player2.style.top = positiony2 + 'px'; 
          document.getElementById("player2").style.transition = "all .5s";
      }
      

    }
  }

   //ladders==>
 if( positiony2==410 && positionx2==330 && score2==14) {
  positiony2=260;
  positionx2=280;
  score2=46;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==410 && positionx2==80 && score2==19) {
  positiony2=310;
  positionx2=130;
  score2=38;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==310 && positionx2==80 && score2==39) {
  positiony2=160;
  positionx2=30;
  score2=61;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==210 && positionx2==330 && score2==54) {
  positiony2=110;
  positionx2=380;
  score2=73;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}

// snakes ==>
if( positiony2==210 && positionx2==430 && score2==52) {
  positiony2=360;
  positionx2=380;
  score2=28;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==50 && positionx2==330 && score2==87) {
  positiony2=310;
  positionx2=230;
  score2=36;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==10 && positionx2==380 && score2==93) {
  positiony2=60;
  positionx2=380;
  score2=88;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==10 && positionx2==80 && score2==99) {
  positiony2=360;
  positionx2=280;
  score2=26;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
}












//player 3
var positionx3=document.getElementById("player3").offsetLeft;
var positiony3=document.getElementById("player3").offsetTop;

var line3, score3=0;
function roll3(){
  var player3= document.getElementById("player3");
  var dice3=document.getElementById("dice-3");
  player3.style.transition = "all .5s";
  dice3.style.transition = "all .5s";
  var randomNum3;
  randomNum3= Math.floor((Math.random() * 6) + 1);
  dice3.src="dice" + randomNum3 + ".png";
  if(positiony3==525){
  positiony3=460;
  positionx3=-20;
  }
  if(score3+randomNum3 >100){
   if(one == 1){
      document.getElementById("roll-1").disabled = false;
      document.getElementById("roll-3").disabled = true;
   
    }
    else if(two == 1){
      document.getElementById("roll-2").disabled = false;
      document.getElementById("roll-3").disabled = true;
   
    }
  
  alert("Player 3 only need " + 100-score3);
  }
  else{
  score3+=randomNum3;
  console.log("score-3 = " +score3);

  line3=((positiony3-10)/50)

 
  if(line3%2==1)
  {
    
    positionx3+=(randomNum3*50)
    player3.style.position="absolute";
    player3.style.left=positionx3+ "px";
    player3.style.top=positiony3+'px';
   if(one == 1){
      document.getElementById("roll-1").disabled = false;
      document.getElementById("roll-3").disabled = true;
   
    }
    else if(two == 1){
      document.getElementById("roll-2").disabled = false;
      document.getElementById("roll-3").disabled = true;
   
    }
  
    
  if(positionx3>=480){
    positiony3-=50;
      if(positionx3>480){
        var p3 = Math.abs((480-positionx3)/50);
        positionx3=530-(p3*50);
        player3.style.position="absolute";
        player3.style.left=positionx3+ "px";
        player3.style.top=positiony3+'px';

      }
      else{
        positionx3= 530;
      }
    }
  }

  if(line3%2==0){
 

    positionx3 -= (randomNum3*50);
    player3.style.position="absolute";
    player3.style.left=positionx3+ "px";
    player3.style.top=positiony3+'px';
    if(one == 1){
      document.getElementById("roll-1").disabled = false;
      document.getElementById("roll-3").disabled = true;
   
    }
    else if(two == 1){
      document.getElementById("roll-2").disabled = false;
      document.getElementById("roll-3").disabled = true;
   
    }
    
    if(positionx3<=30){
      if(score3==100){
        alert("Player-3 Wins!!!!!!!!!!!");
        player3.style.left = '10px';
        player3.style.top = '10px'; 
        three = -1;
        document.getElementById("roll-3").disabled = true;
        win++;
        leaderboard(win, "player-3");
     
      }
      else{
        positiony3-=50;
        if(positionx3<30){
          var p3 = Math.abs((positionx3-30)/50);
            positionx3=(p3*50)-20;
            player3.style.position="absolute";
            player3.style.left=positionx3+ "px";
            player3.style.top=positiony3+'px';
          }
          else{
            positionx3= -20;
          }
        }
    }
      
     
    }

    }
     //ladders==>
 if( positiony3==410 && positionx3==330 && score3==14) {
  positiony3=260;
  positionx3=280;
  score3=46;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}
if( positiony3==410 && positionx3==80 && score3==19) {
  positiony3=310;
  positionx3=130;
  score3=38;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}
if( positiony3==310 && positionx3==80 && score3==39) {
  positiony3=160;
  positionx3=30;
  score3=61;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}
if( positiony3==210 && positionx3==330 && score3==54) {
  positiony3=110;
  positionx3=380;
  score3=73;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}

// snakes ==>
if( positiony3==210 && positionx3==430 && score3==52) {
  positiony3=360;
  positionx3=280;
  score3=28;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}
if( positiony3==50 && positionx3==330 && score3==87) {
  positiony3=310;
  positionx3=230;
  score3=36;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}
if( positiony3==10 && positionx3==380 && score3==93) {
  positiony3=60;
  positionx3=380;
  score3=88;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}
if( positiony3==10 && positionx3==80 && score3==99) {
  positiony3=360;
  positionx3=280;
  score3=26;
  player3.style.position="absolute";
  player3.style.left=positionx3+ "px";
  player3.style.top=positiony3+'px';
}

}





  


}
else if(number==2){
  document.getElementById("canvas").classList.remove("none");
  document.getElementById("player1").classList.remove("none");
  document.getElementById("player2").classList.remove("none");
  document.getElementById("box-1").classList.remove("none");
  document.getElementById("box-2").classList.remove("none");
  document.getElementById("roll-1").classList.remove("none");
  document.getElementById("roll-2").classList.remove("none");
  document.getElementById("snake1").classList.remove("none");
  document.getElementById("snake2").classList.remove("none");
  document.getElementById("snake3").classList.remove("none");
  document.getElementById("snake5").classList.remove("none");
  document.getElementById("ladder").classList.remove("none");
  document.getElementById("ladder1").classList.remove("none");
  document.getElementById("ladder4").classList.remove("none");
  document.getElementById("td1").classList.remove("none");
  document.getElementById("td2").classList.remove("none");
  document.getElementById("leaderDiv").classList.remove("none");

  
//code

//Player 1
var positiony1 =document.getElementById("player1").offsetTop;
var positionx1 =document.getElementById("player1").offsetLeft;
var line1,score1=0;




function roll1(){
 
  document.getElementById("player1").style.transition = "all .5s";
  document.getElementById("dice-1").style.transition = "all .5s";
  var randomNum1;
  randomNum1 = Math.floor((Math.random() * 6) + 1);
  var dice = document.getElementById("dice-1");
  dice.src="dice" + randomNum1 + ".png";
  if(positiony1==525){
    positiony1=460;
    positionx1=-20;
  } 
  if(score1+randomNum1>100){
    alert("Player 1 only need " + 100-score1);
    if(two == 1){
      document.getElementById("roll-2").disabled = false;
      document.getElementById("roll-1").disabled = true;
  
    }
  
  
  }
  else{
   
    score1+=randomNum1;
    console.log("score-1 = " +score1);
    line1=(positiony1-10)/50;
   

   if(line1%2==0)
   {
    
      positionx1 -= (randomNum1*50);
      var player1 = document.getElementById("player1");
      player1.style.position = "absolute"
      player1.style.left = positionx1 + 'px';
      player1.style.top = positiony1 + 'px'; 
      if(two == 1){
        document.getElementById("roll-2").disabled = false;
        document.getElementById("roll-1").disabled = true;
       
      }
   
   
       if(positionx1<=30){
        if(score1==100){
          alert("Player 1 wins!!!!!!!!!!!");
          player1.style.left = '10px';
          player1.style.top = '10px'; 
          one = -1;
          document.getElementById("roll-1").disabled = true;
          win++;
          leaderboard(win, "player-1");
        }
        else{
        positiony1-=50;
        if(positionx1<0){
        var p = Math.abs((positionx1-30)/50);
          positionx1=(p*50)-20;
          player1.style.left = positionx1 + 'px'; 
          player1.style.top = positiony1 + 'px'; 
        }
        else{
          positionx1= -20;
        }
      }
          
    }
  
   
   
    
    
  }


  else if(line1%2==1){

      positionx1 +=(randomNum1*50);
      var player1 = document.getElementById("player1");
      player1.style.position = "absolute"
      player1.style.left = positionx1 + 'px'; 
      player1.style.top = positiony1 + 'px'; 
      if(two = 1){
        document.getElementById("roll-2").disabled = false;
        document.getElementById("roll-1").disabled = true;
        
      }

    
      if(positionx1>=480){
        positiony1-=50;
        
        if(positionx1>480){
          var p = Math.abs((480-positionx1)/50);
          positionx1=530-(p*50);
          player1.style.left = positionx1 + 'px'; 
          player1.style.top = positiony1 + 'px'; 
        }
        else{
          positionx1= 530;
      
        }
      }
    }
  }

  //ladders==>
  if( positiony1==410 && positionx1==330 && score1==14) {
    positiony1=260;
    positionx1=280;
    score1=46;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==410 && positionx1==80 && score1==19) {
    positiony1=310;
    positionx1=130;
    score1=38;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==310 && positionx1==80 && score1==39) {
    positiony1=160;
    positionx1=30;
    score1=61;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==210 && positionx1==330 && score1==54) {
    positiony1=110;
    positionx1=380;
    score1=73;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }

  // snakes ==>
  if( positiony1==210 && positionx1==430 && score1==52) {
    positiony1=360;
    positionx1=380;
    score1=28;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==50 && positionx1==330 && score1==87) {
    positiony1=310;
    positionx1=230;
    score1=36;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==10 && positionx1==380 && score1==93) {
    positiony1=60;
    positionx1=380;
    score1=88;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==10 && positionx1==80 && score1==99) {
    positiony1=360;
    positionx1=280;
    score1=26;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }

}












//Player 2

var positiony2 =document.getElementById("player2").offsetTop;
var positionx2 =document.getElementById("player2").offsetLeft;
var line2,score2=0;

function roll2(){

  var player2= document.getElementById("player2");
  var dice2=document.getElementById("dice-2");

  player2.style.transition = "all .5s";
  dice2.style.transition = "all .5s";
  var randomNum2;
  randomNum2= Math.floor((Math.random() * 6) + 1);
  
  dice2.src="dice" + randomNum2 + ".png";

if(positiony2==525){
  positiony2=460;
  positionx2=-20;
  
}
if(score2+randomNum2 >100){
  if(one == 1){
    document.getElementById("roll-1").disabled = false;
    document.getElementById("roll-2").disabled = true;
 
  }
  alert("Player 2 only need " + 100-score2);
}
else{
  score2+=randomNum2;
  console.log("score-2 = " +score2);

  line2=((positiony2-10)/50)

  if(line2%2==1)
  {
    positionx2+=(randomNum2*50)
    player2.style.position="absolute";
    player2.style.left=positionx2+ "px";
    player2.style.top=positiony2+'px';
   if(one == 1){
      document.getElementById("roll-1").disabled = false;
      document.getElementById("roll-2").disabled = true;
   
    }
    
  if(positionx2>=480){
    positiony2-=50;
      if(positionx2>480){
        var e = Math.abs((480-positionx2)/50);
        positionx2=530-(e*50);
        player2.style.position="absolute";
        player2.style.left=positionx2+ "px";
        player2.style.top=positiony2+'px';

      }
      else{
        positionx2= 530;
      }
    }
  }

  if(line2%2==0){
    positionx2 -= (randomNum2*50);
    player2.style.position="absolute";
    player2.style.left=positionx2+ "px";
    player2.style.top=positiony2+'px';
   
   
     if(one == 1){
      document.getElementById("roll-1").disabled = false;
      document.getElementById("roll-2").disabled = true;
   
    }
    if(positionx2<=30){
      if(score2==100){
        document.getElementById("roll-2").disabled = true;

        alert("Player-2 wins!!!!!!!!!!!");
        player2.style.left = '10px';
        player2.style.top = '10px'; 
        two = -1;
        document.getElementById("roll-2").disabled = true;
        win++;
        leaderboard(win, "player-2");
      }
      else{
        positiony2-=50;
        if(positionx2<30){
          var e = Math.abs((positionx2-30)/50);
            positionx2=(e*50)-20;
            player2.style.position="absolute";
            player2.style.left=positionx2+ "px";
            player2.style.top=positiony2+'px';
          }
          else{
            positionx2= -20;
          }
        }
    }
    
      if(positionx2== 330 && positiony2==418){
          positiony2=268;
          positionx2=280;
          score=26;
          player2.style.left = positionx2 + 'px'; 
          player2.style.top = positiony2 + 'px'; 
          document.getElementById("player2").style.transition = "all .5s";
      }
      

    }
  }

   //ladders==>
 if( positiony2==410 && positionx2==330 && score2==14) {
  positiony2=260;
  positionx2=280;
  score2=46;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==410 && positionx2==80 && score2==19) {
  positiony2=310;
  positionx2=130;
  score2=38;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==310 && positionx2==80 && score2==39) {
  positiony2=160;
  positionx2=30;
  score2=61;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==210 && positionx2==330 && score2==54) {
  positiony2=110;
  positionx2=380;
  score2=73;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}

// snakes ==>
if( positiony2==210 && positionx2==430 && score2==52) {
  positiony2=360;
  positionx2=380;
  score2=28;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==50 && positionx2==330 && score2==87) {
  positiony2=310;
  positionx2=230;
  score2=36;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==10 && positionx2==380 && score2==93) {
  positiony2=60;
  positionx2=380;
  score2=88;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
if( positiony2==10 && positionx2==80 && score2==99) {
  positiony2=360;
  positionx2=280;
  score2=26;
  player2.style.position="absolute";
  player2.style.left=positionx2+ "px";
  player2.style.top=positiony2+'px';
}
}

















}
else if(number==1){
  document.getElementById("canvas").classList.remove("none");
  document.getElementById("player1").classList.remove("none");
  document.getElementById("box-1").classList.remove("none");
  document.getElementById("roll-1").classList.remove("none");
  document.getElementById("snake1").classList.remove("none");
  document.getElementById("snake2").classList.remove("none");
  document.getElementById("snake3").classList.remove("none");
  document.getElementById("snake5").classList.remove("none");
  document.getElementById("ladder").classList.remove("none");
  document.getElementById("ladder1").classList.remove("none");
  document.getElementById("ladder4").classList.remove("none");
  document.getElementById("td1").classList.remove("none");
  document.getElementById("leaderDiv").classList.remove("none");

  

//Player 1
var positiony1 =document.getElementById("player1").offsetTop;
var positionx1 =document.getElementById("player1").offsetLeft;
var line1,score1=0;




function roll1(){
 
  document.getElementById("player1").style.transition = "all .5s";
  document.getElementById("dice-1").style.transition = "all .5s";
  var randomNum1;
  randomNum1 = Math.floor((Math.random() * 6) + 1);
  var dice = document.getElementById("dice-1");
  dice.src="dice" + randomNum1 + ".png";
  if(positiony1==525){
    positiony1=460;
    positionx1=-20;
  } 
  if(score1+randomNum1>100){
    alert("Player 1 only need " + 100-score1);
  
  
  }
  else{
   
    score1+=randomNum1;
    console.log("score-1 = " +score1);
    line1=(positiony1-10)/50;
   

   if(line1%2==0)
   {
    
      positionx1 -= (randomNum1*50);
      var player1 = document.getElementById("player1");
      player1.style.position = "absolute"
      player1.style.left = positionx1 + 'px';
      player1.style.top = positiony1 + 'px'; 

   
   
       if(positionx1<=30){
        if(score1==100){
          alert("Player-1 wins!!!!!!!!!!!");
          player1.style.left = '10px';
          player1.style.top = '10px'; 
          one = -1;
          document.getElementById("roll-1").disabled = true;
          win++;
          leaderboard(win, "player-1");
        }
        else{
        positiony1-=50;
        if(positionx1<0){
        var p = Math.abs((positionx1-30)/50);
          positionx1=(p*50)-20;
          player1.style.left = positionx1 + 'px'; 
          player1.style.top = positiony1 + 'px'; 
        }
        else{
          positionx1= -20;
        }
      }
          
    }
  
   
   
    
    
  }


  else if(line1%2==1){

      positionx1 +=(randomNum1*50);
      var player1 = document.getElementById("player1");
      player1.style.position = "absolute"
      player1.style.left = positionx1 + 'px'; 
      player1.style.top = positiony1 + 'px'; 
    
    
      if(positionx1>=480){
        positiony1-=50;
        
        if(positionx1>480){
          var p = Math.abs((480-positionx1)/50);
          positionx1=530-(p*50);
          player1.style.left = positionx1 + 'px'; 
          player1.style.top = positiony1 + 'px'; 
        }
        else{
          positionx1= 530;
      
        }
      }
    }
  }

  //ladders==>
  if( positiony1==410 && positionx1==330 && score1==14) {
    positiony1=260;
    positionx1=280;
    score1=46;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==410 && positionx1==80 && score1==19) {
    positiony1=310;
    positionx1=130;
    score1=38;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==310 && positionx1==80 && score1==39) {
    positiony1=160;
    positionx1=30;
    score1=61;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==210 && positionx1==330 && score1==54) {
    positiony1=110;
    positionx1=380;
    score1=73;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }

  // snakes ==>
  if( positiony1==210 && positionx1==430 && score1==52) {
    positiony1=360;
    positionx1=380;
    score1=28;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==50 && positionx1==330 && score1==87) {
    positiony1=310;
    positionx1=230;
    score1=36;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==10 && positionx1==380 && score1==93) {
    positiony1=60;
    positionx1=380;
    score1=88;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }
  if( positiony1==10 && positionx1==80 && score1==99) {
    positiony1=360;
    positionx1=280;
    score1=26;
    player1.style.position = "absolute"
    player1.style.left = positionx1 + 'px';
    player1.style.top = positiony1 + 'px'; 
  }

}












}
function leaderboard(rank , player){
  document.getElementById("name"+rank).innerHTML=player;
}

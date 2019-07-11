// var buttonColours = ["red","blue","green","yellow"];
// var gamePattern = [];
// var userClickedPattern = [];
// var level = 0;
// var started = false;
//
// $(document).keydown(function(){
//   if(!started){
//     $("h1").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });
//
// function nextSequence(){
//   var randomNumber = Math.floor(Math.random()*4) ;
//   var randomChosenColour = buttonColours[randomNumber];
//   level++;
//
//   gamePattern.push(randomChosenColour);
//
//
//   $("h1").text("Level " + level);
//
//   for (var i = 0; i < gamePattern.length; i++) {
//     console.log(i);
//     setTimeout(function (){
//       console.log(i);
//       $("#" + gamePattern[i-1]).fadeOut(150).fadeIn(150);
//       playSound(gamePattern[i-1]);
//     }, 500);
//   }
//
//
//   // $("#" + randomChosenColour).fadeOut(150).fadeIn(150);
//   // playSound(randomChosenColour);
//   // console.log(gamePattern);
// }
//
// function playSound(name){
//   var sound = new Audio("sounds/"+name+".mp3");
//   sound.play();
// }
//
// function animatePress(currentColour){
//   $("#"+currentColour).addClass("pressed");
//   setTimeout(function(){
//     $("#"+currentColour).removeClass("pressed");
//   }, 90);
// }
//
// function resetGame(){
//   gamePattern = [];
//   started = false;
//   level = 0;
//   $("h1").text("Press A Key to Start");
// }
//
// $(".btn").click(function(){
//   var userChosenColour = this.id;
//   userClickedPattern.push(userChosenColour);
//
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
//
//   if(userChosenColour === gamePattern[level-1]){
//     alert("Nice!");
//     nextSequence();
//   }else {
//     resetGame();
//     alert("Game over! :c");
//   }
// });





 var buttonColours = ["red","blue","green","yellow"];
 var gamePattern = [];
 var userClickedPattern = [];
 var level = 0;
 var started = false;

 $(document).keydown(function(){
   if(!started){
     $("h1").text("Level " + level);
     nextSequence();
     started = true;
   }
 });

 function nextSequence(){
   userClickedPattern = [];
   level++;

   var randomNumber = Math.floor(Math.random()*4) ;
   var randomChosenColour = buttonColours[randomNumber];

   $("h1").text("Level " + level);
   gamePattern.push(randomChosenColour);
   $("#" + randomChosenColour).fadeOut(150).fadeIn(150);
   playSound(randomChosenColour);
   // console.log(gamePattern);
 }

 function playSound(name){
   var sound = new Audio("sounds/"+name+".mp3");
   sound.play();
 }

 function animatePress(currentColour){
   $("#"+currentColour).addClass("pressed");
   setTimeout(function(){
     $("#"+currentColour).removeClass("pressed");
   }, 90);
 }

 function checkAnswer(currentLevel){

   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
     console.log("Ok");
     if (userClickedPattern.length === gamePattern.length) {
       setTimeout(function(){
         nextSequence();
       }, 1000);
     }
   } else {
     $("h1").text("Game over!");
     var wrongSong = new Audio("sounds/wrong.mp3");
     wrongSong.play();
     // console.log("No! ");
     $("body").addClass("game-over");
     setTimeout(function(){
       $("body").removeClass("game-over");
     },100);
     restartGame()
   }

 }

 function restartGame(){
   gamePattern = [];
   level = 0;
   started = 0;

   setTimeout(function(){
     $("h1").text("Press A key to start");
   },2000);
 }

 $(".btn").click(function(){

   if (gamePattern.length > 0) {

     var userChosenColour = this.id;
     userClickedPattern.push(userChosenColour);
     // console.log(typeof gamePattern[0]);

     playSound(userChosenColour);
     animatePress(userChosenColour);
     checkAnswer(userClickedPattern.length-1);

   }

 });

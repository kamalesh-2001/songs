var numberofdrum=document.querySelectorAll("button").length;
for (i=0;i<numberofdrum;i++)
document.querySelectorAll("button")[i].addEventListener("click",playAudio);
var x=new Audio("song.mp3");
function playAudio() {
  x.play();
}

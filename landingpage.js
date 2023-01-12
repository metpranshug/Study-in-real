const text = document.querySelector(".sec-text")
const textLoad = () =>{
  setTimeout(() => {
    text.textContent = "IN REAL" 
    text.style.color= "#4070f4" 
  }, 0);
  setTimeout(() => {
    text.textContent = "IN 3D" 
    text.style.color= "#F53030"
  }, 2500);
  setTimeout(() => {
    text.textContent = "BETTER"
    text.style.color= "#ffcb00" 
  }, 5000);
}
textLoad()
setInterval(textLoad, 7500)


function changeMode(){
    var element = document.body
    element.classList.toggle('dark-mode')
}

// play pause button

var video = document.getElementById("myVideo");
var video = document.getElementById("firstVideo");
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
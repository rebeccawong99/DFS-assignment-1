var redball = document.querySelector(".redball");

window.addEventListener("mousemove" , event => {
  var x = event.clientX;
  var y = event.clientY;
  
  redball.style.top = y + "px";
  redball.style.left = x + "px";
});
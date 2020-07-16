var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var heading = document.querySelector("h6");
var body = document.querySelector("body");

// function hexToRgb(h) {
//   let r = 0, g = 0, b = 0;

//   // 3 digits
//   if (h.length == 4) {
//     r = "0x" + h[1] + h[1];
//     g = "0x" + h[2] + h[2];
//     b = "0x" + h[3] + h[3];

//   // 6 digits
//   } else if (h.length == 7) {
//     r = "0x" + h[1] + h[2];
//     g = "0x" + h[3] + h[4];
//     b = "0x" + h[5] + h[6];
//   }
  
//   return "rgb("+ +r + "," + +g + "," + +b + ")";
// }

function firstColor() {
	body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value +")";
	heading.textContent = body.style.background + ";";
}




color1.addEventListener('click', firstColor);

color1.addEventListener('input', firstColor);

color2.addEventListener('click', firstColor);

color2.addEventListener('input', firstColor);


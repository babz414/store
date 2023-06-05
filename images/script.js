let imageSwitch = document.querySelector("#first-image");

let images = [
  "images//pexels-robin-1020370.jpg",
  "images//pexels-nataliya-vaitkevich-4641825.jpg",
  "images//pexels-leticia-ribeiro-2112651.jpg",
];

setInterval(function () {
  let random = Math.floor(Math.random() * 2);
  let a = imageSwitch.setAttribute("src", images[random]);
  //   a = ;
}, 800);

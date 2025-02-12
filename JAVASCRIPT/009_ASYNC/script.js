const ss = () => {
  console.log("Rahul");
};

const h = () => {
  document.querySelector("h1").innerHTML = "Rahul";
};
setTimeout(h, 2000);

// setTimeout(ss,2000)

// setTimeout(function() {
//     console.log("Rahul");
// },2000)

const sayHitesh = function () {
  console.log("Hitesh");
};
const changeTetxt = function () {
  document.querySelector("h1").innerHTML = "Hitesh";
};
const changeMe = setTimeout(changeTetxt, 2000);
document.querySelector("#stop").addEventListener("click", () => {
  clearTimeout(changeMe);
});

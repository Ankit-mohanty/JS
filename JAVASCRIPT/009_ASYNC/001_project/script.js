// Here we generate random hash code for color..
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  let intervalId;
  const startChangingColor = function () {
  // here we are checking if the intervalId is not null then we are not starting the interval again.
      if (!intervalId) {
      intervalId = setInterval(changeColor, 1000);
   }      
    function changeColor() {
      document.body.style.backgroundColor = randomColor();
    };
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
  //    here we are clearing the intervalId so that we can start the interval again.
    intervalId=null;
  };

  document
    .querySelector("#start")
    .addEventListener("click", startChangingColor);
  document
    .querySelector("#stop")
    .addEventListener("click", stopChangingColor);
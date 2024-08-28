const element = document.querySelector("body");

element.addEventListener("mousemove", (event) => {
  // console.log("mousemoved");
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanEle = document.createElement("span");

  const size=Math.random()*100;
  spanEle.style.height=size+"px";
  spanEle.style.width=size+"px";

  spanEle.style.position = "absolute";
  spanEle.style.left = xPos + "px";
  spanEle.style.top = yPos + "px";
  element.appendChild(spanEle);

  setTimeout(()=>{
    spanEle.remove();
  },3000);
});

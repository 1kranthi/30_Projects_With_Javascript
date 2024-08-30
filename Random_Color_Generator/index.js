const containerEle=document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEle = document.createElement("div");
    colorContainerEle.classList.add("color_container");
    containerEle.appendChild(colorContainerEle);
    
}

const colorContainerEles=document.querySelectorAll(".color_container");

colorGenerator();

function colorGenerator(){
    colorContainerEles.forEach((colorContainerEle) => {
        const newColorCode=randomColor();
        // console.log(newColorCode); 
        colorContainerEle.style.backgroundColor="#"+newColorCode;
        colorContainerEle.innerText="#"+newColorCode;
    });
} 


function randomColor(){
    const chars="0123456789abcdef";

    const colorCodeLength=6;

    let colorCode="";

    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum,randomNum+1);
        // console.log(colorCode,randomNum);
    }
    return colorCode; 
}

// randomColor();
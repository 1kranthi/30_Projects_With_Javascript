const conEle=document.querySelector(".container");

const carrer=["Developer","Gamer","Achiever","Student"];

let carIndex=0;
let caracterIndex=0;

update();

function update(){

    caracterIndex++;

    conEle.innerHTML=`<h1>I am ${carrer[carIndex].slice(0,1)==='A' ? "an" :"a"} ${carrer[carIndex].slice(0,caracterIndex)}</h1>`;
   

    if(caracterIndex === carrer[carIndex].length){
        carIndex++
        caracterIndex=0;
    }

    if(carIndex===carrer.length){
        carIndex=0;
    }
    setTimeout(update,300);
}
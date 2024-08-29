const inputEle=document.querySelector(".input");

const bodyEle=document.querySelector("body");

// console.log(inputEle.checked);
inputEle.checked= JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody(){
    if(inputEle.checked){
        bodyEle.style.background="black";
    }else{
        bodyEle.style.background="white";
    }
}

inputEle.addEventListener("input",()=>{
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage(){
    localStorage.setItem("mode",JSON.stringify(inputEle.checked));
}
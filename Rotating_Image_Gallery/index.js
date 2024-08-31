const imageContainerEle=document.querySelector(".image-container");

const precEl=document.getElementById("prev");

const nextEl=document.getElementById("next");

let x=0;
let timer;

precEl.addEventListener("click",()=>{
    x=x+60;
    clearTimeout(timer);
    updateGallery();
});

nextEl.addEventListener("click",()=>{
    x=x-60;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery(){
    imageContainerEle.style.transform=`perspective(1000px) rotateY(${x}deg)`;
   timer= setTimeout(()=>{
        x=x-60
        updateGallery()
    },3000)
}

updateGallery();
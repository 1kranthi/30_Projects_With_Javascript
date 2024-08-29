const imageContainerEle=document.querySelector(".image-container");

const btnEle=document.querySelector(".btn");

btnEle.addEventListener("click",()=>{
    imgNum=10;
   addNewImages();
});

function addNewImages(){

    for(let index=0;index<imgNum;index++){
        const newImgEle=document.createElement("img") 
    newImgEle.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;

    imageContainerEle.appendChild(newImgEle);
    }
    
}
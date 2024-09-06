const backgoundImageEl=document.getElementById("bg-image");

window.addEventListener("scroll",()=>{
    updateImage();
})

function updateImage(){
    backgoundImageEl.style.opacity=1 - window.scrollY/800;
    backgoundImageEl.style.backgroundSize  = 160 - window.scrollY/12+"%"
}
const containerEl=document.querySelector(".container");

window.addEventListener("mousemove",(event)=>{
//   console.log(event);
containerEl.innerHTML=`

     <div class="mouse-event">
            ${event.clientX}
            <h4>Mouse XPosition(px)</h4>
        </div>

        <div class="mouse-event">
            ${event.clientY}
            <h4>Mouse YPosition(px)</h4>
        </div> 
    `
})
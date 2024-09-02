const btnEl=document.getElementById("btn");

const emojiNameEl=document.getElementById("emoji-name");

const emoji=[]; 


async function getEmoji(){
    let response=await fetch("https://emoji-api.com/emojis?access_key= 9f4850cf9ba9a3642b05ab11ac77f808c4c08842");

    data=await response.json();

    // console.log(data);
    for(let i=0;i<1500;i++){
        emoji.push({
            emojiName: data[i].character,
            emojiCode: cleanUnicodeName(data[i].unicodeName),
        });
    }
}

function cleanUnicodeName(unicodeName){
    return unicodeName.replace(/E[0-9]+\.[0-9]+\s/g,'');
}

getEmoji();

// console.log(emoji);

btnEl.addEventListener("click",()=>{
    // console.log("clicked")

    const randomNum=Math.floor(Math.random()*emoji.length);
    // console.log(randomNum);
    btnEl.innerText=emoji[randomNum].emojiName;

    emojiNameEl.innerText=emoji[randomNum].emojiCode;
})
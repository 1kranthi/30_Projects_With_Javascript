const btnEl=document.getElementById("btn");

const birthdayEl=document.getElementById("birthday");

const resultEl=document.getElementById("result");

function calculateAge(){
    // console.log("clicked")
    const birthdayValue=birthdayEl.value;
    // console.log(birthdayValue);
    if(birthdayValue==""){
        alert("please enter your birthday")
    }else{
        const age=getAge(birthdayValue);
        // console.log(age);
        resultEl.innerText=`Your Are ${age} ${age>1 ?"years" : "year"} old`
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();

    const birthdayDate=new Date(birthdayValue);

    let age=currentDate.getFullYear()-birthdayDate.getFullYear();

    const month=currentDate.getMonth()-birthdayDate.getMonth();

    // console.log(month);
    // console.log(age);
    // console.log(currentDate);

    if(month==0 || (month ===0 && currentDate.getDate()<birthdayDate.getDate())){
        age--;
    }
    return age;
}

btnEl.addEventListener("click",calculateAge)
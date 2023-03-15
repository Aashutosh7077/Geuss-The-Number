const randomValue= Math.floor(Math.random()*100);
const guessBtn=document.getElementById('guess');
guessBtn.addEventListener('click',checkProcess);

function checkProcess(){

let msg = document.querySelector(".messege")
    let inputValue=document.getElementById("value").value;
    console.log(inputValue)
    if(inputValue==randomValue){
        msg.innerText="Yeahh You Got It"
        inputValue="  "

    }
    else if(inputValue>randomValue){
        msg.innerText="Greater than the Number"
        inputValue="  "
    }
    else {
        msg.innerText="Less than the Number"
        inputValue="  "
    }
}
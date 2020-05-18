var slot_one=document.querySelector(".slot_one");
var slot_two=document.querySelector(".slot_two");
var slot_three=document.querySelector(".slot_three");
var scoreSpan=document.querySelector(".scorespan");
var score=0;
let slotSound=new Audio("./assets/siren.wav")
let playBtn=document.querySelector(".playbtn")

var colors=[{icon:'💰',color:'green'},{icon: '🏯',color:'blue'},{icon:'🏖' ,color:'yellow'},{icon: '✈',color:'orange'},{icon:'🏝',color:'gray'},{icon: '💠' ,color:'purple'},{icon: '🌈',color: 'white'},{icon: '🏜' ,color:'black'}]

let iconOne=document.querySelectorAll(".iconOne")
let iconTwo=document.querySelectorAll(".iconTwo")
let iconThree=document.querySelectorAll(".iconThree")
let iconFour=document.querySelectorAll(".iconFour")
let iconFive=document.querySelectorAll(".iconFive")
let iconSix=document.querySelectorAll(".iconSix")

var colorsCounterOne=(Math.random() * colors.length-1) | 0;
var colorsCounterTwo=Math.random() * colors.length | 0;
var colorsCounterThree=Math.random() * colors.length | 0;
// var counterOne=Math.random() * iconOne.length | 0;
// var counterTwo=Math.random() * iconOne.length | 0;
// var counterThree=Math.random() * iconOne.length | 0;


let counter=0;

function slotMachine(){
    slotSound.play()

for(let i=0;i<50;i++){
    setTimeout(()=>{
        console.log(colorsCounterOne)

        if(colorsCounterOne >= colors.length){
            colorsCounterOne=0;
        }

        if(colorsCounterTwo >= colors.length){
            colorsCounterTwo = 0
        }

        if(colorsCounterThree >= colors.length){
            colorsCounterThree = 0
        }
   
        if(counter >= slot_one.children.length){
            counter = 0;
        }

        //slot one logic
        slot_one.children[counter].style.backgroundColor=colors[colorsCounterOne].color

        iconOne[counter].innerHTML=colors[colorsCounterOne].icon
        iconTwo[counter].innerHTML=colors[colorsCounterOne].icon
       


         slot_two.children[counter].style.backgroundColor=colors[colorsCounterTwo].color

        iconThree[counter].innerHTML=colors[colorsCounterTwo].icon
        iconFour[counter].innerHTML=colors[colorsCounterTwo].icon
       
       
         slot_three.children[counter].style.backgroundColor=colors[colorsCounterThree].color


        iconFive[counter].innerHTML=colors[colorsCounterThree].icon
        iconSix[counter].innerHTML=colors[colorsCounterThree].icon

        counter++
        colorsCounterOne++
        colorsCounterTwo++
        colorsCounterThree++
        colorsCounterTwo=(Math.random() * colors.length-1) | 0;

    if(i === 49){
        checkForJackPot()
        slotSound.pause()
    }

    }, i * 100)
 
}

}

playBtn.onclick=()=>{
    console.log("slot machine fired!")
    slotMachine()
}



function checkForJackPot(){
    if(slot_one.children[1].style.backgroundColor === slot_two.children[1].style.backgroundColor && slot_one.children[1].style.backgroundColor === slot_three.children[1].style.backgroundColor){
        console.log("jackpot!")
        score+=100;
        scoreSpan.innerHTML=score;
        document.querySelector(".message").innerHTML="WINNER!!💰" 
    }
    else{
        console.log("Losr!!")
        document.querySelector(".message").innerHTML="LOSER!😧" 
    }

    setTimeout(()=>{

        document.querySelector(".message").innerHTML=""
    },2500)
}



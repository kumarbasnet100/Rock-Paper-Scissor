let userScore=0;
let compScore=0;

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


//Generate comp choice
const genCompChoices=()=>{
    const options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
}

const gameDraw= ()=>{
    msg.innerText="Game Draw...Play Again";
    msg.style.backgroundColor="#081b31";
}

const showWinner= (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`Congrats! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`Sorry! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}

const playGame= (userChoice)=>{
// comp choice
    const compChoice=genCompChoices();
    if(userChoice===compChoice){
        //Draw
        gameDraw();

    }else{
        let userWin= true;
        if(userChoice==="rock"){
            //paper, scissors
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            //rock, scissors
            userWin=compChoice==="rock"?true:false;
        }else{
            //rock, paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};


choice.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
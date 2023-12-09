let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const MSG = document.querySelector("#msg");
const USERSCORE = document.querySelector("#user-score");
const COMPSCORE = document.querySelector("#comp-score");

//generate comp choice
const generateCompChoice = () => {
    const options = ["ROCK","PAPER","SCISSOR"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        MSG.innerText = `You Win !!! your ${userChoice} >>>> ${compChoice}`;
        MSG.style.backgroundColor = "green";
        USERSCORE.innerText = `${userscore+=1}`; 
    }else{
        MSG.innerText = `You Lose !!! ${compChoice} >>>> your ${userChoice}`;
        MSG.style.backgroundColor = "red";
        COMPSCORE.innerText = `${compscore+=1}`;
    }
}

const playGame = (userChoice) => {
    //assigning compChoice to a variable
    const compChoice = generateCompChoice();

    if(userChoice === compChoice){
        //DRAW GAME
        MSG.innerText = `Game Draw !!! Play Again`;
    }else{
        let userWin = true;

        if(userChoice === "ROCK"){
            //scissors,paper
            userWin = compChoice === "SCISSOR"? true : false;
        }
        else if(userChoice === "PAPER"){
            //rock,scissor
            userWin = compChoice === "ROCK"? true : false;
        }
        else{
            //paper,rock
            userWin = compChoice === "PAPER"? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        //generating user choice
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


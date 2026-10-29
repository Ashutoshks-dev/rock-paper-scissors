let userscore = 0;
let compscore= 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msgg");
const userscorepara = document.querySelector("#user-score");
const compcorepara = document.querySelector("#comp-score");
const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randix =Math.floor(Math.random() * 3);
    return options[randix];
}

const showWinner = (userWIin) => {
    if(userWIin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win");
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compcorepara.innerText = compscore;
        console.log("you lose");
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
}

const drawgame = () => {
     console.log("game was draw.");
     msg.innerText = "Draw";
     msg.style.backgroundColor = " #081b31";
};

const playGame = (userchoice) => {
    console.log("user choice =",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice =",compchoice);

    if(userchoice === compchoice){
        drawgame();

    }else{
       let userWIin = true;
       if(userchoice === "rock") {
        userWIin = compchoice === "paper" ? false: true;
       }else if(userchoice === "paper"){
        userWIin = compchoice === "scissors" ? false: true;
       }else{
        userWIin=compchoice === "rock" ? false: true;
       }
       showWinner(userWIin);
    }
    
}
choice.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id")
        console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
});
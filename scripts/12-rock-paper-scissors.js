function updateScore(){
    document.querySelector(".js-score").innerHTML='Wins: '+score.wins+', Losses: '+score.losses+', Ties: '+score.ties;
}
function playGame(playerChoice){
    const resultLabel=document.querySelector(".js-result");
    const movesLabel=document.querySelector(".js-moves");
    let randomNumber = Math.random();
    let computerChoice;
    
    if(randomNumber>=0 && randomNumber<1/3){
        computerChoice='rock';
    }
    else if (randomNumber<2/3){
        computerChoice='paper';
    }
    else{
        computerChoice='scissors';
    }

    let result="You choose "+playerChoice+". Computer chooses "+computerChoice;
    movesLabel.innerHTML=`You 
<img class="move-icon" src="${playerChoice}-emoji.png" alt="">
<img class="move-icon" src="${computerChoice}-emoji.png" alt="">
computer
`;
    if(computerChoice==playerChoice){
        result+=('. tie!');
        score.ties++;
        resultLabel.innerText="Tie...";
    }
    else{
        if((computerChoice=='scissors' && playerChoice=='rock')||(computerChoice=='rock' && playerChoice=='paper')||(computerChoice=='paper' && playerChoice=='scissors')){
            result+=('. you win!');
            score.wins++;
            resultLabel.innerText="You win!";
        }
        else{
            result+=('. you loose!');
            score.losses++;
            resultLabel.innerText="You lose.";
        }
    }
    document.querySelector(".js-score")
        .innerHTML='Wins: '+score.wins+', Losses: '+score.losses+', Ties: '+score.ties;
    localStorage.setItem('score', JSON.stringify(score));
    result+='\nWins: '+score.wins+', Losses: '+score.losses+', Ties: '+score.ties;
    return(result);
};
let score = JSON.parse(localStorage.getItem
    ('score'))||{
    wins: 0,
    losses: 0,
    ties: 0
}
updateScore();
let isAutoPlay=false;
let intervalID;

function autoPlay(){
    if (!isAutoPlay){
        intervalID=setInterval(function(){
            let randomNumber = Math.random();
            let computerChoice;
            
            if(randomNumber>=0 && randomNumber<1/3){
                computerChoice='rock';
            }
            else if (randomNumber<2/3){
                computerChoice='paper';
            }
            else{
                computerChoice='scissors';
            }
            
                playGame(computerChoice);
            }, 1000);
        isAutoPlay=true;
    }
    else{
        clearInterval(intervalID);
        isAutoPlay=false;
    }
    
}

document.querySelector(".js-rock-button").addEventListener('click',()=>{playGame('rock');});
document.querySelector(".js-paper-button").addEventListener('click',()=>{playGame('paper');});
document.querySelector(".js-scissors-button").addEventListener('click',()=>{playGame('scissors');});

document.body.addEventListener("keydown",(event)=>{
    if(event.key==="r"){
        playGame('rock');
    }else if(event.key==="p"){
        playGame('paper');
    }else if(event.key==="s"){
        playGame("scissors");
    } 
})
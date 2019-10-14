/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Global variables that store scores and keep track of the game.

var Scores, RoundScore, ActivePlayer, gameContinue;


//Calling initialize function to set initial properties for the game

initialize();


//Event Listener for Roll Dice button
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameContinue)
        {
            var dice=Math.floor((Math.random()*6)+1);
            document.querySelector('.dice').style.display='block';
            document.querySelector('.dice').src='dice-'+dice+'.png';
            if(dice>1)
                {
                    RoundScore+=dice;
                    document.getElementById('current-'+ActivePlayer).innerHTML=RoundScore;
                }
            else{
        
                    NextPlayer();
        
                }
        }
})


// Initialize function used to set initial parameters for the game

function initialize()
{
    Scores=[0,0];
    RoundScore=0;
    ActivePlayer=0;
    gameContinue=true;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
}

//Event Listener for Hold button
document.querySelector('.btn-hold').addEventListener('click',function(){
   if(gameContinue)
   {
        Scores[ActivePlayer]+=RoundScore;
        document.getElementById('score-'+ActivePlayer).textContent=Scores[ActivePlayer];
            if(Scores[ActivePlayer] >= 100)
                {
                document.querySelector('.player-'+ActivePlayer+'-panel').classList.add('winner');
                document.querySelector('.player-'+ActivePlayer+'-panel').classList.remove('active');
                document.getElementById('name-'+ActivePlayer).textContent='Winner!';
                document.querySelector('.dice').style.display='none';
                gameContinue=false;
                
                }
            else
                {
                NextPlayer();
                }
    
   }
    
})

//Event Listener for New Game Button
document.querySelector('.btn-new').addEventListener('click',initialize);


//Function to give turn to play for the next player

function NextPlayer()
{
        RoundScore=0;
        document.getElementById('current-'+ActivePlayer).innerHTML=RoundScore;
        ActivePlayer === 0? ActivePlayer=1 : ActivePlayer=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none';
        
}



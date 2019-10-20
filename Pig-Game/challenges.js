/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

// Global variables that store scores and keep track of the game.

var Scores, RoundScore, ActivePlayer, gameContinue;

var lastDice,WinningScore;
//Calling initialize function to set initial properties for the game

initialize();


//Event Listener for Roll Dice button
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameContinue)
        {
            var dice1=Math.floor((Math.random()*6)+1);
            var dice2=Math.floor((Math.random()*6)+1);
            document.getElementById('dice-1').style.display='block';
            document.getElementById('dice-2').style.display='block';
            document.getElementById('dice-1').src='dice-'+dice1+'.png';
            document.getElementById('dice-2').src='dice-'+dice2+'.png';
            
            /* Challenge 1 Solution:
            
            if(dice==6 && lastDice==6)
                {
                    NextPlayer();
                }
            else 
                {
                    RoundScore+=dice;
                    document.getElementById('current-'+ActivePlayer).innerHTML=RoundScore;
                }
           
            lastDice=dice;*/
            if(dice1==1 || dice2==1)
                {
                    NextPlayer();
                }
            else
                {
                    RoundScore+=dice1+dice2;
                    document.getElementById('current-'+ActivePlayer).innerHTML=RoundScore;
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
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
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
        var input=document.querySelector('.final-score').value;
       
       //Setting the Winning Score 
       
       if(input)
            {
               WinningScore=input 
            }
        else{
               WinningScore=100;
            }
       
       //Checking for the Winner
       
            if(Scores[ActivePlayer] >= WinningScore)
                {
                document.querySelector('.player-'+ActivePlayer+'-panel').classList.add('winner');
                document.querySelector('.player-'+ActivePlayer+'-panel').classList.remove('active');
                document.getElementById('name-'+ActivePlayer).textContent='Winner!';
                document.getElementById('dice-1').style.display='none';
                document.getElementById('dice-2').style.display='none';
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
        document.getElementById('dice-1').style.display='none';
        document.getElementById('dice-2').style.display='none';
}



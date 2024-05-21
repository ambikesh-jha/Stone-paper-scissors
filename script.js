

var yourScore = 0 ;
document.querySelector('#yourScore').innerText = `${yourScore}`;
var computerScore = 0 ;
document.querySelector('#computerScore').innerText = `${computerScore}`;



function changeToStone(){
    let img = document.getElementById('mychoice');
    img.src = 'gameImages/rock.jpg';
    let computerimage  = document.getElementById('ComputerChoice');


    let randomImage = Math.random()*3;
    if(randomImage > 0 && randomImage <=1){
        computerimage.src = 'gameImages/rock.jpg';
    }
    else if(randomImage > 1 && randomImage <=2){
        computerimage.src = 'gameImages/paper.jpg';

        computerScore = computerScore + 1 ; 
        document.querySelector('#computerScore').innerText = `${computerScore}`;

    }
    else {
        computerimage.src = 'gameImages/scissors.png';
        
        yourScore = yourScore + 1 ; 
        document.querySelector('#yourScore').innerText = `${yourScore}`;
    }
    GameOver();

}


function changeToPaper(){
    var img = document.getElementById('mychoice');
    img.src = 'gameImages/paper.jpg';
    let computerimage  = document.getElementById('ComputerChoice');
    let randomImage = Math.random()*3;
    if(randomImage > 0 && randomImage <=1){
        computerimage.src = 'gameImages/rock.jpg';
        
        yourScore = yourScore + 1 ; 
        document.querySelector('#yourScore').innerText = `${yourScore}`;
    }
    else if(randomImage > 1 && randomImage <=2){
        computerimage.src = 'gameImages/paper.jpg';
    }
    else {
        computerimage.src = 'gameImages/scissors.png';
        
        computerScore = computerScore + 1 ; 
        document.querySelector('#computerScore').innerText = `${computerScore}`;

    }
    GameOver();

}


function changeToScissors(){
    var img = document.getElementById('mychoice');
    img.src = 'gameImages/scissors.png';
    let computerimage  = document.getElementById('ComputerChoice');
    let randomImage = Math.random()*3;
    if(randomImage > 0 && randomImage <=1){
        computerimage.src = 'gameImages/rock.jpg';
        
        computerScore = computerScore + 1 ; 
        document.querySelector('#computerScore').innerText = `${computerScore}`;
    }
    else if(randomImage > 1 && randomImage <=2){
        computerimage.src = 'gameImages/paper.jpg';
        
        yourScore = yourScore + 1 ; 
        document.querySelector('#yourScore').innerText = `${yourScore}`
    }
    else {
        computerimage.src = 'gameImages/scissors.png';

    }
    GameOver();

}
// ---------------------------------Reload----------------------------------
function Reload(){
    location.reload();
}
// ---------------------------------popup---------------------------------
function GameOver(){
    if(computerScore + yourScore === 5){
        document.querySelector('#GameOver').style.visibility = 'visible';
        if(yourScore > computerScore ){
            let img = document.getElementById('WinLose');
            img.src = 'gameImages/won.png';
            
            document.querySelector('#Status').innerText = `You WON !`
            document.querySelector('#points').innerText = `Your Score : ${yourScore}
            CompScore : ${computerScore}`;

        }
        else{
            let img = document.getElementById('WinLose');
            img.src = 'gameImages/lost.png';

            document.querySelector('#Status').innerText = `You LOST !`
            document.querySelector('#points').innerText = `Your Score : ${yourScore}
            CompScore : ${computerScore}`;
        }
    }
}

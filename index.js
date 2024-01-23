score = 0;
cross = true;
audio = new Audio('music.mp3');
audiogo = new Audio('Dragon gameoff.mp3');
setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function (e) {
    console.log("Key code is", e.code);
    if (e.code == "ArrowUp") {
        dino = document.querySelector(".dino");
        dino.classList.add("animoDino");
        setTimeout(() => {
            dino.classList.remove('animoDino');
        }, 700);
    }


    if (e.code == "ArrowRight") {
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.code == "ArrowLeft") {
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {

    dino = document.querySelector('.dino');
    obstacle = document.querySelector('.obstacle');
    gameOver = document.querySelector('.gameOver');
    // obstacleagain=document.querySelector('.obstacleagain');
   

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));


    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    //    console.log(offsetX);
    if (offsetX < 72 && offsetY < 52) {
       

        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleani');
        
        document.onkeydown = null;
        setTimeout(() => {
            obstacle.classList.add('obstacleagain')
            
        }, 10);
        
        audiogo.play();
        setTimeout(() => {
            audio.pause();
        }, 10);
       
        setTimeout(() => {
            audiogo.pause();    
        }, 3000);

    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            console.log(newDur);
            obstacle.style.animationDuration = newDur + 's'
        }, 500);
        //  console.log(newDur);
    }

}, 10);

function updateScore(score) {
    scoreCont = document.querySelector('.scoreCont');
    scoreCont.innerHTML = "Your Score:  " + score
}
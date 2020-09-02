const dropDown = document.querySelector(".drop-down-menu");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerInside1 = document.querySelector(".ham");
const hamburgerInside2 = hamburgerInside1.nextElementSibling;
const hamburgerInside3 = hamburgerInside2.nextElementSibling;
const hamburgers = document.querySelectorAll('.ham')
let hello = true;
function toggleDropDown () {
    console.log('hello');
    // checking if hello is true will fix the bug thats clicking twice
    if (hello === true) {
        
        hamburgerInside1.style.backgroundColor = 'black';
        hamburgerInside2.style.backgroundColor = 'black';
        hamburgerInside3.style.backgroundColor = 'black';
        hamburgerInside1.style.borderColor = 'black';
        hamburgerInside2.style.borderColor = 'black';
        hamburgerInside3.style.borderColor = 'black';
        dropDown.classList.add('drop-down-animation')
        dropDown.classList.remove('drop-down-animation-gone')
        hello = false;
     }
    else {
        
        hamburgerInside1.style.backgroundColor = 'white';
        hamburgerInside2.style.backgroundColor = 'white';
        hamburgerInside3.style.backgroundColor = 'white';
        hamburgerInside1.style.borderColor = 'white';
        hamburgerInside2.style.borderColor = 'white';
        hamburgerInside3.style.borderColor = 'white';
        dropDown.classList.remove('drop-down-animation')
        dropDown.classList.add('drop-down-animation-gone')
        hello = true;
    }
};

hamburgerIcon.addEventListener('click',toggleDropDown);


const popUpVideo = document.querySelector ('.play-video-container');
const playButton = document.querySelector('#video-btn');
const exitButton = document.querySelector('#x-button');
const playIcon = document.querySelector('#play-icon');
let goodBye = true;
function openVideo () {
        popUpVideo.style.display = 'block';
        console.log('hello play btn') 
        goodBye = false;
 
};

function closeVideo () {
    popUpVideo.style.display = 'none';
        goodBye = true;
}

function changeIconColorToRed () {
    playIcon.style.borderLeft = '10px solid rgb(255, 51, 102)';
}
function changeIconColorToWhite () {
    playIcon.style.borderLeft = '10px solid white';
}

playButton.addEventListener('click', openVideo);
exitButton.addEventListener('click', closeVideo);
playButton.addEventListener('mouseover', changeIconColorToRed);
playButton.addEventListener('mouseout', changeIconColorToWhite);

let backgroundVideo = document.querySelector('#background-video');
backgroundVideo.playbackRate = 1;

backgroundVideo.addEventListener('timeupdate', function(){
    if(backgroundVideo.currentTime > backgroundVideo.duration * .26){
        // Reset the backgroundVideo to 0
        backgroundVideo.currentTime = 0;
        // And play again
        backgroundVideo.play();
    }
  });

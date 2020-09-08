const dropDown = document.querySelector(".drop-down-menu");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerInside1 = document.querySelector(".ham");
const hamburgerInside2 = hamburgerInside1.nextElementSibling;
const hamburgerInside3 = hamburgerInside2.nextElementSibling;
const hamburgers = document.querySelectorAll('.ham');
const studioVideo = document.querySelector('#studio-video');
const videoMarker = document.getElementsByClassName('studio-video-marker-red');
const videoControls = document.getElementsByClassName('studio');
let menuActive = false;
function toggleDropDown () {
    menuActive = !menuActive
    // checking if hello is true will fix the bug thats clicking twice
    if ( menuActive ) {
        
        hamburgerInside1.style.backgroundColor = 'black';
        hamburgerInside2.style.backgroundColor = 'black';
        hamburgerInside3.style.backgroundColor = 'black';
        hamburgerInside1.style.borderColor = 'black';
        hamburgerInside2.style.borderColor = 'black';
        hamburgerInside3.style.borderColor = 'black';
        dropDown.classList.add('drop-down-animation')
        dropDown.classList.remove('drop-down-animation-gone')
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
const header = document.querySelector('header')
const bodyElement = document.querySelector('body');
const signIn = document.querySelector('#sign-in a');
function changeCssOnScroll () { 
    if (this.scrollY > 175) {
        header.style.backgroundColor = 'white';
        signIn.style.color = 'black';
        hamburgerInside1.style.backgroundColor = 'black';
        hamburgerInside2.style.backgroundColor = 'black';
        hamburgerInside3.style.backgroundColor = 'black';
        hamburgerInside1.style.borderColor = 'black';
        hamburgerInside2.style.borderColor = 'black';
        hamburgerInside3.style.borderColor = 'black';
    } else if (this.scrollY <= 175) {
        header.style.backgroundColor = '';
        signIn.style.color = 'white';
        if (!menuActive) {
        hamburgerInside1.style.backgroundColor = 'white';
        hamburgerInside2.style.backgroundColor = 'white';
        hamburgerInside3.style.backgroundColor = 'white';
        hamburgerInside1.style.borderColor = 'white';
        hamburgerInside2.style.borderColor = 'white';
        hamburgerInside3.style.borderColor = 'white'; 
        }
    }
}

window.addEventListener('scroll',changeCssOnScroll);
header.classList.add('.header-animation');


function animateSlider () {
    if (studioVideo.currentTime > 0 && studioVideo.currentTime < 31) {
        videoMarker[0].classList.add('animate-marker');
        videoMarker[2].classList.remove('animate-marker');
        videoMarker[1].classList.remove('animate-marker');
        videoControls[0].style.bottom = '20px';
        videoControls[1].style.bottom = '';
        videoControls[2].style.bottom = '';
        
    } 
    else if (studioVideo.currentTime >= 31 && studioVideo.currentTime < 61) {
        videoMarker[1].classList.add('animate-marker');
        videoMarker[0].classList.remove('animate-marker');
        videoMarker[2].classList.remove('animate-marker');
        videoControls[1].style.bottom = '20px';
        videoControls[0].style.bottom = '';
        videoControls[2].style.bottom = '';
    }
    else if (studioVideo.currentTime >= 61) {
        videoMarker[2].classList.add('animate-marker');
        videoMarker[1].classList.remove('animate-marker');
        videoMarker[0].classList.remove('animate-marker');
        videoControls[2].style.bottom = '20px';
        videoControls[0].style.bottom = '';
        videoControls[1].style.bottom = '';
        
    }
}
function changeTimeOnVideoToZero () {
    videoControls[0].style.bottom = '20px';
    videoControls[1].style.bottom = '';
    videoControls[2].style.bottom = '';
    videoMarker[0].classList.add('animate-marker');
    videoMarker[2].classList.remove('animate-marker');
    videoMarker[1].classList.remove('animate-marker');
        studioVideo.currentTime = 0;
        console.log('first one is clicked');
}

function changeTimeOnVideoToThirty () {
    console.log('second one is clicked')
        videoControls[1].style.bottom = '20px';
        videoControls[0].style.bottom = '';
        videoControls[2].style.bottom = '';
        studioVideo.currentTime = 31;
        videoMarker[1].classList.add('animate-marker');
        videoMarker[0].classList.remove('animate-marker');
        videoMarker[2].classList.remove('animate-marker');
}

function changeTimeOnVideoToSixty () {
    console.log('third one is clicked')
    videoControls[2].style.bottom = '20px';
    videoControls[0].style.bottom = '';
    videoControls[1].style.bottom = '';
        studioVideo.currentTime = 61;
        videoMarker[2].classList.add('animate-marker');
        videoMarker[1].classList.remove('animate-marker');
        videoMarker[0].classList.remove('animate-marker');
}

studioVideo.addEventListener('timeupdate', animateSlider);
videoControls[0].addEventListener('click',changeTimeOnVideoToZero);
videoControls[1].addEventListener('click',changeTimeOnVideoToThirty);
videoControls[2].addEventListener('click',changeTimeOnVideoToSixty);
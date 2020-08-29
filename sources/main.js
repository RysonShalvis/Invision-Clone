const dropDown = document.querySelector(".drop-down-menu");
const hamburgerIcon = document.querySelector("#hamburger-icon");
const hamburgerInside1 = document.querySelector(".ham");
const hamburgerInside2 = hamburgerInside1.nextElementSibling;
const hamburgerInside3 = hamburgerInside2.nextElementSibling;

let hello = true;
function toggleDropDown () {
    console.log('hello');
    // checking if hello is true will fix the bug thats clicking twice
    if (hello === true) {
        dropDown.style.display = 'block';
        hamburgerInside1.style.backgroundColor = 'black';
        hamburgerInside2.style.backgroundColor = 'black';
        hamburgerInside3.style.backgroundColor = 'black';
        hamburgerInside1.style.borderColor = 'black';
        hamburgerInside2.style.borderColor = 'black';
        hamburgerInside3.style.borderColor = 'black';
        hello = false;
     }
    else {
        dropDown.style.display = 'none';
        hamburgerInside1.style.backgroundColor = 'white';
        hamburgerInside2.style.backgroundColor = 'white';
        hamburgerInside3.style.backgroundColor = 'white';
        hamburgerInside1.style.borderColor = 'white';
        hamburgerInside2.style.borderColor = 'white';
        hamburgerInside3.style.borderColor = 'white';
        hello = true;
    }
};

hamburgerIcon.addEventListener('click',toggleDropDown);


const popUpVideo = document.querySelector ('.play-video-container');
const playButton = document.querySelector('#video-btn');
const exitButton = document.querySelector('#x-button');
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

playButton.addEventListener('click', openVideo);
exitButton.addEventListener('click', closeVideo);
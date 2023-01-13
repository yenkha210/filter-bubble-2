import '../styles/style.css'
import * as d3 from 'd3';
import { interpolateMagma } from 'd3';

/*
Play vid if vid is on screen
Bron: https://benfrain.com/automatically-play-and-pause-video-as-it-enters-and-leaves-the-viewport-screen/
Play video's when video is on screen. Volume doesn't work
*/

// Poging 1
// Like button
// Bron: https://codepen.io/xiao-nan-pols/pen/mdKZwoj
// If button clicked, all like btns get pink. Iets doen met de clicked button

/*
const likeBtns = document.querySelectorAll("#like");

function likeActive(buttonPressed, whichButton) {
    //let allLikeBtns = document.querySelectorAll("#like");

    likeBtns.forEach(item => {
        item.classList.add("active");
    });
};

likeBtns.forEach(button => {
    button.addEventListener("click", likeActive);
});
*/

//Poging 2
/*
const likeBtns = document.querySelectorAll("#like");
const dislikeBtns = document.querySelectorAll("#dislike");

function likeActive(buttonPressed, whichButton) {
    //let allLikeBtns = document.querySelectorAll("#like");

    likeBtns.forEach(item => {
        //item.classList.add("likeActive");

        if(buttonPressed) {
            if(whichButton == 1) {
                item.classList.add("likeActive");
            }
        }

    });
};

likeBtns.forEach(button => {
    //button.addEventListener("click", likeActive(true, e.target.value));
    button.forEach(e => {
        likeActive(true, e.target.value);
    });
});
*/

// Lelijke versie die je 4x moet herhalen

const like1 = document.querySelector("#like-1");
const dislike1 = document.querySelector("#dislike-1");

function likeActive() {
    like1.classList.add("active");
    dislike1.classList.remove("active");
};
like1.addEventListener("click", likeActive);

function dislikeActive() {
    dislike1.classList.add("active");
    like1.classList.remove("active");
};
dislike1.addEventListener("click", dislikeActive);


// Filter voor knoppen https://www.youtube.com/watch?v=OeMuUKedtPc&ab_channel=CodingNepal
// Like buton is al active
/*
const filterItem = document.querySelector(".tiktok-vid div");
window.onload = () => {
  filterItem.onclick = selectedItem => {
    if (selectedItem.target.classList.contains("btn")) {
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
    }
  };
};
*/
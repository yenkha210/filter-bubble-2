import '../styles/style.css'
import * as d3 from 'd3';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { filter, stackOrderNone } from 'd3';

const chosenTiktokImg = document.querySelector("#chosen-tiktok-img");

// Choose TikTok
// Bron: https://codepen.io/xiao-nan-pols/pen/mdKZwoj
const playBtn1 = document.getElementById("play_button1");
const video1 = document.querySelector(".video1");

const playBtn2 = document.getElementById("play_button2");
const video2 = document.querySelector(".video2");

const playBtn3 = document.getElementById("play_button3");
const video3 = document.querySelector(".video3");

// Bron: https://stackoverflow.com/questions/39839884/creating-a-custom-play-button-for-a-video
playBtn1.addEventListener("click", function() {
    if (video1.paused == true) {
    video1.play();
    playBtn1.innerHTML = "II";
    } else {
    video1.pause();
    playBtn1.innerHTML = "▶";
    };
});

playBtn2.addEventListener("click", function() {
    if (video2.paused == true) {
    video2.play();
    playBtn2.innerHTML = "II";
    } else {
        video2.pause();
        playBtn2.innerHTML = "▶";
    };
});

playBtn3.addEventListener("click", function() {
    if (video3.paused == true) {
    video3.play();
    playBtn3.innerHTML = "II";
    } else {
        video3.pause();
        playBtn3.innerHTML = "▶";
    };
});

// Filter voor page navigation https://www.youtube.com/watch?v=OeMuUKedtPc&ab_channel=CodingNepal
const filterItem = document.querySelector(".page-navigation ul");
window.onload = () => {
  filterItem.onclick = selectedItem => {
    if (selectedItem.target.classList.contains("btn")) {
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
    };
  };
};

// Page naviagion btn 3: Border
const filterTitle = document.querySelector(".filter-intro h2");
const pageBtn3 = document.querySelector(".page-navigation ul li:nth-of-type(3)");
const friendsRepost = document.querySelectorAll("#friend-repost");

function changeIntro(e) {
    chosenTiktokImg.classList.add("none");
    friendsRepost.forEach(item => {
        filterTitle.textContent = "Als er vrienden zijn die die video ook leuk vinden en herplaatsen komen zij in een filterbubbel terecht";
        item.classList.add("reposted");
    });
};
pageBtn3.addEventListener("click", changeIntro);

// Page navigation btn 1: Gsap
const pageBtn2 = document.querySelector(".page-navigation ul li:nth-of-type(2)");

function moveChosenTiktok() {
    gsap.to("#chosen-tiktok-img", {
        x: -400,
        y: -250,
        duration: 1
    });
};
pageBtn2.addEventListener("click", moveChosenTiktok);

// Herplaats buttons / Show loading
const repostBtns = document.querySelectorAll("#repost");
const loading = document.querySelector(".loading-screen");
const mainHeader = document.querySelector(".main-header");
const videosSection = document.querySelector(".videos");
const filterIntro = document.querySelector(".filter-intro");

loading.classList.add("none");
// TODO: Letop uncomment comment en delete classlist adds
filterIntro.classList.add("none");
// mainHeader.classList.add("none");
// videosSection.classList.add("none");

function showLoading(e) {
    loading.classList.remove("none");
    mainHeader.classList.add("none");
    videosSection.classList.add("none");
    video1.pause();
    video2.pause();
    video3.pause();

    // Bron: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
    setTimeout(() => {
        loading.classList.add("none");
        filterIntro.classList.remove("none");
    }, "3000")
};

// Chosen Tiktok using filter-intro

function chosenTiktok(e, buttonPressed, whichButton) {
    if(buttonPressed) {
        if (whichButton == 1) {
            chosenTiktok.src = "img/tiktok-img-1.jpg";
            console.log('match!', e.target.value);
        } else if (whichButton == 2) {
            chosenTiktok.src = "img/uitleg-1.jpg";
            console.log('match!', e.target.value);
        }  else {
            chosenTiktok.src = "img/uitleg-2.jpg";
            console.log('match!', e.target.value);
        }
    }
}

repostBtns.forEach(button => {
    button.addEventListener("click", function() {
        showLoading();
        chosenTiktok(e, true, e.target.value);
    });
});


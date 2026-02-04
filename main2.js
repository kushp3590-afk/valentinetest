console.log("main2.js loaded ✅");

// ---------- GIFS ----------
const mainHappy1 =
  "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
const mainHappy3 =
  "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
const mainSad1 =
  "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
const heartGif =
  "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";

// ---------- CONTENT ----------
const sadCat = [
  "https://media1.tenor.com/images/9413ffc5a11722a3cc456a88810750bd/tenor.gif?itemid=14193216",
  "https://emoji.gg/assets/emoji/5228_cat_cri.gif",
  "https://media1.tenor.com/images/a0554662ae7c3c60c0a7fdadac74ef18/tenor.gif?itemid=13931206",
  "https://media3.giphy.com/media/qpCvOBBmBkble/giphy.gif",
  "https://c.tenor.com/fpIAhF2jIY0AAAAC/cat-crying.gif",
  "https://c.tenor.com/BP70qe8X0J8AAAAC/crycat-crying-cat.gif",
];

const blackmail = [
  "Please",
  "I'm begging you",
  "I'm crying",
  "I'm sad",
  "HUHUHUHU",
  "Please Say Yes",
  "I'm gonna cry",
];

// ---------- STATE ----------
let counter = 0;

// ---------- HELPERS ----------
function randFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function angry() {
  const images = document.querySelectorAll(".image1");
  const absImg = document.getElementById("absImg");
  const mainImg = document.getElementById("mainImg");

  if (mainImg) mainImg.src = mainSad1;
  if (absImg) absImg.style.display = "flex";

  images.forEach((img) => (img.src = mainSad1));
}

function happy() {
  const images = document.querySelectorAll(".image1");
  const absImg = document.getElementById("absImg");
  const mainImg = document.getElementById("mainImg");

  if (mainImg) mainImg.src = mainHappy3;
  if (absImg) absImg.style.display = "flex";

  images.forEach((img) => (img.src = heartGif));
}

function normal() {
  const absImg = document.getElementById("absImg");
  const mainImg = document.getElementById("mainImg");

  if (absImg) absImg.style.display = "none";
  if (mainImg) mainImg.src = mainHappy1;
}

function no() {
  counter++;

  const sadMusic = document.getElementById("sadMusic");
  const happyMusic = document.getElementById("happyMusic");
  if (happyMusic) happyMusic.pause();
  if (sadMusic) sadMusic.play();

  const model = document.getElementById("model");
  if (!model) return;

  model.style.display = "none";
  setTimeout(() => {
    model.style.display = "flex";

    const modelImage = document.getElementById("modelImg");
    const modelText = document.getElementById("modelText");

    if (modelImage) modelImage.src = randFrom(sadCat);
    if (modelText) modelText.innerText = randFrom(blackmail);
  }, 100);
}

function yes() {
  if (counter >= 3) {
    const model2 = document.getElementById("model2");
    const model = document.getElementById("model");

    const sadMusic = document.getElementById("sadMusic");
    if (sadMusic) sadMusic.pause();

    if (model) model.style.display = "none";

    const happyMusic = document.getElementById("happyMusic");
    if (happyMusic) happyMusic.play();

    if (model2) {
      model2.style.display = "none";
      setTimeout(() => {
        model2.style.display = "flex";
      }, 100);
    }

    const wedate = document.getElementById("wedate");
    const btns = document.getElementById("btns");
    if (btns) btns.style.display = "none";
    if (wedate) {
      wedate.innerText =
        "YAYY, Thanks for being my valentine for the past 5 years, and the years to come. I lub you ❤️😘";
    }

    window.open("index1.html", "_blank");
  } else {
    alert(
      "Come on, don't be THAT nice, play around a bit to make my hard work worth it😉😘"
    );
  }
}

function ly2() {
  const model2 = document.getElementById("model2");
  const model = document.getElementById("model");
  if (model2) model2.style.display = "none";
  if (model) model.style.display = "none";
}

// ---------- NO BUTTON MOVEMENT (Option A) ----------
// Key change vs your current version:
// - Moves on mousemove too (so it ALWAYS escapes)
// - Avoids Yes area with multiple retries
function moveNoButton(btn) {
  if (!btn) return;

  const padding = 20;
  const buffer = 140; // keep away from YES more aggressively

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const btnRect = btn.getBoundingClientRect();
  const maxX = Math.max(0, viewportWidth - btnRect.width - padding);
  const maxY = Math.max(0, viewportHeight - btnRect.height - padding);

  const yesBtn = document.getElementById("yesBtn");
  const yesRect = yesBtn ? yesBtn.getBoundingClientRect() : null;

  let x = 0;
  let y = 0;

  for (let i = 0; i < 25; i++) {
    x = Math.floor(Math.random() * (maxX + 1));
    y = Math.floor(Math.random() * (maxY + 1));

    if (!yesRect) break;

    const tooClose =
      x > yesRect.left - buffer &&
      x < yesRect.right + buffer &&
      y > yesRect.top - buffer &&
      y < yesRect.bottom + buffer;

    if (!tooClose) break;
  }

  btn.style.position = "fixed";
  btn.style.left = x + "px";
  btn.style.top = y + "px";
  btn.style.zIndex = 9999;
}

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", function () {
  // Random heart positions
  const images = document.querySelectorAll(".image1");
  images.forEach((img) => {
    img.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    img.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  });

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const yesModalBtn = document.getElementById("yesModalBtn");
  const noModalBtn = document.getElementById("noModalBtn");
  const loveYouTooBtn = document.getElementById("loveYouTooBtn");

  // YES (main)
  if (yesBtn) {
    yesBtn.addEventListener("mouseenter", happy);
    yesBtn.addEventListener("mouseleave", normal);
    yesBtn.addEventListener("click", yes);
  }

  // NO (main) - make it escape reliably
  if (noBtn) {
    noBtn.addEventListener("mouseenter", (e) => {
      moveNoButton(e.currentTarget);
      angry();
    });

    // THIS is what makes it feel consistent: it runs when you try to chase it
    noBtn.addEventListener("mousemove", (e) => {
      moveNoButton(e.currentTarget);
    });

    noBtn.addEventListener("mouseleave", normal);

    noBtn.addEventListener("click", (e) => {
      moveNoButton(e.currentTarget);
      no();
    });
  }

  // YES (modal)
  if (yesModalBtn) {
    yesModalBtn.addEventListener("mouseenter", happy);
    yesModalBtn.addEventListener("mouseleave", normal);
    yesModalBtn.addEventListener("click", yes);
  }

  // NO (modal)
  if (noModalBtn) {
    noModalBtn.addEventListener("mouseenter", (e) => {
      moveNoButton(e.currentTarget);
      angry();
    });

    noModalBtn.addEventListener("mousemove", (e) => {
      moveNoButton(e.currentTarget);
    });

    noModalBtn.addEventListener("mouseleave", normal);

    noModalBtn.addEventListener("click", (e) => {
      moveNoButton(e.currentTarget);
      no();
    });
  }

  // Love you too
  if (loveYouTooBtn) {
    loveYouTooBtn.addEventListener("mouseenter", happy);
    loveYouTooBtn.addEventListener("mouseleave", normal);
    loveYouTooBtn.addEventListener("click", ly2);
  }
});

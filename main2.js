console.log("main2.js loaded ✅");

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
  "Don't do me like dis",
  "Ima Cry",
  "Really? Its a sad life",
  "HUHUHUHU",
  "Please Say Yes",
  "I'm gonna cry",
];

// ---------- STATE ----------
let counter = 0;

// ---------- VISUALS ----------
function angry() {
  const images = document.querySelectorAll(".image1");
  const absImg = document.getElementById("absImg");
  const mainImg = document.getElementById("mainImg");

  if (mainImg) {
    mainImg.src =
      "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  }
  if (absImg) absImg.style.display = "flex";

  images.forEach((img) => {
    img.src =
      "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  });
}

function happy() {
  const images = document.querySelectorAll(".image1");
  const absImg = document.getElementById("absImg");
  const mainImg = document.getElementById("mainImg");

  if (mainImg) {
    mainImg.src =
      "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
  }
  if (absImg) absImg.style.display = "flex";

  images.forEach((img) => {
    img.src =
      "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
  });
}

function normal() {
  const absImg = document.getElementById("absImg");
  const mainImg = document.getElementById("mainImg");

  if (absImg) absImg.style.display = "none";
  if (mainImg) {
    mainImg.src =
      "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
  }
}

// ---------- ACTIONS ----------
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

    if (modelImage) modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
    if (modelText) modelText.innerText = blackmail[Math.floor(Math.random() * blackmail.length)];
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
    alert("Try pressing No a few times first 😘");
  }
}

function ly2() {
  const model2 = document.getElementById("model2");
  const model = document.getElementById("model");
  if (model2) model2.style.display = "none";
  if (model) model.style.display = "none";
}

// ---------- ORBIT NO BUTTON (SIMPLE + ALWAYS MOVES) ----------
let orbitAngle = 0;
let orbitTimer = null;

function startOrbit() {
  const noBtn = document.getElementById("noBtn");
  if (!noBtn) return;

  // keep it above background and clickable
  noBtn.style.position = "fixed";
  noBtn.style.zIndex = 9999;

  // orbit settings
  const radius = 140;          // size of the circle
  const speed = 0.04;          // speed of orbit (bigger = faster)
  const fps = 16;              // ~60fps would be 16ms

  // clear if already running
  if (orbitTimer) clearInterval(orbitTimer);

  orbitTimer = setInterval(() => {
    orbitAngle += speed;

    // Orbit around YES button if it exists, otherwise around screen center
    const yesBtn = document.getElementById("yesBtn");
    let centerX, centerY;

    if (yesBtn) {
      const yesRect = yesBtn.getBoundingClientRect();
      centerX = yesRect.left + yesRect.width / 2;
      centerY = yesRect.top + yesRect.height / 2;
    } else {
      centerX = window.innerWidth / 2;
      centerY = window.innerHeight / 2;
    }

    const x = centerX + radius * Math.cos(orbitAngle);
    const y = centerY + radius * Math.sin(orbitAngle);

    // keep it inside viewport-ish
    noBtn.style.left = Math.max(10, Math.min(window.innerWidth - 10, x)) + "px";
    noBtn.style.top = Math.max(10, Math.min(window.innerHeight - 10, y)) + "px";
  }, fps);
}

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", function () {
  // random heart positions
  const images = document.querySelectorAll(".image1");
  images.forEach((img) => {
    img.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    img.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  });

  // wire buttons
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const yesModalBtn = document.getElementById("yesModalBtn");
  const noModalBtn = document.getElementById("noModalBtn");
  const loveYouTooBtn = document.getElementById("loveYouTooBtn");

  if (yesBtn) {
    yesBtn.addEventListener("mouseenter", happy);
    yesBtn.addEventListener("mouseleave", normal);
    yesBtn.addEventListener("click", yes);
  }

  if (noBtn) {
    // no hover required now, it moves anyway
    noBtn.addEventListener("mouseenter", angry);
    noBtn.addEventListener("mouseleave", normal);
    noBtn.addEventListener("click", no);
  }

  if (yesModalBtn) {
    yesModalBtn.addEventListener("mouseenter", happy);
    yesModalBtn.addEventListener("mouseleave", normal);
    yesModalBtn.addEventListener("click", yes);
  }

  if (noModalBtn) {
    noModalBtn.addEventListener("mouseenter", angry);
    noModalBtn.addEventListener("mouseleave", normal);
    noModalBtn.addEventListener("click", no);
  }

  if (loveYouTooBtn) {
    loveYouTooBtn.addEventListener("mouseenter", happy);
    loveYouTooBtn.addEventListener("mouseleave", normal);
    loveYouTooBtn.addEventListener("click", ly2);
  }

  // start orbiting immediately
  startOrbit();

  // keep orbit correct on resize
  window.addEventListener("resize", startOrbit);
});

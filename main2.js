document.addEventListener("DOMContentLoaded", function () {
  // Random heart positions (your existing thing)
  var images = document.querySelectorAll(".image1");
  function setRandomPosition(element) {
    element.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    element.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  }
  images.forEach(function (image) {
    setRandomPosition(image);
  });

  // Wire up buttons (NO inline onclick attributes needed)
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
    noBtn.addEventListener("mouseenter", function (e) {
      moveNoButton(e.currentTarget);
      angry();
    });
    noBtn.addEventListener("mouseleave", normal);
    noBtn.addEventListener("click", function (e) {
      moveNoButton(e.currentTarget);
      no();
    });
  }

  if (yesModalBtn) {
    yesModalBtn.addEventListener("mouseenter", happy);
    yesModalBtn.addEventListener("mouseleave", normal);
    yesModalBtn.addEventListener("click", yes);
  }

  if (noModalBtn) {
    noModalBtn.addEventListener("mouseenter", function (e) {
      moveNoButton(e.currentTarget);
      angry();
    });
    noModalBtn.addEventListener("mouseleave", normal);
    noModalBtn.addEventListener("click", function (e) {
      moveNoButton(e.currentTarget);
      no();
    });
  }

  if (loveYouTooBtn) {
    loveYouTooBtn.addEventListener("mouseenter", happy);
    loveYouTooBtn.addEventListener("mouseleave", normal);
    loveYouTooBtn.addEventListener("click", ly2);
  }
});

function angry() {
  var images = document.querySelectorAll(".image1");
  var absImg = document.getElementById("absImg");
  var mainImg = document.getElementById("mainImg");
  if (mainImg) {
    mainImg.src =
      "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  }
  if (absImg) absImg.style.display = "flex";
  images.forEach(function (image) {
    image.src =
      "https://github.com/NikhilMarko03/resources/blob/main/sad1.gif?raw=true";
  });
}

function happy() {
  var images = document.querySelectorAll(".image1");
  var absImg = document.getElementById("absImg");
  var mainImg = document.getElementById("mainImg");
  if (absImg) absImg.style.display = "flex";
  if (mainImg) {
    mainImg.src =
      "https://github.com/NikhilMarko03/resources/blob/main/happy3.gif?raw=true";
  }
  images.forEach(function (image) {
    image.src =
      "https://github.com/NikhilMarko03/resources/blob/main/heart.gif?raw=true";
  });
}

function normal() {
  var absImg = document.getElementById("absImg");
  var mainImg = document.getElementById("mainImg");
  if (absImg) absImg.style.display = "none";
  if (mainImg) {
    mainImg.src =
      "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
  }
}

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

let counter = 0;

function no() {
  counter++;
  let sadMusic = document.getElementById("sadMusic");
  let happyMusic = document.getElementById("happyMusic");
  if (happyMusic) happyMusic.pause();
  if (sadMusic) sadMusic.play();

  let model = document.getElementById("model");
  if (!model) return;

  model.style.display = "none";
  setTimeout(() => {
    model.style.display = "flex";
    const modelImage = document.getElementById("modelImg");
    const modelText = document.getElementById("modelText");
    if (modelImage) {
      modelImage.src = sadCat[Math.floor(Math.random() * sadCat.length)];
    }
    if (modelText) {
      modelText.innerText = blackmail[Math.floor(Math.random() * blackmail.length)];
    }
  }, 100);
}

function yes() {
  if (counter >= 3) {
    let model = document.getElementById("model2");
    let model2 = document.getElementById("model");
    let sadMusic = document.getElementById("sadMusic");
    if (sadMusic) sadMusic.pause();
    if (model2) model2.style.display = "none";

    let happyMusic = document.getElementById("happyMusic");
    if (happyMusic) happyMusic.play();

    if (model) {
      model.style.display = "none";
      setTimeout(() => {
        model.style.display = "flex";
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
  let model = document.getElementById("model2");
  let model2 = document.getElementById("model");
  if (model) model.style.display = "none";
  if (model2) model2.style.display = "none";
}

// Moves whichever No button triggered the event
function moveNoButton(btn) {
  if (!btn) return;

  // try to keep it inside a useful container
  const container = document.getElementById("btns") || btn.parentElement;

  // ensure absolute positioning works
  if (getComputedStyle(container).position === "static") {
    container.style.position = "relative";
  }

  const containerRect = container.getBoundingClientRect();
  const btnRect = btn.getBoundingClientRect();

  const padding = 10;
  const maxX = Math.max(padding, containerRect.width - btnRect.width - padding);
  const maxY = Math.max(padding, containerRect.height - btnRect.height - padding);

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  btn.style.position = "absolute";
  btn.style.left = randomX + "px";
  btn.style.top = randomY + "px";
}

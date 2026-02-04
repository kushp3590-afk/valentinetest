function moveNoButton(btn) {
  if (!btn) return;

  const padding = 20;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const btnRect = btn.getBoundingClientRect();

  const maxX = Math.max(0, viewportWidth - btnRect.width - padding);
  const maxY = Math.max(0, viewportHeight - btnRect.height - padding);

  const yesBtn = document.getElementById("yesBtn");
  const yesRect = yesBtn ? yesBtn.getBoundingClientRect() : null;

  const buffer = 100; // how far away from YES it must stay
  let randomX = 0;
  let randomY = 0;

  // Try up to 15 times to find a spot not near YES
  for (let i = 0; i < 15; i++) {
    randomX = Math.floor(Math.random() * (maxX + 1));
    randomY = Math.floor(Math.random() * (maxY + 1));

    if (!yesRect) break;

    const tooClose =
      randomX > yesRect.left - buffer &&
      randomX < yesRect.right + buffer &&
      randomY > yesRect.top - buffer &&
      randomY < yesRect.bottom + buffer;

    if (!tooClose) break;
  }

  btn.style.position = "fixed";
  btn.style.left = randomX + "px";
  btn.style.top = randomY + "px";
  btn.style.zIndex = 999; //

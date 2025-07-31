function createFallingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  const size = Math.random() * 20 + 40;
  heart.style.fontSize = size + "px";

  heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // 3s a 5s

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function startHeartRain() {
  const interval = setInterval(() => {
    createFallingHeart();
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
  }, 4000);
}

document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".heart-container");
  if (logo) {
    logo.addEventListener("click", startHeartRain);
  }
});

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');
const list = document.querySelector('.list');

let active = 0;
const total = items.length;
let timer;

function update(direction) {
  document.querySelector('.item.active').classList.remove('active');
  document.querySelector('.dot.active').classList.remove('active');

  if (direction > 0) {
    active = active + 1;

    if (active === total) {
      active = 0;
    }

  } else if (direction < 0) {
    active = active - 1;

    if (active < 0) {
      active = total - 1;
    }

  }

  items[active].classList.add('active');
  dots[active].classList.add('active')

  numberIndicator.textContent = String(active + 1).padStart(2, '0');
}

prevButton.addEventListener('click', () => {
  update(-1);
  console.log("Prev")
})

nextButton.addEventListener('click', () => {
  update(+1);
  console.log("Next")
})

const audio = document.getElementById('musica');
const muteBtn = document.getElementById('mute-btn');
const volumeSlider = document.getElementById('volume-slider');

window.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  }
}, { once: true });

muteBtn.addEventListener('click', () => {
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? '🔇' : '🔊';
});

volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
  if (audio.volume === 0) {
    audio.muted = true;
    muteBtn.textContent = '🔇';
  } else {
    audio.muted = false;
    muteBtn.textContent = '🔊';
  }
});

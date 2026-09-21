const flowerButton = document.getElementById("flowerButton");
const flowerContainer = document.getElementById("flowerContainer");

let flowerInterval = null;
let circleInterval = null;
let petalInterval = null;
let animationStarted = false;

flowerButton.addEventListener("click", () => {
  if (!animationStarted) {
    animationStarted = true;
    flowerButton.textContent = "El jardín está floreciendo";

    createFlowerBurst();
    startFlowerRain();
    startGlowingCircles();
    startFallingPetals();
  } else {
    createFlowerBurst();
  }
});

/* Crear una flor */
function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");

  const size = randomNumber(45, 90);
  flower.style.width = `${size}px`;
  flower.style.height = `${size}px`;

  flower.style.left = `${randomNumber(0, 100)}vw`;
  flower.style.animationDuration = `${randomNumber(6, 13)}s`;

  const petals = 8;

  for (let i = 0; i < petals; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.transform = `rotate(${i * 45}deg)`;
    flower.appendChild(petal);
  }

  const center = document.createElement("div");
  center.classList.add("flower-center");
  flower.appendChild(center);

  flowerContainer.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 14000);
}

/* Explosión inicial de flores */
function createFlowerBurst() {
  for (let i = 0; i < 35; i++) {
    setTimeout(() => {
      createFlower();
    }, i * 80);
  }

  for (let i = 0; i < 45; i++) {
    setTimeout(() => {
      createCircle();
      createSmallPetal();
    }, i * 45);
  }
}

/* Lluvia constante de flores */
function startFlowerRain() {
  flowerInterval = setInterval(() => {
    createFlower();
  }, 450);
}

/* Crear círculos brillantes */
function createCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  const size = randomNumber(18, 85);
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  circle.style.left = `${randomNumber(0, 100)}vw`;
  circle.style.animationDuration = `${randomNumber(5, 12)}s`;

  flowerContainer.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 13000);
}

/* Iniciar círculos mágicos */
function startGlowingCircles() {
  circleInterval = setInterval(() => {
    createCircle();
  }, 350);
}

/* Crear pétalos pequeños */
function createSmallPetal() {
  const petal = document.createElement("div");
  petal.classList.add("small-petal");

  petal.style.left = `${randomNumber(0, 100)}vw`;
  petal.style.animationDuration = `${randomNumber(5, 10)}s`;
  petal.style.transform = `rotate(${randomNumber(0, 360)}deg)`;

  const size = randomNumber(10, 24);
  petal.style.width = `${size}px`;
  petal.style.height = `${size + 10}px`;

  flowerContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 11000);
}

/* Iniciar caída de pétalos */
function startFallingPetals() {
  petalInterval = setInterval(() => {
    createSmallPetal();
  }, 280);
}

/* Número aleatorio */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Algunas decoraciones aparecen desde el inicio */
window.addEventListener("load", () => {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      createCircle();
    }, i * 250);
  }
});
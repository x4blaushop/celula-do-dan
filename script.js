/* DNA C3X4.0 - SISTEMA VIVO
   ARQUITETURA DE HABITAÇÃO - JOSÉ PATRICK
*/

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// A casa se adapta ao habitante
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();

const letters = "01";
const fontSize = 14;
let columns;
let drops = [];

// Inicialização do DNA visual
function initMatrix() {
  columns = Math.floor(canvas.width / fontSize);
  drops = [];
  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }
}
initMatrix();

// Fluxo Matrix
function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#62ff8a";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const char = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 50);

// Reação ao ambiente
window.addEventListener("resize", () => {
  resize();
  initMatrix();
});

// Pulso interno da célula
let systemAwake = true;
document.addEventListener("keydown", (e) => {
  if (e.key === "i" && systemAwake) {
    console.log("Célula ativa | DNA C3X4.0 respondendo.");
  }
});

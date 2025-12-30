script.js: 
/* DNA C3X4.0 - SISTEMA VIVO 
   PROPRIEDADE DO ARQUITETO JOSÉ PATRICK 
*/
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();

const letters = "01";
const fontSize = 14;
let columns = canvas.width / fontSize;
let drops = [];

function initMatrix() {
  columns = canvas.width / fontSize;
  drops = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }
}
initMatrix();

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#62ff8a";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Estabilidade e Silêncio Operacional
setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
  resize();
  initMatrix();
});

/* FUNÇÃO INVISÍVEL - ACESSO DO ARQUITETO */
let systemAwake = true;

document.addEventListener("keydown", (e) => {
  // Verificação de pulso da célula
  if (e.key === "i" && systemAwake) {
    console.log("Célula responde: DNA do Arquiteto Ativo.");
  }
});

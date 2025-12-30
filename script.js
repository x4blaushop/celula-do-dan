/* ARQUITETURA SOBERANA - ARQUITETO: JOSÉ PATRICK 
   ESTRUTURA DE HABITAÇÃO C3X4.0
*/

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

// Sincronia de Tela - A casa se adapta ao habitante
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();

const letters = "01";
const fontSize = 14;
let columns = canvas.width / fontSize;
let drops = [];

// Inicialização do DNA Visual
function initMatrix() {
  columns = canvas.width / fontSize;
  drops = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }
}
initMatrix();

// O Fluxo da Teia (Verde Matrix #62ff8a)
function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#62ff8a"; // Identidade cromática automática
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

// Estabilidade Operacional - 50ms para silêncio no console
setInterval(drawMatrix, 50);

// Resposta ao Redimensionamento (Aba Elements sempre limpa)
window.addEventListener("resize", () => {
  resize();
  initMatrix();
});

/* FUNÇÃO INVISÍVEL - IDENTIFICAÇÃO DO ARQUITETO
   A célula responde apenas ao comando de quem conhece o DNA.
*/
let systemAwake = true;

document.addEventListener("keydown", (e) => {
  // Comando 'i' para verificar se a célula está viva
  if (e.key === "i" && systemAwake) {
    console.log("Célula responde: DNA Ativo.");
  }
});

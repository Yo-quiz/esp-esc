const yoKaiList = [
{ name: "Noko", img: "noko.png" },
{ name: "Bloominoko", img: "florinoko.png" },
{ name: "Pandanoko", img: "pandanoko.png" },
{ name: "Heheheel", img: "anjijila.png" },
{ name: "Croonger", img: "tenongrio.png" },
{ name: "Urnaconda", img: "urnaconda.png" },
{ name: "Fishpicable", img: "pezqueroso.png" },
{ name: "Rageon", img: "pezgativo.png" },
{ name: "Tunatic", img: "pezquiciado.png" },
{ name: "Draggie", img: "draqui.png" },
{ name: "Dragon Lord", img: "lord_dragon.png" },
{ name: "Azure Dragon", img: "dragon_azur.png" },
{ name: "Daiz", img: "ido.png" },
{ name: "Confuze", img: "turdido.png" },
{ name: "Chummer", img: "pelluron.png" },
{ name: "Shrook", img: "pringuron.png" },
{ name: "Spenp", img: "boquirroto.png" },
{ name: "Almi", img: "yopago.png" },
{ name: "Babblong", img: "charlaton.png" },
{ name: "Bananose", img: "tochaplatano.png" },
{ name: "Copperled", img: "mandicoro.png" },
{ name: "Cynake", img: "ciniserpe.png" },
{ name: "Slitheref", img: "arfidio.png" },
{ name: "Venoct", img: "venocto.png" },
{ name: "Shadow Venoct", aliases: ["Shadow Venoct", "Shad. Venoct", "Shad Venoct"], img: "venoctoscuro.png" },
    { name: "Cricky", img: "Torticolis.png" },
    { name: "Snaggly", img: "Malmet.png" },
    { name: "Whinona", img: "Agorerana.png" },
    { name: "Flushback", img: "Desolvidador.png" },
    { name: "Vacuumory", img: "Memorio.png" },
    { name: "Irewig", img: "Mosquereta.png" },
    { name: "Firewig", img: "Bronquereta.png" },
    { name: "Mermaidyn", img: "Nereida.png" },
    { name: "Mermadonna", img: "Sirenia.png" },
    { name: "Mermother", img: "Oceanida.png" },
    { name: "Lady Longnek", img: "Cisnia.png" },
    { name: "Draaagin", img: "Vacilagon.png" },
    { name: "SV Snaggerjag", img: "Bergantin_A.png" },
    { name: "Slurpent", img: "Octosierpe.png" },
    { name: "Robonoko", img: "Robonoko.png" },
    { name: "Robodraggie", img: "Robodraqui.png" },
    { name: "Takoyakid", img: "Minipulpobola.png" },
    { name: "Takoyaking", img: "Pulpobola_Rey.png" },
  { "name": "Whisper", "img": "Whisper.png" },
  { "name": "Whispocrates", aliases: ["Whispocrates", "Private Whispocrates"], "img": "Whispocrates.png" },
  { "name": "Starry Noko", "img": "Estrenoko.png" },
  { "name": "Humtea Jumtea", "img": "Saltetera.png" },
  { "name": "Snailspace", "img": "Don_Despacito.png" },
  { "name": "Putasockinit", "img": "Sierpesado.png" },
  { "name": "Snidewinder", "img": "Cobravil.png" },
  { "name": "OMGator", "img": "Aymadrilo.png" },
  { "name": "Nautaloss", "img": "Naqueperder.png" },
  { "name": "Shellebrity", "img": "Borjamar.png" },
  { "name": "T-Wrecks", "img": "Bebesaurio.png" },
  { "name": "D-Stroy", "img": "Destrozasaurio.png" },
  { "name": "Clodzilla", "img": "Torpesaurio.png" },
  { "name": "Snippity Cricket", "img": "Luigi_Longueras.png" },
  { "name": "Flocktopus", "img": "Pulpopular.png" },
  { "name": "Bitter Batter", "img": "Tentanfadado.png" },
  { "name": "Cocobanana", "img": "Tochacolate.png" },
  { "name": "Ooze Zat", "img": "Sustoleo.png" },
  { "name": "Mython", "img": "Reptozudo.png" },
  { "name": "Frogetmenot", "img": "Saporientador.png" },
  { "name": "Originyan", "img": "originyan.png" },
  { "name": "Josper", "img": "Whismodin.png" },
  { "name": "Ebisu", "img": "Ebisu.png" },
  { "name": "Whisper Kongming", "img": "Whisper_Kongming.png" },
  { "name": "City Licker", "img": "Urbasierpe.png" },
  { "name": "Whyvern King", "img": "Pregundragon_Rey.png" },
  { "name": "The Boracle", "img": "Rollaculo.png" },
  { "name": "Big Fish", "img": "Pecificador.png" },
  { "name": "Indiana Jaws", "img": "tibu_Jones.gif" },
  { "name": "Fitwit", "img": "mazado_de_la_Calzada.gif" },
    { name: "Omoutsubo", img: "Omoutsubo.png" },
    { name: "Naga Raja", img: "Naga_Raja.png" },
    { name: "Doyagari Tribe", aliases: ["Doyagari Tribe", "Doyagari-zoku"], img: "Tribu_Doyagari.png" },
    { name: "Doya Osa", img: "Doya_Osa.png" },
    { name: "Vascoda Gama", img: "Vascoda_Gama.png" },
    { name: "Indiana Jaws G", aliases: ["Indiana Jaws G", "Indy Jaws G"], img: "Tibu_Jones_G.png" },
    { name: "Cindy Jaws", img: "Cindy_Jaws.png" },
    { name: "Spatto", img: "Spatto.png" },
];

let score = 0; 
let gameEnded = false; // Evita cambios una vez terminado el juego
const unlockedYoKai = new Set(); // Registro de Yo-kai desbloqueados por índice

// Normalizar la entrada del usuario (sin tildes y en minúsculas)
function normalizeString(str) {
    return str.normalize("NFD").replace(/[̀-\u036f]/g, "").toLowerCase();
}

// Crear el objeto de audio una sola vez
let getSound = new Audio("get.mp3");

// Reproducir sonido cuando se desbloquea un Yo-kai (sin solapamiento)
function playGetSound() {
    if (!getSound.paused) {
        getSound.pause(); // Detener el sonido actual si ya está reproduciéndose
        getSound.currentTime = 0; // Reiniciar el sonido al principio
    }
    getSound.play(); // Reproducir el sonido
}

// Actualizar la puntuación en formato (adivinados / totales)
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${score}/${yoKaiList.length}`;
}

// Verificar la respuesta del usuario
function checkAnswer() {
    if (gameEnded) return; // Si el juego ha terminado, no hacer nada

    const userAnswer = normalizeString(document.getElementById("answer-input").value.trim());

    let correctGuess = false; // Bandera para reproducir el sonido solo si hay aciertos

    yoKaiList.forEach((yoKai, index) => {
        // Normaliza todos los nombres asociados al Yo-kai
        const normalizedNames = [yoKai.name, ...(yoKai.aliases || [])].map(name => normalizeString(name));

        // Si la respuesta coincide con alguno de los nombres y no ha sido desbloqueado
        if (normalizedNames.includes(userAnswer) && !unlockedYoKai.has(index)) {
            const yoKaiImg = document.getElementById(`yo-kai${index + 1}`);
            if (yoKaiImg && yoKaiImg.src.includes("no-kai.png")) {
                yoKaiImg.src = yoKai.img; // Actualiza la imagen

                // Añadir clase para animación
                yoKaiImg.classList.add("yokai-unlocked");
                yoKaiImg.addEventListener("animationend", () => {
                    yoKaiImg.classList.remove("yokai-unlocked"); // Quitar clase tras animación
                });

                unlockedYoKai.add(index); // Marcar el Yo-kai como desbloqueado
                score++;
                correctGuess = true; // Se encontró un acierto
            }
        }
    });

    if (correctGuess) {
        playGetSound(); // Reproducir sonido solo si hubo un acierto
        updateScoreDisplay(); // Actualizar puntuación
        document.getElementById("answer-input").value = ""; // Borra la respuesta después de un acierto
    }

    checkGameEnd(); // Verifica si el juego ha terminado
}

// Verificar si el juego ha terminado (cuando se han adivinado todos los Yo-kai)
function checkGameEnd() {
    if (score === yoKaiList.length) {
        gameEnded = true;
        stopTimer(); // Detener el temporizador
        showCongratsImage(); // Mostrar imagen de "¡Felicidades!"
    }
}

function showCongratsImage() {

    // Detener temporizador
    stopTimer();

    // Obtener tiempo final mostrado
    const tiempoTotal = document.getElementById("time").textContent;

    // Sonido de victoria
    const victorySound = new Audio("congrats.mp3");
    victorySound.volume = 0.8;
    victorySound.play().catch(() => {});

    // Panel lateral
    const finalPanel = document.createElement("div");
    finalPanel.style.position = "fixed";
    finalPanel.style.top = "0";
    finalPanel.style.right = "-350px";
    finalPanel.style.width = "320px";
    finalPanel.style.height = "100%";
    finalPanel.style.backgroundColor = "#15868c";
    finalPanel.style.color = "white";
    finalPanel.style.padding = "20px";
    finalPanel.style.boxSizing = "border-box";
    finalPanel.style.zIndex = "1000";
    finalPanel.style.fontFamily = "Arial, sans-serif";
    finalPanel.style.display = "flex";
    finalPanel.style.flexDirection = "column";
    finalPanel.style.transition = "right 0.6s ease";

    // Botón cerrar
    const closeBtn = document.createElement("div");
    closeBtn.textContent = "✖";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "15px";
    closeBtn.style.right = "15px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "18px";

    closeBtn.addEventListener("click", () => {
        finalPanel.style.right = "-350px";
        setTimeout(() => finalPanel.remove(), 600);
    });

    // Título
    const title = document.createElement("h2");
    title.textContent = `¡Enhorabuena! Has adivinado todos los Yo-kai en ${tiempoTotal}`;
    title.style.marginTop = "40px";
    title.style.marginBottom = "30px";
    title.style.fontSize = "22px";

    // Texto Twitter
    const followText = document.createElement("p");
    followText.innerHTML = `
        Si te ha gustado, ¿por qué no seguirme en twitter?: 
        <a href="https://x.com/salty_baconV2" target="_blank" style="color:#4fc3ff; text-decoration:none;">
        @Salty_BaconV2
        </a>
    `;
    followText.style.fontSize = "16px";
    followText.style.marginTop = "auto";

    // Montaje
    finalPanel.appendChild(closeBtn);
    finalPanel.appendChild(title);
    finalPanel.appendChild(followText);
    document.body.appendChild(finalPanel);

    // Animación de entrada
    setTimeout(() => {
        finalPanel.style.right = "0";
    }, 50);
}

// Temporizador
let startTime;
let timerInterval;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    document.getElementById("time").textContent = formattedTime;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Manejador de evento: validación automática con "input"
document.getElementById("answer-input").addEventListener("input", checkAnswer);

// Inicializar el marcador y temporizador al cargar la página
updateScoreDisplay(); // Inicializa la puntuación en 0/total
startTimer();

window.addEventListener("beforeunload", (event) => {
    if (score > 0) { // Mostrar advertencia solo si hay progreso
        event.preventDefault();
        event.returnValue = "¿Estás seguro de que quieres salir? Se perderá todo el progreso.";
    }
});

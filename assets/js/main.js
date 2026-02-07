/**
 * Memory: Mujeres en la Ciencia
 * Juego de memoria interactivo para celebrar el Día Internacional
 * de la Mujer y la Niña en la Ciencia (11 de febrero)
 *
 * @author Manu Quiroga
 * @version 1.0.0
 */

// ==========================================================================
// Datos de las científicas
// ==========================================================================

const scientists = [
    {
        id: 1,
        name: "Ada Lovelace",
        dates: "1815 - 1852",
        field: "Matemáticas e Informática",
        bio: "Matemática británica, considerada la primera programadora de la historia. Hija del poeta Lord Byron, trabajó con Charles Babbage en la Máquina Analítica y vio su potencial más allá del cálculo numérico.",
        achievement: "Escribió el primer algoritmo diseñado para ser procesado por una máquina, anticipando la era de los ordenadores más de un siglo antes de que existieran.",
        image: "images/Ada_Lovelace.png"
    },
    {
        id: 2,
        name: "Rosalind Franklin",
        dates: "1920 - 1958",
        field: "Química y Cristalografía",
        bio: "Química británica cuyo trabajo fue fundamental para comprender la estructura del ADN. Experta en cristalografía de rayos X, su trabajo fue esencial pero no reconocido en vida.",
        achievement: "Su famosa 'Fotografía 51' fue clave para descubrir la estructura de doble hélice del ADN, uno de los descubrimientos más importantes del siglo XX.",
        image: "images/Rosalind.png"
    },
    {
        id: 3,
        name: "Hedy Lamarr",
        dates: "1914 - 2000",
        field: "Ingeniería e Invención",
        bio: "Actriz e inventora austríaca-estadounidense. Además de su carrera en Hollywood, fue una brillante inventora autodidacta que desarrolló tecnología militar durante la Segunda Guerra Mundial.",
        achievement: "Co-inventó el 'salto de frecuencia', tecnología base del WiFi, Bluetooth y GPS que usamos hoy en día. Fue reconocida con el Premio Pioneer de la Electronic Frontier Foundation.",
        image: "images/HedyLamar.png"
    },
    {
        id: 4,
        name: "Jane Goodall",
        dates: "1934 - 2025",
        field: "Primatología y Conservación",
        bio: "Primatóloga británica, la mayor experta mundial en chimpancés. Ha dedicado más de 60 años al estudio y conservación de estos animales en Tanzania, revolucionando nuestra comprensión de los primates.",
        achievement: "Descubrió que los chimpancés fabrican y usan herramientas, cambiando para siempre nuestra comprensión de lo que nos diferencia como humanos.",
        image: "images/JaneGodall.png"
    },
    {
        id: 5,
        name: "Katherine Johnson",
        dates: "1918 - 2020",
        field: "Matemáticas y Aeronáutica",
        bio: "Matemática afroamericana que trabajó en la NASA superando barreras raciales y de género. Sus cálculos fueron esenciales para las primeras misiones espaciales de Estados Unidos.",
        achievement: "Calculó las trayectorias de misiones espaciales clave y ayudó a que misiones históricas como el programa Mercury y el Apollo 11 llegaran a buen puerto.",
        image: "images/KatherineJohnson.png"
    },
    {
        id: 6,
        name: "Margarita Salas",
        dates: "1938 - 2019",
        field: "Bioquímica y Biología Molecular",
        bio: "Científica española, pionera de la biología molecular en España. Discípula de Severo Ochoa, dedicó su vida a la investigación del ADN y formó a generaciones de científicos españoles.",
        achievement: "Descubrió la ADN polimerasa del virus phi29, usada mundialmente para amplificar ADN en diagnósticos médicos, tests de paternidad y análisis forenses.",
        image: "images/Margarita_Salas.png"
    },
    {
        id: 7,
        name: "Elena García Armada",
        dates: "1971 - presente",
        field: "Ingeniería Robótica",
        bio: "Ingeniera española del CSIC, pionera mundial en robótica de rehabilitación. Creó el primer exoesqueleto pediátrico del mundo para niños con enfermedades neuromusculares.",
        achievement: "Inventó el primer exoesqueleto biónico pediátrico que ayuda a niños con problemas musculares a caminar y rehabilitarse.",
        image: "images/ElenaGarcia.png"
    },
    {
        id: 8,
        name: "Felisa Reyes",
        dates: "1984 - presente",
        field: "Quimica Orgánica",
        bio: "Felisa Reyes Ortega es una científica española gitana, investigadora y profesora. Estudió Química con premio extraordinario, realizó investigación en el CSIC y se doctoró en 2013, rompiendo barreras para las mujeres gitanas en el mundo académico y científico.",
        achievement: "En 2013 se convirtió en la primera mujer gitana en doctorarse en Ciencias Naturales y Experimentales en España.",
        image: "images/FelisaReyes.png"
    },
    {
        id: 9,
        name: "Felisa Martín Bravo",
        dates: "1898 - 1979",
        field: "Física y Meteorología",
        bio: "Física española y pionera en meteorología. Fue una de las primeras mujeres en doctorarse en Física en España y desarrolló parte de su carrera científica en el ámbito del estudio de la radiación solar y la atmósfera, abriendo camino a las mujeres en la ciencia.",
        achievement: "Fue una de las primeras mujeres científicas en trabajar en el Servicio Meteorológico Nacional, donde realizó investigaciones sobre radiación solar aplicada a la meteorología.",
        image: "images/FelisaMartinBravo.png"
    },
    {
        id: 10,
        name: "Sara García Alonso",
        dates: "1989 - presente",
        field: "Biotecnología y Medicina",
        bio: "Científica española especializada en biotecnología e investigación oncológica. Trabaja en el Centro Nacional de Investigaciones Oncológicas (CNIO) y en 2022 fue seleccionada como astronauta de reserva de la Agencia Espacial Europea (ESA).",
        achievement: "Fue la primera mujer española seleccionada como astronauta de la ESA (astronauta de reserva), convirtiéndose en un referente para la ciencia y el espacio en España.",
        image: "images/SaraGarciaAlonso.png"
    }
];

// ==========================================================================
// Estado del juego
// ==========================================================================

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let isLocked = false;
let isLastMatch = false;

// ==========================================================================
// Referencias al DOM
// ==========================================================================

const gameBoard = document.getElementById('gameBoard');
const movesDisplay = document.getElementById('moves');
const matchesDisplay = document.getElementById('matches');
const resetBtn = document.getElementById('resetBtn');
const infoBtn = document.getElementById('infoBtn');
const scientistModal = document.getElementById('scientistModal');
const victoryModal = document.getElementById('victoryModal');
const infoModal = document.getElementById('infoModal');
const closeScientist = document.getElementById('closeScientist');
const closeInfo = document.getElementById('closeInfo');
const playAgainBtn = document.getElementById('playAgainBtn');
const exploreBtn = document.getElementById('exploreBtn');

// ==========================================================================
// Funciones del juego
// ==========================================================================

/**
 * Inicializa el juego, reiniciando el estado y creando las cartas
 */
function initGame() {
    cards = [];
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    isLocked = false;

    movesDisplay.textContent = '0';
    matchesDisplay.textContent = '0';

    // Crear pares de cartas
    const cardPairs = [...scientists, ...scientists];

    // Barajar usando Fisher-Yates
    for (let i = cardPairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardPairs[i], cardPairs[j]] = [cardPairs[j], cardPairs[i]];
    }

    // Limpiar el tablero
    gameBoard.innerHTML = '';

    // Crear las cartas en el DOM
    cardPairs.forEach((scientist, index) => {
        const card = createCard(scientist, index);
        gameBoard.appendChild(card);
        cards.push({ element: card, scientist, matched: false });
    });
}

/**
 * Crea el elemento HTML de una carta
 * @param {Object} scientist - Datos de la científica
 * @param {number} index - Índice de la carta
 * @returns {HTMLElement} Elemento de la carta
 */
function createCard(scientist, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.index = index;

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-face card-back"></div>
            <div class="card-face card-front">
                <div class="card-image" style="background-image: url('${scientist.image}')"></div>
                <div class="card-name">${scientist.name}</div>
            </div>
        </div>
    `;

    return card;
}

/**
 * Voltea una carta
 * @param {number} index - Índice de la carta a voltear
 */
function flipCard(index) {
    if (isLocked) return;

    const cardData = cards[index];

    // No voltear si ya está emparejada o volteada
    if (cardData.matched || cardData.element.classList.contains('flipped')) return;

    cardData.element.classList.add('flipped');
    flippedCards.push(index);

    // Si hay dos cartas volteadas, verificar si coinciden
    if (flippedCards.length === 2) {
        moves++;
        movesDisplay.textContent = moves;
        checkMatch();
    }
}

/**
 * Verifica si las dos cartas volteadas coinciden
 */
function checkMatch() {
    isLocked = true;

    const [index1, index2] = flippedCards;
    const card1 = cards[index1];
    const card2 = cards[index2];

    if (card1.scientist.id === card2.scientist.id) {
        // ¡Coincidencia!
        card1.matched = true;
        card2.matched = true;
        card1.element.classList.add('matched');
        card2.element.classList.add('matched');
        matchedPairs++;
        matchesDisplay.textContent = matchedPairs;

        setTimeout(() => {
            showScientistInfo(card1.scientist, matchedPairs === scientists.length);
            flippedCards = [];
            isLocked = false;
        }, 600);
    } else {
        // No coinciden, voltear de nuevo
        setTimeout(() => {
            card1.element.classList.remove('flipped');
            card2.element.classList.remove('flipped');
            flippedCards = [];
            isLocked = false;
        }, 1000);
    }
}

/**
 * Muestra la información de una científica en el modal
 * @param {Object} scientist - Datos de la científica
 * @param {boolean} isLast - Si es la última pareja encontrada
 */
function showScientistInfo(scientist, isLast = false) {
    isLastMatch = isLast;
    document.getElementById('modalImage').style.backgroundImage = `url('${scientist.image}')`;
    document.getElementById('modalName').textContent = scientist.name;
    document.getElementById('modalDates').textContent = scientist.dates;
    document.getElementById('modalField').textContent = scientist.field;
    document.getElementById('modalBio').textContent = scientist.bio;
    document.getElementById('modalAchievement').textContent = scientist.achievement;

    scientistModal.classList.add('active');
}

/**
 * Muestra el modal de victoria
 */
function showVictory() {
    document.getElementById('finalMoves').textContent = moves;
    victoryModal.classList.add('active');
}

/**
 * Cierra un modal
 * @param {HTMLElement} modal - El modal a cerrar
 */
function closeModal(modal) {
    modal.classList.remove('active');

    // Si cerramos el modal de científica y era la última pareja, mostrar victoria
    if (modal === scientistModal && isLastMatch) {
        isLastMatch = false;
        setTimeout(showVictory, 300);
    }
}

// ==========================================================================
// Manejadores de interacción
// ==========================================================================

/**
 * Maneja la interacción táctil/click en las cartas
 * @param {Event} e - Evento de interacción
 */
function handleInteraction(e) {
    e.preventDefault();
    const card = e.target.closest('.card');
    if (card && card.dataset.index !== undefined) {
        const index = parseInt(card.dataset.index);
        const cardData = cards[index];

        // Si la tarjeta ya está emparejada, mostrar la info de la científica
        if (cardData.matched) {
            showScientistInfo(cardData.scientist, false);
        } else {
            flipCard(index);
        }
    }
}

// ==========================================================================
// Event Listeners
// ==========================================================================

// Botones principales
resetBtn.addEventListener('click', () => {
    closeModal(victoryModal);
    initGame();
});

infoBtn.addEventListener('click', () => {
    infoModal.classList.add('active');
});

// Cerrar modales
closeScientist.addEventListener('click', () => closeModal(scientistModal));
closeInfo.addEventListener('click', () => closeModal(infoModal));
playAgainBtn.addEventListener('click', () => {
    closeModal(victoryModal);
    initGame();
});

exploreBtn.addEventListener('click', () => {
    closeModal(victoryModal);
});

// Cerrar modal al hacer click fuera
[scientistModal, victoryModal, infoModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
    });
});

// Eventos táctiles para mejor soporte en Chrome/Windows
gameBoard.addEventListener('touchstart', handleInteraction, { passive: false });

// Click para ratón
gameBoard.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (card && card.dataset.index !== undefined) {
        const index = parseInt(card.dataset.index);
        const cardData = cards[index];

        // Si la tarjeta ya está emparejada, mostrar la info de la científica
        if (cardData.matched) {
            showScientistInfo(cardData.scientist, false);
        } else {
            flipCard(index);
        }
    }
});

// Prevenir zoom en doble tap
document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });

// ==========================================================================
// Inicialización
// ==========================================================================

initGame();

// Mostrar el modal de "Cómo jugar" al cargar la página
infoModal.classList.add('active');

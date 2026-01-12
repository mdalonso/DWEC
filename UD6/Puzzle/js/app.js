"use strict";

let puzzleSize = 3; // 3x3
let pieces = [];

document.addEventListener('DOMContentLoaded', () => {

    // 1. Inicializar el juego
    crearTablero();
    crearPiezas();

});

const crearTablero=()=> {
    const board = document.getElementById('board-container');
    for (let i = 0; i < puzzleSize * puzzleSize; i++) {
        const slot = document.createElement('div');
        slot.classList.add('slot');
        slot.dataset.index = i; // Guardamos qué pieza debería ir aquí
        
        
        board.append(slot);
    }
}

const crearPiezas=()=> {
    const piecesContainer = document.getElementById('pieces-container');
    for (let i = 0; i < puzzleSize * puzzleSize; i++) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.id = `piece-${i}`;
        piece.dataset.index = i;
        

        // Calculamos posición del fondo
        const row = Math.floor(i / puzzleSize);
        const col = i % puzzleSize;
        piece.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;

        pieces.push(piece);
    }

    // Desordenar y añadir al contenedor
    pieces.sort(() => Math.random() - 0.5);
    pieces.forEach(p => piecesContainer.append(p));

}
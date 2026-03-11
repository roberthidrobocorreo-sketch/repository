// Programa: ¡Corre! - Jesse & Joy
const prompt = require("prompt-sync")();
const dibujar = require('./modulo.js');

function sleep(ms) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

console.clear();

//Definicion
let coro_1 = "Así que corre, corre, corre, corazón...";
let coro_2 = "De los dos tú siempre fuiste el más veloz";
let coro_3 = "Toma todo lo que quieras pero vete ya";

// --- FRASE 1: "Así que corre, corre, corre, corazón..." ---
for (let i = 0; i < coro_1.length; i++) {
    if (i >= 28) { 
        dibujar(i, 2, coro_1[i]);
        sleep(350); 
    } else {
        dibujar(i, 2, coro_1[i]);
        sleep(100);
    }
}
sleep(500);
console.clear();

// --- FRASE 2: "De los dos tú siempre fuiste el más veloz" ---
for (let i = 0; i < coro_2.length; i++) {
    if (i >= 33) { 
        dibujar(i, 2, coro_2[i]);
        sleep(280); // <--- AQUÍ: Bajamos de 400 a 280 para que sea más rápido
    } else {
        dibujar(i, 2, coro_2[i]);
        sleep(90);
    }
}
sleep(500);
console.clear();

// --- FRASE 3: "Toma todo lo que quieras pero vete ya" ---
for (let i = 0; i < coro_3.length; i++) {
    if (i >= 34) { 
        dibujar(i, 2, coro_3[i]);
        sleep(450); 
    } else {
        dibujar(i, 2, coro_3[i]);
        sleep(90);
    }
}


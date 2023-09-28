"use strict";

const dó = `sounds/Dó.wav`;
const ré = `sounds/Ré.wav`;
const mi = `sounds/Mi.wav`;
const fá = `sounds/Fá.wav`;
const sol = `sounds/Sol.wav`;
const lá = `sounds/Lá.wav`;
const si = `sounds/Si.wav`;

const sons = {
  C: dó,
  D: ré,
  E: mi,
  F: fá,
  G: sol,
  A: lá,
  B: si,

}

const criarDiv = (texto) => {
  const div = document.createElement("div");
  div.classList.add("key");
  div.textContent = texto;
  div.id = texto;
  document.getElementById("container").appendChild(div);
};

const exibir = (sons) => Object.keys(sons).forEach(criarDiv);

const tocarSom = (letra) => {
  const audio = new Audio(sons[letra]);
  audio.play();
};

const adicionarEfeito = (letra) =>  document.getElementById(letra).classList.add("active");

const removerEfeito = (letra) => {
  const div = document.getElementById(letra);
  const removeActive = () => div.classList.remove("active");
  div.addEventListener("transitionend", removeActive);
};

const ativarDiv = (evento) => {
  const letra = evento.type == "click" ? evento.target.id : evento.key.toUpperCase();

  const letraPressionada = sons.hasOwnProperty(letra);
  if (letraPressionada) {
    adicionarEfeito(letra);
    tocarSom(letra);
    removerEfeito(letra);
  }
};

exibir(sons);
document.getElementById("container").addEventListener("click", ativarDiv);
document.addEventListener("keydown", ativarDiv);
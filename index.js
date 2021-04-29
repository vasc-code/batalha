import { Heroi } from "./Personagem/Heroi.js";
import { Vilao } from "./Personagem/Vilao.js";

const heroi = new Heroi("Superman",1200);
const vilao = new Vilao("Batman",1200);

heroi.adicionaPoder("kamekameha",300);
vilao.adicionaPoder("kaioken",300);

console.log(heroi);
console.log(vilao);

while(heroi.vidaInicial>=0 && vilao.vidaInicial>=0){
    heroi.ataque(heroi,vilao);
    console.log("");
    vilao.ataque(vilao,heroi);
}
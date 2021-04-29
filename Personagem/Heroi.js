import { Personagem } from "./Personagem.js";

export class Heroi extends Personagem{
    constructor(nome,vidaInicial){
        super(nome,"heroi",vidaInicial)
    }
}
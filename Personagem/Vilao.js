import { Personagem } from "./Personagem.js";

export class Vilao extends Personagem{
    constructor(nome,vidaInicial){
        super(nome,"vilao",vidaInicial)
    }
}
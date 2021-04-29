export class Personagem{
    constructor(nome,tipo,vidaInicial){
        if(this.constructor  ==  Personagem){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois essa é uma classe abstrata!");
        }
        this._nome = nome;
        this._tipo = tipo;
        this._vidaInicial = vidaInicial;
        this._poderNome = ["poderSupremo","poderMinimo"];
        this._poderForca = [100,10];
    }

    get nome(){
        return this._nome;
    }

    get tipo(){
        return this._tipo;
    }

    get vidaInicial(){
        return this._vidaInicial;
    }

    pegaNome(i){
        return this._poderNome[i];
    }

    pegaForca(i){
        return this._poderForca[i];
    }

    adicionaPoder(nome,forca){
        this._poderNome.push(nome);
        this._poderForca.push(forca);
    }

    tiraVida(valor){
        this._vidaInicial -=valor;
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    ataque(atacante,atacado){
        console.log(atacante.nome, "--->" ,atacado.nome);
        let i = this.rand(0,2);
        console.log("PODER:",atacante.pegaNome(i)," : ",atacante.pegaForca(i));
        let forca = this.rand(0,atacante.pegaForca(i));
        console.log("FORÇA: ",forca);
        atacado.tiraVida(forca);
        console.log(atacante.nome,atacante.vidaInicial);
        console.log(atacado.nome,atacado.vidaInicial);
    }
}
export default class Estande{
    private numero: Number;

    constructor(numero: Number){
        this.numero = numero;
    }

    public getNumero(){
        return this.numero;
    }

    public setNumero(numero: Number){
        this.numero = numero;
    }
}
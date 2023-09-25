export default class Estande{
    private numero: number;

    constructor(numero: number){
        this.numero = numero;
    }

    public getNumero(){
        return this.numero;
    }

    public setNumero(numero: number){
        this.numero = numero;
    }
}
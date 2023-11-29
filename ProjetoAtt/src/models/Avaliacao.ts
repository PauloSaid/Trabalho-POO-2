import Professor from "./Professor";
import Aluno from "./Aluno";
import Grupo from "./Grupo";

export default class Avaliacao{
    private nomeGrupo: Grupo;
    private avaliador1: Professor | Aluno;
    private avaliador2: Aluno | Professor;
    private nota1: number;
    private nota2: number;

    constructor(nomeGrupo: Grupo, avaliador1: Professor | Aluno, avaliador2: Aluno | Professor, nota1: number, nota2: number){
        this.nomeGrupo = nomeGrupo;
        this.avaliador1 = avaliador1;
        this.avaliador2 = avaliador2;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    /*nome1 = this.getAvaliador1().getEmail();
    nome2 = this.getAvaliador2().getEmail();

    if (nome1 = nome2){
        THROW ERROR
    }*/

    public getNomeGrupo(){
        return this.nomeGrupo;
    }

    public setNomeGrupo(nomeGrupo: Grupo){
        this.nomeGrupo = nomeGrupo;
    }

    public getAvaliador1(){
        return this.avaliador1;
    }

    public setAvaliador1(avaliador1: Aluno | Professor){
        this.avaliador1 = avaliador1;
    }

    public getAvaliador2(){
        return this.avaliador2;
    }

    public setAvaliador2(avaliador2: Aluno | Professor){
        this.avaliador2 = avaliador2;
    }

    public getNota1(){
        return this.nota1;
    }

    public setNota1(nota1: number){
        this.nota1 = nota1;
    }

    public getNota2(){
        return this.nota2;
    }

    public setNota2(nota2: number){
        this.nota2 = nota2;
    }

    public calcularNota(nota1: number, nota2: number): number{
        nota1 = this.nota1;
        nota2 = this.nota2;
        const notaFinal = ((nota1+nota2)/2);
        return notaFinal;
    }   


    if () {
        
    }
}
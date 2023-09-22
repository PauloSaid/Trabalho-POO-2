import Aluno from "./Aluno";

export default class Grupo{
    private nomeGrupo: String;
    private nomeProjeto: String;
    private lider: Aluno;
    private diaApresentacao: Date;
    private numeroEstande: Number;

    constructor(nomeGrupo: String, nomeProjeto: String, lider: Aluno, diaApresentacao: Date, numeroEstande: Number){
        this.nomeGrupo = nomeGrupo;
        this.nomeProjeto = nomeProjeto;
        this.lider = lider;
        this.diaApresentacao = diaApresentacao;
        this.numeroEstande = numeroEstande;
    }

    public getNomeGrupo(){
        return this.nomeGrupo;
    }

    public setNomeGrupo(nomeGrupo: String){
        this.nomeGrupo = nomeGrupo;
    }

    public getNomeProjeto(){
        return this.nomeProjeto;
    }

    public setNomeProjeto(nomeProjeto: String){
        this.nomeProjeto = nomeProjeto;
    }

    public getLider(){
        return this.lider;
    }

    public setLider(lider: Aluno){
        this.lider = lider;
    }

    public getDiaApresentacao(){
        return this.diaApresentacao;
    }

    public setDiaApresentacao(diaApresentacao: Date){
        this.diaApresentacao = diaApresentacao;
    }

    public getNumeroEstande(){
        return this.numeroEstande;
    }

    public setNumeroEstande(numeroEstande: Number){
        this.numeroEstande = numeroEstande;
    }
}
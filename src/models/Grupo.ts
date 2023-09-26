import Aluno from "./Aluno";

export default class Grupo{
    private nomeGrupo: string;
    private nomeProjeto: string;
    private lider?: Aluno;
    private diaApresentacao: Date;
    private numeroEstande: number;

    constructor(nomeGrupo: string, nomeProjeto: string, diaApresentacao: Date, numeroEstande: number){
        this.nomeGrupo = nomeGrupo;
        this.nomeProjeto = nomeProjeto;
        this.diaApresentacao = diaApresentacao;
        this.numeroEstande = numeroEstande;
    }

    public getNomeGrupo(){
        return this.nomeGrupo;
    }

    public setNomeGrupo(nomeGrupo: string){
        this.nomeGrupo = nomeGrupo;
    }

    public getNomeProjeto(){
        return this.nomeProjeto;
    }

    public setNomeProjeto(nomeProjeto: string){
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

    public setNumeroEstande(numeroEstande: number){
        this.numeroEstande = numeroEstande;
    }
}
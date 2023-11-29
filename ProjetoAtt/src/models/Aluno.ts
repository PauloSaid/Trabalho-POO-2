import Avaliador from "./Avaliador";
import Avaliacao from "./Avaliacao";
import Grupo from "./Grupo";

export default class Aluno implements Avaliador{
    private nome: string;
    private matricula: number;
    private telefone: number;
    private email: string;
    private grupo?: Grupo;

    constructor(nome: string, matricula: number, telefone: number, email: string)
    {
        this.nome = nome;
        this.matricula = matricula;
        this.telefone = telefone;
        this.email = email;
    }

    public getNome(){
        return this.nome;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getMatricula(){
        return this.matricula;
    }

    public setMatricula(matricula: number){
        this.matricula = matricula;
    }

    public getTelefone(){
        return this.telefone;
    }

    public setTelefone(){
        this.telefone = this.telefone;
    }

    public getEmail(){
        return this.email;
    }

    public setEmail(email: string){
        this.email = email;
    }

    public getGrupo(){
        return this.grupo;
    }

    public setGrupo(grupo: Grupo){
        this.grupo = grupo;
    }

    avaliarGrupo(nomeGrupo: Avaliacao["nomeGrupo"], nota: number): number{
        return nota;
    }
}
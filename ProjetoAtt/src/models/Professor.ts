import Avaliador from "./Avaliador";
import Avaliacao from "./Avaliacao";

export default class Professor implements Avaliador{
    private nome: string;
    private email: string;

    constructor(nome: string, email: string)
    {
        this.nome = nome;
        this.email = email;
    }

    public getNome(){
        return this.nome;
    }

    public setNome(nome: string){
        this.nome = nome;
    }

    public getEmail(){
        return this.email;
    }

    public setEmail(email: string){
        this.email = email;
    }

    avaliarGrupo(nomeGrupo: Avaliacao["nomeGrupo"], nota: number): number{
        return nota;
    }
}
import Avaliacao from "./Avaliacao";

export default class Avaliador{
    private nome: String;
    private email: String;

    constructor(nome: String, email: String)
    {
        this.nome = nome;
        this.email = email;
    }

    public getNome(){
        return this.nome;
    }

    public setNome(nome: String){
        this.nome = nome;
    }

    public getEmail(){
        return this.email;
    }

    public setEmail(email: String){
        this.email = email;
    }

    /* arrumar método: public avaliarGrupo(nomeGrupo: Avaliacao["nomeGrupo"], nota: Number): Number{
        return 1;
    }*/
}
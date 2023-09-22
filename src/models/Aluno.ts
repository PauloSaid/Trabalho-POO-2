export default class Aluno{
    private nome: String;
    private matricula: Number;
    private telefone: Number;
    private email: String;

    constructor(nome: String, matricula: Number, telefone: Number, email: String)
    {
        this.nome = nome;
        this.matricula = matricula;
        this.telefone = telefone;
        this.email = email;
    }

    public getNome(){
        return this.nome;
    }

    public setNome(nome: String){
        this.nome = nome;
    }

    public getMatricula(){
        return this.matricula;
    }

    public setMatricula(matricula: Number){
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

    public setEmail(email: String){
        this.email = email;
    }
}
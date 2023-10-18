import Aluno from "./Aluno";
import Avaliacao from "./Avaliacao";
import Estande from "./Estande";
import Grupo from "./Grupo";
import Professor from "./Professor";

// Setando uma data pra não complicar o código posteriormente:
const date = new Date('December 17, 1995 03:24:00');

// Criando consts para popular sem problema dps

// ESTANDES: 
const estande30 = new Estande(30);
const estande50 = new Estande(50);
const estande35 = new Estande(35);

// ALUNOS: 
const aluno1 = new Aluno("Paulo Said", 2, 2799, "paulo@gmail.com");
const aluno2 = new Aluno("Matehus", 3, 6231, "matheus@gmail.com");
const aluno3 = new Aluno("Lei de Lauro", 4, 6123, "lauro@gmail.com");
const aluno4 = new Aluno("Aluno Triste", 5, 1234, "tristao@gmail.com");
const aluno5 = new Aluno("Aluno nem feliz nem triste", 6, 1244, "alunonemfeliznemtriste@gmail.com");

// PROFESSORES:
const professor1 = new Professor("pofesso otavio", "pofessootavio@yahoo.com");
const professor2 = new Professor("pofesso erlo", "erlo@uvv.com");
const professor3 = new Professor("pofesso caputo", "casiocapotino@uvv.com");

// GRUPOS:
const grupo1 = new Grupo("Grupo Feliz", "Projeto Feliz", date, estande30.getNumero(), aluno1.getEmail());
const grupo2 = new Grupo("Grupo Triste", "Projeto Triste", date, estande50.getNumero(), aluno4.getEmail());
const grupo3 = new Grupo("Grupo nem feliz nem triste", "Projeto nem feliz nem triste", date, estande35.getNumero(), aluno5.getEmail());

// AVALIAÇÕES:
const avaliacao1 = new Avaliacao(grupo1, professor1, aluno5, professor1.avaliarGrupo(grupo1, 10), aluno5.avaliarGrupo(grupo1, 9));
const avaliacao2 = new Avaliacao(grupo2, professor2, professor3, professor2.avaliarGrupo(grupo2, 0), aluno5.avaliarGrupo(grupo2, 2.4));
const avaliacao3 = new Avaliacao(grupo3, aluno2, aluno3, aluno2.avaliarGrupo(grupo3, 7), aluno3.avaliarGrupo(grupo3, 7.2));


/*
ATENÇÃO PROFESSOR ->
            PARA RODAR, SEM PROBLEMAS, É RECOMENDADO RODAR O "POPULA" DE CADA CLASSE POR VEZ.
            PARA ISSO, RETIRE OS COMENTÁRIOS DE CADA CLASSE E RODE - AFIM DE EVITAR ERROS DE FOREIGN KEY. - OBRIGADO
*/


//ATIVIDADES ESTANDE: 
/*
populaEstande(estande30);
populaEstande(estande50);
populaEstande(estande35);
*/

//ATIVIDADES ALUNO:
/*
populaAluno(aluno1);
populaAluno(aluno2);
populaAluno(aluno3);
populaAluno(aluno4);
populaAluno(aluno5);
*/


//ATIVIDADES PROFESSOR:
/*
populaProfessor(professor1);
populaProfessor(professor2);
populaProfessor(professor3);
*/ 


//ATIVIDADES GRUPO:
/*
populaGrupo(grupo1);
populaGrupo(grupo2);
populaGrupo(grupo3);
*/ 

//INSERINDO ALUNO NO GRUPO:
/*
updateAluno(aluno2, grupo1.getNomeGrupo());
updateAluno(aluno3, grupo1.getNomeGrupo());
*/

//ADICIONANDO AVALIAÇÕES AOS GRUPOS:
/*
populaAvalicao(avaliacao1, grupo1);
populaAvalicao(avaliacao2, grupo2);
populaAvalicao(avaliacao3, grupo3);
*/



/* 
+============================================================================+
Daqui para baixo, não faz parte do código, não apagamos pois foi utilizado para testes e parâmetro nas criações dos objetos
+============================================================================+






*/
//const aluno1 = new Aluno("Paulo Said", 2, 2799, "paulo@gmail.com");
//const grupoteste = new Grupo("Grupao", "Projetao", date, estande30.getNumero())
//const aluno3 = new Aluno("Matheus Muruci", 3, 2877, "matehus@gmail.com");
//const prof = new Professor("Abrantes", "Abrantes@email.com");

//deleteAvaliacao(grupoteste);

//const avaliacao = new Avaliacao(grupoteste, prof, aluno3, prof.avaliarGrupo(grupoteste, 10), aluno3.avaliarGrupo(grupoteste, 6));
//populaAvalicao(avaliacao, grupoteste);

// dar o update aluno depois -> updateGrupo(grupoteste, aluno3);
//const grupo = new Grupo("JaoGrupo", "JaoProjeto", date, estande30.getNumero(), aluno1.getEmail());
//populaGrupo(grupo);
//updateEstande(estandedelete, 51);
//deleteEstande(estandedelete);
//updateGrupo(grupoteste, aluno3);
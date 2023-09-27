import { deleteAluno, populaAluno } from "../services/alunoServices";
import { deleteAvaliacao, populaAvalicao } from "../services/avaliacaoServices";
import { populaEstande } from "../services/estandeServices";
import { populaGrupo, updateGrupo } from "../services/grupoServices";
import { populaProfessor } from "../services/professorServices";
import Aluno from "./Aluno";
import Avaliacao from "./Avaliacao";
import Avaliador from "./Avaliador";
import Estande from "./Estande";
import Grupo from "./Grupo";
import Professor from "./Professor";

const date = new Date('December 17, 1995 03:24:00');
const estande30 = new Estande(30);
const aluno1 = new Aluno("Paulo Said", 2, 2799, "paulo@gmail.com");
const grupoteste = new Grupo("Grupao", "Projetao", date, estande30.getNumero())
const aluno3 = new Aluno("Matheus Muruci", 3, 2877, "matehus@gmail.com");
const prof = new Professor("Abrantes", "Abrantes@email.com");

//deleteAvaliacao(grupoteste);

const avaliacao = new Avaliacao(grupoteste, prof, aluno3, prof.avaliarGrupo(grupoteste, 10), aluno3.avaliarGrupo(grupoteste, 6));
//populaAvalicao(avaliacao, grupoteste);

// dar o update aluno depois -> updateGrupo(grupoteste, aluno3);


//updateGrupo(grupoteste, aluno3);


import populaAluno from "../services/alunoServices";
import Aluno from "./Aluno";
import Avaliacao from "./Avaliacao";
import Avaliador from "./Avaliador";
import Estande from "./Estande";
import Grupo from "./Grupo";
import Professor from "./Professor";


const aluno = new Aluno("Paulin",622,2002,"Pau", new Grupo("dapdc","leide laura", "mucoloco", new Date('1995-12-17T03:24:00'),20));

populaAluno(aluno);
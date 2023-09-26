import { deleteAluno, populaAluno } from "../services/alunoServices";
import { populaEstande } from "../services/estandeServices";
import { populaGrupo } from "../services/grupoServices";
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
grupoteste.setLider(aluno1);

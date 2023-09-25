import Avaliacao from "./Avaliacao";

export default interface Avaliador{
    avaliarGrupo(nomeGrupo: Avaliacao["nomeGrupo"], nota: number): number    
}
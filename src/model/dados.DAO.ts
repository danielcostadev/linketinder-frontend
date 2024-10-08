import { Candidato } from './candidato';
import { Empresa } from './empresa';
import { Vaga } from './vaga';

export class DadosDAO {
    
    public removerUnderscores(obj: any): any {
        const novoObj: any = {};
        for (const chave in obj) {
            
            const novaChave = chave.startsWith('_') ? chave.substring(1) : chave;
            novoObj[novaChave] = obj[chave];
        }
        return novoObj;
    }

    // Empresa
    public salvarEmpresaNoLocalStorage(chave: string, dados: Empresa[]): void {
        try {

            const dadosTratados = dados.map(empresa => this.removerUnderscores(empresa));

            localStorage.setItem(chave, JSON.stringify(dadosTratados));
        } catch (erro) {
            console.error("Erro ao salvar dados no localStorage:", erro);
            alert("Ocorreu um erro ao salvar os dados. Tente novamente mais tarde.");
        }
    }
    
    public obterEmpresaDoLocalStorage(chave:string): Empresa[]  {
        try {
            const dados = localStorage.getItem(chave);
            return dados? JSON.parse(dados) as Empresa[] : [];
        } catch (erro) {
            console.error("Erro ao obter dados do localStorage:", erro);
            alert("Ocorreu um erro ao recuperar os dados. Tente novamente mais tarde.");
            return [];
        }
    }
    // Candidato
    public salvarCandidatoNoLocalStorage(chave: string, dados: Candidato[]): void {
        try {

            const dadosTratados = dados.map(candidato => this.removerUnderscores(candidato));

            localStorage.setItem(chave, JSON.stringify(dadosTratados));
        } catch (erro) {
            console.error("Erro ao salvar dados no localStorage:", erro);
            alert("Ocorreu um erro ao salvar os dados. Tente novamente mais tarde.");
        }
    }
    
    public obterCandidatoDoLocalStorage(chave:string): Candidato[]  {
        try {
            const dados = localStorage.getItem(chave);
            return dados? JSON.parse(dados) as Candidato[] : [];
        } catch (erro) {
            console.error("Erro ao obter dados do localStorage:", erro);
            alert("Ocorreu um erro ao recuperar os dados. Tente novamente mais tarde.");
            return [];
        }
    }
    // Vaga
    public salvarVagaNoLocalStorage(chave: string, dados: Vaga[]): void {
        try {

            const dadosTratados = dados.map(vaga => this.removerUnderscores(vaga));

            localStorage.setItem(chave, JSON.stringify(dadosTratados));
        } catch (erro) {
            console.error("Erro ao salvar dados no localStorage:", erro);
            alert("Ocorreu um erro ao salvar os dados. Tente novamente mais tarde.");
        }
    }
    
    public obterVagaDoLocalStorage(chave:string): Vaga[]  {
        try {
            const dados = localStorage.getItem(chave);
            return dados? JSON.parse(dados) as Vaga[] : [];
        } catch (erro) {
            console.error("Erro ao obter dados do localStorage:", erro);
            alert("Ocorreu um erro ao recuperar os dados. Tente novamente mais tarde.");
            return [];
        }
    }
}
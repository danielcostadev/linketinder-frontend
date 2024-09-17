import { DadosDAO } from "../model/dados.DAO";
import { Empresa } from "../model/empresa";

export class EmpresaService {
    private dadosDAO: DadosDAO;

    constructor() {
        this.dadosDAO = new DadosDAO();
    }

    public gerarId(): number {
        let empresas = this.dadosDAO.obterEmpresaDoLocalStorage("dataEmpresa");
        console.log(empresas);
        if (empresas.length > 0) {
            const ids: number[] = empresas.map((empresa: Empresa) => empresa.id);
            const maiorId: number = Math.max(...ids);
            return maiorId + 1;
        } else {
            return 1;
        }
    }

    public adicionarEmpresa(empresa: Empresa): void {
        let empresas: Empresa[] = this.dadosDAO.obterEmpresaDoLocalStorage("dataEmpresa");
        empresas.push(empresa);
        this.dadosDAO.salvarEmpresaNoLocalStorage("dataEmpresa", empresas)
        console.log("Empresa adicionada com sucesso!");
    }

    public exlcuirEmpresa(idEmpresa: number): void {
        let empresas: Empresa[] = this.dadosDAO.obterEmpresaDoLocalStorage("dataEmpresa");
        const index: number = empresas.findIndex(empresa => empresa.id === idEmpresa);

        if (index !== -1) {
            empresas.splice(index, 1);
            this.dadosDAO.salvarEmpresaNoLocalStorage("dataEmpresa", empresas)
            console.log("Empresa removida com sucesso!");

        } else {
            console.log("Empresa não encontrado na lista!");
        }
    }

}




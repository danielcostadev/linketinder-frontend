import { Vaga } from "../model/vaga";
import { VagaService } from "../service/vaga.service";
import { EmpresaService } from "../service/empresa.service";
import { NavegacaoService } from "../service/navegacao.service";
import { BotoesService } from "../service/botoes.service";
// Centralização de interação com o DOM
var tabelaItensVaga = document.getElementById("tabela-itens-vaga");
export class VagaController {
    constructor() {
        this.vagaService = new VagaService();
        this.empresaService = new EmpresaService();
        this.navegacaoService = new NavegacaoService();
        this.botoesService = new BotoesService();
    }
    adicionarVaga(dadosFormulario) {
        const codigo = this.vagaService.gerarCodigo();
        const idEmpresaAtual = this.navegacaoService.obterIdDaUrl();
        const vaga = new Vaga(codigo, idEmpresaAtual, dadosFormulario.get("nome"), dadosFormulario.get("descricao"), dadosFormulario.get("competencias").split(","));
        this.empresaService.adicionarVagaEmpresa(idEmpresaAtual, vaga);
        this.vagaService.adicionarVaga(vaga);
    }
    excluirVaga(id) {
        this.vagaService.excluirVaga(id);
    }
    listarVagas() {
        const vagas = this.vagaService.listarVagas();
        if (vagas.length > 0) {
            tabelaItensVaga.innerHTML = "";
            vagas.forEach((vaga, index) => {
                var botaoContainer = this.botoesService.criarBotaoContainerLike();
                var linha = tabelaItensVaga.insertRow();
                var cellNome = linha.insertCell(0);
                var cellCompetencias = linha.insertCell(1);
                var cellOpcoes = linha.insertCell(2);
                cellNome.innerHTML = vaga.nome;
                cellCompetencias.innerHTML = Array.isArray(vaga.competencias) ? vaga.competencias.join(', ') : vaga.competencias;
                cellOpcoes.appendChild(botaoContainer);
                // Para que os botões funcionem, devemos atribuir eventos logo após serem adicionados
                var botaoCurtir = botaoContainer.querySelector('.botao-curtir');
                var botaoRejeitar = botaoContainer.querySelector('.botao-rejeitar');
            });
        }
    }
}

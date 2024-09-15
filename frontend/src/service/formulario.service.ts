import { DadosPaisesEstados } from "../model/dadosPaisesEstados";

const dadosPaisesEstados = new DadosPaisesEstados;

export class Formulario {

    public gerarListaPaisesEstados(): void {
        const selectPais = document.getElementById("paises") as HTMLSelectElement;
        const selectEstado = document.getElementById("estado") as HTMLSelectElement;

        if (!selectPais || !selectEstado) {
            console.error("Elemento <select> não encontrado!");
            return;
        }

        dadosPaisesEstados.getPaises().forEach(pais => {
            const option = document.createElement("option");
            option.value = pais.toLowerCase();
            option.textContent = pais;
            selectPais.appendChild(option);
        });

        dadosPaisesEstados.getEstados().forEach(estado => {
            const option = document.createElement("option");
            option.value = estado.sigla;
            option.textContent = estado.nome;
            selectEstado.appendChild(option);
        });
    }

    public validarEntradaDados(campos: { nome: string, mensagem: string }[], formulario: HTMLFormElement): boolean {

        for (const campo of campos) {

            const elemento = formulario.elements.namedItem(campo.nome) as HTMLInputElement;

            if (!elemento) {
                console.error(`Campo com nome "${campo.nome}" não encontrado no formulário.`);
                return false;
            }

            const valor: string = elemento.value.trim();
            if (!valor) {
                alert(campo.mensagem);
                elemento.focus();
                return false;
            }
        }
        return true;
    };
}
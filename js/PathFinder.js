class CaminhoEncontrador {
    constructor(tabela, pontoInicial, pontoFinal) {
        this.tabela = tabela;
        this.pontoInicial = pontoInicial;
        this.pontoFinal = pontoFinal;
    }

    // Função principal que encontra o caminho entre o ponto inicial e o ponto final
    encontrarCaminho() {
        const fila = [];
        const visitados = new Set();
        const mapaPais = new Map();

        fila.push(this.pontoInicial);
        visitados.add(this.pontoInicial);

        while (fila.length) {
            const atual = fila.shift();
            if (atual === this.pontoFinal) {
                this.destacarCaminho(mapaPais, atual);
                return;
            }

            // Busca os vizinhos do nó atual e verifica se são válidos
            const vizinhos = this.obterVizinhos(atual);
            for (const vizinho of vizinhos) {
                if (!visitados.has(vizinho) && vizinho.classList.contains('street')) {
                    fila.push(vizinho);
                    visitados.add(vizinho);
                    mapaPais.set(vizinho, atual);
                }
            }
        }

        alert('Não foi possível encontrar um caminho.');
    }

    // Função que retorna os vizinhos (cima, baixo, esquerda, direita)
    obterVizinhos(celula) {
        const linha = celula.parentElement.rowIndex;
        const coluna = celula.cellIndex;

        return [
            this.tabela.rows[linha - 1]?.cells[coluna],
            this.tabela.rows[linha + 1]?.cells[coluna],
            this.tabela.rows[linha]?.cells[coluna - 1],
            this.tabela.rows[linha]?.cells[coluna + 1],
        ].filter(Boolean);
    }

    // Função que destaca o caminho encontrado alterando a cor das células
    destacarCaminho(mapaPais, atual) {
        while (atual) {
            if (atual !== this.pontoInicial && atual !== this.pontoFinal) {
                atual.style.backgroundColor = 'gray';
            }
            atual = mapaPais.get(atual);
        }
    }
}

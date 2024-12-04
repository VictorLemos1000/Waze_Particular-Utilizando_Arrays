class Grade {
    constructor(linhas, colunas, layoutCidade) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.layoutCidade = layoutCidade;
        this.tabela = document.getElementById('myTable');
        this.pontoInicial = null;
        this.pontoFinal = null;
        this.caminho = [];
    }

    /**
     * Função para criar a grade da cidade na tabela HTML.
     */
    criarGrade() {
        this.tabela.innerHTML = ''; // Limpa a tabela antes de recriar a grade
    
        for (let i = 0; i < this.linhas; i++) {
            const linha = document.createElement('tr');
            for (let j = 0; j < this.colunas; j++) {
                const celula = document.createElement('td');
    
                // Verifica se a célula no layout da cidade é uma rua ou uma construção.
                if (this.layoutCidade[i % this.layoutCidade.length][j % this.layoutCidade[0].length] === 1) {
                    this.configurarCelulaRua(celula);
                } else {
                    celula.classList.add('construcao');
                }
                linha.appendChild(celula);
            }
            this.tabela.appendChild(linha);
        }
    
        // Redefine pontos e caminho após recriar a grade
        this.pontoInicial = null;
        this.pontoFinal = null;
        this.caminho = [];
    }
    

    // Configura as células de ruas, com eventos de clique e possíveis engarrafamentos
    configurarCelulaRua(celula) {
        celula.classList.add('ruas');
    
        if (Math.random() < 0.1) {
            celula.classList.add('engarrafamento');
        } else {
            celula.addEventListener('click', () => this.lidarCliqueCelula(celula));
        }
    }
    

    // Lida com cliques nas células, definindo ponto inicial e final
    cliqueCelula(celula) {
        if (!this.pontoInicial) {
            this.pontoInicial = celula;
            this.pontoInicial.style.backgroundColor = 'green';
        } else if (!this.pontoFinal && celula !== this.pontoInicial) {
            this.pontoFinal = celula;
            this.pontoFinal.style.backgroundColor = 'red';
            new CaminhoEncontrado(this.tabela, this.pontoInicial, this.pontoFinal).encontrarCaminho();
        }
    }
}

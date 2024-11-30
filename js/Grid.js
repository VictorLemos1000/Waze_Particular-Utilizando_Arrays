class Grade {
    constructor(linhas, colunas, layoutCidade) {
        this.linhas = linhas;
        this.colunas = colunas;
        this.layoutCidade = layoutCidade;
        this.tabela = document.getElementById('myTable');
        this.pontoInicial = null;
        this.pontoFinal = null;
    }

    // Cria a grade com base no layout da cidade
    criarGrade() {
        this.tabela.innerHTML = '';
        for (let i = 0; i < this.linhas; i++) {
            const linha = document.createElement('tr');
            for (let j = 0; j < this.colunas; j++) {
                const celula = document.createElement('td');
                if (this.layoutCidade[i % this.layoutCidade.length][j % this.layoutCidade[0].length] === 1) {
                    this.configurarCelulaRua(celula);
                } else {
                    celula.classList.add('building');
                }
                linha.appendChild(celula);
            }
            this.tabela.appendChild(linha);
        }
    }

    // Configura as células de ruas, com eventos de clique e possíveis engarrafamentos
    configurarCelulaRua(celula) {
        celula.classList.add('street');
        if (Math.random() < 0.05) {
            celula.classList.add('traffic-jam');
        } else {
            celula.addEventListener('click', () => this.lidarCliqueCelula(celula));
        }
    }

    // Lida com cliques nas células, definindo ponto inicial e final
    lidarCliqueCelula(celula) {
        if (!this.pontoInicial) {
            this.pontoInicial = celula;
            this.pontoInicial.style.backgroundColor = 'blue';
        } else if (!this.pontoFinal && celula !== this.pontoInicial) {
            this.pontoFinal = celula;
            this.pontoFinal.style.backgroundColor = 'red';
            new CaminhoEncontrador(this.tabela, this.pontoInicial, this.pontoFinal).encontrarCaminho();
        }
    }
}

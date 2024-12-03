class CaminhoEncontrado {
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
    
        while (fila.length > 0) {
            const atual = fila.shift();
            if (atual === this.pontoFinal) {
                this.destacarCaminho(mapaPais, atual);
                return;
            }
    
            // Obtenha os vizinhos da célula atual
            const vizinhos = this.obterVizinhos(atual);
    
            for (const vizinho of vizinhos) {
                // Verifique se o vizinho já foi visitado, se é uma rua e se não contém um carro
                if (
                    !visitados.has(vizinho) &&
                    vizinho.classList.contains('ruas') &&
                    !vizinho.classList.contains('engarrafamento')
                ) {
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
        // Reconstrói o caminho a partir do ponto final até o inicial usando o mapa de pais
        const caminho = [];
        while (atual) {
            caminho.push(atual);
            atual = mapaPais.get(atual);
        }
        caminho.reverse(); // Inverte o caminho para começar no ponto inicial
    
        // Cria a imagem que vai percorrer o caminho
        const img = document.createElement('img');
        img.src = 'assets/meuCarro.png'; // Substitua pelo caminho correto da sua imagem
        img.style.position = 'absolute';
        img.style.width = '20px';
        img.style.height = '20px';
    
        // Adiciona a imagem na célula inicial
        this.pontoInicial.appendChild(img);
    
        // Anima o percurso
        caminho.forEach((celula, index) => {
            setTimeout(() => {
                // Move a imagem para a célula atual
                celula.appendChild(img);
    
                // Pinta a célula de amarelo para mostrar o percurso, exceto o ponto inicial e final
                if (celula !== this.pontoInicial && celula !== this.pontoFinal) {
                    celula.style.backgroundColor = 'yellow';
                }
    
                // No final do trajeto, adiciona destaque no ponto final
                if (index === caminho.length - 1) {
                    this.pontoFinal.style.backgroundColor = 'red';
                }
            }, 100 * index); // Controla o intervalo entre as animações
        });
    } 
}

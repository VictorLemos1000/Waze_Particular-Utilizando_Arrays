class Cidade {
    constructor(nomeCidade) {
        this.layoutCidades = {
            "Recife": [
                [1, 0, 0, 0, 1, 0, 0],
                [1, 0, 0, 0, 1, 0, 0],
                [1, 0, 1, 1, 1, 1, 1],
                [1, 0, 1, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1],
            ],
            "Abreu e Lima": [
                [0, 0, 1, 1, 0, 0, 1],
                [1, 0, 0, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 0, 1, 1, 0, 0, 1],
                [1, 0, 1, 1, 0, 0, 1],
            ],
            "Paulista": [
                [1, 0, 0, 0, 1, 0, 0],
                [1, 0, 0, 0, 1, 0, 0],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 1, 0, 0],
                [1, 1, 1, 1, 1, 0, 0],
            ],
            "Igarassu": [
                [1, 0, 1, 1, 1, 0, 0],
                [1, 0, 1, 0, 1, 0, 0],
                [1, 0, 1, 0, 1, 1, 1],
                [1, 1, 1, 0, 1, 0, 0],
                [0, 0, 1, 0, 1, 0, 0],
            ],
        };

        // Define o layout da cidade com base no ID
        this.layoutCidade = this.layoutCidades[nomeCidade] || this.layoutCidades["Recife"];
    }

    // Retorna o layout da cidade
    obterLayout() {
        return this.layoutCidade;
    }
}

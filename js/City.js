class Cidade {
    constructor(idCidade) {
        this.layoutCidades = {
            1: [
                [1, 0, 0, 0, 1, 0, 0],
                [1, 0, 0, 0, 1, 0, 0],
                [1, 0, 1, 1, 1, 1, 1],
                [1, 0, 1, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1],
            ],
            2: [
                [1, 0, 1, 1, 0, 0, 1],
                [1, 0, 1, 1, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1],
                [1, 0, 1, 1, 0, 0, 1],
                [1, 0, 1, 1, 0, 0, 1],
            ],
            3: [
                [1, 0, 0, 0, 1, 0, 0],
                [1, 0, 0, 0, 1, 0, 0],
                [1, 0, 0, 0, 1, 1, 1],
                [1, 0, 0, 0, 1, 0, 0],
                [1, 1, 1, 1, 1, 0, 0],
            ],
            4: [
                [1, 0, 1, 1, 1, 0, 0],
                [1, 0, 1, 0, 1, 0, 0],
                [1, 0, 1, 0, 1, 1, 1],
                [1, 1, 1, 0, 1, 0, 0],
                [0, 0, 1, 0, 1, 0, 0],
            ],
        };

        // Define o layout da cidade com base no ID
        this.layoutCidade = this.layoutCidades[idCidade] || this.layoutCidades[4];
    }

    // Retorna o layout da cidade
    obterLayout() {
        return this.layoutCidade;
    }
}

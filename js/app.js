document.addEventListener('DOMContentLoaded', () => {
     // Cria a cidade inicial e configura a grade com o layout correspondente
    const cidade = new Cidade("Recife");
    const grade = new Grade(20, 45, cidade.obterLayout());

    grade.criarGrade();

    // Configura botão de reset para limpar o trajeto e redefinir os pontos
    document.getElementById('reset-button').addEventListener('click', () => {
        grade.pontoInicial = null;
        grade.pontoFinal = null;

         // Limpa o trajeto pintado, voltando todas as células de ruas para a cor padrão
        const ruas = document.querySelectorAll('.ruas');
        ruas.forEach((celula) => {
            celula.style.backgroundColor = ''; // Remove a cor para restaurar o padrão
            const img = celula.querySelector('img');
            if (img) {
                img.remove(); // Remove a imagem da célula, se existir
            }
        });
    });
    
     // Botão para alternar entre cidades
    document.getElementById('mudaCidade').addEventListener('click', () => {
        const cidades = ["Recife", "Abreu e Lima", "Paulista", "Igarassu"];

        let novaCidade;
        do {
            novaCidade = cidades[Math.floor(Math.random() * cidades.length)];
        } while (novaCidade === grade.nomeCidade);
    
        // Atualiza a cidade com o novo layout
        const cidadeAtualizada = new Cidade(novaCidade);
        grade.layoutCidade = cidadeAtualizada.obterLayout(); // Atualiza o layout
        grade.nomeCidade = novaCidade; // Atualiza o nome da cidade no objeto grade
        grade.criarGrade(); // Recria a grade com o novo layout
    
        // Atualiza o título da cidade na interface
        document.getElementById('tituloCidade').textContent = `Cidade: ${novaCidade}`;
    });
});

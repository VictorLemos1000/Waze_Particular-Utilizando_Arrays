// Inicializa o sistema quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    const cidade = new Cidade(4);
    const grade = new Grade(25, 40, cidade.obterLayout());

    grade.criarGrade();

    // Adiciona funcionalidade ao botão de redefinição
    document.getElementById('reset-button').addEventListener('click', () => {
        grade.pontoInicial = null;
        grade.pontoFinal = null;
        grade.criarGrade();
    });
});

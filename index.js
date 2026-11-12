
function mostrarMais() {
    document.getElementById("resultado").innerHTML =
    "O racismo algorítmico acontece quando sistemas de inteligência artificial reproduzem preconceitos raciais presentes nos dados utilizados para seu treinamento.";
}

function mensagemConscientizacao() {
    document.getElementById("resultado").innerHTML =
    "A tecnologia precisa representar todas as pessoas! Combater o racismo também é responsabilidade de quem desenvolve a Inteligência Artificial.";
}

function voltarInicio() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// PERGUNTAS DO QUIZ

const perguntas = [
    {
        pergunta: "1. O que é racismo algorítmico?",
        opcoes: [
            "Um tipo de vírus de computador",
            "Quando sistemas tecnológicos reproduzem preconceitos raciais",
            "Um programa de edição de imagens",
            "Uma linguagem de programação"
        ],
        correta: 1,
        explicacao: "Isso mesmo! O racismo algorítmico acontece quando sistemas tecnológicos reproduzem ou ampliam desigualdades raciais."
    },

    {
        pergunta: "2. Como o reconhecimento facial pode apresentar racismo?",
        opcoes: [
            "Quando funciona apenas durante o dia",
            "Quando apresenta mais erros ao identificar pessoas negras",
            "Quando precisa de internet",
            "Quando utiliza câmeras digitais"
        ],
        correta: 1,
        explicacao: "Correto! Pesquisas mostram diferenças de precisão em sistemas de análise facial entre grupos raciais e tons de pele."
    },

    {
        pergunta: "3. Por que os algoritmos podem reproduzir preconceitos?",
        opcoes: [
            "Porque aprendem com dados que podem conter desigualdades",
            "Porque todos são programados para discriminar",
            "Porque não possuem conexão com a internet",
            "Porque não conseguem armazenar informações"
        ],
        correta: 0,
        explicacao: "Muito bem! Dados históricos e pouco representativos podem ensinar padrões preconceituosos aos sistemas."
    },

    {
        pergunta: "4. O que significa ética na Inteligência Artificial?",
        opcoes: [
            "Criar máquinas cada vez mais rápidas",
            "Eliminar a participação humana",
            "Desenvolver tecnologias com responsabilidade, justiça e respeito aos direitos humanos",
            "Permitir que a IA tome todas as decisões"
        ],
        correta: 2,
        explicacao: "Exatamente! A ética na IA envolve responsabilidade, transparência, inclusão e respeito aos direitos humanos."
    },

    {
        pergunta: "5. Como podemos combater o racismo algorítmico?",
        opcoes: [
            "Ignorando os problemas tecnológicos",
            "Utilizando apenas um tipo de dado",
            "Evitando a participação de grupos diversos",
            "Promovendo diversidade, transparência e avaliação dos sistemas"
        ],
        correta: 3,
        explicacao: "Parabéns! Diversidade nas equipes, dados representativos e auditorias ajudam a combater essas desigualdades."
    }
];

let perguntaAtual = 0;
let pontuacao = 0;
let respondeu = false;

// MOSTRAR PERGUNTA

function mostrarPergunta() {

    respondeu = false;

    document.getElementById("progresso").innerText =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    document.getElementById("pergunta").innerText =
        perguntas[perguntaAtual].pergunta;

    document.getElementById("feedback").innerText = "";

    document.getElementById("resultado-quiz").innerText = "";

    document.getElementById("proximo").disabled = true;

    const opcoesDiv = document.getElementById("opcoes");

    opcoesDiv.innerHTML = "";

    perguntas[perguntaAtual].opcoes.forEach((opcao, indice) => {

        const botao = document.createElement("button");

        botao.innerText = opcao;

        botao.onclick = function() {
            verificarResposta(indice);
        };

        opcoesDiv.appendChild(botao);

    });

}

// VERIFICAR RESPOSTA

function verificarResposta(indice) {

    if (respondeu) return;

    respondeu = true;

    const pergunta = perguntas[perguntaAtual];

    const botoes = document.querySelectorAll("#opcoes button");

    if (indice === pergunta.correta) {

        pontuacao++;

        document.getElementById("feedback").innerText =
            "✓ Resposta correta! " + pergunta.explicacao;

    } else {

        document.getElementById("feedback").innerText =
            "✗ Não foi dessa vez! " + pergunta.explicacao;

    }

    botoes.forEach((botao, i) => {

        botao.disabled = true;

        if (i === pergunta.correta) {
            botao.classList.add("correta");
        }

        if (i === indice && indice !== pergunta.correta) {
            botao.classList.add("errada");
        }

    });

    document.getElementById("proximo").disabled = false;

    if (perguntaAtual === perguntas.length - 1) {
        document.getElementById("proximo").innerText = "Ver resultado";
    }

}



function proximaPergunta() {

    if (!respondeu) return;

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();

    }

}


function mostrarResultado() {

    document.getElementById("progresso").innerText =
        "QUIZ FINALIZADO!";

    document.getElementById("pergunta").innerText =
        "Seu resultado:";

    document.getElementById("opcoes").innerHTML = "";

    document.getElementById("feedback").innerText = "";

    document.getElementById("proximo").style.display = "none";

    let mensagem = "";

    if (pontuacao === 5) {
        mensagem = "Excelente! Você domina o assunto!";
    } else if (pontuacao >= 3) {
        mensagem = "Muito bem! Você está no caminho certo!";
    } else {
        mensagem = "Continue estudando! Conhecimento transforma!";
    }

    document.getElementById("resultado-quiz").innerHTML =
        `Você acertou ${pontuacao} de ${perguntas.length} perguntas!<br><br>${mensagem}`;

    document.getElementById("reiniciar").style.display = "inline-block";

}


function reiniciarQuiz() {

    perguntaAtual = 0;
    pontuacao = 0;
    respondeu = false;

    document.getElementById("proximo").style.display = "inline-block";

    document.getElementById("proximo").innerText = "Próxima pergunta";

    document.getElementById("reiniciar").style.display = "none";

    mostrarPergunta();

}


mostrarPergunta();

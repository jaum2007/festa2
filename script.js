const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você irá realizar uma festa dee aniversário e precisa resolver o funcionamento desse evento. Começando pela data você precisa escolher entre duas datas que o seu local de eventos disponibilizou, qual seria sua escolha?",
        alternativas: [
            {
                texto: "06/07/2024",
                afirmacao: "afirmação"
            },
            {
                texto: "20/07/2024" ,
                afirmacao: "afirmação" 
            }

        ]
    },
    {
        enunciado: "Escolhido isso você terá que escolher um prato principal que será servido na festa, para sua equipe de festa se preparar, o que você escolheria?",
        alternativas: [
            {
                texto: "Lasanha",
                afirmacao: "afirmação"
            },
            {
                texto: "Strogonoff",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Agora escolha qual será o sabor do seu bolo de aniversário. Qual seria a melhor escolha?",
        alternativas: [
            {
                texto: "Bolo de Morango",
                afirmacao: "afirmação"
            },
            {
                texto: "Bolo de chocolate",
                afirmacao: "afirmação"
            }

        ]
    },
    {
        enunciado: "Como na sua festa terão pessoas de diversas idades sua equipe de organização, que saber se as bebidas servidas serão alcolicas ou não, qual será a escolha?",
        alternativas: [
            {
                texto: "Serviremos bebida alcoólica",
                afirmacao: "afirmação"
            },
            {
                texto: "Não serveremos bebida alcoólica",
                afirmacao: "afirmação"
            }


        ]
    },
    {
        enunciado: "Feito isso todos os preparativos para o aniversário estarão pronto, mas pra finalizar você precisa decidir a cor da sua festa.",
        alternativas: [
            {
                texto: "Vermelho",
                afirmacao: "afirmação"
            },
            {
                texto:"Azul",
                afirmacao: "afirmação"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal +=afirmacoes + " ";
    atual++; 
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua festa foi um sucesso, todos sairam satisfeitos.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " fim";
}

mostraPergunta();

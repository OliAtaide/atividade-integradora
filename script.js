var swiper = new Swiper(".mySwiper", {
    slidesPewView: 1,
    allowTouchMove: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: false,
        renderBullet: function (index, className) {
            var bullet = '<span class="' + className + ' bullet-' + (index + 1) + ' btn rounded-circle mx-2">' + (index + 1) + '</span>';
            return bullet;
        },
    },
    nextButton: '.swiper-button-disabled',
    prevButton: '.swiper-button-disabled',

});

var opcao;

var perguntas = [
    {
        texto: 'Agora, a mãe de Joano está trabalhando com carteira de trabalho assinada em uma fábrica de embalagens e está recebendo 01 salário mínimo por mês. Vamos procurar o PBF?',
        opcao1: 'A família de Joano não tem direito ao PBF, pois sua mãe tem carteira de trabalho assinada.',
        opcao2: 'O fato de a família ter membro com carteira de trabalho assinada não a exclui do PBF.',
    },
    {
        texto: 'Para onde a mãe de Joano deve se dirigir?',
        opcao1: 'A mãe de Joano deverá ir ao cadastro único no seu município, normalmente vinculado a Secretaria de Assistência Social ou órgão correlato da prefeitura, levando os documentos da família.',
        opcao2: 'A família deve se dirigir à Câmara de Vereadores e procurar o representante da sua comunidade para entregar seus documentos e aguardar um contato posterior.',
    },
    {
        texto: 'Analisados os documentos da família, o cadastro será realizado. Qual a renda per capita da família?',
        opcao1: 'Dividir o valor do salário mínimo vigente por 7, que é o número de pessoas da família.',
        opcao2: 'Dividir o valor do salário mínimo vigente por 3 que é o número de crianças com 10 anos ou menos.'
    },
    {
        texto: 'O valor per capita obtido vai direcionar essa família para alguns benefícios:',
        opcao1: 'A família terá acesso ao benefício básico por se encontrar em condição de extrema pobreza.',
        opcao2: 'A família terá direito a um benefício variável por criança de 0 a 15 anos e 01 benefício para a mãe gestante.'
    },
    {
        texto: 'O benefício será concedido e eles passarão a receber em breve da seguinte forma:',
        opcao1: 'Através de crédito em conta corrente que será aberta da agência de conveniência mais próxima.',
        opcao2: 'A família irá receber um cartão da Caixa Econômica Federal, com um folder explicativo e o calendário de pagamento das parcelas.'
    },
    {
        texto: 'Passado um ano do cadastro, essa família permanece nas mesmas condições e para continuar no PBF ela precisa:',
        opcao1: 'Comparecer ao cadastro único do seu município. Com os documentos atualizados, a frequência escolar das crianças e o cartão de pré-natal da mãe.',
        opcao2: 'Fazer a prova de vida através da atualização da senha nos terminais da Caixa Econômica ou das lotéricas.'
    },
    {
        texto: 'Como o irmão de Joano nasceu, o que acontece com o benefício de gestante de sua mãe?',
        opcao1: 'A mãe de Joano passará a receber um benefício variável vinculado à nutriz em um total de 6 parcelas mensais.',
        opcao2: 'Após o parto, extingue-se o benefício da gestante.',
    }
];

var respostas = [2, 1, 1, 2, 2, 1, 1]

for (let i = 0; i < perguntas.length; i++) {
    $('.swiper-wrapper').append(
        `<div class="swiper-slide">
                <div class="bloco-titulo text-white d-inline-block mt-3 px-4 py-2">
                    Pergunta `+ (i + 1) + `
                </div>
                <div class="bloco bloco2 p-3 d-flex flex-column">
                    <h6 class=" text-center">
                    `+ perguntas[i].texto + `    
                    </h6>
                    <div class="row">
                        <div class="col-sm">
                            <div class="opcao mt-3 h-100">
                                <div class="bloco-titulo text-white d-inline-block px-4 py-2">
                                    Opção 1
                                </div>
                                <div class="bloco bloco2 p-3 text-center">
                                    <input type="hidden" name="opcao1" value="1">
                                    <h6 class="">
                                        ` + perguntas[i].opcao1 + `
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            <div class="opcao mt-3 h-100">
                                <div class="bloco-titulo text-white d-inline-block px-4 py-2">
                                    Opção 2
                                </div>
                                <div class="bloco bloco2 p-3 text-center">
                                    <input type="hidden" name="opcao2" value="2">
                                    <h6 class="">
                                        ` + perguntas[i].opcao2 + `
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onclick="resultado(` + i + `)" disabled class="enviar-resposta btn text-white  px-5 mt-3 align-self-center"
                        data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Enviar resposta
                    </button>
                </div>
            </div>
            `
    )

    if (i == 0) {
        $('.swiper-slide').prepend(
            `
                <div class="bloco bloco1 mt-3 px-sm-5 p-3">
                    <span class="text-center">
                        <h6 class="">Em cada questão, escolha a opção correta que leve Joano e sua família a terem
                            direito a receber os
                            benefícios do PBF. </h6>
                        <p class="">Vamos relembrar a história dele?</p>
                    </span>
                    <div class="mb-3 mx-auto">
                        <img src="images/image1.png" alt="" class="img-fluid">
                    </div>
                    <span class="text-center">
                        <p class="">
                            Joano está com 14 anos, está fora da escola e trabalha no sinal limpando para-brisas. É o 5º de sete
                            filhos que sua mãe cria, pois a mesma já foi mãe nove vezes e está grávida novamente do último
                            companheiro que está preso por porte ilegal de arma. Joano gosta de futebol, tem 1,40 e 39 quilos.
                            Na família são 7 pessoas: a mãe de Joano com 33 anos, sua avó, com 67 anos, 03 meninas com 2, 5 e 10
                            anos, 01 menino com 11 e Joano com 14.
                        </p>
                    </span>
                </div>
                `
        )
    }
}

$('.swiper-wrapper').append(
    `
            <div class="swiper-slide">
                <div class="bloco-titulo text-white d-inline-block mt-3 px-4 py-2">
                    Fim
                </div>
                <div class="bloco bloco2 p-3 d-flex flex-column">
                    <div class="text-center">
                        <h6>Você chegou ao fim da atividade e ajudou mais uma família!</h6>
                        <h1 class="my-5">PARABÉNS</h1>
                    </div>
                    <a href="index.html" class="voltar btn text-white px-5 align-self-center">
                        Voltar à página inicial 
                        <i class="bi bi-arrow-right-circle"></i>
                    </a>
                </div>
            </div>
            `
)

function resultado(questao) {
    var resposta = respostas[questao];
    var texto, imagem;

    if (opcao == resposta) {
        texto = 'Resposta correta!';
        imagem = 'images/correta.png';
    }
    else {
        texto = 'Resposta errada!';
        imagem = 'images/errada.png';
    }

    $('.modal-body').html(
        '<h1>' + texto + `</h1>
            <img class="mt-5" src="` + imagem + `" alt="">
            <button onclick=nextSlide() data-bs-dismiss="modal" class="proxima-pergunta btn text-white  px-5 my-5 align-self-center">
                Próxima pergunta
            <i class="bi bi-arrow-right"></i>
            </button>
            `
    )
}

function nextSlide() {
    $('.bloco1').hide();
    swiper.slideTo(swiper.realIndex + 1);
};

$(".opcao .bloco2").click(function () {
    var i = swiper.realIndex;
    console.log($('.enviar-resposta'));
    $('.enviar-resposta').eq(i).prop("disabled", false);

    $('.selected').removeClass('selected');
    $(this).addClass('selected');

    opcao = $(this).children()[0].value;
});

console.log($(".swiper-pagination"));

$(".swiper").append('<div class="d-flex justify-content-center"><div class="divider"></div></div>');

import { pegaPratos } from "./requisicao.js"; // Ajuste o caminho se necessário


const listaDescricao = [ 
    "Guioza são bolinhos de massa recheados, populares tanto no Japão quanto na China, onde são conhecidos como 'jiaozi'. No Japão, os guioza são normalmente recheados com uma mistura de carne moída (geralmente porco), repolho, alho, gengibre e cebolinha. Eles são primeiramente fritos até a base ficar crocante, e então cozidos no vapor para que o restante da massa fique macio. Este método de cozimento resulta em uma textura contrastante que é extremamente satisfatória. Guioza são frequentemente servidos com um molho de mergulho feito de molho de soja, vinagre e óleo de gergelim.",

    "Hot-roll é uma variação ocidentalizada do sushi, conhecida por seu exterior crocante e interior quente e saboroso. Geralmente, é feito com um rolo de sushi recheado com ingredientes como peixe, cream cheese e vegetais, que é empanado e frito até ficar dourado e crocante. O contraste entre a crocância externa e o recheio macio e quente faz do Hot-roll uma experiência deliciosa e reconfortante. É muitas vezes servido com molhos picantes ou a base de maionese para realçar o sabor.",

    "Onigiri, também conhecido como omusubi, é um bolinho de arroz japonês que pode ter diferentes formatos, como triângulo, bola ou cilindro. É recheado com diversos ingredientes, como salmão grelhado, umeboshi (ameixa em conserva), kombu (alga marinha) ou atum com maionese. Os Onigiri são frequentemente envoltos em alga nori para facilitar o manuseio e adicionar um toque de sabor umami. Tradicionalmente, são preparados com arroz branco levemente salgado e são perfeitos como lanche portátil ou como parte de uma refeição bento (marmita).",

    "Ramen é uma sopa de macarrão japonesa que conquistou o mundo com seu sabor reconfortante e complexo. A base do ramen é um caldo rico, que pode ser feito de frango, porco ou peixe, frequentemente aromatizado com miso, shoyu (molho de soja) ou sal (shio). O macarrão de trigo é adicionado ao caldo, juntamente com toppings como carne de porco fatiada (chashu), ovos cozidos marinados, algas marinhas, brotos de bambu (menma) e cebolinha. Cada tigela de ramen é uma combinação harmoniosa de sabor umami, textura e aroma, tornando-a um prato completo e satisfatório.",

    "O Sushi é um dos pratos japoneses mais emblemáticos, conhecido por sua combinação de arroz temperado com vinagre (shari) e vários ingredientes, como peixe cru, frutos do mar, vegetais e ocasionalmente frutas tropicais. O sushi pode ser apresentado de várias formas, incluindo Nigiri (fatias de peixe sobre bolas de arroz), Maki (rolos de arroz e ingredientes enrolados em alga nori), e Sashimi (fatias finas de peixe cru sem arroz). Cada peça é uma obra de arte, cuidadosamente preparada para equilibrar sabor e textura. O sushi é muitas vezes servido com gengibre em conserva, wasabi e molho de soja.",

    "Yakisoba é um prato japonês popular de macarrão frito, geralmente feito com macarrão de trigo sarraceno. É uma mistura saborosa de macarrão, vegetais crocantes como repolho, cenoura e pimentão, além de carne de porco, frango ou camarão. O prato é temperado com molho yakisoba, que é uma combinação de molho de soja, molho de ostras, molho Worcestershire e uma pitada de açúcar. O Yakisoba é frequentemente guarnecido com gengibre em conserva (beni shoga), algas marinhas (aonori) e flocos de peixe seco (katsuobushi). É uma escolha perfeita para um almoço rápido ou um prato principal saboroso.",
];


const listaImagens = [
    "guioza.jpg", "hot-roll.jpg", "onigiri.jpg", "ramen.avif", "sushi.webp", "yakisoba.jpg"
];


const pegaIdNaUrl = (id) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(id);
};


const exibeDetalhesProduto = async () => {
    const id = pegaIdNaUrl('id'); 
    const pratos = await pegaPratos();

    const meusPratos = pratos.slice(19, 25);

    const pratoDetalhe = meusPratos.find(prato => prato.id == id);

    if (pratoDetalhe) {
        document.getElementById('produto-nome').textContent = pratoDetalhe.nome
        const indice = meusPratos.indexOf(pratoDetalhe);

    
        if (indice) {
            document.getElementById('descricao_detalhe').textContent = listaDescricao[indice] ;
        } 

        if (indice) {
            const imagem = `/img/${listaImagens[indice]}`;
            document.getElementById('produto-imagem').src = imagem;
        } 
    } 
};


exibeDetalhesProduto()
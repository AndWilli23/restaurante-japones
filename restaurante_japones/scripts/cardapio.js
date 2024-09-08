import { pegaPratos } from "./requisicao.js"; 

const colocaNomeCard = async () => { // função para pegar os pratos e criar os cards atráves das informaçõesm do js
     
    let pratos = await pegaPratos();

    // A API só leva informação de: id, nome, restaurante e produto, por isso a necessidade da lista.
    const listaPequenaDescricao = [ 
        "Bolinhos fofinhos e dourados, recheados com segredos saborosos. Uma explosão de sabor!",
        "Uma explosão de sabor em cada mordida! Crocante por fora, quente e delicioso por dentro.",
        "Abraços de arroz embalados em algas marinhas. Portáteis, deliciosos e cheios de amor carinhoso.",
        "Sopa reconfortante que aquece o corpo e a alma. Uma festa de macarrão escorregadio e caldo saboroso.",
        "O casamento perfeito entre arroz e frescor do mar. Obras de arte que deslizam pela sua língua.",
        "Macarrão, legumes e carne suculenta, tudo coberto com um molho saboroso e levemente adocicado.",
    ]

    const listaImagens = [
        "guioza.jpg","hot-roll.jpg","onigiri.jpg","ramen.avif","sushi.webp","yakisoba.jpg"
    ]
    
    const meusPratos = pratos.slice(19,25); //pega os meus pratos na api

    const container = document.querySelector(".container_cards")

    const titulo = document.getElementById("tirulo_cardapio")

    titulo.style.padding = 0

    const loading = document.getElementById("loading")

    loading.style.display = "none"

    titulo.style

    container.innerHTML = ""

    meusPratos.forEach((prato, index) => {

        //Dessa forma eu deixo o HTML mais limpo e não repito código :)
        const card = `

                <div class="card pratos" id="${prato.id}" >
                    <div class="card-image ">
                        <figure class="image is-4by3">
                            <img src="/img/${listaImagens[index]}" alt="${prato.nome}"/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                            <p class="title is-4 has-text-centered nomePrato">${prato.nome}</p>
                            </div>
                        </div>
                    <div class="content">
                        <p class="texto_card">${listaPequenaDescricao[index]}</p>
                    </div>
                    <div>
                        <div class="buttons pr-3 is-flex is-justify-content-center">
                            <button " class="botao_card button is-link"><a class="link_about" href="/restaurante_oriental/detalhes/detalhes.html?id=${prato.id}">Mais detalhes</a></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        
        `     
        container.innerHTML += card;
        
    })  

}

colocaNomeCard()
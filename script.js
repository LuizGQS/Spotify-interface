const searchInput = document.getElementById('search-input');
//O cont serve para declarar uma variavel, nesse caso 'searchinput' o nome dela.
 //O getElementById() é o método que busca um elemento HTML pelo seu ID e dentro das () é o nome da id.
 // O document document é o "ponto de entrada" para manipular a página HTML com JavaScript, permitindo que você leia ou altere os elementos HTML.
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
    //fetch Esse método é usado para buscar dados de uma API ou de um servidor.
        .then((response) => response.json())
        .then((result) => displayResults(result))
        //(Response) => Response.json() é chamada quando a resposta da requisição for recebida. Ela converte a resposta da API para o formato JSON.
        //then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
//manipulação de evento (tudo que tem interação na tela)
//addEventListener usado para adicionar um "ouvinte" de eventos a um elemento HTML. Esse "ouvinte" fica esperando o evento acontecer e quando aconteçer ele executa a função
//function você passa uma função de callback. Essa função será executada sempre que o evento 'input' acontecer (quando o valor do campo de entrada mudar).    

    const searchTerm = searchInput.value.toLowerCase();
    //searchinput deve ser uma variável previamente definida, e ela provavelmente armazena uma referência a um campo de entrada (input) HTML.
    //value é uma propriedade de um campo de entrada (input). Ela retorna o valor atual digitado no campo.
    //toLowerCase() é um método de string que converte todos os caracteres de uma string para minúsculas.
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        //classList é uma propriedade de qualquer elemento HTML que retorna uma coleção de todas as classes que o elemento possui.
        //add() é um método do classList que adiciona uma ou mais classes ao elemento.
        //Nesse caso o elemento 'hidden' foi criado no CSS
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);// é simplesmente a chamada da função requestApi, passando o argumento searchTerm para ela.
})
